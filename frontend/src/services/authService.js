import api from "./api";

export async function login(email, password) {
  const res = await api.post("/auth/login/", { username: email, password });
  localStorage.setItem("admin_access_token", res.data.access);
  localStorage.setItem("admin_refresh_token", res.data.refresh);
  return res.data;
}

export function logout() {
  localStorage.removeItem("admin_access_token");
  localStorage.removeItem("admin_refresh_token");
}

export function isLoggedIn() {
  return !!localStorage.getItem("admin_access_token");
}
