import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

const FinalBouquet = () => {
    const { width, height } = useWindowSize()
    const [showConfetti, setShowConfetti] = useState(true)
    const [showMessage, setShowMessage] = useState(false)
    const [floatingHearts, setFloatingHearts] = useState([])

    // Mouse tracking for 3D tilt effect
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])

    useEffect(() => {
        // Scroll to top on mount to fix auto-scroll issue
        window.scrollTo(0, 0)

        // Stop confetti after 5 seconds
        const confettiTimer = setTimeout(() => setShowConfetti(false), 5000)

        // Show message after bouquet appears
        const messageTimer = setTimeout(() => setShowMessage(true), 2500)

        // Create floating hearts - reduced for performance
        const hearts = Array.from({ length: 5 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 5 + Math.random() * 5,
            size: 20 + Math.random() * 30
        }))
        setFloatingHearts(hearts)

        return () => {
            clearTimeout(confettiTimer)
            clearTimeout(messageTimer)
        }
    }, [])

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set(e.clientX - centerX)
        mouseY.set(e.clientY - centerY)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center py-[10px] px-4 relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Grand confetti */}
            {showConfetti && (
                <Confetti
                    width={width}
                    height={height}
                    colors={['#DC143C', '#FFD700', '#FFB6C1', '#FFFFFF', '#FF69B4', '#FFA500']}
                    numberOfPieces={100}
                    gravity={0.25}
                    recycle={false}
                />
            )}

            {/* Scroll indicator - top left corner */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-56 md:top-32 left-4 md:left-6 z-40 flex items-center gap-2"
            >
                <p className="text-xs md:text-sm font-cormorant text-rose-200 italic">
                    click on bouquet to see lovely message
                </p>
                <motion.span
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="text-sm"
                >
                    👇
                </motion.span>
            </motion.div>

            {/* Floating hearts background */}
            {floatingHearts.map(heart => (
                <motion.div
                    key={heart.id}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${heart.left}%`,
                        bottom: -50,
                        fontSize: heart.size,
                    }}
                    animate={{
                        y: [-50, -height - 100],
                        x: [0, Math.sin(heart.id) * 100],
                        rotate: [0, 360],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    💕
                </motion.div>
            ))}

            {/* Sparkle particles */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-pink-300"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            delay: Math.random() * 3,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 3
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10">
                {/* Title */}
                <motion.h1
                    initial={{ y: -100, opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-dancing font-bold mb-2 text-center"
                    style={{
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFB6C1 20%, #FF69B4 40%, #DC143C 60%, #FFB6C1 80%, #FFD700 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '300% 300%',
                        animation: 'shimmer 4s ease-in-out infinite',
                        filter: 'drop-shadow(0 0 40px rgba(255, 107, 107, 0.6))',
                        paddingBottom: '0.5rem',
                        lineHeight: '1.3'
                    }}
                >
                    For My Beautiful Love
                </motion.h1>

                {/* 3D Bouquet Container */}
                <div className="perspective-container mb-8" style={{ marginTop: '-3rem' }}>
                    <motion.div
                        className="bouquet-3d-wrapper"
                        style={{
                            rotateX,
                            rotateY,
                        }}
                        initial={{ scale: 0.3, opacity: 0, rotateZ: -180, z: -500 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            rotateZ: 0,
                            z: 0,
                        }}
                        transition={{
                            duration: 2.5,
                            type: "spring",
                            stiffness: 50,
                            damping: 15,
                            delay: 0.5
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                    >
                        {/* Subtle glow behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-rose-500/20 to-red-500/20 blur-3xl"
                            style={{ transform: 'translateZ(-30px)' }}
                        />

                        {/* Main bouquet image - clickable to scroll */}
                        <motion.div
                            className="relative cursor-pointer"
                            onClick={() => {
                                document.getElementById('message-section')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            <motion.img
                                src="/bouquet-transparent.png"
                                alt="Beautiful bouquet for you"
                                className="w-full h-auto mx-auto block"
                                style={{ maxWidth: '280px', filter: 'drop-shadow(0 20px 40px rgba(220, 20, 60, 0.3))' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Romantic Message */}
                <motion.div
                    id="message-section"
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={showMessage ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 80
                    }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Glass card with message */}
                    <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden mb-8">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-rose-500/10 to-red-500/10 animate-gradient" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={showMessage ? { opacity: 1 } : {}}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                <p className="text-2xl md:text-4xl lg:text-5xl font-cormorant leading-relaxed mb-6 text-center"
                                    style={{ color: '#FFFFFF', fontWeight: 500 }}>
                                    "Every petal in this bouquet represents a reason why I love you..."
                                </p>
                            </motion.div>

                            <motion.div
                                className="gold-divider w-64 mx-auto my-8"
                                initial={{ scaleX: 0 }}
                                animate={showMessage ? { scaleX: 1 } : {}}
                                transition={{ delay: 1, duration: 0.8 }}
                            />

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={showMessage ? { opacity: 1 } : {}}
                                transition={{ delay: 1.5, duration: 1 }}
                            >
                                <p className="text-xl md:text-2xl lg:text-3xl font-cormorant leading-relaxed text-center mb-6"
                                    style={{ color: '#F5F5F5' }}>
                                    Your smile lights up my world like the sun,<br />
                                    Your laughter is my favorite melody,<br />
                                    Your presence makes every moment magical,<br />
                                    And your love... it's my everything. 💖
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={showMessage ? { opacity: 1 } : {}}
                                transition={{ delay: 2, duration: 1 }}
                            >
                                <p className="text-xl md:text-2xl font-cormorant text-center"
                                    style={{ color: '#FFD1DC', fontStyle: 'italic' }}>
                                    Just like this bouquet, my love for you grows more beautiful each day.
                                </p>
                            </motion.div>
                        </div>

                        {/* Corner decorations */}
                        <div className="absolute top-4 left-4 text-4xl opacity-30">🌹</div>
                        <div className="absolute top-4 right-4 text-4xl opacity-30">🌹</div>
                        <div className="absolute bottom-4 left-4 text-4xl opacity-30">💕</div>
                        <div className="absolute bottom-4 right-4 text-4xl opacity-30">💕</div>
                    </div>

                    {/* From signature */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={showMessage ? { opacity: 1 } : {}}
                        transition={{ delay: 2.5, duration: 1 }}
                        className="text-center"
                    >
                        <p className="text-3xl md:text-4xl font-dancing mb-6"
                            style={{
                                color: '#FFD700',
                                filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))'
                            }}>
                            Forever Yours,
                        </p>
                        <motion.div
                            className="flex gap-3 justify-center text-3xl mb-6"
                            animate={{
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        >
                            {['❤️', '💕', '💖', '💗', '💝'].map((heart, i) => (
                                <motion.span
                                    key={i}
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        delay: i * 0.1,
                                        repeat: Infinity,
                                        repeatDelay: 2
                                    }}
                                >
                                    {heart}
                                </motion.span>
                            ))}
                        </motion.div>
                        <p className="text-2xl font-poppins font-light"
                            style={{ color: '#FFEDB3' }}>
                            Happy Rose Day🌹✨
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Ornate corner decorations */}
            <div className="absolute top-16 left-10 text-8xl opacity-10 animate-spin-slow">🌹</div>
            <div className="absolute top-16 right-10 text-8xl opacity-10 animate-spin-slow" style={{ animationDirection: 'reverse' }}>💐</div>
            <div className="absolute bottom-10 left-10 text-8xl opacity-10 animate-spin-slow" style={{ animationDelay: '5s' }}>💕</div>
            <div className="absolute bottom-10 right-10 text-8xl opacity-10 animate-spin-slow" style={{ animationDelay: '7s', animationDirection: 'reverse' }}>🌺</div>
        </motion.div>
    )
}

export default FinalBouquet
