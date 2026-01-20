'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  {
    src: '/images/fisiojc-ecografia.jpg',
    alt: 'Sala de ecografia musculoesqueletica',
    title: 'Ecografia',
  },
  {
    src: '/images/hombre-trabajando.jpg',
    alt: 'Fisioterapeuta realizando tratamiento',
    title: 'Tratamiento',
  },
  {
    src: '/images/gimnasia-pasiva.jpg',
    alt: 'Zona de gimnasia pasiva y electroestimulacion',
    title: 'Gimnasia Pasiva',
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-4 block">
            Nuestras Instalaciones
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Conoce nuestro centro
          </h2>
          <p className="text-lg text-gray-600">
            Instalaciones modernas y equipadas con la ultima tecnologia para tu recuperacion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  <h3 className="text-white text-xl font-bold mb-1 group-hover:text-primary-300 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {image.alt}
                  </p>
                </motion.div>
              </div>

              {/* Hover icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Disponemos de salas individuales para garantizar tu privacidad y comodidad
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Visitanos y conoce nuestras instalaciones
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
