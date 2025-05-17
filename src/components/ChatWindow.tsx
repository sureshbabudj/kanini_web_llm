import { Loader2 } from "lucide-react";
import { useInput } from "../hooks/useInput";
import { useChatStore } from "../store";
import { RenderMessages } from "./RenderMessages";

export const ChatWindow: React.FC = () => {
  const { inputRef, handleInput } = useInput();
  const { loading } = useChatStore();

  const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      const value = inputRef.current.value.trim();
      handleInput(value);
    }
  };

  const handleSubmit = () => {
    if (inputRef.current) {
      const value = inputRef.current.value.trim();
      handleInput(value);
    }
  };

  return (
    <>
      <RenderMessages />
      <footer className="p-4 flex flex-row">
        <input
          type="text"
          ref={inputRef}
          className="w-full p-2 border border-xereus-purple-100 bg-xereus-purple-50 rounded shadow-lg text-oriental-nights-900 focus:outline-none"
          onKeyDown={handleEnter}
          placeholder="Type and press Enter"
        />
        <button
          className="py-2 px-4 bg-xereus-purple-400 text-white rounded ml-2 shadow-lg hover:bg-xereus-purple-500 disabled:opacity-50"
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin" /> : "Send"}
        </button>
      </footer>
    </>
  );
};
