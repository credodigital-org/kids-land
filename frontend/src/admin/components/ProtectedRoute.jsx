import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Wraps any admin page - redirects to /admin/login if not authenticated.
function ProtectedRoute({ children }) {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
