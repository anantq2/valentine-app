/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'rose-red': {
                    50: '#FFF1F1',
                    100: '#FFE1E1',
                    200: '#FFC7C7',
                    300: '#FF9D9D',
                    400: '#FF6B6B',
                    500: '#DC143C',
                    600: '#B22222',
                    700: '#8B0000',
                    800: '#660000',
                    900: '#400000',
                    950: '#2d0000',
                },
                'rose-gold': {
                    50: '#FFFEF5',
                    100: '#FFFAEB',
                    200: '#FFF4D1',
                    300: '#FFEDB3',
                    400: '#FFE680',
                    500: '#FFD700',
                    600: '#F5C700',
                    700: '#D4A900',
                    800: '#B38F00',
                    900: '#8A6D00',
                },
                'blood': {
                    50: '#1a0000',
                    100: '#2d0000',
                    200: '#400000',
                    300: '#520000',
                    400: '#660000',
                    500: '#800020',
                    600: '#8B0000',
                    700: '#A52A2A',
                    800: '#B22222',
                    900: '#DC143C',
                },
            },
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                cormorant: ['Cormorant Garamond', 'serif'],
                dancing: ['Dancing Script', 'cursive'],
                poppins: ['Poppins', 'sans-serif'],
            },
            animation: {
                'rose-bloom': 'roseBloom 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
                'petal-fall': 'petalFall 4s ease-in-out infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                roseBloom: {
                    '0%': { transform: 'scale(0) rotate(-180deg)', opacity: '0' },
                    '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
                },
                petalFall: {
                    '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
                },
                shimmer: {
                    '0%, 100%': { backgroundPosition: '200% 0' },
                    '50%': { backgroundPosition: '-200% 0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
                    '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(220, 20, 60, 0.4)' },
                },
            },
            backgroundImage: {
                'red-gold-gradient': 'linear-gradient(135deg, #8B0000 0%, #DC143C 25%, #FF4444 50%, #FFD700 100%)',
                'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent)',
            },
        },
    },
    plugins: [],
}
