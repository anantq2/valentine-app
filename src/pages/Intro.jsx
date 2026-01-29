import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'

const Intro = () => {
    const navigate = useNavigate()
    const [hovered, setHovered] = useState(false)

    const buttonSpring = useSpring({
        transform: hovered ? 'scale(1.1) rotate(2deg)' : 'scale(1) rotate(0deg)',
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 text-6xl opacity-20 animate-spin-slow">✨</div>
            <div className="absolute top-20 right-20 text-6xl opacity-20 animate-spin-slow" style={{ animationDelay: '5s' }}>💫</div>
            <div className="absolute bottom-20 left-20 text-6xl opacity-20 animate-spin-slow" style={{ animationDelay: '10s' }}>⭐</div>
            <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-spin-slow" style={{ animationDelay: '15s' }}>✨</div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center max-w-4xl mx-auto px-6 relative z-10"
            >
                {/* Main rose animation */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 50 }}
                    className="text-9xl mb-8 animate-float"
                >
                    🌹
                </motion.div>

                {/* Title - Crystal White */}
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-7xl md:text-9xl font-dancing font-bold mb-6"
                    style={{
                        color: '#FFFFFF',
                    }}
                >
                    Happy Rose Day
                </motion.h1>

                {/* Gold divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="gold-divider w-64 mx-auto mb-8"
                />

                {/* Subtitle - white serif */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="text-3xl md:text-4xl font-cormorant mb-4"
                    style={{ color: '#FFFFFF' }}
                >
                    For Someone Special
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 }}
                    className="mb-6 inline-block relative"
                >
                    <div className="absolute inset-0 bg-rose-900/40 blur-xl rounded-full"></div>
                    <div className="relative px-8 py-3 rounded-full border border-gold/50 bg-black/20 backdrop-blur-sm">
                        <p className="text-lg md:text-xl font-cormorant font-light text-rose-100 flex items-center gap-2">
                            <span>🎵</span>
                            for a dedicated song "for you" click top right corner
                            <span>🎵</span>
                        </p>
                    </div>
                </motion.div>

                {/* Dark red button with gold border */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, type: 'spring' }}
                >
                    <animated.button
                        style={{
                            ...buttonSpring,
                            background: 'linear-gradient(135deg, #660000, #8B0000)',
                            border: '3px solid #FFD700',
                            color: '#FFFFFF',
                            boxShadow: hovered
                                ? '0 0 30px rgba(255, 215, 0, 0.8), 0 20px 60px rgba(255, 105, 180, 0.4)'
                                : '0 0 20px rgba(255, 215, 0, 0.5), 0 10px 30px rgba(255, 105, 180, 0.3)',
                        }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => navigate('/pick-rose')}
                        className="px-12 py-6 rounded-full text-2xl md:text-3xl font-cormorant font-semibold"
                    >
                        Beautiful rose is waiting for you 🏹
                    </animated.button>
                </motion.div>

                {/* Floating hearts */}
                <div className="flex gap-6 justify-center mt-12">
                    {[0, 0.2, 0.4, 0.6].map((delay, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 3, delay }}
                            className="text-4xl"
                        >
                            {['❤️', '💛', '🤍', '💖'][i]}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Ornate corner decorations - gold */}
            <div className="absolute top-0 left-0 w-40 h-40 border-t-4 border-l-4 border-rose-gold-600 opacity-30 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-40 h-40 border-t-4 border-r-4 border-rose-gold-600 opacity-30 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 border-b-4 border-l-4 border-rose-gold-600 opacity-30 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 border-b-4 border-r-4 border-rose-gold-600 opacity-30 rounded-br-3xl" />
        </motion.div>
    )
}

export default Intro
