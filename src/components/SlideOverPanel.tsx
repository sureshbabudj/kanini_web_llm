import { X } from "lucide-react";
import { useChatStore } from "../store";
import clsx from "clsx";
import { ConversationsList } from "./ConversationsList";

export function SlideOverPanel({
  open,
  toggleSlideOverPanelOpen,
}: {
  open: boolean;
  toggleSlideOverPanelOpen: () => void;
}) {
  const { setCurrentConversation } = useChatStore();

  const handleClick = (conv: string) => {
    setCurrentConversation(conv);
    toggleSlideOverPanelOpen();
  };

  return (
    <div
      className={clsx(
        "lg:hidden md:w-2/5 transition duration-150 ease-in-out fixed inset-0 flex items-center justify-center bg-white z-10 shadow-lg",
        !open ? "translate-x-[calc(-100vw)]" : "translate-x-0"
      )}
    >
      <div className="relative flex flex-col w-full  h-full p-8">
        <button
          className="absolute top-6 right-6 z-20"
          onClick={() => toggleSlideOverPanelOpen()}
        >
          <X className="w-8 h-8" />
        </button>
        <ConversationsList handleClick={handleClick} />
      </div>
    </div>
  );
}
