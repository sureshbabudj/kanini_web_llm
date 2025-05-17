import { Menu, CheckSquare, Edit2 } from "lucide-react";
import React, { useState } from "react";
import { useChatStore } from "../store";

export function Header({
  toggleSlideOverPanelOpen,
}: {
  toggleSlideOverPanelOpen: () => void;
}) {
  const { inputs, currentConversation, updateConversationId } = useChatStore();
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    if (isEditEnabled && inputRef.current) {
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
        <h1 className="text-2xl text-oriental-nights-50">
          Hi, How can I help you?
        </h1>
        <span className="text-sm text-oriental-nights-200">
          Your smart assistant is ready!
        </span>
        <button
          className="lg:hidden p-2 text-alexis-blue-100 rounded-full hover:bg-oriental-nights-500"
          onClick={() => toggleSlideOverPanelOpen()}
        >
          View Conversations
        </button>
      </header>
    );
  }

  return (
    <header className="p-2 flex flex-row items-center text-oriental-nights-50">
      <button
        className="lg:hidden p-2 rounded-full hover:bg-oriental-nights-500"
        onClick={() => toggleSlideOverPanelOpen()}
      >
        <Menu className="self-start" />
      </button>
      <h1 className="text-lg flex-1 flex flex-row items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-8 h-8 fill-current stroke-current"
        >
          <path d="M 24 0.552 C 41.731 0.552 46.161 5.24 46.161 24 C 46.161 42.761 41.731 47.449 24 47.449 C 6.269 47.449 1.839 42.761 1.839 24 C 1.839 5.24 6.269 0.552 24 0.552 Z M 14.13 27.265 C 2.204 34.613 21.729 39.993 21.729 39.993 C 21.729 39.993 34.863 39.525 37.15 31.872 C 39.437 24.219 37.633 27.365 25.428 19.936 C 13.224 12.506 21.71 10.587 22.168 10.542 C 22.625 10.498 23.055 10.464 23.458 10.441 C 31.44 9.987 29.187 13.606 29.48 14.817 C 29.788 16.087 31.265 15.754 31.265 15.754 L 35.77 14.499 C 35.77 14.499 39.516 6.376 26.392 6.843 C 13.269 7.309 13.946 11.493 12.48 16.427 C 11.015 21.36 23.307 24.4 27.687 26.683 C 32.068 28.965 30.298 32.829 30.298 32.829 C 30.298 32.829 27.419 38.07 20.537 35.203 C 13.657 32.335 21.614 29.62 21.614 29.62 C 21.63 29.629 26.057 19.916 14.13 27.265 Z"></path>
        </svg>
        {!!currentConversation && (
          <>
            {!isEditEnabled ? (
              <span className="mx-2">{currentConversation}</span>
            ) : (
              <input
                type="text"
                ref={inputRef}
                className="mx-2 w-1/2 p-2 border border-xereus-purple-100 bg-xereus-purple-50 rounded shadow-lg text-oriental-nights-900 focus:outline-none"
                defaultValue={currentConversation}
              />
            )}
          </>
        )}
      </h1>
      <button
        className="p-2 rounded-full hover:bg-oriental-nights-500"
        onClick={handleEdit}
      >
        {isEditEnabled ? (
          <CheckSquare className="self-end" />
        ) : (
          <Edit2 className="self-end" />
        )}
      </button>
    </header>
  );
}
