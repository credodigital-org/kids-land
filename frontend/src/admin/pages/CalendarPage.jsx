import { useEffect, useState } from "react";
import { X } from "lucide-react";
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

  const [editingItem, setEditingItem] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [savingEdit, setSavingEdit] = useState(false);

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
      await calendarService.uploadCalendar({ title: "Academic Calendar", pdfFile: file });
      setFile(null);
      await load();
    } catch (err) {
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  function startEdit(row) {
    setEditingItem(row);
    setEditTitle(row.title || "");
    setError("");
  }

  function cancelEdit() {
    setEditingItem(null);
    setEditTitle("");
  }

  async function handleSaveEdit(e) {
    e.preventDefault();
    setSavingEdit(true);
    try {
      await calendarService.updateCalendarVersion(editingItem.id, { title: editTitle });
      cancelEdit();
      await load();
    } catch (err) {
      setError("Could not save changes. Please try again.");
    } finally {
      setSavingEdit(false);
    }
  }

  async function confirmDelete() {
    await calendarService.deleteCalendarVersion(toDelete.id);
    if (editingItem?.id === toDelete.id) cancelEdit();
    setToDelete(null);
    await load();
  }

  return (
    <AdminLayout title="Academic Calendar">
      <p className="content-page-hint">
        Uploading a new PDF automatically replaces the one currently shown on the website.
        Older versions stay listed below for reference — you can rename any version's title
        using the Edit button.
      </p>

      {editingItem ? (
        <div className="content-form-card editing">
          <div className="content-form-header">
            <div className="content-form-title">
              Renaming version
              <span className="editing-badge">Edit mode</span>
            </div>
            <button type="button" className="content-form-cancel" onClick={cancelEdit}>
              <X size={14} />
              Cancel
            </button>
          </div>

          <form className="content-upload-form" onSubmit={handleSaveEdit}>
            <div className="content-form-field wide">
              <label>Title</label>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                required
              />
            </div>
            <div className="content-form-field content-form-actions">
              <button type="submit" disabled={savingEdit}>
                {savingEdit ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="content-form-card">
          <div className="content-form-header">
            <div className="content-form-title">Upload a new version</div>
          </div>
          <form className="content-upload-form" onSubmit={handleUpload}>
            <div className="content-form-field wide">
              <label>PDF file</label>
              <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required />
            </div>
            <div className="content-form-field content-form-actions">
              <button type="submit" disabled={uploading}>{uploading ? "Uploading..." : "Upload New Calendar"}</button>
            </div>
          </form>
        </div>
      )}

      {error && <p className="content-page-error">{error}</p>}
      {loading ? (
        <p className="content-loading">Loading...</p>
      ) : (
        <DataTable
          columns={[
            { key: "title", label: "Title" },
            { key: "is_active", label: "Currently Live", render: (row) => (row.is_active ? "✅ Yes" : "—") },
            { key: "uploaded_at", label: "Uploaded", render: (row) => new Date(row.uploaded_at).toLocaleDateString() },
            { key: "file", label: "File", render: (row) => <a href={row.file} target="_blank" rel="noreferrer">View PDF</a> },
          ]}
          rows={versions}
          onEdit={startEdit}
          onDelete={setToDelete}
          emptyMessage="No academic calendar uploaded yet."
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
