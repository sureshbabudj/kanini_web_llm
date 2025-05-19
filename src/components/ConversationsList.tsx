import { ListIcon, PlusCircle } from "lucide-react";
import { useChatStore } from "../store";
import clsx from "clsx";

export function ConversationsList({
  handleClick,
}: {
  handleClick: (conv: string) => void;
}) {
  const { conversations, currentConversation, setCurrentConversation } =
    useChatStore();
  const formatKey = (key: string, index: number) => {
    return `${key.replace(/_/g, " ").toLowerCase().trim()}-${index}`;
  };
  return (
    <div className="my-2 py-2 flex flex-col w-full h-full">
      <h2 className="text-xl pb-2 font-semibold border-b-[1px] border-gray-300">
        <div className="flex flex-row gap-2 items-center justify-baseline text-oriental-nights-500">
          <ListIcon /> Conversations
        </div>
      </h2>
      <ul className="overflow-y-auto h-full py-2 flex-1">
        {Object.keys(conversations).map(
          (conv = "Untitled Conversation", index) => (
            <li className="mb-1" key={formatKey(conv, index)}>
              <button
                onClick={() => handleClick(conv)}
                className={clsx(
                  "w-full text-left p-2 rounded-sm hover:bg-gray-100",
                  currentConversation === conv &&
                    "text-gray-100 bg-oriental-nights-500 hover:bg-oriental-nights-500"
                )}
                disabled={currentConversation === conv}
              >
                {conv || "Untitled Conversation"}
              </button>
            </li>
          )
        )}
      </ul>
      {currentConversation && (
        <button
          onClick={() => setCurrentConversation(null)}
          className="flex items-center justify-center gap-2 text-white bg-oriental-nights-500 hover:bg-oriental-nights-700 focus:outline-none rounded-md p-2 mt-2"
        >
          New Conversation <PlusCircle />
        </button>
      )}
    </div>
  );
}
