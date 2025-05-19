import { User2 } from "lucide-react";
import { type Message } from "../hooks/useLlmEngine";
import { useShowDown } from "../hooks/useShowDown";
import clsx from "clsx";
import { Logo } from "./Logo";

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
        "mx-auto rounded-lg shadow mb-4 flex flex-row p-4 gap-2",
        isUser ? "bg-gray-100" : "bg-white"
      )}
    >
      <div
        className={clsx(
          "h-8 w-8",
          isUser
            ? "bg-gray-200 p-1 rounded-xl border-gray-100 border  text-gray-600"
            : ""
        )}
      >
        {isUser ? (
          <User2 className="rounded-full h-full w-full" />
        ) : (
          <Logo className="h-full w-full opacity-80" />
        )}
      </div>

      <div className="flex-1">
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};
