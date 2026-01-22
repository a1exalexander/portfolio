import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { redis } from "./redis";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface PostStats {
  views: number;
  likes: number;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    tags: data.tags || [],
    coverImage: data.coverImage,
    published: data.published !== false,
    readingTime: stats.text,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null && post.published)
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function getPostsStats(slugs: string[]): Promise<Record<string, PostStats>> {
  if (slugs.length === 0) {
    return {};
  }

  const pipeline = redis.pipeline();

  for (const slug of slugs) {
    pipeline.get(`views:${slug}`);
    pipeline.get(`likes:${slug}`);
  }

  const results = await pipeline.exec();

  const stats: Record<string, PostStats> = {};

  slugs.forEach((slug, index) => {
    const views = (results[index * 2] as number) ?? 0;
    const likes = (results[index * 2 + 1] as number) ?? 0;
    stats[slug] = { views, likes };
  });

  return stats;
}
