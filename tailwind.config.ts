/**
 * Tailwind v4 note: brand tokens, gradients, and font families are defined in
 * app/globals.css via the @theme inline directive. This file is kept for
 * reference and tooling compatibility. If plugins or content overrides are
 * needed, load via `@config './tailwind.config.ts'` in globals.css.
 */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        peach: 'var(--peach)',
        pink: 'var(--pink)',
        lavender: 'var(--lavender)',
        cream: 'var(--cream)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        plum: 'var(--plum)',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter-tight)', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        sunset: 'linear-gradient(180deg, var(--peach) 0%, var(--pink) 55%, var(--lavender) 100%)',
        'sunset-end': 'linear-gradient(180deg, var(--pink) 0%, var(--lavender) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
