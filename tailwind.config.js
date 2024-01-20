/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   darkMode: 'class',
   theme: {
      extend: {
         fontFamily: {
            signature: ['agustina', 'sans-serif'],
            sans: ['Inter', 'sans-serif'],
            mono: ['Roboto Mono', 'monospace'],
         },
         screens: {
            xs: '375px',
         },
         colors: {
            'bg': 'var(--color-bg)',
            'bg-secondary': 'var(--color-bg-secondary)',
            'accent': 'var(--color-accent)',
            'accent-light': 'var(--color-accent-light)',
            'text': 'var(--color-text)',
            'dark-1': 'var(--color-dark-1)',
            'dark-2': 'var(--color-dark-2)',
            'dark-3': 'var(--color-dark-3)',
         },
         boxShadow: {
            custom: '2px 2px 100px 0px rgba(0, 0, 0, 0.2)',
         },
         backgroundImage: {
            torch: 'radial-gradient(525px at 50% 50%, var(--color-accent-torch), transparent 80%)',
         },
      },
   },
   plugins: [],
};
