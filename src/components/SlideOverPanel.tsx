import { X } from "lucide-react";
import { useChatStore } from "../store";
import clsx from "clsx";

export function SlideOverPanel({
  open,
  toggleSlideOverPanelOpen,
}: {
  open: boolean;
  toggleSlideOverPanelOpen: () => void;
}) {
  const { setCurrentConversation, conversations } = useChatStore();

  const handleClick = (conv: string) => {
    setCurrentConversation(conv);
    toggleSlideOverPanelOpen();
  };

  return (
    <>
      {/* // This component is a slide-over panel that displays a list of conversations
      // and this will be a side bar in 768px and above
      // and a full screen modal in 768px and below */}
      <div
        className={clsx(
          "lg:hidden md:w-3/6 transition duration-150 ease-in-out fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white",
          !open ? "translate-x-[calc(-100vw)]" : "translate-x-0"
        )}
      >
        <div className="relative flex flex-col w-full  h-full p-8">
          <button
            className="absolute top-6 right-6 text-oriental-nights-100 z-20"
            onClick={() => toggleSlideOverPanelOpen()}
          >
            <X className="w-8 h-8 " />
          </button>
          <h2 className="text-xl font-semibold">Conversations</h2>
          <ul>
            {Object.keys(conversations).map((conv) => (
              <li className="mb-3" key={conv}>
                <button onClick={() => handleClick(conv)}>{conv}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
