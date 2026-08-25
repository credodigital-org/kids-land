import api from "./api";

export async function getCurrentGuideline() {
  const res = await api.get("/parent-guidelines/current/");
  return res.data;
}

export async function listGuidelineVersions() {
  const res = await api.get("/admin/parent-guidelines/");
  return res.data.results ?? res.data;
}

export async function uploadGuideline({ title, pdfFile }) {
  const formData = new FormData();
  formData.append("title", title || "Parent Guidelines");
  formData.append("is_active", "true");
  formData.append("file", pdfFile);
  const res = await api.post("/admin/parent-guidelines/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
}

export async function deleteGuidelineVersion(id) {
  await api.delete(`/admin/parent-guidelines/${id}/`);
}
