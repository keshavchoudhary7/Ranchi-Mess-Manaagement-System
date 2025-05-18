import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/register/Register";
import SignIn from "./pages/signIn/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./privateRouting/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignIn />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
