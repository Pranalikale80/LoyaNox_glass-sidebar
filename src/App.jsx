import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
  // STATE → controls sidebar open/close
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white">

      {/* Background Image */}
      <img
        src="/mountain-bg.png"
        className="absolute w-full h-full object-cover"
      />

      {/* Header */}
      <Header toggle={() => setIsOpen(!isOpen)} />

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} />

      {/* Main */}
      <main className="pt-20 px-6 lg:pl-[300px]">
        <h1 className="text-2xl">Glass Sidebar</h1>
      </main>
    </div>
  );
}