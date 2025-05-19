import { useRef } from "react";
import { useLlmEngine, type Message } from "./useLlmEngine";
import { useChatStore } from "../store";

export const useInput = () => {
  const { engine } = useLlmEngine();
  const {
    inputs,
    setInputs,
    setLoading,
    currentConversation,
    createConversation,
    output,
    setOutput,
  } = useChatStore();

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = async (value: string) => {
    if (!value) {
      return;
    }
    const userInput = { role: "user", content: value } as Message;

    if (inputRef.current) inputRef.current.value = "";

    if (!currentConversation) {
      console.error("No current conversation");
      createConversation(userInput);
    } else {
      setInputs(userInput);
    }

    await handleSend(userInput);
  };

  async function handleSend(userInput: Message) {
    if (!engine) {
      console.error("Engine not initialized");
      return;
    }
    setLoading(true);
    try {
      let chunks = await engine.chat.completions.create({
        messages: [...inputs.filter((m) => m.role !== "system"), userInput],
        temperature: 1,
        stream: true,
        stream_options: { include_usage: true },
      });

      let reply = "";
      for await (const chunk of chunks) {
        reply += chunk.choices[0]?.delta.content || "";
        setOutput({ ...output, content: reply });
      }
      setOutput({ ...output, content: "" });
      setInputs({ ...output, content: reply });
    } catch (err: unknown) {
      console.error("Error:", err);
      setInputs({
        ...output,
        content: "Sorry! Somthing went wrong...",
      });
    } finally {
      setLoading(false);
    }
  }

  return { inputRef, handleInput };
};
