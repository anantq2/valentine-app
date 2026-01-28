import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const audioRef = useRef(null)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const attemptPlay = async () => {
            try {
                audio.volume = 0.5
                await audio.play()
                setIsPlaying(true)
            } catch (error) {
                console.log("Autoplay blocked, waiting for interaction")
                setIsPlaying(false)
            }
        }

        // Try initial autoplay
        attemptPlay()

        // If blocked, play on first interaction
        const handleInteraction = () => {
            if (audio.paused) {
                attemptPlay()
            }
            // Cleanup listeners after first attempt
            window.removeEventListener('click', handleInteraction)
            window.removeEventListener('keydown', handleInteraction)
        }

        window.addEventListener('click', handleInteraction)
        window.addEventListener('keydown', handleInteraction)

        return () => {
            window.removeEventListener('click', handleInteraction)
            window.removeEventListener('keydown', handleInteraction)
        }
    }, [])

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-4 right-4 z-50"
        >
            <audio
                ref={audioRef}
                src="/music.mp3"
                loop
                preload="auto"
            />

            <button
                onClick={togglePlay}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full hover:bg-white/20 transition-all shadow-lg group relative overflow-hidden"
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {/* Visualizer bars or Icon */}
                <div className="flex items-center justify-center gap-1 w-6 h-6">
                    {isPlaying ? (
                        <>
                            <motion.div
                                animate={{ height: ['20%', '100%', '20%'] }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                className="w-1 bg-rose-400 rounded-full"
                            />
                            <motion.div
                                animate={{ height: ['40%', '80%', '40%'] }}
                                transition={{ duration: 1.1, repeat: Infinity, ease: "linear", delay: 0.1 }}
                                className="w-1 bg-pink-400 rounded-full"
                            />
                            <motion.div
                                animate={{ height: ['20%', '100%', '20%'] }}
                                transition={{ duration: 0.9, repeat: Infinity, ease: "linear", delay: 0.2 }}
                                className="w-1 bg-red-400 rounded-full"
                            />
                        </>
                    ) : (
                        <span className="text-xl">🎵</span>
                    )}
                </div>

                {/* Glow ring */}
                {isPlaying && (
                    <div className="absolute inset-0 rounded-full border border-pink-500/50 animate-ping opacity-20"></div>
                )}
            </button>
        </motion.div>
    )
}

export default MusicPlayer
