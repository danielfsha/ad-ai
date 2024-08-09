import ReactMarkdown from "react-markdown";

export default function MarkdownRenderer({ markdown }) {
  return (
    <ReactMarkdown className="max-w-screen-md mx-auto px-4 py-8 text-white">
      markdown
    </ReactMarkdown>
  );
}
