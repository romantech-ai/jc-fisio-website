'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    icon: (
      // Icono de manos tratando - representa fisioterapia manual
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    title: 'Fisioterapia',
    description: 'Tratamientos personalizados para lesiones musculares, articulares y de espalda.',
    highlight: true
  },
  {
    icon: (
      // Icono de manzana/hoja - representa nutricion
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-1.5 0-3 .5-3 2s1.5 2 3 2 3-.5 3-2-1.5-2-3-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14c0 5-3.5 7-7 7s-7-2-7-7c0-3 2-5 4-6 .5-.3 1-.4 1.5-.4h3c.5 0 1 .1 1.5.4 2 1 4 3 4 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v2" />
      </svg>
    ),
    title: 'Nutricion',
    description: 'Planes nutricionales adaptados a tus objetivos de salud y rendimiento.',
    highlight: false
  },
  {
    icon: (
      // Icono de persona haciendo ejercicio - representa pilates
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="4" r="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 17l4-4 4 4 4-4 4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v5M9 9l3 2 3-2" />
      </svg>
    ),
    title: 'Pilates',
    description: 'Fortalece tu core y mejora tu postura con clases grupales e individuales.',
    highlight: false
  },
  {
    icon: (
      // Icono de ondas/circulacion - representa presoterapia
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Presoterapia',
    description: 'Mejora tu circulacion y reduce la retencion de liquidos.',
    highlight: false
  },
  {
    icon: (
      // Icono de electrodo/pulso - representa gimnasia pasiva/electroestimulacion
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Gimnasia Pasiva',
    description: 'Tonificacion muscular mediante electroestimulacion sin esfuerzo.',
    highlight: false
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-4 block">
              Servicios
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Todo lo que necesitas
              <span className="text-primary-600"> en un solo lugar</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-end"
          >
            <p className="text-lg text-gray-600 max-w-md">
              Contamos con un equipo multidisciplinar para ofrecerte los mejores tratamientos
              de fisioterapia, nutricion y bienestar.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Service - Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 relative group cursor-pointer"
          >
            <div className="h-full bg-primary-600 rounded-3xl p-8 lg:p-12 overflow-hidden relative min-h-[400px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/hombre-trabajando.jpg"
                  alt="Fisioterapia"
                  fill
                  className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-700 via-primary-600/90 to-primary-600/70" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Fisioterapia</h3>
                  <p className="text-primary-100 text-lg max-w-md leading-relaxed">
                    Nuestro servicio principal. Tratamientos personalizados para lesiones deportivas,
                    dolor de espalda, rehabilitacion y mucho mas.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {['Lesiones deportivas', 'Dolor de espalda', 'Rehabilitacion', 'Ecografia'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Services */}
          {services.slice(1).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="h-full bg-gray-50 hover:bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gray-100">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-600 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Saber mas</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
