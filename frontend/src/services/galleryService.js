// import api from "./api";

// // Used by BOTH the public GallerySection (read-only) and the admin
// // GalleryPage (full CRUD) - same functions, different permissions
// // enforced by the backend based on whether a token is sent.

// export async function getGalleryImages() {
//   const res = await api.get("/gallery/");
//   return res.data.results ?? res.data;
// }

// export async function uploadGalleryImage({ title, order, imageFile }) {
//   const formData = new FormData();
//   formData.append("title", title || "");
//   formData.append("order", order ?? 0);
//   formData.append("image", imageFile);
//   const res = await api.post("/gallery/", formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
//   return res.data;
// }

// export async function deleteGalleryImage(id) {
//   await api.delete(`/gallery/${id}/`);
// }

import api from "./api";

// Used by BOTH the public GallerySection and the admin GalleryPage.
// Public GET is allowed by the backend.
// Upload/delete require authentication.

export async function getGalleryImages() {
  const res = await api.get("/gallery/");
  return res.data.results ?? res.data;
}

export async function uploadGalleryImage({
  title,
  category,
  order,
  imageFile,
}) {
  const formData = new FormData();

  formData.append("title", title || "");
  formData.append("category", category || "Events");
  formData.append("order", order ?? 0);
  formData.append("image", imageFile);

  const res = await api.post("/gallery/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}

export async function deleteGalleryImage(id) {
  await api.delete(`/gallery/${id}/`);
}

export async function updateGalleryImage(id, { title, category, order, imageFile }) {
  const formData = new FormData();

  if (title !== undefined) formData.append("title", title || "");
  if (category !== undefined) formData.append("category", category || "Events");
  if (order !== undefined) formData.append("order", order ?? 0);
  if (imageFile) formData.append("image", imageFile);

  const res = await api.patch(`/gallery/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}
