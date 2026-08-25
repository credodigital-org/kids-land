import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import DataTable from "../components/DataTable";
import ConfirmDialog from "../components/ConfirmDialog";
import * as guidelinesService from "../../services/guidelinesService";
import "./ContentPage.css";

function GuidelinesPage() {
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
      setVersions(await guidelinesService.listGuidelineVersions());
    } catch (err) {
      setError("Could not load guideline versions.");
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
      // Uploading a new one automatically becomes the active guidelines
      // document - the backend deactivates the previous one, same as
      // the Academic Calendar.
      await guidelinesService.uploadGuideline({ title: "Parent Guidelines", pdfFile: file });
      setFile(null);
      await load();
    } catch (err) {
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function confirmDelete() {
    await guidelinesService.deleteGuidelineVersion(toDelete.id);
    setToDelete(null);
    await load();
  }

  return (
    <AdminLayout title="Parent Guidelines">
      <p className="content-page-hint">
        Uploading a new PDF automatically replaces the one currently shown on the website.
        Older versions stay listed below for reference.
      </p>

      <form className="content-upload-form" onSubmit={handleUpload}>
        <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit" disabled={uploading}>{uploading ? "Uploading..." : "Upload New Guidelines"}</button>
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
          emptyMessage="No guidelines document uploaded yet."
        />
      )}

      <ConfirmDialog
        open={!!toDelete}
        message="Delete this guidelines version?"
        onConfirm={confirmDelete}
        onCancel={() => setToDelete(null)}
      />
    </AdminLayout>
  );
}

export default GuidelinesPage;
