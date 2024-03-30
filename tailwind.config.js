/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1.3rem',
          sm: '2rem',
          lg: '7rem',
          xl: '8rem',
          '2xl': '6rem',
        },
      },
      colors: {
        'bg-light': '#151B1F',
        'text-light': '#363F4C'
      },
      backgroundImage: {
        'hero-pattern': "url('https://stevenbartlett.com/wp-content/uploads/2021/12/steven-hero-banner-taller-desktop.jpg')",
      }
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
};
