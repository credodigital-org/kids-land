import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Image as ImageIcon,
  CalendarDays,
  Newspaper,
  BookOpen,
  MessageSquareQuote,
  X,
} from "lucide-react";
import "./AdminSidebar.css";

// To add a new section to the sidebar later, add one more <NavLink> here.
// See backend/README.md + this file's comment block for the full recipe.
function AdminSidebar({ open, onClose }) {
  return (
    <aside className={`admin-sidebar ${open ? "admin-sidebar-open" : ""}`}>

      <div className="admin-sidebar-top">
        <div className="admin-sidebar-title">Kids Land Admin</div>

        <button
          type="button"
          className="admin-sidebar-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      </div>

      <nav onClick={onClose}>
        <NavLink to="/admin" end className="admin-nav-link">
          <LayoutDashboard size={17} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/gallery" className="admin-nav-link">
          <ImageIcon size={17} />
          <span>Gallery</span>
        </NavLink>

        <NavLink to="/admin/calendar" className="admin-nav-link">
          <CalendarDays size={17} />
          <span>Academic Calendar</span>
        </NavLink>

        <NavLink to="/admin/newspaper" className="admin-nav-link">
          <Newspaper size={17} />
          <span>Newspaper Archive</span>
        </NavLink>

        <NavLink to="/admin/guidelines" className="admin-nav-link">
          <BookOpen size={17} />
          <span>Parent Guidelines</span>
        </NavLink>

        <NavLink to="/admin/testimonials" className="admin-nav-link">
          <MessageSquareQuote size={17} />
          <span>Testimonials</span>
        </NavLink>
        {/* Add new sections above this line, following the same pattern */}
      </nav>
    </aside>
  );
}

export default AdminSidebar;
