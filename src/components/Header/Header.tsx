'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
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
  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const hasPositioned = useRef(false);
  const [indicator, setIndicator] = useState({
    x: 0,
    width: 0,
    visible: false,
    instant: true,
  });

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

  const isActive = (id: string) =>
    id === 'blog' ? pathname?.startsWith('/blog') : activeSection === id;
  const activeId = links.find((link) => isActive(link.id))?.id ?? null;

  const measure = useCallback(() => {
    const el = activeId ? linkRefs.current[activeId] : null;
    if (!el) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }
    // The first placement appears in place; later ones slide.
    const instant = !hasPositioned.current;
    hasPositioned.current = true;
    setIndicator({
      x: el.offsetLeft,
      width: el.offsetWidth,
      visible: true,
      instant,
    });
  }, [activeId]);

  useLayoutEffect(() => {
    measure();
  }, [measure, isHidden]);

  useEffect(() => {
    if (!indicator.instant || !indicator.visible) return;
    const frame = requestAnimationFrame(() =>
      setIndicator((prev) => ({ ...prev, instant: false }))
    );
    return () => cancelAnimationFrame(frame);
  }, [indicator.instant, indicator.visible]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const observer = new ResizeObserver(() => measure());
    observer.observe(list);
    return () => observer.disconnect();
  }, [measure, isHidden]);

  if (isHidden) return null;

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
              src="/favicon.svg"
              alt=""
              unoptimized
              width={32}
              height={32}
              className={styles.logo}
              priority
            />
            <span className={styles.name}>Oleksandr Ratushnyi</span>
          </Link>
          <ul ref={listRef} className={styles.list}>
            <li
              role="presentation"
              aria-hidden="true"
              className={styles.indicator}
              data-visible={indicator.visible}
              data-instant={indicator.instant}
              style={
                {
                  '--x': `${indicator.x}px`,
                  '--w': `${indicator.width}px`,
                } as CSSProperties
              }
            />
            {links.map((link) => {
              // Next's client navigation drops the hash when coming from
              // another route, so section links do a full page load there.
              const LinkTag =
                link.id === 'blog' || pathname === '/' ? Link : 'a';

              return (
                <li key={link.id}>
                  <LinkTag
                    ref={(el: HTMLAnchorElement | null) => {
                      linkRefs.current[link.id] = el;
                    }}
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
