import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
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
          <h1 className="text-3xl font-bold text-gray-900">Términos de Servicio</h1>
          <p className="text-sm text-gray-500 mt-2">Última actualización: 30 de enero de 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 leading-relaxed">
              Al acceder y utilizar Subastas IA Pro ("el Servicio"), usted acepta estar sujeto a estos Términos de Servicio. 
              Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Subastas IA Pro es una plataforma que utiliza inteligencia artificial para analizar documentación de subastas 
              inmobiliarias del BOE. El servicio proporciona:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Análisis automático de edictos de subasta</li>
              <li>Identificación de cargas y gravámenes</li>
              <li>Valoración orientativa de propiedades</li>
              <li>Detección de posibles riesgos</li>
              <li>Informes descargables en PDF</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sistema de Créditos</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              El servicio funciona mediante un sistema de créditos prepago:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Cada análisis completo consume 1 crédito</li>
              <li>Los créditos no caducan y no tienen fecha de expiración</li>
              <li>Los créditos no son reembolsables una vez adquiridos</li>
              <li>Los créditos son personales e intransferibles</li>
              <li>Los nuevos usuarios reciben 1 análisis gratuito al registrarse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pagos y Facturación</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Los pagos se procesan de forma segura a través de Stripe. Al realizar una compra, usted acepta:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Proporcionar información de pago válida y actualizada</li>
              <li>Que todos los precios están expresados en euros (EUR)</li>
              <li>Los cargos se realizan de forma inmediata tras la compra</li>
              <li>No hay cargos recurrentes ni suscripciones automáticas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitaciones de Responsabilidad</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-yellow-800 font-semibold mb-2">AVISO IMPORTANTE</p>
              <p className="text-yellow-700 text-sm leading-relaxed">
                Subastas IA Pro NO sustituye el asesoramiento legal, fiscal, técnico o profesional especializado. 
                La información proporcionada es únicamente orientativa.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              El usuario reconoce y acepta que:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>La inteligencia artificial puede cometer errores o imprecisiones</li>
              <li>Los análisis no constituyen asesoramiento legal ni garantía de exactitud</li>
              <li>Debe consultar con profesionales cualificados antes de tomar decisiones de inversión</li>
              <li>Subastas IA Pro no se hace responsable de pérdidas o daños derivados del uso del servicio</li>
              <li>El usuario es el único responsable de sus decisiones de inversión</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Uso Aceptable</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              El usuario se compromete a NO:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Utilizar el servicio para fines ilegales o fraudulentos</li>
              <li>Intentar vulnerar la seguridad del sistema</li>
              <li>Realizar ingeniería inversa de la tecnología</li>
              <li>Compartir su cuenta con terceros</li>
              <li>Utilizar bots o scripts automatizados sin autorización</li>
              <li>Revender o comercializar los análisis obtenidos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todos los derechos de propiedad intelectual sobre el servicio, incluyendo software, diseño, contenido 
              y marca, pertenecen a SubastasIA. Los informes generados son para uso personal del usuario y no pueden 
              ser redistribuidos comercialmente sin autorización.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificaciones del Servicio</h2>
            <p className="text-gray-700 leading-relaxed">
              Subastas IA Pro se reserva el derecho de modificar, suspender o discontinuar el servicio en cualquier momento, 
              con o sin previo aviso. Nos comprometemos a notificar cambios significativos con antelación razonable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cancelación y Terminación</h2>
            <p className="text-gray-700 leading-relaxed">
              Puede cancelar su cuenta en cualquier momento. Los créditos no utilizados permanecerán disponibles. 
              Subastas IA Pro se reserva el derecho de suspender o cancelar cuentas que violen estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Política de Reembolsos</h2>
            <p className="text-gray-700 leading-relaxed">
              Los créditos adquiridos no son reembolsables. Sin embargo, consideraremos solicitudes de reembolso en 
              casos excepcionales como errores técnicos graves que impidan el uso del servicio. Cada caso se evaluará 
              individualmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Jurisdicción y Ley Aplicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Estos términos se rigen por las leyes de España. Cualquier disputa será sometida a los juzgados y 
              tribunales de Madrid, España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Para preguntas sobre estos Términos de Servicio, puede contactarnos en:{' '}
              <a href="mailto:admin@subastasiapro.com" className="text-amber-600 hover:text-amber-700 font-medium">
                admin@subastasiapro.com
              </a>
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-500 text-center">
              Al utilizar SubastasIA, usted acepta estos Términos de Servicio en su totalidad.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}