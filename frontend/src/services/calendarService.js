import api from "./api";

export async function getCurrentCalendar() {
  const res = await api.get("/academic-calendar/current/");
  return res.data;
}

export async function listCalendarVersions() {
  const res = await api.get("/admin/academic-calendar/");
  return res.data.results ?? res.data;
}

export async function uploadCalendar({ title, pdfFile }) {
  const formData = new FormData();
  formData.append("title", title || "Academic Calendar");
  formData.append("is_active", "true");
  formData.append("file", pdfFile);
  const res = await api.post("/admin/academic-calendar/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
}

export async function deleteCalendarVersion(id) {
  await api.delete(`/admin/academic-calendar/${id}/`);
}

export async function updateCalendarVersion(id, { title, isActive }) {
  const payload = {};
  if (title !== undefined) payload.title = title;
  if (isActive !== undefined) payload.is_active = isActive;
  const res = await api.patch(`/admin/academic-calendar/${id}/`, payload);
  return res.data;
}
