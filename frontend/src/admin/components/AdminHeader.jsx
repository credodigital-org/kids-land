import { useAuth } from "../context/AuthContext";
import "./AdminHeader.css";

function AdminHeader({ title }) {
  const { logout } = useAuth();
  return (
    <header className="admin-header">
      <h1>{title}</h1>
      <button className="admin-logout-btn" onClick={logout}>Log out</button>
    </header>
  );
}

export default AdminHeader;
