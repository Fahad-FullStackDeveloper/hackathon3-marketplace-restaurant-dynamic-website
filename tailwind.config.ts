import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			helvetica: [
  				'var(--font-helvetica)',
  				'sans-serif'
  			],
  			greatvibes: [
  				'var(--font-great-vibes)',
  				'cursive'
  			]
  		},
  		colors: {
  			brand: {
  				DEFAULT: '#FF9F0D',
  				light: '#FFC85A',
  				dark: '#CC7E09',
  				contrast: '#ffffff'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				light: '#1A7DCE',
  				dark: '#003C70',
  				contrast: '#ffffff',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			base: {
  				DEFAULT: '#0D0D0D',
  				light: '#f0f0f0',
  				dark: '#000000',
  				contrast: '#ffffff'
  			},
  			statecolors: {
  				info: '#2F80ED',
  				success: '#27AE60',
  				warning: '#E2B93B',
  				error: '#EB5757'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				light: '#C883F4',
  				dark: '#7807B8',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			neutral: {
  				light: '#F4F4F4',
  				dark: '#212121'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [],
} satisfies Config;
