import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const JournalForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: new Date().toLocaleDateString(),
    topic: "",
    questions: "",
    learnings: "",
    doubts: "",
    aha: "",
    pomos: "",
    message: "",
    mood: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      ...formData,
      topic: "",
      questions: "",
      learnings: "",
      doubts: "",
      aha: "",
      pomos: "",
      message: "",
      mood: ""
    });
    navigate("/entries");
  };

  return (
    <form className="journal-form" onSubmit={handleSubmit}>
      <h2>✍️ New Entry - {formData.date}</h2>
      <textarea name="topic" value={formData.topic} onChange={handleChange} required placeholder="🧠 What topic did I study today?" />
      <textarea name="questions" value={formData.questions} onChange={handleChange} placeholder="🔍 Questions I solved (links)?" />
      <textarea name="learnings" value={formData.learnings} onChange={handleChange} placeholder="⚡ What did I learn?" />
      <textarea name="doubts" value={formData.doubts} onChange={handleChange} placeholder="❓ What confused me?" />
      <textarea name="aha" value={formData.aha} onChange={handleChange} placeholder="🚀 Fav 'Aha!' moment?" />
      <textarea name="pomos" value={formData.pomos} onChange={handleChange} required placeholder="📊 Pomodoro sessions today?" />
      <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="💬 Message to future me" />
      <textarea name="mood" value={formData.mood} onChange={handleChange} required placeholder="🧘‍♀️ Mood check (before vs after)?" />
      <button type="submit">Save Entry ✅</button>
    </form>
  );
};

export default JournalForm;