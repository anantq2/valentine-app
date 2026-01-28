import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Intro from './pages/Intro'
import PickRose from './pages/PickRose'
import PhotoMessage from './pages/PhotoMessage'
import FinalBouquet from './pages/FinalBouquet'
import PetalRain from './components/PetalRain'
import MusicPlayer from './components/MusicPlayer'

function App() {
    return (
        <div className="relative min-h-screen bg-luxury">
            {/* Falling petals background */}
            <PetalRain />

            {/* Background Music */}
            <MusicPlayer />

            {/* Main content with page transitions */}
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/pick-rose" element={<PickRose />} />
                    <Route path="/photo-message" element={<PhotoMessage />} />
                    <Route path="/bouquet" element={<FinalBouquet />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App
