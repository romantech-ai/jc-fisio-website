import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politica de Cookies | Clinica JC Fisio',
  description: 'Informacion sobre el uso de cookies en la web de Clinica JC Fisio.',
  robots: { index: true, follow: true },
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>

        <article className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politica de Cookies</h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-sm text-gray-500 mb-8">
              Ultima actualizacion: Enero 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Que son las Cookies</h2>
            <p>
              Las cookies son pequenos archivos de texto que se almacenan en su dispositivo (ordenador, tablet, movil) cuando visita un sitio web. Permiten que el sitio recuerde sus acciones y preferencias durante un periodo de tiempo.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Tipos de Cookies que Utilizamos</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Cookies Tecnicas (Necesarias)</h3>
            <p>
              Son imprescindibles para el funcionamiento basico del sitio web. No requieren consentimiento.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 text-left">Cookie</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Proposito</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Duracion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">cookie-consent</td>
                    <td className="border border-gray-200 px-4 py-2">Almacena su preferencia de cookies</td>
                    <td className="border border-gray-200 px-4 py-2">1 ano</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Cookies de Analisis</h3>
            <p>
              Nos ayudan a entender como interactuan los visitantes con el sitio web, recopilando informacion de forma anonima.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 text-left">Cookie</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Proposito</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Duracion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">_ga</td>
                    <td className="border border-gray-200 px-4 py-2">Google Analytics - distingue usuarios</td>
                    <td className="border border-gray-200 px-4 py-2">2 anos</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">_gid</td>
                    <td className="border border-gray-200 px-4 py-2">Google Analytics - distingue usuarios</td>
                    <td className="border border-gray-200 px-4 py-2">24 horas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Gestion de Cookies</h2>
            <p>
              Puede gestionar sus preferencias de cookies de las siguientes maneras:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 A traves del Banner de Cookies</h3>
            <p>
              Al acceder a nuestro sitio web por primera vez, aparecera un banner donde podra aceptar o rechazar las cookies no esenciales.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 A traves del Navegador</h3>
            <p>
              Puede configurar su navegador para bloquear o eliminar cookies. Le proporcionamos enlaces a las instrucciones de los navegadores mas comunes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Microsoft Edge</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies de Terceros</h2>
            <p>
              Algunas cookies son gestionadas por terceros. Puede consultar sus politicas de privacidad:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google (Analytics)</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Actualizaciones</h2>
            <p>
              Esta politica de cookies puede ser actualizada periodicamente. Le recomendamos revisarla de forma regular para estar informado sobre como utilizamos las cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contacto</h2>
            <p>
              Si tiene preguntas sobre nuestra politica de cookies, puede contactarnos en:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@jcfisio.es<br />
              <strong>Telefono:</strong> 744 62 41 98<br />
              <strong>Direccion:</strong> Paseo San Isidro, 19, local 2, 13700 Tomelloso, Ciudad Real
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
