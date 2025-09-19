import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        sectionbg: "#fffbfd",
        primarypink: "#FF0083", 
        primaryblack: "#292929",
        lightpink: "#FFB5DB",
        cream: "#fffbf5",
        midnight_text: "#1E293B",
        darkpink: "#30222F",
      },
      fontFamily: { // ✅ Move fonts here under fontFamily
        dmsans: ["var(--font-dmsans)", "ui-sans-serif", "system-ui", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
        sans: ["var(--font-dmsans)", "ui-sans-serif", "system-ui", "sans-serif"], // Default sans
        figtree: ["var(--font-figtree)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'card': '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgb(16 24 40 / 4%)',
      },
      keyframes: {
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards'
      }
    },
  },
  plugins: [],
}
export default config
