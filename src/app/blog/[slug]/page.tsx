import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs, formatDate } from "@/lib/blog";
import { mdxComponents } from "@/lib/mdx-components";
import { Article } from "@/components/Article";
import styles from "./page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Oleksandr Ratushnyi`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <time className={styles.date}>{formatDate(post.date)}</time>
            <span className={styles.separator}>·</span>
            <span className={styles.readingTime}>{post.readingTime}</span>
          </div>

          {post.tags.length > 0 && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.coverImage && (
            <div className={styles.coverImage}>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className={styles.image}
                priority
              />
            </div>
          )}
        </header>

        <Article className={styles.content}>
          <MDXRemote source={post.content} components={mdxComponents} />
        </Article>

        <footer className={styles.footer}>
          <Link href="/blog" className={styles.footerLink}>
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </main>
  );
}
