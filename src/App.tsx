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
    <div className="flex flex-row h-screen text-gray-700">
      <Sidebar />
      <div className="flex flex-col bg-gray-100 flex-1">
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
