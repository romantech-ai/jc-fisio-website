'use client'
import { motion } from 'framer-motion'

const team = [
  { name: 'Javier', role: 'Fisioterapeuta', emoji: '💪' },
  { name: 'Veronica', role: 'Fisioterapeuta', emoji: '💆‍♀️' },
  { name: 'Selene', role: 'Fisioterapeuta', emoji: '🩺' },
  { name: 'Bea', role: 'Fisioterapeuta', emoji: '❤️‍🩹' },
  { name: 'Cristina', role: 'Nutricion', emoji: '🍲' },
  { name: 'Rosa', role: 'Pilates', emoji: '🧘‍♀️' },
  { name: 'Belen', role: 'Administracion', emoji: '📄' },
  { name: 'Esteban', role: 'Entrenamiento personal', emoji: '🏋️' },
]

export function Team() {
  return (
    <section id="equipo" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Nuestro Equipo
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Profesionales a tu servicio
          </h2>
          <p className="text-lg text-gray-600">
            Un equipo multidisciplinar comprometido con tu bienestar y recuperacion
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                {member.emoji}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Todos nuestros profesionales cuentan con titulacion oficial y anos de experiencia en sus respectivas areas.
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Reserva tu cita con cualquiera de ellos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
