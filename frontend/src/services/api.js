// import axios from "axios";

// // Single Axios instance for all backend calls - public site AND admin panel
// // both import this. Base URL comes from env so dev/production just works
// // by changing .env, no code changes needed.
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",
// });

// // Attach the admin JWT automatically if one is stored - public GET requests
// // work fine without it (backend allows public reads), this only matters
// // for admin create/update/delete calls.
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("admin_access_token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;

import axios from "axios";

// Single Axios instance for all backend calls - public site AND admin panel
// both import this. Base URL comes from env so dev/production just works
// by changing .env, no code changes needed.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",
});

// Attach the admin JWT automatically if one is stored.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("admin_access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// If a request comes back 401, the stored token is missing, invalid, or
// expired - DRF's JWT auth rejects the request outright in that case,
// even on endpoints that allow anonymous GET, so a stale token can break
// public reads too. Clear it and retry once without auth: public GETs
// then succeed normally; a genuine admin action will still correctly
// fail (now with no token at all) and the admin UI can prompt re-login.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const originalRequest = error.config;

    if (status === 401 && originalRequest && !originalRequest._retriedWithoutAuth) {
      localStorage.removeItem("admin_access_token");
      localStorage.removeItem("admin_refresh_token");

      originalRequest._retriedWithoutAuth = true;
      delete originalRequest.headers.Authorization;

      return api(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;
