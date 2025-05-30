import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // ...existing code...
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)'],
      },
    },
  },
  // ...existing code...
}

export default config