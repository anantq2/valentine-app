import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'

const PickRose = () => {
    const navigate = useNavigate()
    const [selectedRose, setSelectedRose] = useState(null)

    const roses = [
        {
            color: 'red',
            image: '/image (13).png',
            title: 'Red Rose',
            meaning: 'Deep Love & Passion',
            gradient: 'from-rose-red-600 to-rose-red-800',
            glow: '0 0 40px rgba(220, 20, 60, 0.6)',
        },
        {
            color: 'pink',
            image: '/image (14).png',
            title: 'Pink Rose',
            meaning: 'Sweetness & Admiration',
            gradient: 'from-pink-400 to-pink-600',
            glow: '0 0 40px rgba(255, 182, 193, 0.6)',
        },
        {
            color: 'yellow',
            image: '/image (15).png',
            title: 'Yellow Rose',
            meaning: 'Friendship & Joy',
            gradient: 'from-rose-gold-400 to-rose-gold-600',
            glow: '0 0 40px rgba(255, 215, 0, 0.6)',
        },
        {
            color: 'white',
            image: '/image (12).png',
            title: 'White Rose',
            meaning: 'Purity & Innocence',
            gradient: 'from-gray-100 to-gray-300',
            glow: '0 0 40px rgba(255, 255, 255, 0.6)',
        },
    ]

    const RoseCard = ({ rose, index }) => {
        const [isHovered, setIsHovered] = useState(false)

        const cardSpring = useSpring({
            transform: isHovered
                ? 'scale(1.15) translateY(-20px) rotate(5deg)'
                : 'scale(1) translateY(0px) rotate(0deg)',
            boxShadow: isHovered ? rose.glow : '0 10px 30px rgba(0,0,0,0.5)',
        })

        const handleClick = () => {
            setSelectedRose(rose.color)
            setTimeout(() => {
                navigate('/photo-message', { state: { selectedRose: rose } })
            },)
        }

        return (
            <motion.div
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
            >
                <animated.div
                    style={cardSpring}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleClick}
                    className={`premium-card p-8 rounded-3xl cursor-pointer relative overflow-hidden ${selectedRose === rose.color ? 'ring-4 ring-rose-gold-400' : ''
                        }`}
                >
                    {/* Rose image */}
                    <div className="mb-4 w-full h-48 flex items-center justify-center overflow-hidden rounded-2xl">
                        <img
                            src={rose.image}
                            alt={rose.title}
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110"
                            style={{
                                filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))'
                            }}
                        />
                    </div>

                    {/* Title */}
                    <h3 className={`text-3xl font-playfair font-bold mb-2 bg-gradient-to-r ${rose.gradient} bg-clip-text text-transparent`}>
                        {rose.title}
                    </h3>

                    {/* Meaning */}
                    <p className="text-lg font-cormorant" style={{ color: '#E0E0E0' }}>
                        {rose.meaning}
                    </p>

                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${rose.gradient} opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-3xl`} />

                    {/* Selection indicator */}
                    {selectedRose === rose.color && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 right-4 bg-rose-gold-400 rounded-full p-2"
                        >
                            <span className="text-2xl">✓</span>
                        </motion.div>
                    )}
                </animated.div>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center py-16 px-6"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-6xl mx-auto relative z-10"
            >
                {/* Title */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-6xl md:text-8xl font-dancing font-bold mb-6"
                        style={{
                            background: 'linear-gradient(135deg, #FFFFFF, #FFB6C1, #FF6B6B)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.4))',
                        }}
                    >
                        Pick Your Rose
                    </h1>

                    <div className="gold-divider w-48 mx-auto mb-6" />

                    <p className="text-2xl font-cormorant" style={{ color: '#F0F0F0' }}>
                        chal mote ek gulab utha le....
                    </p>
                </motion.div>

                {/* Rose Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {roses.map((rose, index) => (
                        <RoseCard key={rose.color} rose={rose} index={index} />
                    ))}
                </div>

                {/* Instructions */}

            </motion.div>
        </motion.div>
    )
}

export default PickRose
