import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditEntry = ({ entries, setEntries }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const original = entries[id];

  const [formData, setFormData] = useState({ ...original });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedEntries = [...entries];
    updatedEntries[id] = formData;
    setEntries(updatedEntries);
    localStorage.setItem("dsaJournalEntries", JSON.stringify(updatedEntries));
    navigate("/entries");
  };

  if (!original) return <p>Entry not found</p>;

  return (
    <form className="journal-form" onSubmit={handleSave}>
      <h2>✏️ Edit Entry - {formData.date}</h2>
      {Object.entries(formData).map(([key, val]) => (
        key !== "date" ? (
          <textarea key={key} name={key} value={val} onChange={handleChange} placeholder={key} />
        ) : null
      ))}
      <button type="submit">💾 Save Changes</button>
    </form>
  );
};

export default EditEntry;
