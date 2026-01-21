"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { FiCopy, FiCheck } from "react-icons/fi";
import styles from "./CodeBlock.module.css";

interface ICodeBlockProps {
  children: React.ReactNode;
  className?: string;
  filename?: string;
}

export const CodeBlock = function CodeBlock({
  children,
  className,
  filename,
}: ICodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const getCodeString = (): string => {
    if (typeof children === "string") return children;

    const extractText = (node: React.ReactNode): string => {
      if (typeof node === "string") return node;
      if (typeof node === "number") return String(node);
      if (!node) return "";

      if (React.isValidElement(node)) {
        const element = node as React.ReactElement<{ children?: React.ReactNode }>;
        return extractText(element.props.children);
      }

      if (Array.isArray(node)) {
        return node.map(extractText).join("");
      }

      return "";
    };

    return extractText(children);
  };

  const handleCopy = async () => {
    const code = getCodeString();
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Extract language from className (e.g., "language-typescript")
  const languageMatch = className?.match(/language-(\w+)/);
  const language = languageMatch ? languageMatch[1] : undefined;

  return (
    <div className={styles.container}>
      {(filename || language) && (
        <div className={styles.header}>
          {filename && <span className={styles.filename}>{filename}</span>}
          {language && !filename && <span className={styles.language}>{language}</span>}
        </div>
      )}
      <div className={styles.codeWrapper}>
        <pre className={clsx(styles.pre, className)}>
          <code className={styles.code}>{children}</code>
        </pre>
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? <FiCheck /> : <FiCopy />}
        </button>
      </div>
    </div>
  );
};
