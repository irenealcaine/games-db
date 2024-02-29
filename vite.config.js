import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteFaviconsPlugin } from "module";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFaviconsPlugin('/game-controller.svg')
  ],
})
