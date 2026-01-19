'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />

      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
            >
              Tu bienestar es nuestra prioridad
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
            >
              Recupera tu{' '}
              <span className="text-primary-600 relative">
                bienestar
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-3 bg-primary-200/50 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              En Clinica JC Fisio te ayudamos a recuperarte con tratamientos personalizados de fisioterapia, nutricion, pilates y mas. Tu salud en las mejores manos en Tomelloso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-colors flex items-center gap-2"
              >
                Reservar Cita
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &rarr;
                </motion.span>
              </motion.a>

              <motion.a
                href="#servicios"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                Nuestros Servicios
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">+500</p>
                  <p className="text-xs text-gray-500">pacientes satisfechos</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400 text-xl">&#9733;</span>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">5.0</p>
                  <p className="text-xs text-gray-500">en Google</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 border-2 border-primary-200 rounded-full scale-110" />
              <div className="absolute inset-0 border border-primary-100 rounded-full scale-125" />

              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hombre-tratando.webp"
                  alt="Fisioterapeuta tratando a paciente en Clinica JC Fisio"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <motion.div
                className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-green-600 text-xl">&#10003;</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Cita confirmada</p>
                    <p className="text-sm text-gray-500">Manana a las 10:00</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">&#11088;</span>
                  <div>
                    <p className="font-bold text-gray-900">5.0/5</p>
                    <p className="text-xs text-gray-500">+8 resenas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
