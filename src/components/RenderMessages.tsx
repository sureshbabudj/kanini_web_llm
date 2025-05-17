import { MessageDisplay } from "./MessageDisplay";
import { useChatStore } from "../store";

export function RenderMessages() {
  const { inputs, output } = useChatStore();

  const displayMessages = inputs.filter((input) => input.role !== "system");
  output.content && displayMessages.push(output as any);

  return (
    <main className="flex-grow p-4 overflow-y-auto ">
      {displayMessages.map((input, index) => (
        <MessageDisplay message={input} key={index} />
      ))}
    </main>
  );
}
