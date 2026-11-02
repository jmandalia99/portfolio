/** @type {import('tailwindcss').Config} */
// Colors are taken from the hero photo: aspen gold, forest green,
// mountain bark, deep sky blue, on a warm parchment background.
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#FAF6EF',
        paper: '#FFFDF9',
        ink: '#1C1A17',
        body: '#47423C',
        muted: '#7A7268',
        line: '#E8DFD1',
        forest: { DEFAULT: '#2D5A3D', deep: '#1F4432', soft: '#E3EBDF' },
        aspen: { DEFAULT: '#D9A429', soft: '#F6E7C1' },
        amber: { DEFAULT: '#C4873A', soft: '#F3E3CC' },
        bark: '#6B4A32',
        sky: { DEFAULT: '#2F5F99', soft: '#E1EAF4' },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(60,45,30,.04), 0 8px 24px -12px rgba(60,45,30,.18)',
        lift: '0 2px 4px rgba(60,45,30,.05), 0 22px 40px -18px rgba(60,45,30,.30)',
      },
    },
  },
  plugins: [],
};
