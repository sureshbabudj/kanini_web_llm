import React from "react";
import { useChatStore } from "../store";

const datenow = Date.now();

export function LoadingScreen() {
  const { progress } = useChatStore();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Initializing Engine...</h2>
        {progress && (
          <div className="mt-4">
            <p>Time Elapsed: {(Date.now() - datenow) / 1000} seconds</p>
            {progress.text.split(".").map((part, ind) => (
              <React.Fragment key={ind}>
                {!part.includes("0% completed, 0 secs elapsed") && (
                  <p>{part}</p>
                )}
              </React.Fragment>
            ))}
            {progress.progress != 0 && <p>{progress.progress}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
