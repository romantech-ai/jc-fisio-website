'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { siteConfig, services } from '@/lib/config'

// ================================================
// HERO CINEMATOGRAFICO - JC FISIO
// Layout asimetrico, tipografia editorial, motion avanzado
// Paleta: Verde lima corporativo
// ================================================

// Animated counter con IntersectionObserver y easing
function AnimatedCounter({
  end,
  suffix = '',
  duration = 2500,
  delay = 0
}: {
  end: number
  suffix?: string
  duration?: number
  delay?: number
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now() + delay
          const animate = () => {
            const now = Date.now()
            if (now < startTime) {
              requestAnimationFrame(animate)
              return
            }
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Easing: easeOutExpo
            const eased = 1 - Math.pow(2, -10 * progress)
            setCount(Math.floor(eased * end))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, delay, hasAnimated])

  return (
    <span ref={ref} className="tabular-nums font-display">
      {count}{suffix}
    </span>
  )
}

// Magnetic button effect
function MagneticButton({ children, className, href }: {
  children: React.ReactNode
  className?: string
  href: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15
    setPosition({ x, y })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Smooth parallax transforms
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const imageY = useTransform(smoothProgress, [0, 1], [0, 150])
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.1])
  const contentY = useTransform(smoothProgress, [0, 1], [0, 80])
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5], [0.75, 0.9])

  // Text reveal animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -40
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  // Servicios destacados para la card
  const highlightedServices = [
    { icon: '01', name: 'Fisioterapia', desc: 'Tratamientos personalizados' },
    { icon: '02', name: 'Nutricion', desc: 'Planes adaptados' },
    { icon: '03', name: 'Pilates', desc: 'Individual y grupal' },
    { icon: '04', name: 'Presoterapia', desc: 'Mejora tu circulacion' },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] overflow-hidden bg-primary-950"
    >
      {/* Background Image con Parallax */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 origin-center"
        >
          <Image
            src="/images/hombre-tratando.webp"
            alt="Fisioterapeuta tratando a paciente en Clinica JC Fisio"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Overlay cinematografico multi-capa - Verde lima */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/85 to-primary-800/70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-primary-950/50" />

        {/* Noise texture sutil */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-primary-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-400/5 blur-3xl"
        />
      </div>

      {/* Contenido Principal - Layout Asimetrico */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 min-h-[100svh] flex items-center"
      >
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Columna izquierda - Contenido principal */}
            <div className="lg:col-span-7 xl:col-span-6 pt-20 lg:pt-0">
              {/* Badge animado */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <span className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                  </span>
                  <span className="text-primary-200 font-body text-sm tracking-wide">
                    Fisioterapia en Tomelloso
                  </span>
                </span>
              </motion.div>

              {/* Titulo con reveal animado */}
              <div className="perspective-1000 mb-8">
                <motion.h1
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-white leading-[0.9] tracking-tight"
                >
                  <motion.span variants={wordVariants} className="block">
                    Recupera tu
                  </motion.span>
                  <motion.span
                    variants={wordVariants}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400"
                  >
                    movilidad
                  </motion.span>
                  <motion.span variants={wordVariants} className="block text-primary-200">
                    y bienestar
                  </motion.span>
                </motion.h1>
              </div>

              {/* Descripcion */}
              <motion.p
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.5}
                className="text-lg lg:text-xl text-primary-200 mb-10 leading-relaxed max-w-xl font-body"
              >
                En Clinica JC Fisio te ayudamos con tratamientos personalizados de fisioterapia,
                nutricion, pilates y mas. Un equipo de <strong className="text-white">8 profesionales</strong> a tu servicio.
              </motion.p>

              {/* CTAs con efecto magnetico */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.6}
                className="flex flex-wrap gap-4 mb-12"
              >
                <MagneticButton
                  href="#contacto"
                  className="group relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-2xl font-body font-semibold text-lg shadow-elevation-4 shadow-primary-500/30 hover:shadow-primary-500/50 transition-shadow overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Reservar cita
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </MagneticButton>

                <MagneticButton
                  href={`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  className="group flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-2xl font-body font-semibold text-lg hover:bg-white/10 hover:border-primary-500/50 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </MagneticButton>
              </motion.div>

              {/* Stats con estilo editorial */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.7}
                className="flex flex-wrap gap-x-10 gap-y-6"
              >
                <div className="group">
                  <p className="text-4xl lg:text-5xl font-display text-white mb-1">
                    <AnimatedCounter end={500} suffix="+" duration={2000} delay={0} />
                  </p>
                  <p className="text-primary-300 font-body text-sm tracking-wide">
                    Pacientes atendidos
                  </p>
                </div>
                <div className="group">
                  <p className="text-4xl lg:text-5xl font-display text-white mb-1">
                    <AnimatedCounter end={8} suffix="" duration={1500} delay={200} />
                  </p>
                  <p className="text-primary-300 font-body text-sm tracking-wide">
                    Profesionales
                  </p>
                </div>
                <div className="group">
                  <p className="text-4xl lg:text-5xl font-display text-white mb-1 flex items-center gap-2">
                    <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="tabular-nums">5.0</span>
                  </p>
                  <p className="text-primary-300 font-body text-sm tracking-wide">
                    Google Reviews
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Columna derecha - Card flotante (solo desktop) */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative ml-auto max-w-md"
              >
                {/* Card de servicios destacados */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-dramatic">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-3xl" />

                  <div className="relative">
                    <h3 className="font-display text-xl text-white mb-6">
                      Nuestros Servicios
                    </h3>

                    <div className="space-y-4">
                      {highlightedServices.map((service, i) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                          className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                        >
                          <span className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center text-primary-300 font-display text-sm">
                            {service.icon}
                          </span>
                          <div>
                            <p className="text-white font-body font-medium group-hover:text-primary-300 transition-colors">
                              {service.name}
                            </p>
                            <p className="text-primary-300 text-sm font-body">
                              {service.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <a
                        href="#servicios"
                        className="inline-flex items-center gap-2 text-primary-300 font-body text-sm hover:text-primary-200 transition-colors"
                      >
                        Ver todos los servicios
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Elemento decorativo */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator elegante */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-primary-300 text-xs font-body uppercase tracking-[0.2em]">
            Descubre mas
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary-400 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Linea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
    </section>
  )
}
