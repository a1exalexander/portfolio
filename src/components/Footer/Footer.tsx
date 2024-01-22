import { SiGithub,SiLinkedin } from 'react-icons/si';
import { Tag } from '../Tag';
import styles from './Footer.module.css';

export const Footer = function Footer() {
  return (
    <footer className={styles.container}>
      <Tag
        textColor='white'
        backgroundColor='black'
        iconColor="white"
        Icon={SiGithub}
        href="https://github.com/a1exalexander"
      >
        Github
      </Tag>
      <Tag
        textColor='white'
        backgroundColor='#0277b5'
        iconColor="white"
        Icon={SiLinkedin}
        href="https://www.linkedin.com/in/alexander-ratushnyi/"
      >
        LinkedIn
      </Tag>
    </footer>
  );
};
