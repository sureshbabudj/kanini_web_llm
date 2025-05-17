import { useEffect, useState } from "react";
import { useLlmEngine } from "./hooks/useLlmEngine";
import { ChatWindow } from "./components/ChatWindow";
import { useChatStore } from "./store";
import { Header } from "./components/Header";
import { LoadingScreen } from "./components/LoadingScreen";
import { SlideOverPanel } from "./components/SlideOverPanel";
import { Sidebar } from "./components/Sidebar";

function App() {
  const { initEngine } = useLlmEngine();
  const { engineInitializing } = useChatStore();
  const [isSlideOverPanelOpen, setSlideOverPanelOpen] = useState(false);

  useEffect(() => {
    initEngine();
  }, []);

  if (engineInitializing) {
    return <LoadingScreen />;
  }

  const toggleSlideOverPanelOpen = () => setSlideOverPanelOpen((prev) => !prev);

  return (
    <div className="flex flex-row h-screen basis-1/3">
      <Sidebar />
      <div className="flex flex-col flex-1  bg-oriental-nights-600 bg-gradient-to-b from-oriental-nights-400 to-oriental-nights-700">
        <Header toggleSlideOverPanelOpen={toggleSlideOverPanelOpen} />
        <ChatWindow />
        <SlideOverPanel
          open={isSlideOverPanelOpen}
          toggleSlideOverPanelOpen={toggleSlideOverPanelOpen}
        />
      </div>
    </div>
  );
}

export default App;
