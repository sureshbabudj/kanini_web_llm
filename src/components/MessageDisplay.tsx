import { type Message } from "../hooks/useLlmEngine";
import { useShowDown } from "../hooks/useShowDown";
import clsx from "clsx";

export const MessageDisplay = ({ message }: { message: Message }) => {
  const isUser = message.role === "user";

  const formatContent = (content: any[]) => {
    const formatted = content.map((part) => {
      return typeof part === "string"
        ? part
        : "text" in part
        ? part.text
        : `\`\`\`${JSON.stringify(part)}\`\`\``;
    });
    return formatted.join(" ");
  };

  const content = Array.isArray(message.content)
    ? formatContent(message.content)
    : message.content || "";

  const { html } = useShowDown(content);

  return (
    <div
      className={clsx(
        "mb-3 flex flex-col",
        isUser ? "items-end" : "items-start"
      )}
    >
      <div
        className={clsx(
          "px-2 py-3 rounded-lg break-words max-w-[80%] shadow-lg",
          isUser
            ? "bg-oriental-nights-50 text-oriental-nights-600"
            : "bg-gray-300 text-black"
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
};
