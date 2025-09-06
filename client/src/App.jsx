import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { useState } from "react";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");

  // 🔒 ProtectedRoute wrapper
  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/admin/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Navbar />
      <main className="min-h-[80vh]">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin entry route */}
          <Route
            path="/admin"
            element={
              token ? (
                <Navigate to="/admin/dashboard" replace />
              ) : (
                <Navigate to="/admin/login" replace />
              )
            }
          />

          {/* Admin login */}
          <Route path="/admin/login" element={<AdminLogin setToken={setToken} />} />

          {/* Protected admin routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard token={token} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/panel"
            element={
              <ProtectedRoute>
                <AdminPanel token={token} />
              </ProtectedRoute>
            }
          />

          {/* Fallback for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
