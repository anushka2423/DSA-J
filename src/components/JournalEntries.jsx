import { Link } from "react-router-dom";

const JournalEntries = ({ entries, onDelete }) => {
  return (
    <div className="entries">
      <h2>📚 Past Entries</h2>
      {entries.length === 0 ? (
        <p>No entries yet. Start journaling today! 📝</p>
      ) : (
        entries.map((entry, index) => (
          <div className="entry" key={index}>
            <h3>📅 {entry.date}</h3>
            <p><strong>🧠 Topic:</strong> {entry.topic}</p>
            <p><strong>📊 Pomodoros:</strong> {entry.pomos}</p>
            <div className="entry-actions">
              <Link to={`/entries/${index}`} className="view-btn">🔎 View</Link>
              <Link to={`/edit/${index}`} className="edit-btn">✏️ Edit</Link>
              <button onClick={() => onDelete(index)} className="delete-btn">🗑 Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JournalEntries;
