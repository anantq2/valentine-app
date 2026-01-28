import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const PhotoMessage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const selectedRose = location.state?.selectedRose || { color: 'red', image: '/rose-red.png', title: 'Red Rose' }
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    // Long romantic message
    const fullMessage = `My Dearest Love,

Every moment with you feels like a beautiful dream that I never want to end. Your smile lights up my entire world, and your laughter is the sweetest melody I've ever heard.

From the first day we met, I knew there was something special about you. The way you care, the way you understand me without words, the way you make every ordinary moment feel extraordinary - it's all so magical.

You are my best friend, my partner, my everything. With you, I've found a love I didn't know existed. You've shown me what it means to truly love and be loved.

Thank you for being the most amazing person in my life. Thank you for your patience, your kindness, and your beautiful heart. I promise to always cherish you, support you, and love you with all that I am.

No matter what the future holds, I want you by my side. You are my forever, my always, my one and only.

Happy Rose Day, my love! 🌹

Forever yours,
With all my heart ❤️`

    // Typewriter effect
    useEffect(() => {
        if (currentIndex < fullMessage.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullMessage[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, 15) // Speed of typing (COMPLETE IN ~10 SECONDS)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, fullMessage])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center py-[10px] px-6"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-[750px] w-full mx-auto"
            >
                {/* Title */}
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-5xl font-playfair font-black text-center mb-4 pb-4"
                    style={{
                        background: 'linear-gradient(135deg, #FFFFFF, #FFB6C1, #FF6B6B)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.4))',
                        lineHeight: '1.4'
                    }}
                >
                    A Message For You 💖
                </motion.h1>

                {/* Main Content Container */}
                <div className="grid md:grid-cols-2 gap-5 items-stretch">
                    {/* Photo Section - Rectangular */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="premium-card p-3 rounded-3xl h-full flex flex-col justify-center"
                    >
                        <div className="relative aspect-[3/3.5] rounded-2xl overflow-hidden bg-gradient-to-br from-rose-red-900/20 to-rose-red-800/20 border-4 border-white/10">
                            {/* Placeholder for GF image - User will replace this */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-8xl mb-4">📸</div>
                                    <p className="text-2xl font-cormorant text-white/80">
                                        Replace with your photo
                                    </p>
                                    <p className="text-sm font-poppins text-white/60 mt-2">
                                        Paste image URL in code
                                    </p>
                                </div>
                            </div>

                            {/* Decorative frame corners */}
                            <div className="absolute top-2 left-2 w-12 h-12 border-t-4 border-l-4 border-white/40 rounded-tl-xl"></div>
                            <div className="absolute top-2 right-2 w-12 h-12 border-t-4 border-r-4 border-white/40 rounded-tr-xl"></div>
                            <div className="absolute bottom-2 left-2 w-12 h-12 border-b-4 border-l-4 border-white/40 rounded-bl-xl"></div>
                            <div className="absolute bottom-2 right-2 w-12 h-12 border-b-4 border-r-4 border-white/40 rounded-br-xl"></div>
                        </div>

                        {/* Photo caption */}
                        <p className="text-center text-2xl font-dancing mt-4" style={{ color: '#F0F0F0' }}>
                            The Love of My Life 💕
                        </p>
                    </motion.div>

                    {/* Message Section - Typewriter Effect */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="premium-card p-6 rounded-3xl h-full flex flex-col"
                    >
                        {/* Message scroll container - REMOVED FIXED HEIGHT, ADDED FLEX-GROW */}
                        <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
                            <p
                                className="text-lg md:text-xl font-cormorant leading-relaxed whitespace-pre-wrap text-justify"
                                style={{ color: '#FFFFFF' }}
                            >
                                {displayedText}
                                {currentIndex < fullMessage.length && (
                                    <span className="animate-pulse">|</span>
                                )}
                            </p>
                        </div>

                        {/* Progress indicator */}
                        {currentIndex < fullMessage.length && (
                            <div className="mt-4 flex-shrink-0">
                                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-pink-400 to-rose-500"
                                        initial={{ width: '0%' }}
                                        animate={{ width: `${(currentIndex / fullMessage.length) * 100}%` }}
                                    />
                                </div>
                                <p className="text-center text-sm font-poppins mt-2 pb-2" style={{ color: '#D0D0D0' }}>
                                    Writing your message... {Math.round((currentIndex / fullMessage.length) * 100)}%
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Navigation Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-center mt-12"
                >
                    <button
                        onClick={() => navigate('/bouquet')}
                        className="premium-card px-10 py-5 rounded-full text-xl font-playfair font-semibold hover:scale-105 transition-transform"
                        style={{ color: '#E0E0E0' }}
                    >
                        Continue to Final Surprise →
                    </button>
                </motion.div>
            </motion.div>

            {/* Custom scrollbar styles */}
            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #FFB6C1, #FF6B6B);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #FFC0CB, #DC143C);
        }
      `}</style>
        </motion.div>
    )
}

export default PhotoMessage
