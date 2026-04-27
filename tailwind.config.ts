import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        panel: '#0b0b0f',
        accent: '#F97315'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(249, 115, 21, 0.35), 0 0 40px rgba(249, 115, 21, 0.2)'
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
