import { Menu, CheckSquare, Edit2 } from "lucide-react";
import React, { useState } from "react";
import { useChatStore } from "../store";
import { Logo } from "./Logo";

export function Header({
  toggleSlideOverPanelOpen,
}: {
  toggleSlideOverPanelOpen: () => void;
}) {
  const { inputs, currentConversation, updateConversationId } = useChatStore();
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    if (isEditEnabled) {
      if (
        !inputRef.current ||
        !inputRef.current.value ||
        currentConversation === null
      ) {
        return;
      }
      const value = inputRef.current.value.trim();
      inputRef.current.value = "";
      updateConversationId(currentConversation, value);
      setIsEditEnabled(false);
    } else {
      setIsEditEnabled(true);
    }
  };

  if (inputs.length <= 1) {
    return (
      <header className="p-4 text-center basis-xs flex flex-col items-center justify-center">
        <h1 className="text-2xl">Hi, How can I help you?</h1>
        <span className="text-sm">Your smart assistant is ready!</span>
        <button
          className="lg:hidden p-2 rounded-full "
          onClick={() => toggleSlideOverPanelOpen()}
        >
          View Conversations
        </button>
      </header>
    );
  }

  return (
    <header className="p-2 flex flex-row items-center">
      <button className="lg:hidden" onClick={() => toggleSlideOverPanelOpen()}>
        <Menu className="self-start" />
      </button>
      <h1 className="text-lg flex-1 flex flex-row items-center justify-center">
        <Logo className="opacity-80" />
        {currentConversation !== null && (
          <>
            {!isEditEnabled ? (
              <span className="mx-2">{currentConversation}</span>
            ) : (
              <input
                type="text"
                ref={inputRef}
                className="mx-2 w-1/2 p-1 border border-gray-400 rounded shadow focus:outline-none text-sm"
                defaultValue={currentConversation}
                onKeyUp={(e) => {
                  if (e.key === "Enter") handleEdit();
                }}
              />
            )}
          </>
        )}
      </h1>
      <button onClick={handleEdit} className="mx-2">
        {isEditEnabled ? (
          <CheckSquare className="self-end w-5 h-auto" />
        ) : (
          <Edit2 className="self-end w-5 h-auto" />
        )}
      </button>
    </header>
  );
}
