// src/components/RegistrationWithImage.jsx
import React, { useState } from "react";
import Authnav from "../../components/authnavbar/Authnav";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    alert("Registered successfully!");
  };

  return (
    <>
      <Authnav />
      <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center px-4">
        <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center p-6 lg:p-10 gap-10">
          {/* Illustration Section - hidden on sm/md */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
            <img
              src="dabbawala.png"
              alt="No_Image_Found"
              className="max-h-96 object-contain"
            />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Create Account
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-600">
                    Re-enter Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Register
                </button>

                {/* Already Registered */}
                <p className="text-center text-sm mt-4">
                  Already Registered?{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Please Sign-in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
