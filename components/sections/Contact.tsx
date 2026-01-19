'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  'Fisioterapia',
  'Nutricion',
  'Pilates',
  'Presoterapia',
  'Gimnasia Pasiva',
  'Entrenamiento personal'
]

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email no valido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El telefono es obligatorio'
    } else if (!/^[0-9\s+()-]{9,}$/.test(formData.phone)) {
      newErrors.phone = 'Telefono no valido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Construir mensaje para WhatsApp
    const whatsappNumber = '34744624198'
    let message = `*Nueva solicitud de cita - JC Fisio*\n\n`
    message += `*Nombre:* ${formData.name}\n`
    message += `*Email:* ${formData.email}\n`
    message += `*Telefono:* ${formData.phone}\n`
    if (formData.service) {
      message += `*Servicio:* ${formData.service}\n`
    }
    if (formData.message) {
      message += `*Mensaje:* ${formData.message}\n`
    }

    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Abrir WhatsApp en nueva ventana
    window.open(whatsappUrl, '_blank')

    setIsSuccess(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setIsSubmitting(false)
  }

  const inputClasses = (error?: string) => `
    w-full px-4 py-3 bg-white border-2 rounded-xl transition-all duration-200
    focus:outline-none focus:ring-0
    ${error
      ? 'border-red-300 focus:border-red-500'
      : 'border-gray-100 focus:border-primary-500 hover:border-gray-200'
    }
  `

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Contacto
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Reserva tu cita
          </h2>
          <p className="text-lg text-gray-600">
            Estamos aqui para ayudarte. Contactanos y te responderemos lo antes posible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informacion de contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Direccion</p>
                    <p className="text-gray-600">Paseo San Isidro, 19, local 2</p>
                    <p className="text-gray-600">13700 Tomelloso, Ciudad Real</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefono</p>
                    <a href="tel:744624198" className="text-primary-600 hover:text-primary-700">744 62 41 98</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Horario</p>
                    <p className="text-gray-600">Lunes a Viernes</p>
                    <p className="text-gray-600">8:00 - 14:00 / 16:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-sm h-[300px]">
              <iframe
                src="https://maps.google.com/maps?q=Paseo%20San%20Isidro%2019%20Tomelloso&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion de Clinica JC Fisio"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Redirigido a WhatsApp</h3>
                <p className="text-gray-600 mb-6">Completa el envio en WhatsApp para confirmar tu cita.</p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="text-primary-600 font-medium hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita tu cita</h3>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses(errors.name)}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClasses(errors.email)}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClasses(errors.phone)}
                      placeholder="600 000 000"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de interes
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={inputClasses()}
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={inputClasses()}
                    placeholder="Cuentanos en que podemos ayudarte..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg shadow-primary-600/25 hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Solicitar cita'
                  )}
                </motion.button>

                <p className="text-center text-sm text-gray-500">
                  Al enviar aceptas nuestra{' '}
                  <a href="/privacidad" className="text-primary-600 hover:underline">politica de privacidad</a>
                </p>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
