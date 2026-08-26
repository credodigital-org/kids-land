import { useEffect, useState } from "react";
import { X } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import DataTable from "../components/DataTable";
import ConfirmDialog from "../components/ConfirmDialog";
import * as galleryService from "../../services/galleryService";
import "./ContentPage.css";

const emptyForm = { title: "", category: "Events", order: 0, file: null };

function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  const [form, setForm] = useState(emptyForm);
  const [editingImage, setEditingImage] = useState(null); // null = "add" mode

  async function load() {
    setLoading(true);
    setError("");

    try {
      setImages(await galleryService.getGalleryImages());
    } catch (err) {
      console.error(err);
      setError("Could not load gallery images.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function startEdit(row) {
    setEditingImage(row);
    setForm({
      title: row.title || "",
      category: row.category || "Events",
      order: row.order ?? 0,
      file: null,
    });
    setError("");
  }

  function cancelEdit() {
    setEditingImage(null);
    setForm(emptyForm);
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!editingImage && !form.file) {
      setError("Please select an image.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      if (editingImage) {
        await galleryService.updateGalleryImage(editingImage.id, {
          title: form.title,
          category: form.category,
          order: form.order,
          imageFile: form.file,
        });
      } else {
        await galleryService.uploadGalleryImage({
          title: form.title,
          category: form.category,
          order: form.order,
          imageFile: form.file,
        });
      }

      cancelEdit();
      await load();
    } catch (err) {
      console.error(err);
      setError(editingImage ? "Update failed. Please try again." : "Upload failed. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function confirmDelete() {
    if (!toDelete) return;

    try {
      await galleryService.deleteGalleryImage(toDelete.id);
      if (editingImage?.id === toDelete.id) cancelEdit();
      setToDelete(null);
      await load();
    } catch (err) {
      console.error(err);
      setError("Delete failed. Please try again.");
    }
  }

  return (
    <AdminLayout title="Gallery">

      <div className={`content-form-card ${editingImage ? "editing" : ""}`}>

        <div className="content-form-header">
          <div className="content-form-title">
            {editingImage ? (
              <>
                Editing image
                <span className="editing-badge">Edit mode</span>
              </>
            ) : (
              "Add a new image"
            )}
          </div>

          {editingImage && (
            <button type="button" className="content-form-cancel" onClick={cancelEdit}>
              <X size={14} />
              Cancel
            </button>
          )}
        </div>

        <form className="content-upload-form" onSubmit={handleSubmit}>

          <div className="content-form-field">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title (optional)"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="content-form-field">
            <label>Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="Classrooms">Classrooms</option>
              <option value="Playground">Playground</option>
              <option value="Events">Events</option>
            </select>
          </div>

          <div className="content-form-field">
            <label>Order</label>
            <input
              type="number"
              placeholder="Order"
              value={form.order}
              onChange={(e) => setForm({ ...form, order: e.target.value })}
            />
          </div>

          <div className="content-form-field">
            <label>{editingImage ? "Replace image (optional)" : "Image"}</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
              required={!editingImage}
            />
          </div>

          {editingImage && (
            <div className="content-current-file">
              <img src={editingImage.image} alt="Current" />
              Current image — upload a new file above to replace it
            </div>
          )}

          <div className="content-form-field content-form-actions">
            <button type="submit" disabled={saving}>
              {saving
                ? "Saving..."
                : editingImage
                ? "Save Changes"
                : "Add Image"}
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
            {
              key: "image",
              label: "Preview",
              render: (row) => (
                <img
                  src={row.image}
                  alt={row.title || "Gallery image"}
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
              ),
            },
            { key: "title", label: "Title" },
            { key: "category", label: "Category" },
            { key: "order", label: "Order" },
          ]}
          rows={images}
          onEdit={startEdit}
          onDelete={setToDelete}
          emptyMessage="No gallery images yet."
        />
      )}

      <ConfirmDialog
        open={!!toDelete}
        message={`Delete "${toDelete?.title || "this image"}"?`}
        onConfirm={confirmDelete}
        onCancel={() => setToDelete(null)}
      />

    </AdminLayout>
  );
}

export default GalleryPage;
