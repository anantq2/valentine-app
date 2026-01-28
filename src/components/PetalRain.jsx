import { useEffect } from 'react'

const PetalRain = () => {
    useEffect(() => {
        const createPetal = () => {
            const petal = document.createElement('div')
            petal.className = 'rose-petal animate-petal-fall'
            petal.innerHTML = '🌹'
            petal.style.left = Math.random() * 100 + 'vw'
            petal.style.animationDuration = (Math.random() * 3 + 4) + 's'
            petal.style.fontSize = (Math.random() * 15 + 15) + 'px'
            petal.style.opacity = Math.random() * 0.6 + 0.2
            document.body.appendChild(petal)

            setTimeout(() => {
                if (petal.parentNode) {
                    petal.remove()
                }
            }, 8000)
        }

        const interval = setInterval(createPetal, 1200)
        return () => clearInterval(interval)
    }, [])

    return null
}

export default PetalRain
