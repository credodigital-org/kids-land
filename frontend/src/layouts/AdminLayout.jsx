import AdminSidebar from "../admin/components/AdminSidebar";
import AdminHeader from "../admin/components/AdminHeader";
import "./AdminLayout.css";

function AdminLayout({ title, children }) {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        <AdminHeader title={title || "Dashboard"} />
        <div className="admin-content-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
