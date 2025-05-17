import { create } from "zustand";
import type { Message } from "./hooks/useLlmEngine";
import type { InitProgressReport } from "@mlc-ai/web-llm";
import { persist } from "zustand/middleware";

interface Conversation {
  [key: string]: Message[];
}

interface ChatStoreType {
  updateConversationId: (oldId: string, newId: string) => void;
  currentConversation: string;
  setCurrentConversation: (currentConversation: string) => void;
  conversations: Conversation;
  setConversations: (conversations: Conversation) => void;
  inputs: Message[];
  setInputs: (message: Message) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  engineInitializing: boolean;
  setEngineInit: (engineInitializing: boolean) => void;
  progress: InitProgressReport | null;
  setProgress: (progress: InitProgressReport | null) => void;
  createConversation: (msg: Message) => void;
  setOutput: (msg: Message) => void;
  output: Message;
}

const SYS_MSG = {
  role: "system",
  content: "You are a helpful AI assistant.",
} as Message;

export const useChatStore = create<ChatStoreType>()(
  persist(
    (set, get) => ({
      updateConversationId: (oldId, newId) => {
        const { conversations } = get();
        const updatedConversations = { ...conversations };
        if (updatedConversations[oldId]) {
          updatedConversations[newId] = updatedConversations[oldId];
          delete updatedConversations[oldId];
          set({
            conversations: updatedConversations,
            currentConversation: newId,
          });
        }
      },
      currentConversation: "",
      createConversation: (msg: Message) => {
        const { conversations } = get();
        const newConversationId = Date.now().toString();
        set({
          currentConversation: newConversationId,
          conversations: {
            ...conversations,
            [newConversationId]: [SYS_MSG, msg],
          },
          inputs: [SYS_MSG, msg],
        });
      },
      setCurrentConversation: (currentConversation) => {
        // When switching conversation, update inputs to match the selected conversation
        const conversations = get().conversations;
        set({
          currentConversation,
          inputs: conversations[currentConversation] ?? [SYS_MSG],
        });
      },
      conversations: {},
      setConversations: (conv) =>
        set((state) => ({
          conversations: { ...state.conversations, ...conv },
        })),
      inputs: [SYS_MSG],
      setInputs: (msg) => {
        const { currentConversation, conversations, inputs } = get();
        const updatedInputs = [...inputs, msg];
        set({
          inputs: updatedInputs,
          conversations: {
            ...conversations,
            [currentConversation]: updatedInputs,
          },
        });
      },
      loading: false,
      setLoading: (loading) => set(() => ({ loading })),
      engineInitializing: false,
      setEngineInit: (engineInitializing) =>
        set(() => ({ engineInitializing })),
      progress: null,
      setProgress: (progress) => set(() => ({ progress })),
      output: { role: "assistant", content: "" },
      setOutput: (msg) => set(() => ({ output: msg })),
    }),
    {
      name: "chat-store",
      partialize: (state) => ({
        conversations: state.conversations,
      }),
    }
  )
);
