// components/ViewEntry.jsx
import { useParams, Link } from "react-router-dom";

const ViewEntry = ({ entries }) => {
  const { id } = useParams();
  const entry = entries[id];

  if (!entry) return <p className="center-msg">Entry not found 😢</p>;

  return (
    <div className="entry-card">
      <h2 className="entry-date">📅 {entry.date}</h2>
      <div className="entry-section">
        <span>🧠 <strong>Topic:</strong></span> {entry.topic}
      </div>
      <div className="entry-section">
        <span>🔍 <strong>Questions:</strong></span> {entry.questions}
      </div>
      <div className="entry-section">
        <span>⚡ <strong>Learnings:</strong></span> {entry.learnings}
      </div>
      <div className="entry-section">
        <span>❓ <strong>Doubts:</strong></span> {entry.doubts}
      </div>
      <div className="entry-section">
        <span>🚀 <strong>Aha:</strong></span> {entry.aha}
      </div>
      <div className="entry-section">
        <span>📊 <strong>Pomodoros:</strong></span> {entry.pomos}
      </div>
      <div className="entry-section">
        <span>💬 <strong>Message:</strong></span> {entry.message}
      </div>
      <div className="entry-section">
        <span>🧘‍♀️ <strong>Mood:</strong></span> {entry.mood}
      </div>
      <Link to="/entries" className="back-btn">⬅️ Back</Link>
    </div>
  );
};

export default ViewEntry;
