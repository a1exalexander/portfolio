import type { MDXComponents } from "mdx/types";
import { Article } from "@/components/Article";
import { ArticleImage } from "@/components/ArticleImage";
import { ArticleSlider } from "@/components/ArticleSlider";
import { Callout } from "@/components/Callout";
import { Mention } from "@/components/Mention";
import { InlineLink } from "@/components/InlineLink";
import { LinkCard } from "@/components/LinkCard";
import { CodeBlock } from "@/components/CodeBlock";

export const mdxComponents: MDXComponents = {
  // Override default HTML elements
  a: ({ href, children, ...props }) => (
    <InlineLink href={href || "#"} {...props}>
      {children}
    </InlineLink>
  ),
  // Note: pre is handled by rehype-pretty-code for syntax highlighting

  // Custom components available in MDX
  Article,
  ArticleImage,
  ArticleSlider,
  Callout,
  Mention,
  InlineLink,
  LinkCard,
  CodeBlock,
};
