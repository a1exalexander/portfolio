import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, formatDate } from "@/lib/blog";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog | Oleksandr Ratushnyi",
  description: "Articles about web development, JavaScript, React, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.description}>
          Thoughts on web development, technology, and life.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className={styles.empty}>
          <p>No articles yet. Stay tuned!</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.card}
            >
              {post.coverImage && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.content}>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardDescription}>{post.description}</p>
                <div className={styles.meta}>
                  <time className={styles.date}>{formatDate(post.date)}</time>
                  <span className={styles.separator}>·</span>
                  <span className={styles.readingTime}>{post.readingTime}</span>
                </div>
                {post.tags.length > 0 && (
                  <div className={styles.tags}>
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      <footer className={styles.footer}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </footer>
    </main>
  );
}
