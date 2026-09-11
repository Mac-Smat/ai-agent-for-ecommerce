/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Indigo Harbor Remix — deep indigo-navy surfaces
        bg: {
          base: '#090A10',
          surface: '#11131E',
          'surface-2': '#161A28',
          'surface-3': '#1B2030',
        },
        // Cool slate / indigo borders
        border: {
          DEFAULT: '#1E2235',
          strong: '#2A3047',
        },
        // Text hierarchy
        text: {
          primary: '#FFFFFF',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        // Emerald action highlights
        accent: {
          DEFAULT: '#10B981',
          hover: '#34D399',
          active: '#0EA372',
          soft: 'rgba(16, 185, 129, 0.12)',
        },
        // Secondary glow accents (indigo / violet)
        glow: {
          indigo: '#6366F1',
          violet: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-indigo':
          '0 0 0 1px rgba(99, 102, 241, 0.18), 0 8px 30px -8px rgba(99, 102, 241, 0.35)',
        'glow-emerald':
          '0 0 0 1px rgba(16, 185, 129, 0.22), 0 8px 30px -8px rgba(16, 185, 129, 0.35)',
      },
      backgroundImage: {
        'glow-radial':
          'radial-gradient(60% 60% at 50% 0%, rgba(99, 102, 241, 0.18) 0%, rgba(139, 92, 246, 0.08) 45%, transparent 75%)',
        'glow-grid':
          'linear-gradient(to right, rgba(30, 34, 53, 0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 34, 53, 0.6) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
