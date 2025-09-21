
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";


const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    policyNo: "",
    category: "Client",
    email: "",
    password: "",
    profilePhoto: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "profilePhoto") {
      setFormData({ ...formData, profilePhoto: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register form submitted:", formData);


    navigate("/login"); 
  };

  return (
    <div className="auth-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="policyNo"
          placeholder="Policy Number"
          value={formData.policyNo}
          onChange={handleChange}
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="Client">Client</option>
          <option value="Broker">Broker</option>
        </select>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="profilePhoto"
          accept="image/*"
          onChange={handleChange}
        />
        <button type="submit" className="auth-btn">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="auth-link" onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
