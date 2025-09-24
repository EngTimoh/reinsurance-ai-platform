
import React, { useState } from "react";
import "./Claims.css";

const Claims = () => {
  const [claims, setClaims] = useState([]);
  const [form, setForm] = useState({
    policyNo: "",
    claimType: "",
    incidentDate: "",
    description: "",
    file: null,
  });

  const [selectedClaim, setSelectedClaim] = useState(null); 

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newClaim = {
      id: claims.length + 1,
      ...form,
      status: "Pending",
      submittedAt: new Date().toLocaleDateString(),
    };
    setClaims([...claims, newClaim]);
    setForm({
      policyNo: "",
      claimType: "",
      incidentDate: "",
      description: "",
      file: null,
    });
    alert("Claim submitted successfully!");
  };

  return (
    <div className="claims-container">
      <h2>Submit a New Claim</h2>
      <form className="claim-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="policyNo"
          placeholder="Policy Number"
          value={form.policyNo}
          onChange={handleChange}
          required
        />
        <select
          name="claimType"
          value={form.claimType}
          onChange={handleChange}
          required
        >
          <option value="">Select Claim Type</option>
          <option value="Health">Health</option>
          <option value="Accident">Accident</option>
          <option value="Property">Property</option>
          <option value="Life">Life</option>
        </select>
        <input
          type="date"
          name="incidentDate"
          value={form.incidentDate}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Describe the incident"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input type="file" name="file" onChange={handleChange} />
        <button type="submit">Submit Claim</button>
      </form>

      <h2>My Claims</h2>
      {claims.length === 0 ? (
        <p>No claims submitted yet.</p>
      ) : (
        <table className="claims-table">
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Policy No</th>
              <th>Type</th>
              <th>Date Submitted</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim) => (
              <tr
                key={claim.id}
                onClick={() => setSelectedClaim(claim)} 
                className="clickable-row"
              >
                <td>{claim.id}</td>
                <td>{claim.policyNo}</td>
                <td>{claim.claimType}</td>
                <td>{claim.submittedAt}</td>
                <td>{claim.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Claim Details Modal */}
      {selectedClaim && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Claim Details</h3>
            <p><strong>Policy No:</strong> {selectedClaim.policyNo}</p>
            <p><strong>Claim Type:</strong> {selectedClaim.claimType}</p>
            <p><strong>Incident Date:</strong> {selectedClaim.incidentDate}</p>
            <p><strong>Description:</strong> {selectedClaim.description}</p>
            <p><strong>Status:</strong> {selectedClaim.status}</p>
            {selectedClaim.file && (
              <p>
                <strong>Attachment:</strong>{" "}
                <a
                  href={URL.createObjectURL(selectedClaim.file)}
                  target="_blank"
                  rel="noreferrer"
                >
                  View File
                </a>
              </p>
            )}
            <button onClick={() => setSelectedClaim(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Claims;
