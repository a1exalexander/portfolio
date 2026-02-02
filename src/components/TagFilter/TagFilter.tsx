'use client';

import { useRouter } from 'next/navigation';
import styles from './TagFilter.module.css';

interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
}

export default function TagFilter({ tags, activeTag }: TagFilterProps) {
  const router = useRouter();

  const handleTagClick = (tag: string | null) => {
    if (tag === null) {
      router.push('/blog');
    } else {
      // If tag is already selected, deselect it
      if (activeTag === tag) {
        router.push('/blog');
      } else {
        router.push(`/blog?tag=${encodeURIComponent(tag)}`);
      }
    }
  };

  return (
    <div className={styles.tagFilter}>
      <span
        onClick={() => handleTagClick(null)}
        className={`${styles.filterTag} ${!activeTag ? styles.filterTagActive : ''}`}
      >
        All
      </span>
      {tags.map((tag) => (
        <span
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`${styles.filterTag} ${activeTag === tag ? styles.filterTagActive : ''}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
