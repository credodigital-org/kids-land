import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import DataTable from "../components/DataTable";
import ConfirmDialog from "../components/ConfirmDialog";
import * as calendarService from "../../services/calendarService";
import "./ContentPage.css";

function CalendarPage() {
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  async function load() {
    setLoading(true);
    setError("");
    try {
      setVersions(await calendarService.listCalendarVersions());
    } catch (err) {
      setError("Could not load calendar versions.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleUpload(e) {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    try {
      // Uploading a new one automatically becomes the active calendar -
      // the backend deactivates the previous one, nothing to do here.
      await calendarService.uploadCalendar({ title: "Academic Calendar", pdfFile: file });
      setFile(null);
      await load();
    } catch (err) {
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function confirmDelete() {
    await calendarService.deleteCalendarVersion(toDelete.id);
    setToDelete(null);
    await load();
  }

  return (
    <AdminLayout title="Academic Calendar">
      <p className="content-page-hint">
        Uploading a new PDF automatically replaces the one currently shown on the website.
        Older versions stay listed below for reference.
      </p>

      <form className="content-upload-form" onSubmit={handleUpload}>
        <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit" disabled={uploading}>{uploading ? "Uploading..." : "Upload New Calendar"}</button>
      </form>

      {error && <p className="content-page-error">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable
          columns={[
            { key: "title", label: "Title" },
            { key: "is_active", label: "Currently Live", render: (row) => (row.is_active ? "✅ Yes" : "—") },
            { key: "uploaded_at", label: "Uploaded", render: (row) => new Date(row.uploaded_at).toLocaleDateString() },
            { key: "file", label: "File", render: (row) => <a href={row.file} target="_blank" rel="noreferrer">View PDF</a> },
          ]}
          rows={versions}
          onDelete={setToDelete}
          emptyMessage="No calendar uploaded yet."
        />
      )}

      <ConfirmDialog
        open={!!toDelete}
        message="Delete this calendar version?"
        onConfirm={confirmDelete}
        onCancel={() => setToDelete(null)}
      />
    </AdminLayout>
  );
}

export default CalendarPage;
