import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

// To add a new section to the sidebar later, add one more <NavLink> here.
// See backend/README.md + this file's comment block for the full recipe.
function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-title">Kids Land Admin</div>
      <nav>
        <NavLink to="/admin" end className="admin-nav-link">Dashboard</NavLink>
        <NavLink to="/admin/gallery" className="admin-nav-link">Gallery</NavLink>
        <NavLink to="/admin/calendar" className="admin-nav-link">Academic Calendar</NavLink>
        <NavLink to="/admin/newspaper" className="admin-nav-link">Newspaper Archive</NavLink>
        <NavLink to="/admin/guidelines" className="admin-nav-link">Parent Guidelines</NavLink>
        <NavLink to="/admin/testimonials" className="admin-nav-link">Testimonials</NavLink>
        {/* Add new sections above this line, following the same pattern */}
      </nav>
    </aside>
  );
}

export default AdminSidebar;
