// import { useState, useEffect } from "react";
// import {
//   FaBars,
//   FaTimes,
//   FaUtensils,
//   FaUser,
//   FaCalendarAlt,
//   FaMoneyBillWave,
//   FaCog,
//   FaBell,
// } from "react-icons/fa";

// const UserNav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-gray-900 shadow-lg py-2" : "bg-gray-900 py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <FaUtensils className="text-yellow-400 text-2xl" />
//             <span className="text-white font-bold text-xl hidden sm:block">
//               RanchiMess
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a
//               href="#"
//               className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center"
//             >
//               <FaUser className="mr-2" /> Members
//             </a>
//             <a
//               href="#"
//               className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center"
//             >
//               <FaCalendarAlt className="mr-2" /> Meal Plan
//             </a>
//             <a
//               href="#"
//               className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center"
//             >
//               <FaMoneyBillWave className="mr-2" /> Billing
//             </a>
//             <a
//               href="#"
//               className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center"
//             >
//               <FaCog className="mr-2" /> Settings
//             </a>
//           </div>

//           {/* Right side icons */}
//           <div className="hidden md:flex items-center space-x-6">
//             <button className="text-gray-300 hover:text-yellow-400 relative">
//               <FaBell className="text-xl" />
//               <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 3
//               </span>
//             </button>
//             <div className="flex items-center space-x-2">
//               <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-yellow-400 font-bold">
//                 US
//               </div>
//               <span className="text-white text-sm">User</span>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-yellow-400 focus:outline-none"
//             >
//               {isOpen ? (
//                 <FaTimes className="text-2xl" />
//               ) : (
//                 <FaBars className="text-2xl" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         className={`md:hidden ${
//           isOpen ? "block" : "hidden"
//         } bg-gray-800 transition-all duration-300`}
//       >
//         <div className="container mx-auto px-4 py-3 space-y-4">
//           <a
//             href="#"
//             className="block text-gray-300 hover:text-yellow-400 py-2 flex items-center"
//           >
//             <FaUser className="mr-3" /> Members
//           </a>
//           <a
//             href="#"
//             className="block text-gray-300 hover:text-yellow-400 py-2 flex items-center"
//           >
//             <FaCalendarAlt className="mr-3" /> Meal Plan
//           </a>
//           <a
//             href="#"
//             className="block text-gray-300 hover:text-yellow-400 py-2 flex items-center"
//           >
//             <FaMoneyBillWave className="mr-3" /> Billing
//           </a>
//           <a
//             href="#"
//             className="block text-gray-300 hover:text-yellow-400 py-2 flex items-center"
//           >
//             <FaCog className="mr-3" /> Settings
//           </a>
//           <div className="flex items-center justify-between pt-2 border-t border-gray-700">
//             <div className="flex items-center space-x-2">
//               <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-yellow-400 font-bold">
//                 US
//               </div>
//               <span className="text-white text-sm">User</span>
//             </div>
//             <button className="text-gray-300 hover:text-yellow-400 relative">
//               <FaBell className="text-xl" />
//               <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 3
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default UserNav;

/* --------------------------------------------------------------------------------------------------- */

import { useState } from "react";
import {
  FaCalendarAlt,
  FaUtensils,
  FaChevronLeft,
  FaChevronRight,
  FaSun,
  FaMoon,
  FaUser,
  FaBell,
} from "react-icons/fa";

// Enhanced User Navigation Component
const UserNav = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="bg-gray-800 text-gray-100 p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <FaUtensils className="text-yellow-400 text-xl" />
        <span className="font-bold">Ranchi Mess</span>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-300 hover:text-yellow-400 p-2 rounded-full hover:bg-gray-700"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button className="text-gray-300 hover:text-yellow-400 p-2 rounded-full hover:bg-gray-700 relative">
          <FaBell />
          <span className="absolute top-0 right-0 bg-yellow-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-yellow-400 font-bold">
            U
          </div>
          <span className="hidden sm:inline">User</span>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
