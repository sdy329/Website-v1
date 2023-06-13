import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY)
        }

        window.addEventListener('active', updatePosition)

        updatePosition()

        return () => window.removeEventListener('active', updatePosition)
    }, [])

    return scrollPosition
}