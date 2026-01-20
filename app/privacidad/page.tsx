import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politica de Privacidad | Clinica JC Fisio',
  description: 'Politica de privacidad y proteccion de datos personales de Clinica JC Fisio en Tomelloso, Ciudad Real.',
  robots: { index: true, follow: true },
}

export default function PrivacidadPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politica de Privacidad</h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-sm text-gray-500 mb-8">
              Ultima actualizacion: Enero 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Responsable del Tratamiento</h2>
            <p>
              <strong>Identidad:</strong> Clinica JC Fisio<br />
              <strong>Direccion:</strong> Paseo San Isidro, 19, local 2, 13700 Tomelloso, Ciudad Real<br />
              <strong>Telefono:</strong> 744 62 41 98<br />
              <strong>Correo electronico:</strong> info@jcfisio.es
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Datos que Recopilamos</h2>
            <p>Recopilamos los siguientes tipos de datos personales:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Datos identificativos:</strong> nombre, apellidos, telefono, correo electronico</li>
              <li><strong>Datos de salud:</strong> historial clinico, sintomas, tratamientos previos (solo cuando sean necesarios para la prestacion del servicio de fisioterapia)</li>
              <li><strong>Datos de navegacion:</strong> cookies tecnicas y de analisis (ver Politica de Cookies)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Finalidad del Tratamiento</h2>
            <p>Tratamos sus datos personales para las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar las citas y consultas solicitadas</li>
              <li>Prestar los servicios de fisioterapia, nutricion y demas tratamientos contratados</li>
              <li>Mantener el historial clinico del paciente</li>
              <li>Enviar comunicaciones relacionadas con su cita o tratamiento</li>
              <li>Cumplir con las obligaciones legales aplicables</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Base Legal del Tratamiento</h2>
            <p>El tratamiento de sus datos se fundamenta en:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ejecucion de un contrato:</strong> para la prestacion de servicios sanitarios</li>
              <li><strong>Consentimiento explicito:</strong> para el tratamiento de datos de salud</li>
              <li><strong>Obligacion legal:</strong> conservacion de historiales clinicos segun la normativa sanitaria</li>
              <li><strong>Interes legitimo:</strong> para comunicaciones comerciales sobre servicios similares</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Conservacion de Datos</h2>
            <p>
              Los datos personales se conservaran durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos. Los historiales clinicos se conservaran durante un minimo de 5 anos desde la ultima asistencia, conforme a la legislacion sanitaria vigente.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Destinatarios de los Datos</h2>
            <p>
              Sus datos no seran cedidos a terceros salvo obligacion legal. Podrian tener acceso:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Aseguradoras medicas (cuando el paciente acuda con seguro privado)</li>
              <li>Administraciones publicas competentes en materia sanitaria</li>
              <li>Proveedores de servicios tecnicos (hosting, email) bajo contrato de encargado del tratamiento</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Derechos del Usuario</h2>
            <p>Puede ejercer los siguientes derechos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceso:</strong> conocer que datos tratamos sobre usted</li>
              <li><strong>Rectificacion:</strong> modificar datos inexactos</li>
              <li><strong>Supresion:</strong> solicitar la eliminacion de sus datos</li>
              <li><strong>Oposicion:</strong> oponerse a determinados tratamientos</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en formato electronico</li>
              <li><strong>Limitacion:</strong> solicitar la limitacion del tratamiento</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, puede contactarnos en info@jcfisio.es o en nuestra direccion postal.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Seguridad de los Datos</h2>
            <p>
              Aplicamos medidas tecnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, la perdida, destruccion o dano accidental.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho a modificar esta politica de privacidad. Cualquier cambio sera publicado en esta pagina con la fecha de actualizacion correspondiente.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Reclamaciones</h2>
            <p>
              Si considera que el tratamiento de sus datos no es adecuado, puede presentar una reclamacion ante la Agencia Espanola de Proteccion de Datos (AEPD): <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">www.aepd.es</a>
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
