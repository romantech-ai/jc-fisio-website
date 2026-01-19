'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: '¿Necesito cita previa?',
    answer: 'Si, trabajamos con cita previa para poder ofrecerte una atencion personalizada y evitar esperas. Puedes reservar tu cita por telefono, WhatsApp o a traves del formulario de contacto.'
  },
  {
    question: '¿Que seguros aceptais?',
    answer: 'Somos clinica colaboradora de Sanitas, Asisa, Mapfre, Adeslas Segurcaixa, Sereviall, DKV, Divina Seguros y Clinicas Fisi-On. Consulta con tu aseguradora la cobertura de tu poliza.'
  },
  {
    question: '¿Cuanto dura una sesion de fisioterapia?',
    answer: 'Las sesiones de fisioterapia suelen durar entre 45 y 60 minutos, dependiendo del tratamiento y las necesidades de cada paciente. En la primera visita realizamos una valoracion completa.'
  },
  {
    question: '¿Ofreceis primera consulta gratuita?',
    answer: 'Ofrecemos una valoracion inicial donde evaluamos tu caso y te explicamos el tratamiento mas adecuado. Contactanos para mas informacion sobre nuestras tarifas.'
  },
  {
    question: '¿Puedo combinar varios tratamientos?',
    answer: 'Por supuesto. Muchos de nuestros pacientes combinan fisioterapia con nutricion, pilates o presoterapia para obtener mejores resultados. Nuestro equipo te asesorara sobre la mejor combinacion para tu caso.'
  },
  {
    question: '¿Donde estais ubicados?',
    answer: 'Estamos en Paseo San Isidro, 19, local 2, en Tomelloso (Ciudad Real). Nuestro horario es de lunes a viernes de 8:00 a 14:00 y de 16:00 a 21:00.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Resolvemos tus dudas mas comunes sobre nuestros servicios y tratamientos.
            </p>
            <p className="text-gray-600">
              ¿No encuentras tu pregunta?{' '}
              <a href="#contacto" className="text-primary-600 font-medium hover:underline">
                Contactanos
              </a>
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
