import React from "react";
import "./StatsCards.css";

const stats = [
  { label: "Active Jobs", value: 4, color: "#e0f7fa" },
  { label: "Expired Jobs", value: 2, color: "#ffe0b2" },
  { label: "Saved Candidates", value: 8, color: "#e1bee7" },
  { label: "Pending Actions", value: 0, color: "#ffcdd2" },
];

const StatsCards = () => (
  <div className="stats-cards">
    {stats.map((stat) => (
      <div className="stat-card" style={{ background: stat.color }} key={stat.label}>
        <div className="stat-value">{stat.value}</div>
        <div className="stat-label">{stat.label}</div>
      </div>
    ))}
  </div>
);

export default StatsCards;
