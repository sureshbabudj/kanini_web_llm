import { useChatStore } from "../store";

export function Sidebar() {
  const { setCurrentConversation, conversations } = useChatStore();

  return (
    <div className="hidden lg:flex flex-col w-1/4 h-full bg-oriental-nights-100 text-alexis-blue-600 p-8">
      <h2 className="text-xl font-semibold">Conversations</h2>
      <ul className="overflow-y-auto h-full">
        {Object.keys(conversations).map((conv) => (
          <li className="mb-3" key={conv}>
            <button
              className="w-full text-left p-2 hover:bg-gray-100 rounded"
              onClick={() => setCurrentConversation(conv)}
            >
              {conv}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
