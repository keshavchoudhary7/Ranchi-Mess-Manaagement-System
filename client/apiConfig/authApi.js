import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to handle user signUp
export const register = async (userData) => {
  try {
    const response = await Api.post("register", userData);
    console.log("User registered successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await Api.post("login", userData);
    console.log("login success", response.data);
    return response.data;
  } catch (error) {
    console.log("login failed", error);
    throw error;
  }
};
