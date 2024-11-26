/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",       // Todas las páginas en la carpeta "pages"
    "./components/**/*.{js,ts,jsx,tsx}", // Todos los componentes en "components"
    "./styles/**/*.css", // Todos los archivos CSS en "styles"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

