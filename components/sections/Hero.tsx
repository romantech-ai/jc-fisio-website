'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: 'easeOut' })
    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v))
    return () => {
      animation.stop()
      unsubscribe()
    }
  }, [value, count, rounded])

  return <span>{suffix}{displayValue}</span>
}

export function Hero() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      {/* Content Side */}
      <div className="flex items-center px-6 lg:px-16 py-32 lg:py-24 order-2 lg:order-1">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-1 bg-primary-600 rounded-full" />
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">
              Fisioterapia en Tomelloso
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]"
          >
            Recupera tu
            <span className="block text-primary-600 mt-2">movilidad y bienestar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            En Clinica JC Fisio te ayudamos con tratamientos personalizados de fisioterapia,
            nutricion, pilates y mas. Un equipo de 8 profesionales a tu servicio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary-600/20 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30 transition-all"
            >
              Reservar Cita
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:744624198"
              className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-primary-600 hover:text-primary-600 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              744 62 41 98
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100"
          >
            <div>
              <p className="text-3xl font-bold text-gray-900">
                <AnimatedCounter value={500} suffix="+" />
              </p>
              <p className="text-sm text-gray-500">Pacientes</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">
                <AnimatedCounter value={8} />
              </p>
              <p className="text-sm text-gray-500">Profesionales</p>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <div className="flex items-center gap-1">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xl font-bold text-gray-900">5.0</span>
                </div>
                <p className="text-sm text-gray-500">Google</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[50vh] lg:min-h-screen order-1 lg:order-2"
      >
        <Image
          src="/images/hombre-tratando.webp"
          alt="Fisioterapeuta tratando a paciente en Clinica JC Fisio"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent lg:via-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden pointer-events-none" />

        {/* Badge on image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl hidden lg:block"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-gray-900">Clinica colaboradora</p>
              <p className="text-sm text-gray-500">Principales aseguradoras</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
