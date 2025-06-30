import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import SavedPeople from "./pages/SavedPeople";
import Navbar from "./components/Navbar";

import useDarkMode from "./hooks/useDarkMode";

export default function App() {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <div className={`min-h-screen ${isDark ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <BrowserRouter>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <Navbar />
            <button
              onClick={toggleDarkMode}
              className="ml-auto px-4 py-1 bg-gray-300 dark:bg-gray-700 rounded text-sm"
            >
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/saved" element={<SavedPeople />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}