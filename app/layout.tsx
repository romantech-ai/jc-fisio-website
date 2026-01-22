import type { Metadata } from 'next'
import { Libre_Baskerville, DM_Sans } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@/components/analytics'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jcfisio.es'),
  title: 'Clinica JC Fisio | Fisioterapia en Tomelloso',
  description: 'Clinica de fisioterapia en Tomelloso, Ciudad Real. Ofrecemos fisioterapia, nutricion, pilates, presoterapia y gimnasia pasiva. Equipo de 8 profesionales. Reserva tu cita: 744 62 41 98.',
  keywords: 'fisioterapia tomelloso, fisioterapeuta tomelloso, clinica fisioterapia ciudad real, nutricion tomelloso, pilates tomelloso, presoterapia, jc fisio',
  authors: [{ name: 'Clinica JC Fisio' }],
  creator: 'Roman Tech',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://jcfisio.es',
    siteName: 'Clinica JC Fisio',
    title: 'Clinica JC Fisio | Fisioterapia en Tomelloso',
    description: 'Tu centro de fisioterapia de confianza en Tomelloso. Tratamientos personalizados de fisioterapia, nutricion, pilates y mas.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clinica JC Fisio - Fisioterapia en Tomelloso',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinica JC Fisio | Fisioterapia en Tomelloso',
    description: 'Tu centro de fisioterapia de confianza en Tomelloso. Reserva tu cita: 744 62 41 98',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://jcfisio.es',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${libreBaskerville.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#84cc16" />
        <meta name="geo.region" content="ES-CR" />
        <meta name="geo.placename" content="Tomelloso" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Clinica JC Fisio',
              image: 'https://jcfisio.es/images/clinica.jpg',
              '@id': 'https://jcfisio.es',
              url: 'https://jcfisio.es',
              telephone: '+34744624198',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Paseo San Isidro, 19, local 2',
                addressLocality: 'Tomelloso',
                postalCode: '13700',
                addressRegion: 'Ciudad Real',
                addressCountry: 'ES',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 39.1581,
                longitude: -3.0236,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '14:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '16:00',
                  closes: '21:00',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '8',
              },
              priceRange: '$$',
              medicalSpecialty: 'PhysicalTherapy',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Servicios de Salud y Bienestar',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Fisioterapia',
                      description: 'Tratamientos personalizados para lesiones musculares, articulares, dolor de espalda y rehabilitacion.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Nutricion',
                      description: 'Planes nutricionales adaptados a tus objetivos de salud y bienestar.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Pilates',
                      description: 'Clases de pilates individuales y grupales para mejorar postura y flexibilidad.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Presoterapia',
                      description: 'Tratamiento para mejorar la circulacion y reducir retencion de liquidos.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Gimnasia Pasiva',
                      description: 'Electroestimulacion muscular para tonificacion y recuperacion.',
                    },
                  },
                ],
              },
              employee: [
                { '@type': 'Person', name: 'Javier', jobTitle: 'Fisioterapeuta' },
                { '@type': 'Person', name: 'Veronica', jobTitle: 'Fisioterapeuta' },
                { '@type': 'Person', name: 'Selene', jobTitle: 'Fisioterapeuta' },
                { '@type': 'Person', name: 'Bea', jobTitle: 'Fisioterapeuta' },
                { '@type': 'Person', name: 'Cristina', jobTitle: 'Nutricionista' },
                { '@type': 'Person', name: 'Rosa', jobTitle: 'Instructora de Pilates' },
                { '@type': 'Person', name: 'Belen', jobTitle: 'Administracion' },
                { '@type': 'Person', name: 'Esteban', jobTitle: 'Entrenador Personal' },
              ],
            }),
          }}
        />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        <GoogleAnalytics />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-4 focus:left-4 focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  )
}
