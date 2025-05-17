import {
  CreateWebWorkerMLCEngine,
  WebWorkerMLCEngine,
  type ChatCompletionMessageParam,
  type InitProgressReport,
} from "@mlc-ai/web-llm";

import worker from "../worker?worker";
import { useChatStore } from "../store";

export type Message = ChatCompletionMessageParam;

let engine: WebWorkerMLCEngine | null = null;

export function useLlmEngine() {
  const { setEngineInit, setProgress } = useChatStore();

  async function initEngine() {
    if (!engine) {
      setEngineInit(true);

      const initProgressCallback = (initProgress: InitProgressReport) => {
        setProgress(initProgress);
      };

      const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";

      engine = await CreateWebWorkerMLCEngine(
        new worker(),
        selectedModel,
        { initProgressCallback } // engineConfig
      );

      setEngineInit(false);
    }
  }

  return { initEngine, engine };
}
