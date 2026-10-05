'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Header.module.css';

const links = [
  { id: 'about-me', label: 'about', href: '/#about-me' },
  { id: 'my-projects', label: 'projects', href: '/#my-projects' },
  { id: 'my-work', label: 'work', href: '/#my-work' },
  { id: 'blog', label: 'blog', href: '/blog' },
];

export const Header = function Header() {
  const pathname = usePathname();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const isHidden =
    pathname?.startsWith('/mentor') || pathname?.startsWith('/services');

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsStuck(!entry.isIntersecting);
    });
    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [isHidden]);

  useEffect(() => {
    setActiveSection(null);
    if (pathname !== '/') return;

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  if (isHidden) return null;

  const isActive = (id: string) =>
    id === 'blog' ? pathname?.startsWith('/blog') : activeSection === id;

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
      <header className={styles.container}>
        <nav
          className={styles.nav}
          data-stuck={isStuck}
          aria-label="Main navigation"
        >
          <Link href="/" className={styles.home} aria-label="Home">
            <Image
              src="/favicon-32x32.png"
              alt=""
              width={32}
              height={32}
              className={styles.logo}
              priority
            />
            <span className={styles.name}>Oleksandr Ratushnyi</span>
          </Link>
          <ul className={styles.list}>
            {links.map((link) => {
              // Next's client navigation drops the hash when coming from
              // another route, so section links do a full page load there.
              const LinkTag =
                link.id === 'blog' || pathname === '/' ? Link : 'a';

              return (
                <li key={link.id}>
                  <LinkTag
                    href={link.href}
                    className={styles.link}
                    aria-current={isActive(link.id) ? 'page' : undefined}
                  >
                    {link.label}
                  </LinkTag>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};
