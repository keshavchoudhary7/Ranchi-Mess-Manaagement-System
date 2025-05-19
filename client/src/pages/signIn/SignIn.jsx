// import React, { useState } from "react";
// import { login } from "../../../apiConfig/authApi";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
// import { FaUser, FaLock, FaEye, FaEyeSlash, FaUtensils } from "react-icons/fa";
// import { FiLogIn } from "react-icons/fi";

// const SignIn = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const data = await login(formData);
//       const token = Cookies.set("token", data.token);
//       const userId = Cookies.set("userId", data.user.id);

//       navigate("/");

//       console.log("Login successful:", data);
//       setSuccess("Login successful!");
//     } catch (error) {
//       console.error("Login error:", error);
//       setError(
//         error.response?.data?.message || "Login failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
//       <div className="max-w-6xl w-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
//         {/* Illustration Section */}
//         <div className="hidden lg:block lg:w-1/2 bg-gray-700 relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-gray-900/80 z-10"></div>
//           <img
//             src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//             alt="Food Illustration"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-0 left-0 p-8 z-20">
//             <h2 className="text-3xl font-bold text-white mb-2">
//               Welcome Back!
//             </h2>
//             <p className="text-gray-300">
//               Sign in to manage your mess meals and preferences
//             </p>
//           </div>
//         </div>

//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 p-8 sm:p-12">
//           <div className="flex items-center justify-center mb-8">
//             <div className="bg-yellow-500 p-3 rounded-full mr-3">
//               <FaUtensils className="text-gray-900 text-xl" />
//             </div>
//             <h1 className="text-2xl font-bold text-white">Ranchi Mess</h1>
//           </div>

//           <h2 className="text-2xl font-semibold text-white text-center mb-6">
//             Sign In to Your Account
//           </h2>

//           {success && (
//             <div className="bg-green-700/50 border border-green-500 text-white px-4 py-3 rounded mb-6 text-sm">
//               {success}
//             </div>
//           )}
//           {error && (
//             <div className="bg-red-700/50 border border-red-500 text-white px-4 py-3 rounded mb-6 text-sm">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-1">
//               <label className="block text-gray-300 text-sm">Email</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaUser className="text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="your@email.com"
//                   required
//                   className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="space-y-1">
//               <label className="block text-gray-300 text-sm">Password</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="text-gray-400" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="••••••••"
//                   required
//                   className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <FaEyeSlash className="text-gray-400 hover:text-yellow-400" />
//                   ) : (
//                     <FaEye className="text-gray-400 hover:text-yellow-400" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-600 rounded bg-gray-700"
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-2 block text-sm text-gray-300"
//                 >
//                   Remember me
//                 </label>
//               </div>
//               <div className="text-sm">
//                 <a
//                   href="#"
//                   className="font-medium text-yellow-500 hover:text-yellow-400"
//                 >
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-gray-900 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors ${
//                 loading ? "opacity-70 cursor-not-allowed" : ""
//               }`}
//             >
//               {loading ? (
//                 "Please wait..."
//               ) : (
//                 <>
//                   <FiLogIn className="mr-2" />
//                   Sign In
//                 </>
//               )}
//             </button>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-600"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-gray-800 text-gray-400">
//                   New to MessEase?
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6">
//               <button
//                 onClick={() => navigate("/signup")}
//                 className="w-full flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
//               >
//                 Create your account
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
import React, { useState } from "react";
import { login } from "../../../apiConfig/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
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

      navigate("/");

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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Logo Section - Made more prominent */}
        <div className="w-full lg:w-2/5 bg-yellow-500 flex flex-col items-center justify-center p-8">
          <div className="mb-6 w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg">
            <img
              src="/dabbawala.png"
              alt="RanchiMess Logo"
              className="w-full h-full object-contain p-2"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ranchi Mess</h1>
          <p className="text-gray-800 text-center">
            Home Cooked Food At Your Doorstep
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-3/5 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Sign In to Your Account
          </h2>

          {success && (
            <div className="bg-green-700/50 border border-green-500 text-white px-4 py-3 rounded mb-6 text-sm">
              {success}
            </div>
          )}
          {error && (
            <div className="bg-red-700/50 border border-red-500 text-white px-4 py-3 rounded mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="block text-gray-300 text-sm">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-gray-300 text-sm">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-yellow-400" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-yellow-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-600 rounded bg-gray-700"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-yellow-500 hover:text-yellow-400"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-gray-900 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                "Please wait..."
              ) : (
                <>
                  <FiLogIn className="mr-2" />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800 text-gray-400">
                  New to Ranchi Mess?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => navigate("/auth/register")}
                className="w-full flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
              >
                Create your account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
