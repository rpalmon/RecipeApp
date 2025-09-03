import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Bubble container with animated bubbles */}
      <div className="bubble-container">
        <div className="bubble bubble-small" style={{top: '10%', left: '10%'}}></div>
        <div className="bubble bubble-medium" style={{top: '20%', left: '80%'}}></div>
        <div className="bubble bubble-large" style={{top: '60%', left: '15%'}}></div>
        <div className="bubble bubble-xl" style={{top: '30%', left: '60%'}}></div>
        <div className="bubble bubble-small" style={{top: '70%', left: '75%'}}></div>
        <div className="bubble bubble-medium" style={{top: '50%', left: '40%'}}></div>
        <div className="bubble bubble-large" style={{top: '15%', left: '30%'}}></div>
        <div className="bubble bubble-small" style={{top: '80%', left: '50%'}}></div>
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Recipe App</h1>
          <p className="text-xl opacity-90">Welcome to your culinary adventure!</p>
        </div>
      </div>
    </div>
  );
}
