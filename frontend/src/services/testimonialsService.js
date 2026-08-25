import api from "./api";

export async function getTestimonials() {
  const res = await api.get("/testimonials/");
  return res.data.results ?? res.data;
}

export async function addTestimonial({ parentName, message, rating, order, photoFile }) {
  const formData = new FormData();
  formData.append("parent_name", parentName);
  formData.append("message", message);
  formData.append("rating", rating ?? 5);
  formData.append("order", order ?? 0);
  if (photoFile) formData.append("photo", photoFile);
  const res = await api.post("/testimonials/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
}

export async function deleteTestimonial(id) {
  await api.delete(`/testimonials/${id}/`);
}
