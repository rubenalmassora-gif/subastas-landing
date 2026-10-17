import { ArrowLeft, AlertTriangle } from 'lucide-react';

interface LegalNoticeProps {
  onBack: () => void;
}

export default function LegalNotice({ onBack }: LegalNoticeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Aviso Legal</h1>
          <p className="text-sm text-gray-500 mt-2">Última actualización: 30 de enero de 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datos Identificativos</h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-2">
              <p className="text-gray-700"><strong>Denominación:</strong> Subastas IA Pro</p>
              <p className="text-gray-700"><strong>Dominio web:</strong> subastasiapro.com</p>
              <p className="text-gray-700"><strong>Email de contacto:</strong>{' '}
                <a href="mailto:admin@subastasiapro.com" className="text-amber-600 hover:text-amber-700">
                  admin@subastasiapro.com
                </a>
              </p>
              <p className="text-gray-700"><strong>CIF/NIF:</strong> [Pendiente de registro]</p>
              <p className="text-gray-700"><strong>Domicilio social:</strong> [Pendiente de registro]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Objeto del Sitio Web</h2>
            <p className="text-gray-700 leading-relaxed">
              Subastas IA Pro es una plataforma tecnológica que ofrece servicios de análisis automatizado de documentación 
              de subastas inmobiliarias mediante inteligencia artificial. El servicio tiene carácter informativo y 
              orientativo, no constituyendo en ningún caso asesoramiento legal, fiscal o profesional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Condiciones de Uso</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El acceso y uso del sitio web implica la aceptación de las presentes condiciones de uso. El usuario se 
              compromete a utilizar el servicio de forma lícita y conforme a la legislación vigente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitación de Responsabilidad</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-yellow-800 font-bold mb-3">DESCARGO DE RESPONSABILIDAD CRÍTICO</p>
                  <p className="text-yellow-700 leading-relaxed mb-3">
                    La información generada por Subastas IA Pro mediante inteligencia artificial es exclusivamente orientativa 
                    y puede contener errores, omisiones o imprecisiones.
                  </p>
                  <p className="text-yellow-700 leading-relaxed">
                    Subastas IA Pro NO se responsabiliza de pérdidas económicas, daños o perjuicios derivados de:
                  </p>
                </div>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
              <li>Decisiones de inversión basadas en los análisis proporcionados</li>
              <li>Errores o inexactitudes en la información generada por la IA</li>
              <li>Cambios en la legislación que afecten a subastas inmobiliarias</li>
              <li>Interpretaciones incorrectas de documentación legal</li>
              <li>Cargas o gravámenes no detectados o incorrectamente identificados</li>
              <li>Valoraciones que no reflejen el valor real de mercado</li>
              <li>Interrupciones del servicio o fallos técnicos</li>
            </ul>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-800 font-bold mb-3">SE RECOMIENDA ENCARECIDAMENTE:</p>
              <ul className="list-disc list-inside text-red-700 space-y-2 ml-4">
                <li>Consultar con un abogado especializado en subastas judiciales</li>
                <li>Verificar personalmente toda la documentación</li>
                <li>Contratar un arquitecto técnico para valoración del inmueble</li>
                <li>Consultar con un asesor fiscal sobre implicaciones tributarias</li>
                <li>Visitar físicamente la propiedad antes de pujar</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Naturaleza del Servicio de IA</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El usuario reconoce y acepta expresamente que:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Los sistemas de inteligencia artificial no son infalibles y pueden cometer errores</li>
              <li>La calidad del análisis depende de la legibilidad y completitud de los documentos aportados</li>
              <li>El análisis automatizado no puede sustituir la revisión de un profesional cualificado</li>
              <li>Los resultados son probabilísticos y no garantías absolutas</li>
              <li>La tecnología está en constante evolución y puede experimentar fallos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todos los derechos de propiedad intelectual e industrial del sitio web, diseño, estructura, código fuente, 
              bases de datos, contenidos y elementos gráficos son propiedad de Subastas IA Pro o de terceros que han autorizado 
              legítimamente su inclusión.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Queda prohibida la reproducción, distribución, comunicación pública y transformación del contenido sin 
              autorización expresa del titular.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Protección de Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              El tratamiento de datos personales se rige por nuestra{' '}
              <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">
                Política de Privacidad
              </a>
              , cumpliendo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección 
              de Datos y Garantía de los Derechos Digitales (LOPDGDD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Enlaces a Terceros</h2>
            <p className="text-gray-700 leading-relaxed">
              El sitio web puede contener enlaces a sitios de terceros. Subastas IA Pro no controla ni se hace responsable 
              del contenido, políticas de privacidad o prácticas de sitios web de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disponibilidad del Servicio</h2>
            <p className="text-gray-700 leading-relaxed">
              Subastas IA Pro no garantiza la disponibilidad y continuidad ininterrumpida del servicio. Nos reservamos el 
              derecho a suspender, interrumpir o modificar el servicio en cualquier momento, con o sin previo aviso, 
              sin que ello genere derecho a indemnización.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificaciones</h2>
            <p className="text-gray-700 leading-relaxed">
              Subastas IA Pro se reserva el derecho de modificar el contenido del sitio web y las condiciones de uso en 
              cualquier momento. Las modificaciones serán efectivas desde su publicación en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Ley Aplicable y Jurisdicción</h2>
            <p className="text-gray-700 leading-relaxed">
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia 
              derivada del acceso o uso del sitio web, las partes se someten expresamente a los Juzgados y Tribunales de 
              Madrid, España, renunciando a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto y Reclamaciones</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Para cualquier consulta, sugerencia o reclamación relacionada con este aviso legal o el funcionamiento 
              del sitio web, puede contactarnos en:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:admin@subastasiapro.com" className="text-amber-600 hover:text-amber-700 font-medium">
                  admin@subastasiapro.com
                </a>
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-500 text-center">
              El uso de Subastas IA Pro implica la aceptación plena y sin reservas de todas las disposiciones 
              incluidas en este Aviso Legal.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}