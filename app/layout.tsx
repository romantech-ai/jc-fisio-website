import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
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
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0d9488" />
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
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
