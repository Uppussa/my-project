/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'carro': "url('/banner.png')"
      }
    }
  },
  plugins: [], // This should be outside of the `extend` object
}
