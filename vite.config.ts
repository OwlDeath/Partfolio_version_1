import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src:":       path.resolve(__dirname, "./src"),
      "@assets":     path.resolve(__dirname, "./src/assets"),
      "@images":     path.resolve(__dirname, "./src/assets/images"),
      "@scss":       path.resolve(__dirname, "./src/assets/scss"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@header": path.resolve(__dirname, "./src/components/Header"),
      "@main": path.resolve(__dirname, "./src/components/Main"),
      "@store":      path.resolve(__dirname, "./src/store"),
      '@types':      path.resolve(__dirname, './src/types'),
    }
  }
});
