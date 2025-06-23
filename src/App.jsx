// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JournalForm from "./components/JournalForm";
import JournalEntries from "./components/JournalEntries";
import ViewEntry from "./components/ViewEntry";
import EditEntry from "./components/EditEntry";
import "./styles/main.scss";
import ProgressChart from "./components/ProgressChart";

function App() {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("dsaJournalEntries");
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("dsaJournalEntries", JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  const deleteEntry = (indexToDelete) => {
    const updated = entries.filter((_, idx) => idx !== indexToDelete);
    setEntries(updated);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div  className="app">
        <header style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px"}}>
          <h1>🌙 DSA Daily Journal</h1>
          <div>
            <Link to="/" className="nav-link">📝 New Entry</Link>
            <Link to="/progress" className="nav-link">📈 Progress</Link>
            <Link to="/entries" className="nav-link" style={{marginRight: "10px"}}>📚 Past Entries</Link>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<JournalForm onSubmit={addEntry} />} />
          <Route path="/entries" element={<JournalEntries entries={entries} onDelete={deleteEntry} />} />
          <Route path="/entries/:id" element={<ViewEntry entries={entries} />} />
          <Route path="/edit/:id" element={<EditEntry entries={entries} setEntries={setEntries} />} />
          <Route path="/progress" element={<ProgressChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;