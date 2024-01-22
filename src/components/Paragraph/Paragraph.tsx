import clsx from 'clsx';
import styles from './Paragraph.module.css';

interface IParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = function Paragraph({
  children,
  className,
}: IParagraphProps) {
  return <p className={clsx(styles.text, className)}>{children}</p>;
};
