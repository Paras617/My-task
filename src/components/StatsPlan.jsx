import React from "react";
import "./StatsPlan.css";

const planStats = [
  { label: "Recent Jobs", value: 15 },
  { label: "Applications", value: 8 },
  { label: "Hired", value: 10 },
  { label: "Interviews", value: 5 },
];

const StatsPlan = () => (
  <div className="stats-plan">
    <h3>Stats from your current plan</h3>
    <div className="plan-cards">
      {planStats.map((stat) => (
        <div className="plan-card" key={stat.label}>
          <div className="plan-value">{stat.value}</div>
          <div className="plan-label">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default StatsPlan;
