import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import DataTable from "../components/DataTable";
import ConfirmDialog from "../components/ConfirmDialog";
import * as testimonialsService from "../../services/testimonialsService";
import "./ContentPage.css";

function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [parentName, setParentName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [order, setOrder] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState(null);

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

  async function handleAdd(e) {
    e.preventDefault();
    if (!parentName || !message) return;
    setSaving(true);
    try {
      await testimonialsService.addTestimonial({ parentName, message, rating, order, photoFile: photo });
      setParentName(""); setMessage(""); setRating(5); setOrder(0); setPhoto(null);
      await load();
    } catch (err) {
      setError("Could not save testimonial. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function confirmDelete() {
    await testimonialsService.deleteTestimonial(toDelete.id);
    setToDelete(null);
    await load();
  }

  return (
    <AdminLayout title="Testimonials">
      <form className="content-upload-form" onSubmit={handleAdd}>
        <input type="text" placeholder="Parent name" value={parentName} onChange={(e) => setParentName(e.target.value)} required />
        <input type="text" placeholder="Testimonial message" value={message} onChange={(e) => setMessage(e.target.value)} required style={{ flex: 1, minWidth: 220 }} />
        <input type="number" min="1" max="5" placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} />
        <input type="number" placeholder="Order" value={order} onChange={(e) => setOrder(e.target.value)} />
        <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
        <button type="submit" disabled={saving}>{saving ? "Saving..." : "Add Testimonial"}</button>
      </form>

      {error && <p className="content-page-error">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable
          columns={[
            { key: "parent_name", label: "Parent" },
            { key: "message", label: "Message" },
            { key: "rating", label: "Rating", render: (row) => "★".repeat(row.rating) },
            { key: "order", label: "Order" },
          ]}
          rows={testimonials}
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
