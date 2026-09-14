/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Surfaces & Canvas
        canvas: '#F4F6F8',
        card: '#FFFFFF',
        'card-border': '#D5DCE2',
        
        // Navigation Dark Shell
        nav: {
          DEFAULT: '#0B2239',
          dark: '#0B2239',
          secondary: '#E5E9ED',
          active: '#A52A2A',
        },

        // Text Colors
        wcag: {
          primary: '#1F2933',
          heading: '#0B2239',
          secondary: '#4B5563',
          white: '#FFFFFF',
          disabled: '#4B5563',
        },

        // Buttons
        cta: {
          DEFAULT: '#1F4E6D',
          hover: '#12304A',
          important: '#A52A2A',
          'important-hover': '#7F1D1D',
          border: '#12304A',
        },

        // Status Pairings (Color + Icon + Text)
        status: {
          'avail-bg': '#E8F3EE',
          'avail-text': '#17633F',
          'avail-stroke': '#2E7D5B',
          
          'plan-bg': '#FFF4D6',
          'plan-text': '#765000',
          'plan-stroke': '#C58A22',
          
          'active-bg': '#FBEAEA',
          'active-text': '#7F1D1D',
          'active-stroke': '#A52A2A',
          
          'critical-bg': '#F8E1E1',
          'critical-text': '#7A1717',
          'critical-stroke': '#B23A3A',

          'info-bg': '#E8EFF4',
          'info-text': '#12304A',
          'info-stroke': '#1F4E6D',
        },

        // Chart Approved 6 Colors
        chart: {
          1: '#0B2239',
          2: '#1F4E6D',
          3: '#3E647D',
          4: '#A52A2A',
          5: '#2E7D5B',
          6: '#765000',
        },

        // Data Table
        table: {
          header: '#E5E9ED',
          border: '#D5DCE2',
          selected: '#E8EFF4',
          hover: '#F4F6F8',
        },

        // Form Inputs
        input: {
          border: '#6B7280',
          focus: '#12304A',
          error: '#A52A2A',
          'error-text': '#7A1717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

