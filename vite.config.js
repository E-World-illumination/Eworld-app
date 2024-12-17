import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "html-transform",
      transformIndexHtml(html) {
        return html.replace(
          "%VITE_KAKAOMAP_KEY%",
          process.env.VITE_KAKAOMAP_KEY,
        );
      },
    },
  ],
});
