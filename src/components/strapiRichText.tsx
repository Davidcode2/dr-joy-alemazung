import React, { JSX } from "react";
import Link from "next/link";

// Type definitions for Strapi rich text structure
type TextNode = {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
};

type LinkNode = {
  type: "link";
  url: string;
  children: RichTextNode[];
};

type ListItemNode = {
  type: "list-item";
  children: RichTextNode[];
};

type BlockNode = {
  type: "paragraph" | "heading" | "quote" | "code" | "list";
  children: RichTextNode[];
  level?: number; // For headings (1-6)
  format?: "ordered" | "unordered"; // For lists
};

type RichTextNode = TextNode | LinkNode | BlockNode | ListItemNode;

type RichTextProps = {
  content: RichTextNode[];
  className?: string;
};

// Render inline text with formatting
const renderTextNode = (node: TextNode, index: number) => {
  let text = <span key={index}>{node.text}</span>;

  if (node.bold) {
    text = <strong key={index}>{node.text}</strong>;
  }
  if (node.italic) {
    text = <em key={index}>{text}</em>;
  }
  if (node.underline) {
    text = <u key={index}>{text}</u>;
  }
  if (node.strikethrough) {
    text = <s key={index}>{text}</s>;
  }
  if (node.code) {
    text = (
      <code
        key={index}
        className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
      >
        {node.text}
      </code>
    );
  }

  return text;
};

// Render a link
const renderLink = (node: LinkNode, index: number) => {
  const isExternal = node.url.startsWith("http");

  if (isExternal) {
    return (
      <a
        key={index}
        href={node.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {node.children.map((child, i) => renderNode(child, i))}
      </a>
    );
  }

  return (
    <Link
      key={index}
      href={node.url}
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      {node.children.map((child, i) => renderNode(child, i))}
    </Link>
  );
};

// Render list item
const renderListItem = (node: ListItemNode, index: number) => {
  return (
    <li key={index} className="ml-4">
      {node.children.map((child, i) => renderNode(child, i))}
    </li>
  );
};

// Main node renderer
const renderNode = (node: RichTextNode, index: number): React.ReactNode => {
  if (!node) return null;

  // Handle text nodes
  if (node.type === "text") {
    return renderTextNode(node as TextNode, index);
  }

  // Handle links
  if (node.type === "link") {
    return renderLink(node as LinkNode, index);
  }

  // Handle list items
  if (node.type === "list-item") {
    return renderListItem(node as ListItemNode, index);
  }

  // Handle block nodes
  const blockNode = node as BlockNode;

  switch (blockNode.type) {
    case "paragraph":
      return (
        <p key={index} className="whitespace-pre-line leading-7 text-zinc-700 dark:text-zinc-300">
          {blockNode.children.map((child, i) => renderNode(child, i))}
        </p>
      );

    case "heading":
      const level = blockNode.level || 1;
      const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
      const headingClasses = {
        1: "text-4xl font-bold mb-6 mt-8 font-serif",
        2: "text-3xl font-bold mb-5 mt-7 font-serif",
        3: "text-2xl font-semibold mb-4 mt-6",
        4: "text-xl font-semibold mb-3 mt-5",
        5: "text-lg font-semibold mb-2 mt-4",
        6: "text-base font-semibold mb-2 mt-3",
      };

      return (
        <HeadingTag key={index} className={headingClasses[level as keyof typeof headingClasses]}>
          {blockNode.children.map((child, i) => renderNode(child, i))}
        </HeadingTag>
      );

    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-4 text-gray-700 dark:text-gray-300"
        >
          {blockNode.children.map((child, i) => renderNode(child, i))}
        </blockquote>
      );

    case "code":
      return (
        <pre
          key={index}
          className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4"
        >
          <code className="text-sm font-mono">
            {blockNode.children.map((child, i) => renderNode(child, i))}
          </code>
        </pre>
      );

    case "list":
      const ListTag = blockNode.format === "ordered" ? "ol" : "ul";
      const listClass = blockNode.format === "ordered" ? "list-decimal" : "list-disc";

      return (
        <ListTag key={index} className={`${listClass} ml-6 mb-4 space-y-2`}>
          {blockNode.children.map((child, i) => renderNode(child, i))}
        </ListTag>
      );

    default:
      console.warn("Unknown block type:", blockNode.type);
      return null;
  }
};

// Main component
export default function StrapiRichText({ content, className = "" }: RichTextProps) {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  return (
    <div className={`prose prose-lg dark:prose-invert max-w-none ${className}`}>
      {content.map((node, index) => renderNode(node, index))}
    </div>
  );
}
