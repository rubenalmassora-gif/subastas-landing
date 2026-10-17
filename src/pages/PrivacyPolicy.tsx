import { ArrowLeft, Shield, Lock, Eye, Trash2 } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
          <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
          <p className="text-sm text-gray-500 mt-2">Última actualización: 30 de enero de 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">1.1. Datos de Cuenta</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Dirección de correo electrónico</li>
              <li>Contraseña (encriptada)</li>
              <li>Fecha de registro</li>
              <li>Créditos disponibles</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">1.2. Información de Pago</h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              Procesamos pagos a través de Stripe. No almacenamos información completa de tarjetas de crédito. 
              Stripe recopila:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Datos de la tarjeta de pago</li>
              <li>Dirección de facturación</li>
              <li>Historial de transacciones</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">1.3. Documentos y Análisis</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Documentos PDF subidos para análisis</li>
              <li>Resultados de análisis generados</li>
              <li>Metadatos de las subastas analizadas</li>
              <li>Fecha y hora de los análisis</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">1.4. Datos Técnicos</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Dirección IP</li>
              <li>Tipo de navegador y dispositivo</li>
              <li>Páginas visitadas y tiempo de navegación</li>
              <li>Cookies y tecnologías similares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cómo Utilizamos su Información</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Provisión del Servicio</h3>
                  <p className="text-gray-700">
                    Procesar sus análisis, gestionar su cuenta y proporcionar soporte técnico.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Lock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Seguridad</h3>
                  <p className="text-gray-700">
                    Detectar y prevenir fraudes, abusos o actividades no autorizadas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Eye className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mejora del Servicio</h3>
                  <p className="text-gray-700">
                    Analizar el uso para mejorar nuestros algoritmos de IA y experiencia de usuario.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Trash2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Comunicaciones</h3>
                  <p className="text-gray-700">
                    Enviar notificaciones importantes sobre su cuenta, actualizaciones del servicio y responder consultas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartir Información</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No vendemos ni alquilamos sus datos personales a terceros. Compartimos información solo en los siguientes casos:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Stripe:</strong> Para procesar pagos de forma segura</li>
              <li><strong>Supabase:</strong> Para almacenamiento y gestión de base de datos</li>
              <li><strong>Mistral:</strong> Para procesamiento de documentos (sin almacenar datos identificables)</li>
              <li><strong>Obligaciones legales:</strong> Si es requerido por ley o autoridades competentes</li>
              <li><strong>Protección de derechos:</strong> Para defender nuestros derechos legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Retención de Datos</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Datos de cuenta:</strong> Mientras su cuenta permanezca activa</li>
              <li><strong>Documentos subidos:</strong> 90 días después del análisis</li>
              <li><strong>Resultados de análisis:</strong> Indefinidamente (salvo solicitud de eliminación)</li>
              <li><strong>Datos de facturación:</strong> 10 años (obligación fiscal)</li>
              <li><strong>Logs técnicos:</strong> 6 meses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sus Derechos (RGPD)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conforme al Reglamento General de Protección de Datos (RGPD), usted tiene derecho a:
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 space-y-2">
              <p className="text-gray-700"><strong>✓ Acceso:</strong> Solicitar una copia de sus datos personales</p>
              <p className="text-gray-700"><strong>✓ Rectificación:</strong> Corregir datos inexactos o incompletos</p>
              <p className="text-gray-700"><strong>✓ Supresión:</strong> Solicitar la eliminación de sus datos</p>
              <p className="text-gray-700"><strong>✓ Portabilidad:</strong> Recibir sus datos en formato estructurado</p>
              <p className="text-gray-700"><strong>✓ Oposición:</strong> Oponerse al procesamiento de sus datos</p>
              <p className="text-gray-700"><strong>✓ Limitación:</strong> Restringir el procesamiento en ciertos casos</p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Para ejercer estos derechos, contacte a:{' '}
              <a href="mailto:admin@subastasiapro.com" className="text-amber-600 hover:text-amber-700 font-medium">
                admin@subastasiapro.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seguridad</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Encriptación SSL/TLS para transmisión de datos</li>
              <li>Contraseñas encriptadas con bcrypt</li>
              <li>Acceso restringido a datos personales</li>
              <li>Monitoreo continuo de seguridad</li>
              <li>Auditorías periódicas de seguridad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Utilizamos cookies esenciales para el funcionamiento del servicio:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Cookies de sesión:</strong> Para mantener su sesión iniciada</li>
              <li><strong>Cookies de autenticación:</strong> Para verificar su identidad</li>
              <li><strong>Cookies funcionales:</strong> Para recordar sus preferencias</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Puede configurar su navegador para rechazar cookies, pero esto puede afectar la funcionalidad del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Transferencias Internacionales</h2>
            <p className="text-gray-700 leading-relaxed">
              Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo (EEE). 
              En estos casos, nos aseguramos de que existan garantías adecuadas mediante cláusulas contractuales tipo aprobadas 
              por la Comisión Europea.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Menores de Edad</h2>
            <p className="text-gray-700 leading-relaxed">
              Subastas IA Pro no está dirigido a menores de 18 años. No recopilamos intencionadamente datos de menores. 
              Si descubrimos que hemos recopilado datos de un menor, los eliminaremos de inmediato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cambios a esta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos cambios significativos 
              por correo electrónico. La fecha de "última actualización" al inicio indica cuándo se realizó la última modificación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Para preguntas sobre esta Política de Privacidad o el tratamiento de sus datos personales:{' '}
              <a href="mailto:admin@subastasiapro.com" className="text-amber-600 hover:text-amber-700 font-medium">
                admin@subastasiapro.com
              </a>
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-500 text-center">
              Su privacidad es importante para nosotros. Nos comprometemos a proteger sus datos personales 
              conforme a la legislación vigente.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}