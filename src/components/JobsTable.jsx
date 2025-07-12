import React, { useEffect, useState } from "react";
import {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} from "../api/jobs";
import "./JobsTable.css";

const initialForm = {
  title: "",
  type: "Full Time",
  status: "Active",
  applications: 0,
  duration: "",
  description: "",
};

const JobsTable = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch jobs on mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    setLoading(true);
    getJobs()
      .then((res) => setJobs(res.data.data))
      .catch((err) => alert("Error fetching jobs"))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this job?")) return;
    deleteJob(id)
      .then(() => setJobs(jobs.filter((job) => job.id !== id)))
      .catch(() => alert("Error deleting job"));
  };

  const handleEdit = (job) => {
    setForm(job);
    setEditingId(job.id);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateJob(editingId, form)
        .then(() => {
          fetchJobs();
          setForm(initialForm);
          setEditingId(null);
        })
        .catch(() => alert("Error updating job"));
    } else {
      createJob(form)
        .then(() => {
          fetchJobs();
          setForm(initialForm);
        })
        .catch(() => alert("Error creating job"));
    }
  };

  return (
    <div className="jobs-table">
      <h3>Recent Jobs</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Status</th>
              <th>Applications</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.type}</td>
                <td>
                  <span className={`status-badge ${job.status.toLowerCase()}`}>{job.status}</span>
                </td>
                <td>{job.applications}</td>
                <td>{job.duration}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(job)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(job.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

        <h4 style={{ marginTop: "32px" }}>{editingId ? "Edit Job" : "Add New Job"}</h4>
        <form className="job-form" onSubmit={handleFormSubmit}>
        <div className="form-row">
            <input
            name="title"
            placeholder="Job Title"
            value={form.title}
            onChange={handleFormChange}
            required
            />
            <select name="type" value={form.type} onChange={handleFormChange}>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
            </select>
            <select name="status" value={form.status} onChange={handleFormChange}>
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
            <option value="Draft">Draft</option>
            </select>
        </div>
        <div className="form-row">
            <input
            name="applications"
            type="number"
            min="0"
            placeholder="Applications"
            value={form.applications}
            onChange={handleFormChange}
            required
            />
            <input
            name="duration"
            placeholder="Duration (e.g., 2mos 1w Remaining)"
            value={form.duration}
            onChange={handleFormChange}
            required
            />
        </div>
        <textarea
            name="description"
            placeholder="Job Description"
            value={form.description}
            onChange={handleFormChange}
            required
            rows={3}
            className="job-desc"
        />
        <div className="form-actions">
            <button type="submit" className="view-btn">
            {editingId ? "Update" : "Add"}
            </button>
            {editingId && (
            <button
                type="button"
                className="edit-btn"
                onClick={() => {
                setForm(initialForm);
                setEditingId(null);
                }}
                style={{ marginLeft: 8 }}
            >
                Cancel
            </button>
            )}
        </div>
        </form>
    </div>
  );
};

export default JobsTable;