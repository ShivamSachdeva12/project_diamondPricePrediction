import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";
import { useForm } from "react-hook-form"; // ✅ Corrected import

const onFormSubmit = async (data) => {
  try {
    // Send the POST request directly with the passed-in data
    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Use the passed-in data
    });

    const result = await response.json();


    if (response.ok) {
      // Handle the successful prediction response
      alert(`Predicted Price: $${result.price}`);
    } else {
      // Handle errors
      alert("Error predicting price");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error connecting to backend");
  }
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}> {/* ✅ Fixed submit handler */}
      {[
        { name: "carat", label: "Carat" },
        { name: "depth", label: "Depth" },
        { name: "table", label: "Table" },
        { name: "x", label: "x" },
        { name: "y", label: "y" },
        { name: "z", label: "z" },
      ].map(({ name, label }) => (
        <div className="form-group" key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            type="text"
            id={name}
            {...register(name, {
              required: `${label} is required`,
              pattern: {
                value: /^\d*\.?\d+$/, // Regex for number validation
                message: `${label} must be a number`,
              },
            })}
            placeholder={`Enter ${label.toLowerCase()} value (float)`}
          />
          {errors[name] && <p className="error">{errors[name].message}</p>}
        </div>
      ))}

      {[
        {
          name: "cut",
          label: "Cut",
          options: ["Fair", "Good", "Very Good", "Premium", "Ideal"],
        },
        {
          name: "color",
          label: "Color",
          options: ["D", "E", "F", "G", "H", "I", "J"],
        },
        {
          name: "clarity",
          label: "Clarity",
          options: ["I1", "SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF"],
        },
      ].map(({ name, label, options }) => (
        <div className="form-group" key={name}>
          <label htmlFor={name}>{label}</label>
          <select id={name} {...register(name, { required: `${label} is required` })}>
            <option value="">Select {label}</option> {/* ✅ Added placeholder */}
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors[name] && <p className="error">{errors[name].message}</p>}
        </div>
      ))}

      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
