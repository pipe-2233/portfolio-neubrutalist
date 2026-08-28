/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0E14',         // fondo principal (azul-noche profundo)
          surface: '#11151C',    // cards / secciones secundarias
          'surface-hover': '#1A1F28',
          border: '#1E2530',     // bordes sutiles entre cards
          'border-strong': '#2A3441',
          text: '#E6EDF3',       // texto principal
          muted: '#8B949E',      // texto secundario
          dim: '#5C6773',        // texto muy tenue (placeholders, captions)
        },
        accent: {
          cyan: '#00D4FF',       // primary CTA, IoT, links
          'cyan-dim': '#0099BB',
          lime: '#A1FF4F',       // tech highlights, código
          'lime-dim': '#7FCC3D',
          warning: '#FF6B35',    // hover/error sutil, energía
          success: '#22C55E',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-md': ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'section': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      boxShadow: {
        'glow-cyan': '0 0 24px rgba(0, 212, 255, 0.15)',
        'glow-cyan-lg': '0 0 48px rgba(0, 212, 255, 0.25)',
        'glow-lime': '0 0 20px rgba(161, 255, 79, 0.15)',
        'card': '0 1px 0 0 rgba(255, 255, 255, 0.02) inset, 0 0 0 1px rgba(255, 255, 255, 0.04)',
        'card-hover': '0 0 0 1px rgba(0, 212, 255, 0.35), 0 8px 32px -8px rgba(0, 212, 255, 0.25)',
      },
      backgroundImage: {
        'grid-dark': "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        'radial-cyan': 'radial-gradient(ellipse at top, rgba(0,212,255,0.08), transparent 60%)',
        'radial-lime': 'radial-gradient(ellipse at bottom, rgba(161,255,79,0.06), transparent 60%)',
      },
      backgroundSize: {
        'grid': '32px 32px',
      },
      animation: {
        'pulse-cyan': 'pulse-cyan 2.5s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out',
        'blink': 'blink 1.2s steps(2) infinite',
        'scanline': 'scanline 6s linear infinite',
      },
      keyframes: {
        'pulse-cyan': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 212, 255, 0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(0, 212, 255, 0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
