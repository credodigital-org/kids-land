import api from "./api";

export async function getCurrentNewsletter() {
  const res = await api.get("/newsletter/current/");
  return res.data;
}

export async function listNewsletterVersions() {
  const res = await api.get("/admin/newsletter/");
  return res.data.results ?? res.data;
}

export async function uploadNewsletter({ title, pdfFile }) {
  const formData = new FormData();
  formData.append("title", title || "Newsletter");
  formData.append("is_active", "true");
  formData.append("file", pdfFile);
  const res = await api.post("/admin/newsletter/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
}

export async function deleteNewsletterVersion(id) {
  await api.delete(`/admin/newsletter/${id}/`);
}

export async function updateNewsletterVersion(id, { title, isActive }) {
  const payload = {};
  if (title !== undefined) payload.title = title;
  if (isActive !== undefined) payload.is_active = isActive;
  const res = await api.patch(`/admin/newsletter/${id}/`, payload);
  return res.data;
}
