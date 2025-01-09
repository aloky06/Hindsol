import React from "react";

function Pulsating() {
  return (
    // Pulsating div
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="animate-pulse relative">
        <div className="rounded-full h-20 w-20 bg-green-400 opacity-75 flex items-center justify-center">
          <img src="/assets/logo.png" className="w-12 h-12" alt="Hindsol" />
        </div>
      </div>
    </div>
  );
}

export default Pulsating;
