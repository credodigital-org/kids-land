import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   base: "/kids-land-nursery/",
//   plugins: [react()],
// });

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true
  },
})