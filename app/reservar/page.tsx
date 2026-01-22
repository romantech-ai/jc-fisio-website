'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { siteConfig, services } from '@/lib/config'

// ================================================
// PAGINA DE RESERVAS - JC FISIO
// Flujo: Seleccionar servicio -> Generar WhatsApp
// ================================================

export default function ReservarPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [step, setStep] = useState(1)

  const selectedServiceData = services.find(s => s.id === selectedService)

  // Generar URL de WhatsApp con mensaje personalizado
  const generateWhatsAppUrl = () => {
    const service = selectedServiceData?.title || 'sus servicios'
    const message = `Hola! Me gustaria reservar una cita para ${service}. Gracias!`
    return `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`
  }

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setStep(2)
  }

  const handleBack = () => {
    setStep(1)
    setSelectedService(null)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">JC</span>
            </div>
            <span className="font-display text-xl text-gray-900">JC Fisio</span>
          </Link>
          <a
            href={`tel:${siteConfig.phoneClean}`}
            className="flex items-center gap-2 text-primary-600 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.phone}
          </a>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 lg:py-20">
        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>
              1
            </span>
            <span className="hidden sm:inline font-medium">Servicio</span>
          </div>
          <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-primary-600' : 'bg-gray-200'}`} />
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200'}`}>
              2
            </span>
            <span className="hidden sm:inline font-medium">Contactar</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1: Seleccionar servicio */}
              <div className="text-center mb-10">
                <h1 className="font-display text-4xl lg:text-5xl text-gray-900 mb-4">
                  Reserva tu cita
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Selecciona el servicio que necesitas y te ayudaremos a reservar tu cita
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative bg-white rounded-2xl p-6 text-left shadow-elevation-2 hover:shadow-elevation-4 transition-all border-2 ${
                      service.highlighted ? 'border-primary-500' : 'border-transparent hover:border-primary-200'
                    }`}
                  >
                    {service.highlighted && (
                      <span className="absolute -top-3 left-6 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-display text-xl text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Info adicional */}
              <div className="mt-12 text-center">
                <p className="text-gray-500 text-sm">
                  Tambien puedes llamarnos directamente al{' '}
                  <a href={`tel:${siteConfig.phoneClean}`} className="text-primary-600 font-semibold hover:underline">
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
            </motion.div>
          )}

          {step === 2 && selectedServiceData && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              {/* Step 2: Confirmar y contactar */}
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors mb-8"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver a servicios
              </button>

              <div className="bg-white rounded-3xl shadow-elevation-3 overflow-hidden">
                {/* Servicio seleccionado */}
                <div className="bg-primary-600 text-white p-6">
                  <p className="text-primary-200 text-sm mb-1">Servicio seleccionado</p>
                  <h2 className="font-display text-2xl">{selectedServiceData.title}</h2>
                </div>

                <div className="p-6 lg:p-8">
                  <p className="text-gray-600 mb-6">
                    {selectedServiceData.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-3">Incluye:</h3>
                    <ul className="space-y-2">
                      {selectedServiceData.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-gray-600">
                          <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Como quieres contactarnos?</h3>

                    <div className="space-y-3">
                      {/* WhatsApp - Principal */}
                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl font-semibold transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <div className="flex-1 text-left">
                          <span className="block">Reservar por WhatsApp</span>
                          <span className="block text-green-100 text-sm font-normal">Respuesta inmediata</span>
                        </div>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>

                      {/* Telefono */}
                      <a
                        href={`tel:${siteConfig.phoneClean}`}
                        className="flex items-center gap-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-900 p-4 rounded-xl font-semibold transition-colors"
                      >
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div className="flex-1 text-left">
                          <span className="block">Llamar al {siteConfig.phone}</span>
                          <span className="block text-gray-500 text-sm font-normal">L-V de 8:00 a 21:00</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informacion de contacto */}
              <div className="mt-8 bg-primary-50 rounded-2xl p-6 text-center">
                <h3 className="font-display text-lg text-gray-900 mb-2">
                  Necesitas ayuda?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Estamos en {siteConfig.address.street}, {siteConfig.address.city}
                </p>
                <p className="text-gray-600 text-sm">
                  Horario: {siteConfig.schedule.weekdays}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
