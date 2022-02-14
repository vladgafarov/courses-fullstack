module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {},
      fontFamily: {
         proxima: ['proxima', 'sans-serif'],
         'proxima-bold': ['proxima-bold', 'sans-serif'],
         'proxima-medium': ['proxima-medium', 'sans-serif'],
      },
   },
   plugins: [
      require('@tailwindcss/forms')({
         strategy: 'class',
      }),
   ],
}
