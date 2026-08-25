import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import DataTable from "../components/DataTable";
import ConfirmDialog from "../components/ConfirmDialog";
import * as newspaperService from "../../services/newspaperService";
import "./ContentPage.css";

function NewspaperPage() {
  const [editions, setEditions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [editionDate, setEditionDate] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [toDelete, setToDelete] = useState(null);

  async function load() {
    setLoading(true);
    setError("");
    try {
      setEditions(await newspaperService.getNewspaperArchive());
    } catch (err) {
      setError("Could not load newspaper archive.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleUpload(e) {
    e.preventDefault();
    if (!file || !editionDate) return;
    setUploading(true);
    setProgress(0);
    try {
      // Newspaper PDFs can be very large (~235MB) - this can take a
      // while on a slow connection, hence the progress bar.
      await newspaperService.uploadNewspaperEdition({
        title,
        editionDate,
        pdfFile: file,
        onProgress: setProgress,
      });
      setTitle(""); setEditionDate(""); setFile(null);
      await load();
    } catch (err) {
      setError("Upload failed. Large files can take several minutes - please check your connection and try again.");
    } finally {
      setUploading(false);
    }
  }

  async function confirmDelete() {
    await newspaperService.deleteNewspaperEdition(toDelete.id);
    setToDelete(null);
    await load();
  }

  return (
    <AdminLayout title="Newspaper Archive">
      <form className="content-upload-form" onSubmit={handleUpload}>
        <input type="text" placeholder='Edition title (e.g. "September 2026")' value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="date" value={editionDate} onChange={(e) => setEditionDate(e.target.value)} required />
        <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit" disabled={uploading}>
          {uploading ? `Uploading... ${progress}%` : "Add Edition"}
        </button>
      </form>

      {error && <p className="content-page-error">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable
          columns={[
            { key: "title", label: "Edition" },
            { key: "edition_date", label: "Date" },
            { key: "file", label: "File", render: (row) => <a href={row.file} target="_blank" rel="noreferrer">View PDF</a> },
          ]}
          rows={editions}
          onDelete={setToDelete}
          emptyMessage="No newspaper editions uploaded yet."
        />
      )}

      <ConfirmDialog
        open={!!toDelete}
        message={`Delete "${toDelete?.title}"?`}
        onConfirm={confirmDelete}
        onCancel={() => setToDelete(null)}
      />
    </AdminLayout>
  );
}

export default NewspaperPage;
