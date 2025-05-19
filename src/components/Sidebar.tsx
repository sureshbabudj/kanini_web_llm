import clsx from "clsx";
import { useChatStore } from "../store";
import type React from "react";
import { ConversationsList } from "./ConversationsList";

export function Sidebar({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { setCurrentConversation } = useChatStore();

  const handleClick = (conv: string) => {
    setCurrentConversation(conv);
  };

  return (
    <div
      className={clsx(
        "hidden lg:flex flex-col basis-1/4 h-full p-8 shadow-lg",
        className
      )}
      {...props}
    >
      <ConversationsList handleClick={handleClick} />
    </div>
  );
}
