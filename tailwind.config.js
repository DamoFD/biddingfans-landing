/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    colors: {
      'brand-black': '#0F0F0F',
      'brand-white': '#FCFCFC',
      'brand-primary': '#02AABD',
      'brand-secondary': '#00CDAC',
      'brand-neutral': '#1E1E1E',
      'brand-neutral-secondary': '#A3A3A3',
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
