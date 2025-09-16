import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				// Core animations
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				
				// Entrance animations
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'scale-in-bounce': {
					'0%': { opacity: '0', transform: 'scale(0.3)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'zoom-in': {
					'0%': { opacity: '0', transform: 'scale(0.5)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				
				// Portfolio-specific animations
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(100px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-down': {
					'0%': { opacity: '0', transform: 'translateY(-100px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-left': {
					'0%': { opacity: '0', transform: 'translateX(100px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-right': {
					'0%': { opacity: '0', transform: 'translateX(-100px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				
				// Interactive animations
				'hover-lift': {
					'0%': { transform: 'translateY(0) scale(1)' },
					'100%': { transform: 'translateY(-5px) scale(1.02)' }
				},
				'hover-glow': {
					'0%': { boxShadow: '0 0 0 rgba(59, 130, 246, 0)' },
					'100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }
				},
				'card-hover': {
					'0%': { transform: 'translateY(0) scale(1)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
					'100%': { transform: 'translateY(-8px) scale(1.03)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }
				},
				
				// Loading animations
				'skeleton': {
					'0%': { backgroundColor: 'hsl(var(--muted))' },
					'50%': { backgroundColor: 'hsl(var(--muted) / 0.8)' },
					'100%': { backgroundColor: 'hsl(var(--muted))' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				
				// Text animations
				'type-writer': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'text-reveal': {
					'0%': { opacity: '0', transform: 'translateY(20px) rotateX(-90deg)' },
					'100%': { opacity: '1', transform: 'translateY(0) rotateX(0deg)' }
				},
				
				// Special effects
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.1)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.3)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				
				// Page transitions
				'page-enter': {
					'0%': { opacity: '0', transform: 'translateX(100px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateX(0) scale(1)' }
				},
				'page-exit': {
					'0%': { opacity: '1', transform: 'translateX(0) scale(1)' },
					'100%': { opacity: '0', transform: 'translateX(-100px) scale(0.95)' }
				}
			},
			animation: {
				// Core animations
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				// Entrance animations with staggered delays for portfolio items
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-delay-100': 'fade-in 0.6s ease-out 0.1s both',
				'fade-in-delay-200': 'fade-in 0.6s ease-out 0.2s both',
				'fade-in-delay-300': 'fade-in 0.6s ease-out 0.3s both',
				'fade-in-delay-500': 'fade-in 0.6s ease-out 0.5s both',
				
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in-up-delay-100': 'fade-in-up 0.8s ease-out 0.1s both',
				'fade-in-up-delay-200': 'fade-in-up 0.8s ease-out 0.2s both',
				'fade-in-up-delay-300': 'fade-in-up 0.8s ease-out 0.3s both',
				
				'fade-in-down': 'fade-in-down 0.6s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				
				'scale-in': 'scale-in 0.4s ease-out',
				'scale-in-bounce': 'scale-in-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'zoom-in': 'zoom-in 0.5s ease-out',
				
				// Portfolio-specific animations
				'slide-up': 'slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-up-delay-100': 'slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s both',
				'slide-up-delay-200': 'slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both',
				'slide-up-delay-300': 'slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both',
				
				'slide-down': 'slide-down 0.7s ease-out',
				'slide-left': 'slide-left 0.7s ease-out',
				'slide-right': 'slide-right 0.7s ease-out',
				
				// Interactive animations for hover states
				'hover-lift': 'hover-lift 0.3s ease-out forwards',
				'hover-glow': 'hover-glow 0.3s ease-out forwards',
				'card-hover': 'card-hover 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				
				// Loading states
				'skeleton': 'skeleton 2s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'shimmer': 'shimmer 2s linear infinite',
				
				// Text animations
				'type-writer': 'type-writer 3s steps(40, end)',
				'text-reveal': 'text-reveal 0.6s cubic-bezier(0.77, 0, 0.175, 1)',
				'text-reveal-delay-100': 'text-reveal 0.6s cubic-bezier(0.77, 0, 0.175, 1) 0.1s both',
				'text-reveal-delay-200': 'text-reveal 0.6s cubic-bezier(0.77, 0, 0.175, 1) 0.2s both',
				
				// Special effects
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				
				// Page transitions
				'page-enter': 'page-enter 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
				'page-exit': 'page-exit 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				
				// Combined animations for sophisticated effects
				'hero-enter': 'fade-in-up 1s ease-out, scale-in 0.8s ease-out',
				'card-appear': 'fade-in 0.6s ease-out, slide-up 0.8s ease-out',
				'nav-slide': 'fade-in-down 0.4s ease-out, slide-down 0.5s ease-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
