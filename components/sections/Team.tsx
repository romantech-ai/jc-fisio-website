'use client'
import { motion } from 'framer-motion'

// SVG icons for each role
const icons = {
  fisioterapeuta: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
    </svg>
  ),
  nutricion: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v5M8 9h8M9 14h1M14 14h1" />
    </svg>
  ),
  pilates: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v4M8 21l4-10 4 10M6 14h4M14 14h4" />
    </svg>
  ),
  administracion: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  entrenador: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h2M4 16h2M18 8h2M18 16h2" />
      <rect x="6" y="6" width="12" height="12" rx="1" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6M12 9v6" />
    </svg>
  )
}

const team = [
  { name: 'Javier', role: 'Fisioterapeuta', icon: 'fisioterapeuta' },
  { name: 'Veronica', role: 'Fisioterapeuta', icon: 'fisioterapeuta' },
  { name: 'Selene', role: 'Fisioterapeuta', icon: 'fisioterapeuta' },
  { name: 'Bea', role: 'Fisioterapeuta', icon: 'fisioterapeuta' },
  { name: 'Cristina', role: 'Nutricion', icon: 'nutricion' },
  { name: 'Rosa', role: 'Pilates', icon: 'pilates' },
  { name: 'Belen', role: 'Administracion', icon: 'administracion' },
  { name: 'Esteban', role: 'Entrenamiento personal', icon: 'entrenador' },
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
          <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-4 block">
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
              className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 text-center overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10">
                {/* Avatar con inicial + gradiente */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>

                {/* Icon indicator */}
                <div className="mt-3 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-100 transition-colors">
                    <div className="w-5 h-5">
                      {icons[member.icon as keyof typeof icons]}
                    </div>
                  </div>
                </div>
              </div>
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
