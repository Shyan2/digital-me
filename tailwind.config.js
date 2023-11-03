/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px']
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Background colors
        'dark-background': '#43464B',
        'light-background': '#FAF3E0',
        'navbar-light': '#FAF3E0',
        'navbar-dark': '#43464B',

        // Font colors
        'light-primary': '#333333', // Dark text for light background
        'light-secondary': '#555555', // Darker text for light background

        // Text colors for dark backgrounds
        'dark-primary': '#FAF3E0', // Light text for dark background
        'dark-secondary': '#C2C2C2',

        // Hover colors
        'light-hover': '#eeeeee', // Lighter grey for hover on light background
        'dark-hover': '#3a3d41', // Darker grey for hover on dark background

        // Accent colors for hover effects
        'light-accent': '#ffd700', // Gold/yellow for a standout hover on light theme
        'dark-accent': '#ffc107',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      },
    }
  },
  plugins: []
};
