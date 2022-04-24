import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// export default {
//   plugins: [reactRefresh()],
//   server: {
//     open: "./index.html",
//     host: 'localhost',
//     hmr: {
//       port: 3000,
//     }
//   }
// }

export default defineConfig({
  plugins: [react()]
})
