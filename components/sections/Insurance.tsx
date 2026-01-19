'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Insurance() {
  return (
    <section className="py-16 lg:py-24 bg-primary-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            Seguros Colaboradores
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trabajamos con las principales aseguradoras
          </h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Consulta con tu seguro si tu tratamiento esta cubierto. Somos clinica colaboradora oficial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <Image
              src="/images/clinicas-colaboradoras.webp"
              alt="Clinica colaboradora con Sanitas, Asisa, Mapfre, Adeslas, Serviall, DKV, Divina Seguros y Clinicas Fisi-On"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-primary-200 mt-8 text-sm"
        >
          ¿Tu seguro no esta en la lista? Contactanos para mas informacion
        </motion.p>
      </div>
    </section>
  )
}
