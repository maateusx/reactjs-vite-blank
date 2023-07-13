import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
import path from "path";

export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        api: path.resolve(__dirname, "src", "api"),
        assets: path.resolve(__dirname, "src", "assets"),
        atoms: path.resolve(__dirname, "src", "components", "atoms"),
        components: path.resolve(__dirname, "src", "components"),
        molecules: path.resolve(__dirname, "src", "components", "molecules"),
        organisms: path.resolve(__dirname, "src", "components", "organisms"),
        pages: path.resolve(__dirname, "src", "pages"),
        services: path.resolve(__dirname, "src", "services"),
        src: path.resolve(__dirname, "src"),
        store: path.resolve(__dirname, "src", "store"),
        style: path.resolve(__dirname, "src", "style"),
        templates: path.resolve(__dirname, "src", "templates"),
      },
    },
    server: {
      open: true,
    },
  };
});
