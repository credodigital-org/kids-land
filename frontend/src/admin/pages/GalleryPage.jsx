import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import DataTable from "../components/DataTable";
import ConfirmDialog from "../components/ConfirmDialog";
import * as galleryService from "../../services/galleryService";
import "./ContentPage.css";

function GalleryPage() {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("Events");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState(0);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [toDelete, setToDelete] = useState(null);

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

  async function handleUpload(e) {
    e.preventDefault();

    if (!file) {
      setError("Please select an image.");
      return;
    }

    setUploading(true);
    setError("");

    try {
      await galleryService.uploadGalleryImage({
        title,
        category,
        order,
        imageFile: file,
      });

      setTitle("");
      setCategory("Events");
      setOrder(0);
      setFile(null);

      // Reset file input
      e.target.reset();

      await load();
    } catch (err) {
      console.error(err);
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function confirmDelete() {
    if (!toDelete) return;

    try {
      await galleryService.deleteGalleryImage(toDelete.id);
      setToDelete(null);
      await load();
    } catch (err) {
      console.error(err);
      setError("Delete failed. Please try again.");
    }
  }

  return (
    <AdminLayout title="Gallery">

      <form
        className="content-upload-form"
        onSubmit={handleUpload}
      >
        {/* Title */}
        <input
          type="text"
          placeholder="Title (optional)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Classrooms">
            Classrooms
          </option>

          <option value="Playground">
            Playground
          </option>

          <option value="Events">
            Events
          </option>
        </select>

        {/* Order */}
        <input
          type="number"
          placeholder="Order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        />

        {/* Image */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
          required
        />

        <button
          type="submit"
          disabled={uploading}
        >
          {uploading
            ? "Uploading..."
            : "Add Image"}
        </button>
      </form>

      {error && (
        <p className="content-page-error">
          {error}
        </p>
      )}

      {loading ? (
        <p>Loading...</p>
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

            {
              key: "title",
              label: "Title",
            },

            {
              key: "category",
              label: "Category",
            },

            {
              key: "order",
              label: "Order",
            },
          ]}
          rows={images}
          onDelete={setToDelete}
          emptyMessage="No gallery images yet."
        />
      )}

      <ConfirmDialog
        open={!!toDelete}
        message={`Delete "${
          toDelete?.title || "this image"
        }"?`}
        onConfirm={confirmDelete}
        onCancel={() =>
          setToDelete(null)
        }
      />

    </AdminLayout>
  );
}

export default GalleryPage;