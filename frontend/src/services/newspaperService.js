import api from "./api";

// Newspaper PDFs can be very large (~235MB). onProgress lets the admin
// UI show an upload progress bar instead of looking frozen.

export async function getNewspaperArchive() {
  const res = await api.get("/newspaper-archive/");
  return res.data.results ?? res.data;
}

export async function uploadNewspaperEdition({ title, editionDate, pdfFile, onProgress }) {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("edition_date", editionDate);
  formData.append("file", pdfFile);

  const res = await api.post("/newspaper-archive/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: (event) => {
      if (onProgress && event.total) {
        onProgress(Math.round((event.loaded * 100) / event.total));
      }
    },
  });
  return res.data;
}

export async function deleteNewspaperEdition(id) {
  await api.delete(`/newspaper-archive/${id}/`);
}

export async function updateNewspaperEdition(id, { title, editionDate, pdfFile, onProgress }) {
  const formData = new FormData();
  if (title !== undefined) formData.append("title", title);
  if (editionDate !== undefined) formData.append("edition_date", editionDate);
  if (pdfFile) formData.append("file", pdfFile);

  const res = await api.patch(`/newspaper-archive/${id}/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: (event) => {
      if (onProgress && event.total) {
        onProgress(Math.round((event.loaded * 100) / event.total));
      }
    },
  });
  return res.data;
}
