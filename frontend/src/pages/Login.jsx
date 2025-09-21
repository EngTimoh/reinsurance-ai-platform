
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    policyNo: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);

    if (formData.policyNo.startsWith("B")) {
      navigate("/broker-dashboard");
    } else {
      navigate("/client-dashboard");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="policyNo"
          placeholder="Policy Number"
          value={formData.policyNo}
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
        <button type="submit" className="auth-btn">Login</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <span className="auth-link" onClick={() => navigate("/register")}>
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
