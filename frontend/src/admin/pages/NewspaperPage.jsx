import { useEffect, useState } from "react";
import { X } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import DataTable from "../components/DataTable";
import ConfirmDialog from "../components/ConfirmDialog";
import * as newspaperService from "../../services/newspaperService";
import "./ContentPage.css";

const emptyForm = { title: "", editionDate: "", file: null };

function NewspaperPage() {
  const [editions, setEditions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [toDelete, setToDelete] = useState(null);

  const [form, setForm] = useState(emptyForm);
  const [editingItem, setEditingItem] = useState(null);

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

  function startEdit(row) {
    setEditingItem(row);
    setForm({
      title: row.title || "",
      editionDate: row.edition_date || "",
      file: null,
    });
    setError("");
  }

  function cancelEdit() {
    setEditingItem(null);
    setForm(emptyForm);
    setProgress(0);
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!editingItem && (!form.file || !form.editionDate)) return;

    setUploading(true);
    setProgress(0);

    try {
      if (editingItem) {
        await newspaperService.updateNewspaperEdition(editingItem.id, {
          title: form.title,
          editionDate: form.editionDate,
          pdfFile: form.file,
          onProgress: setProgress,
        });
      } else {
        // Newspaper PDFs can be very large (~235MB) - this can take a
        // while on a slow connection, hence the progress bar.
        await newspaperService.uploadNewspaperEdition({
          title: form.title,
          editionDate: form.editionDate,
          pdfFile: form.file,
          onProgress: setProgress,
        });
      }

      cancelEdit();
      await load();
    } catch (err) {
      setError("Upload failed. Large files can take several minutes - please check your connection and try again.");
    } finally {
      setUploading(false);
    }
  }

  async function confirmDelete() {
    await newspaperService.deleteNewspaperEdition(toDelete.id);
    if (editingItem?.id === toDelete.id) cancelEdit();
    setToDelete(null);
    await load();
  }

  return (
    <AdminLayout title="Newspaper Archive">

      <div className={`content-form-card ${editingItem ? "editing" : ""}`}>

        <div className="content-form-header">
          <div className="content-form-title">
            {editingItem ? (
              <>
                Editing edition
                <span className="editing-badge">Edit mode</span>
              </>
            ) : (
              "Add a new edition"
            )}
          </div>

          {editingItem && (
            <button type="button" className="content-form-cancel" onClick={cancelEdit}>
              <X size={14} />
              Cancel
            </button>
          )}
        </div>

        <form className="content-upload-form" onSubmit={handleSubmit}>

          <div className="content-form-field">
            <label>Edition title</label>
            <input
              type="text"
              placeholder='e.g. "September 2026"'
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>

          <div className="content-form-field">
            <label>Edition date</label>
            <input
              type="date"
              value={form.editionDate}
              onChange={(e) => setForm({ ...form, editionDate: e.target.value })}
              required
            />
          </div>

          <div className="content-form-field">
            <label>{editingItem ? "Replace PDF (optional)" : "PDF file"}</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
              required={!editingItem}
            />
          </div>

          {editingItem && (
            <div className="content-current-file">
              <a href={editingItem.file} target="_blank" rel="noreferrer">View current PDF</a>
              — upload a new file above to replace it
            </div>
          )}

          <div className="content-form-field content-form-actions">
            <button type="submit" disabled={uploading}>
              {uploading
                ? `${editingItem ? "Saving" : "Uploading"}... ${progress}%`
                : editingItem
                ? "Save Changes"
                : "Add Edition"}
            </button>
          </div>

        </form>
      </div>

      {error && <p className="content-page-error">{error}</p>}
      {loading ? (
        <p className="content-loading">Loading...</p>
      ) : (
        <DataTable
          columns={[
            { key: "title", label: "Edition" },
            { key: "edition_date", label: "Date" },
            { key: "file", label: "File", render: (row) => <a href={row.file} target="_blank" rel="noreferrer">View PDF</a> },
          ]}
          rows={editions}
          onEdit={startEdit}
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
