import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Registered successfully");
  };

  return (
    <div className="page">
      <div className="form-wrapper">
        <form className="form-card" onSubmit={handleSubmit}>
          <h1>Registration Form</h1>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Form;