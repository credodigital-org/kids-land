import { Menu, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import "./AdminHeader.css";

function AdminHeader({ title, onMenuClick }) {
  const { logout } = useAuth();

  return (
    <header className="admin-header">

      <div className="admin-header-left">
        <button
          type="button"
          className="admin-menu-btn"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        <h1>{title}</h1>
      </div>

      <button className="admin-logout-btn" onClick={logout}>
        <LogOut size={15} />
        <span>Log out</span>
      </button>
    </header>
  );
}

export default AdminHeader;
