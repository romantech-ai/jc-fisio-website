'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

// ================================================
// useScrollProgress - Progreso del scroll (0-1)
// ================================================
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      setProgress(scrollHeight > 0 ? scrolled / scrollHeight : 0)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return progress
}

// ================================================
// useInView - Detecta cuando un elemento entra en viewport
// ================================================
export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true)
          setHasAnimated(true)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, hasAnimated])

  return { ref, isInView }
}

// ================================================
// useCounter - Contador animado con easing
// ================================================
export function useCounter(end: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  const startAnimation = useCallback(() => {
    if (hasStarted) return
    setHasStarted(true)

    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Easing: easeOutExpo
      const eased = 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  useEffect(() => {
    if (!startOnView) {
      startAnimation()
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [startOnView, startAnimation])

  return { count, ref, startAnimation }
}

// ================================================
// useParallax - Efecto parallax basado en scroll
// ================================================
export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const updateOffset = () => {
      const rect = element.getBoundingClientRect()
      const scrolled = window.innerHeight - rect.top
      const parallaxOffset = scrolled * speed
      setOffset(parallaxOffset)
    }

    window.addEventListener('scroll', updateOffset, { passive: true })
    updateOffset()

    return () => window.removeEventListener('scroll', updateOffset)
  }, [speed])

  return { ref, offset }
}

// ================================================
// useMousePosition - Posicion del mouse normalizada (-0.5 a 0.5)
// ================================================
export function useMousePosition() {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setPosition({ x, y })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  return { ref, position, handleMouseMove, handleMouseLeave }
}

// ================================================
// useMediaQuery - Detecta media queries
// ================================================
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

// ================================================
// useLocalStorage - Persistencia en localStorage
// ================================================
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }, [key, storedValue])

  return [storedValue, setValue] as const
}
