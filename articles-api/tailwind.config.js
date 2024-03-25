/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: 'var(--border)',
        borderColorSecondary: 'var(--border-secondary)',
        textColor: 'var(--text)',
        background: 'var(--main-background)',
        secondaryBackground: 'var(--secondary-background)',
        buttonColor: 'var(--button)',
        buttonHover: 'var(--button-hover)',
        linkHover: 'var(--link-hover)',
        errorColor: 'var(--error)'
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

