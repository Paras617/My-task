import React from "react";
import "./Topbar.css";

const Topbar = () => (
  <header className="topbar">
    <div>
      <h2>Hello, Karma Mark. Start Up</h2>
      <p>Here’s your dashboard overview & access to active opportunities</p>
    </div>
    <button className="post-job-btn">+ Post a Job</button>
  </header>
);

export default Topbar;
