'use client';

import { usePathname } from 'next/navigation';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { RiPagesLine } from 'react-icons/ri';
import { FiEdit3 } from 'react-icons/fi';

import { Tag } from '../Tag';
import { ThemeSwitcher } from '../ThemeSwitcher';
import styles from './Footer.module.css';

export const Footer = function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/mentor')) return null;

  return (
    <footer className={styles.container}>
      <h2 className={styles.heading}>my links 🔗</h2>
      <div className={styles.list}>
        <Tag
          Icon={FiEdit3}
          href="/blog"
        >
          Blog
        </Tag>
        <Tag
          Icon={RiPagesLine}
          href="/Oleksandr_Ratushnyi_CV_2024.pdf"
        >
          my cv
        </Tag>
        <Tag Icon={HiOutlineMail} href="mailto:alexander.ratushnyi@gmail.com">
          alexander.ratushnyi@gmail.com
        </Tag>
        <Tag Icon={SiGithub} href="https://github.com/a1exalexander">
          GitHub
        </Tag>
        <Tag
          iconColor="#0277b5"
          Icon={SiLinkedin}
          href="https://www.linkedin.com/in/alexander-ratushnyi/"
        >
          LinkedIn
        </Tag>
        <Tag
          iconColor="#e1306c"
          Icon={SiInstagram}
          href="https://www.instagram.com/a1exalexander/"
        >
          Instagram
        </Tag>
      </div>
      <div className={styles.bottom}>
        <ThemeSwitcher />
      </div>
    </footer>
  );
};
