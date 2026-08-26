import { useEffect, useState } from "react";
import { X } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import DataTable from "../components/DataTable";
import ConfirmDialog from "../components/ConfirmDialog";
import * as testimonialsService from "../../services/testimonialsService";
import "./ContentPage.css";

const emptyForm = { parentName: "", message: "", rating: 5, order: 0, photo: null };

function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  const [form, setForm] = useState(emptyForm);
  const [editingItem, setEditingItem] = useState(null);

  async function load() {
    setLoading(true);
    setError("");
    try {
      setTestimonials(await testimonialsService.getTestimonials());
    } catch (err) {
      setError("Could not load testimonials.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  function startEdit(row) {
    setEditingItem(row);
    setForm({
      parentName: row.parent_name || "",
      message: row.message || "",
      rating: row.rating ?? 5,
      order: row.order ?? 0,
      photo: null,
    });
    setError("");
  }

  function cancelEdit() {
    setEditingItem(null);
    setForm(emptyForm);
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.parentName || !form.message) return;

    setSaving(true);
    setError("");

    try {
      if (editingItem) {
        await testimonialsService.updateTestimonial(editingItem.id, {
          parentName: form.parentName,
          message: form.message,
          rating: form.rating,
          order: form.order,
          photoFile: form.photo,
        });
      } else {
        await testimonialsService.addTestimonial({
          parentName: form.parentName,
          message: form.message,
          rating: form.rating,
          order: form.order,
          photoFile: form.photo,
        });
      }

      cancelEdit();
      await load();
    } catch (err) {
      setError(editingItem ? "Could not save changes. Please try again." : "Could not save testimonial. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function confirmDelete() {
    await testimonialsService.deleteTestimonial(toDelete.id);
    if (editingItem?.id === toDelete.id) cancelEdit();
    setToDelete(null);
    await load();
  }

  return (
    <AdminLayout title="Testimonials">

      <div className={`content-form-card ${editingItem ? "editing" : ""}`}>

        <div className="content-form-header">
          <div className="content-form-title">
            {editingItem ? (
              <>
                Editing testimonial
                <span className="editing-badge">Edit mode</span>
              </>
            ) : (
              "Add a new testimonial"
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
            <label>Parent name</label>
            <input
              type="text"
              placeholder="Parent name"
              value={form.parentName}
              onChange={(e) => setForm({ ...form, parentName: e.target.value })}
              required
            />
          </div>

          <div className="content-form-field wide">
            <label>Message</label>
            <input
              type="text"
              placeholder="Testimonial message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>

          <div className="content-form-field">
            <label>Rating (1–5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
            />
          </div>

          <div className="content-form-field">
            <label>Order</label>
            <input
              type="number"
              value={form.order}
              onChange={(e) => setForm({ ...form, order: e.target.value })}
            />
          </div>

          <div className="content-form-field">
            <label>{editingItem ? "Replace photo (optional)" : "Photo (optional)"}</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setForm({ ...form, photo: e.target.files[0] })}
            />
          </div>

          {editingItem?.photo && (
            <div className="content-current-file">
              <img src={editingItem.photo} alt="Current" />
              Current photo — upload a new file above to replace it
            </div>
          )}

          <div className="content-form-field content-form-actions">
            <button type="submit" disabled={saving}>
              {saving
                ? "Saving..."
                : editingItem
                ? "Save Changes"
                : "Add Testimonial"}
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
            { key: "parent_name", label: "Parent" },
            { key: "message", label: "Message" },
            { key: "rating", label: "Rating", render: (row) => "★".repeat(row.rating) },
            { key: "order", label: "Order" },
          ]}
          rows={testimonials}
          onEdit={startEdit}
          onDelete={setToDelete}
          emptyMessage="No testimonials yet."
        />
      )}

      <ConfirmDialog
        open={!!toDelete}
        message={`Delete testimonial from "${toDelete?.parent_name}"?`}
        onConfirm={confirmDelete}
        onCancel={() => setToDelete(null)}
      />
    </AdminLayout>
  );
}

export default TestimonialsPage;
