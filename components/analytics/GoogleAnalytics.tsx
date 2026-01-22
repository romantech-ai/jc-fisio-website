'use client'

import Script from 'next/script'
import { siteConfig } from '@/lib/config'

// Declaracion global para gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

// ================================================
// GOOGLE ANALYTICS 4 - JC FISIO
// Configurar gaId en lib/config.ts
// ================================================

export function GoogleAnalytics() {
  const gaId = siteConfig.analytics.gaId

  // Si no hay ID configurado, no renderizar nada
  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}

// ================================================
// TRACKING EVENTS
// Usar estas funciones para trackear eventos importantes
// ================================================

export function trackEvent(
  eventName: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Eventos predefinidos para conversion
export const trackingEvents = {
  // Conversion
  bookingStarted: () => trackEvent('booking_started', 'conversion', 'Inicio de reserva'),
  bookingCompleted: (service: string) => trackEvent('booking_completed', 'conversion', service),
  whatsappClicked: (source: string) => trackEvent('whatsapp_click', 'conversion', source),
  phoneClicked: () => trackEvent('phone_click', 'conversion', 'Llamada telefonica'),
  formSubmitted: () => trackEvent('form_submit', 'conversion', 'Formulario contacto'),

  // Engagement
  chatbotOpened: () => trackEvent('chatbot_opened', 'engagement', 'Chat abierto'),
  chatbotMessageSent: () => trackEvent('chatbot_message', 'engagement', 'Mensaje enviado'),
  serviceViewed: (service: string) => trackEvent('service_view', 'engagement', service),
  faqOpened: (question: string) => trackEvent('faq_open', 'engagement', question),

  // Navigation
  pageView: (page: string) => trackEvent('page_view', 'navigation', page),
  scrollDepth: (percentage: number) => trackEvent('scroll_depth', 'navigation', `${percentage}%`, percentage),
}
