import { MessageDisplay } from "./MessageDisplay";
import { useChatStore } from "../store";
import { useEffect, useRef } from "react";

export function RenderMessages() {
  const { inputs, output } = useChatStore();
  const scrollToBottom = useRef<HTMLDivElement>(null);

  const displayMessages = inputs.filter((input) => input.role !== "system");
  output.content && displayMessages.push(output as any);

  useEffect(() => {
    const debounce = (func: () => void, delay: number) => {
      let timer: NodeJS.Timeout;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
      };
    };

    const scrollDebounced = debounce(() => {
      if (scrollToBottom.current) {
        console.log("Scrolling to bottom");
        scrollToBottom.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);

    scrollDebounced();
  }, [output]);

  return (
    <main className="flex-grow p-4 overflow-y-auto">
      {displayMessages.map((input, index) => (
        <MessageDisplay message={input} key={index} />
      ))}
      <div id="scroll-to-bottom" ref={scrollToBottom} />
    </main>
  );
}
