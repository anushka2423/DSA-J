// components/ProgressChart.jsx
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const ProgressChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const entries = JSON.parse(localStorage.getItem("dsaJournalEntries")) || [];
    const formatted = entries
      .map((entry) => ({
        date: entry.date,
        pomos: parseInt(entry.pomos) || 0
      }))
      .reverse();

    setChartData(formatted);
  }, []);

  return (
    <div className="chart-container">
      <h2>📈 DSA Pomodoro Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pomos" fill="#3e7cb1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
