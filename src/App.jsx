import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsCards from "./components/StatsCards";
import StatsPlan from "./components/StatsPlan";
import JobsTable from "./components/JobsTable";
import "./App.css";

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <StatsCards />
        <StatsPlan />
        <JobsTable />
      </main>
    </div>
  );
}

export default App;