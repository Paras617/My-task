import React from "react";
import "./Sidebar.css";

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-logo">idab.</div>
    <nav>
      <ul>
        <li className="active">Home</li>
        <li>Jobs</li>
        <li>Candidates</li>
        <li>Plans</li>
        <li>Settings</li>
        <li>Log Out</li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;