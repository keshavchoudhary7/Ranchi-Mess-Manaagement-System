import React, { useState } from "react";
import { login } from "../../../apiConfig/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = await login(formData);
      const token = Cookies.set("token", data.token);
      const userId = Cookies.set("userId", data.user.id);

      navigate("/dashboard");

      console.log("Login successful:", data);
      setSuccess("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center px-4">
        <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center p-6 lg:p-10 gap-10">
          {/* Illustration Section */}
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
                Login to Account
              </h2>

              {success && (
                <p className="w-full text-white bg-green-700 text-sm text-center py-2 rounded mb-6">
                  {success}
                </p>
              )}
              {error && (
                <p className="w-full text-white bg-red-700 text-sm text-center py-2 rounded mb-6">
                  {error}
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  {loading ? "please wait..." : "Login"}
                </button>

                {/* Not Registered Yet */}
                <p className="text-center text-sm mt-4">
                  New user?{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Create an account
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

export default SignIn;
