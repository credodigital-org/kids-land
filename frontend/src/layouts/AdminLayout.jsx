import { useState } from "react";
import AdminSidebar from "../admin/components/AdminSidebar";
import AdminHeader from "../admin/components/AdminHeader";
import "./AdminLayout.css";

function AdminLayout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      <AdminSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Dims + closes the sidebar when tapped, mobile only */}
      {sidebarOpen && (
        <div
          className="admin-sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="admin-content">
        <AdminHeader
          title={title || "Dashboard"}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <div className="admin-content-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
