module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a237e", // indigo-900
          50: "#e8eaf6", // indigo-50
          100: "#c5cae9", // indigo-100
          200: "#9fa8da", // indigo-200
          300: "#7986cb", // indigo-300
          400: "#5c6bc0", // indigo-400
          500: "#3f51b5", // indigo-500
          600: "#3949ab", // indigo-600
          700: "#303f9f", // indigo-700
          800: "#283593", // indigo-800
          900: "#1a237e", // indigo-900
        },
        secondary: {
          DEFAULT: "#ffc107", // amber-500
          50: "#fffbf0", // amber-50
          100: "#fef3c7", // amber-100
          200: "#fde68a", // amber-200
          300: "#fcd34d", // amber-300
          400: "#fbbf24", // amber-400
          500: "#ffc107", // amber-500
          600: "#d97706", // amber-600
          700: "#b45309", // amber-700
          800: "#92400e", // amber-800
          900: "#78350f", // amber-900
        },
        accent: {
          DEFAULT: "#4caf50", // green-500
          50: "#f1f8e9", // green-50
          100: "#dcedc8", // green-100
          200: "#c5e1a5", // green-200
          300: "#aed581", // green-300
          400: "#9ccc65", // green-400
          500: "#4caf50", // green-500
          600: "#43a047", // green-600
          700: "#388e3c", // green-700
          800: "#2e7d32", // green-800
          900: "#1b5e20", // green-900
        },
        background: "#fafafa", // gray-50
        surface: "#ffffff", // white
        text: {
          primary: "#212121", // gray-800
          secondary: "#757575", // gray-500
        },
        success: "#4caf50", // green-500
        warning: "#ff9800", // orange-500
        error: "#f44336", // red-500
        border: {
          DEFAULT: "#e0e0e0", // gray-300
          light: "#f5f5f5", // gray-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['Space Mono', 'monospace'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      fontSize: {
        'display-1': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-2': ['3.5rem', { lineHeight: '1.1', fontWeight: '600' }],
        'display-3': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-large': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'luxe': '0 2px 8px rgba(26, 35, 126, 0.08)',
        'luxe-lg': '0 4px 16px rgba(26, 35, 126, 0.12)',
        'luxe-xl': '0 8px 32px rgba(26, 35, 126, 0.16)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}