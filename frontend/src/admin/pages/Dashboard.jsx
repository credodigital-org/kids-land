import { Link } from "react-router-dom";
import {
  Image as ImageIcon,
  CalendarDays,
  Newspaper,
  BookOpen,
  MessageSquareQuote,
} from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import "./Dashboard.css";

const sections = [
  {
    to: "/admin/gallery",
    icon: ImageIcon,
    label: "Gallery",
    description: "Add, edit, or remove photos shown on the public gallery.",
  },
  {
    to: "/admin/calendar",
    icon: CalendarDays,
    label: "Academic Calendar",
    description: "Upload a new calendar PDF or rename an existing version.",
  },
  {
    to: "/admin/newspaper",
    icon: Newspaper,
    label: "Newspaper Archive",
    description: "Manage past newspaper editions available for download.",
  },
  {
    to: "/admin/guidelines",
    icon: BookOpen,
    label: "Parent Guidelines",
    description: "Keep the parent's guide PDF up to date.",
  },
  {
    to: "/admin/testimonials",
    icon: MessageSquareQuote,
    label: "Testimonials",
    description: "Add or edit parent testimonials shown on the homepage.",
  },
];

function Dashboard() {
  return (
    <AdminLayout title="Dashboard">
      <p className="dashboard-intro">
        Welcome back! Anything you add, edit, or remove here updates the public
        website immediately — nothing is hardcoded.
      </p>

      <div className="dashboard-grid">
        {sections.map(({ to, icon: Icon, label, description }) => (
          <Link key={to} to={to} className="dashboard-card">
            <div className="dashboard-card-icon">
              <Icon size={22} />
            </div>
            <div className="dashboard-card-label">{label}</div>
            <p className="dashboard-card-desc">{description}</p>
          </Link>
        ))}
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
