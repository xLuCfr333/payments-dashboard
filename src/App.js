import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="flex max-h-screen lg:overflow-hidden">
      <aside className="h-full px-2 py-4 flex flex-col gap-4 bg-[#1E2640] min-w-[224px] min-h-screen text-white hidden sm:flex">
        <Sidebar />
      </aside>
      <main className="grow max-h-screen overflow-scroll">
        <Navbar />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
