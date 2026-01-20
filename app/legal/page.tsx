import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal | Clinica JC Fisio',
  description: 'Aviso legal y condiciones de uso de la web de Clinica JC Fisio.',
  robots: { index: true, follow: true },
}

export default function LegalPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Aviso Legal</h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-sm text-gray-500 mb-8">
              Ultima actualizacion: Enero 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Datos Identificativos</h2>
            <p>
              En cumplimiento del deber de informacion establecido en el articulo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informacion y de Comercio Electronico (LSSI-CE), se facilitan los siguientes datos:
            </p>
            <ul className="list-none pl-0 space-y-2 mt-4">
              <li><strong>Denominacion:</strong> Clinica JC Fisio</li>
              <li><strong>Domicilio:</strong> Paseo San Isidro, 19, local 2, 13700 Tomelloso, Ciudad Real, Espana</li>
              <li><strong>Telefono:</strong> 744 62 41 98</li>
              <li><strong>Email:</strong> info@jcfisio.es</li>
              <li><strong>Sitio web:</strong> https://jcfisio.es</li>
              <li><strong>Actividad:</strong> Servicios de fisioterapia, nutricion, pilates y bienestar</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso del sitio web https://jcfisio.es, del que es titular Clinica JC Fisio. La navegacion por el sitio web atribuye la condicion de usuario del mismo e implica la aceptacion plena y sin reservas de todas las disposiciones incluidas en este aviso legal.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Condiciones de Uso</h2>
            <p>El usuario se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hacer un uso adecuado y licito del sitio web y de sus contenidos</li>
              <li>No realizar actividades ilicitas o contrarias a la buena fe</li>
              <li>No difundir contenidos de caracter racista, xenofobo, pornografico o que atenten contra los derechos humanos</li>
              <li>No introducir virus informaticos o realizar acciones que puedan danar los sistemas informaticos</li>
              <li>No intentar acceder a areas restringidas del sitio web</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Propiedad Intelectual e Industrial</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, fotografias, graficos, imagenes, iconos, tecnologia, software, enlaces y demas contenidos audiovisuales o sonoros, asi como su diseno grafico y codigos fuente, son propiedad intelectual de Clinica JC Fisio o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotacion sobre los mismos.
            </p>
            <p className="mt-4">
              Las marcas, nombres comerciales o signos distintivos son titularidad de Clinica JC Fisio o terceros, sin que pueda entenderse que el acceso al sitio web atribuya ningun derecho sobre las mismas.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Exclusion de Garantias y Responsabilidad</h2>
            <p>Clinica JC Fisio no se hace responsable de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento del sitio web</li>
              <li>La existencia de virus u otros elementos lesivos en los contenidos</li>
              <li>El uso ilicito, negligente o fraudulento que los usuarios hagan del sitio web</li>
              <li>La falta de veracidad, exactitud o actualizacion de los contenidos</li>
              <li>Los danos causados a terceros por uso indebido del sitio web</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Enlaces</h2>
            <p>
              El sitio web puede contener enlaces a sitios web de terceros. Clinica JC Fisio no asume ninguna responsabilidad por el contenido, informacion o servicios que pudieran aparecer en dichos sitios, que tienen exclusivamente caracter informativo.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Proteccion de Datos</h2>
            <p>
              Para toda la informacion relativa al tratamiento de datos personales, consulte nuestra <Link href="/privacidad" className="text-primary-600 hover:underline">Politica de Privacidad</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Cookies</h2>
            <p>
              Este sitio web utiliza cookies. Para mas informacion, consulte nuestra <Link href="/cookies" className="text-primary-600 hover:underline">Politica de Cookies</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Legislacion Aplicable y Jurisdiccion</h2>
            <p>
              Las presentes condiciones se rigen por la legislacion espanola. Para la resolucion de cualquier controversia, las partes se someten a los Juzgados y Tribunales del domicilio del usuario, siempre que este sea consumidor. En caso contrario, se someten a los Juzgados y Tribunales de Ciudad Real.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Modificaciones</h2>
            <p>
              Clinica JC Fisio se reserva el derecho de modificar, sin previo aviso, las condiciones de uso de este sitio web. El usuario debera leer atentamente el aviso legal cada vez que acceda al sitio web.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contacto</h2>
            <p>
              Para cualquier consulta sobre este aviso legal, puede contactarnos en:
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
