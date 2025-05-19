import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/register/Register";
import SignIn from "./pages/signIn/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./privateRoutes/ProtectedRouting";
import MenuPage from "./pages/menuPage/MenuPage";

function App() {
  return (
    <>
      <Routes>
        {/* Auth Routes */}
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<SignIn />} />

        {/* Protected Routes */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MenuPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
