import { useState } from 'react';
import { ArrowRight, Play, FileText, AlertTriangle, Brain, Shield, FileCheck, TrendingUp as TrendingUpIcon, Upload, FileOutput, Calculator, Activity, Clock, Check, Zap, AlertTriangle as AlertTriangleIcon, CheckCircle, Home } from 'lucide-react';
import { creditPacks } from '../lib/creditPacks';

interface LandingPageProps {
  onGetStarted: () => void;
  onNavigate: (page: 'terms' | 'privacy' | 'legal') => void;
}

export default function LandingPage({ onGetStarted, onNavigate }: LandingPageProps) {
  const [hoveredPack, setHoveredPack] = useState<string | null>(null);

  const problems = [
    {
      icon: <FileText className="text-red-500" size={24} />,
      title: "Edictos complejos y confusos",
      description: "El lenguaje jurídico hace difícil entender la información clave de la subasta."
    },
    {
      icon: <AlertTriangle className="text-red-500" size={24} />,
      title: "Cargas y riesgos ocultos",
      description: "Identificar todas las cargas, hipotecas y riesgos requiere conocimiento especializado."
    },
    {
      icon: <AlertTriangleIcon className="text-red-500" size={24} />,
      title: "Falta de conocimiento legal",
      description: "Sin formación jurídica, es fácil pasar por alto detalles importantes."
    },
    {
      icon: <Clock className="text-red-500" size={24} />,
      title: "Tiempo limitado",
      description: "Analizar cada subasta manualmente consume demasiado tiempo valioso."
    }
  ];

  const solutionFeatures = [
    {
      icon: <Brain className="text-amber-600" size={32} />,
      title: "Análisis automático con IA",
      description: "Procesa edictos, cargas y notas simples de forma automatizada para extraer información clave."
    },
    {
      icon: <FileCheck className="text-amber-600" size={32} />,
      title: "Resumen claro y estructurado",
      description: "Convierte documentos complejos en informes fáciles de entender y evaluar."
    },
    {
      icon: <Shield className="text-amber-600" size={32} />,
      title: "Identificación de riesgos",
      description: "Detecta posibles cargas, hipotecas y otros factores que pueden afectar la inversión."
    },
    {
      icon: <TrendingUpIcon className="text-amber-600" size={32} />,
      title: "Score de complejidad",
      description: "Evalúa la complejidad de cada subasta para ayudarte a priorizar oportunidades."
    }
  ];

  const steps = [
    {
      number: "1",
      icon: <Upload className="text-amber-600" size={32} />,
      title: "Subes la documentación",
      description: "Carga el edicto de subasta, el certificado de cargas o nota simple. Nuestro sistema procesará automáticamente toda la documentación."
    },
    {
      number: "2",
      icon: <Brain className="text-amber-600" size={32} />,
      title: "La IA analiza la información",
      description: "Nuestra inteligencia artificial examina edictos, cargas registrales, notas simples y otra documentación relevante."
    },
    {
      number: "3",
      icon: <FileOutput className="text-amber-600" size={32} />,
      title: "Obtienes un informe claro",
      description: "Recibe un análisis estructurado con resumen, riesgos identificados, cargas detectadas y score de complejidad."
    }
  ];

  const features = [
    {
      icon: <FileText className="text-amber-600" size={24} />,
      title: "Resumen del edicto",
      description: "Información clave extraída y presentada de forma clara y estructurada."
    },
    {
      icon: <AlertTriangle className="text-amber-600" size={24} />,
      title: "Análisis de cargas",
      description: "Identificación de hipotecas, embargos y otras cargas que afecten el inmueble."
    },
    {
      icon: <Shield className="text-amber-600" size={24} />,
      title: "Riesgos detectados",
      description: "Factores de riesgo identificados que podrían impactar la inversión."
    },
    {
      icon: <Calculator className="text-amber-600" size={24} />,
      title: "Valoración orientativa",
      description: "Información sobre valoraciones y precios de referencia cuando esté disponible."
    },
    {
      icon: <Activity className="text-amber-600" size={24} />,
      title: "Nivel de complejidad",
      description: "Score que evalúa la complejidad jurídica y técnica de la subasta."
    },
    {
      icon: <Clock className="text-amber-600" size={24} />,
      title: "Fechas importantes",
      description: "Plazos de subasta, visitas y otros eventos relevantes organizados."
    }
  ];

  const benefits = [
    "Solo pagas cuando analizas",
    "Sin permanencia ni suscripciones",
    "Créditos que no caducan",
    "Informes descargables en PDF",
    "Soporte técnico incluido"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Keep original design */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Subastas IA Pro" className="h-12 w-auto object-contain" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Subastas IA Pro
              </h1>
            </div>
            <button
              onClick={onGetStarted}
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-16 pb-32 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-base font-medium mb-8">
                <Zap className="w-5 h-5" />
                <span>Análisis inteligente de subastas inmobiliarias</span>
              </div>
              
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Analiza subastas del BOE con{' '}
                <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Inteligencia Artificial
                </span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
                Convierte documentos complejos en información clara. Herramienta profesional de análisis estructurado de subastas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <button 
                  onClick={onGetStarted}
                  className="px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-bold text-xl hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Analiza una subasta
                </button>
                
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-white text-gray-700 rounded-xl font-bold text-xl hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border-2 border-gray-200"
                >
                  Ver precios
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Sube documentación y analiza</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-amber-600" />
                  <span>Análisis orientativo</span>
                </div>
              </div>
            </div>

            {/* Right side - Dashboard mockup */}
            <div className="hidden lg:block relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Análisis de Subasta</h3>
                      <p className="text-sm text-gray-500">Madrid - Zona Centro</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Valoración</div>
                    <div className="text-xl font-bold text-gray-900">€250K-€290K</div>
                    <div className="text-xs text-gray-500 mt-1">Rango estimado</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Score</div>
                    <div className="text-2xl font-bold text-gray-900">8.5</div>
                    <div className="text-xs text-gray-500 mt-1">Bajo riesgo</div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4">
                    <div className="text-sm text-gray-600 mb-1">Cargas</div>
                    <div className="text-2xl font-bold text-gray-900">2</div>
                    <div className="text-xs text-gray-500 mt-1">Detectadas</div>
                  </div>
                </div>

                {/* Property Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Piso 3 dormitorios</h4>
                      <p className="text-sm text-gray-600">C/ Gran Vía, 45 - 120m²</p>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      Oportunidad
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                        Sin ocupantes
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Shield className="w-4 h-4 text-amber-500 mr-1" />
                        Cargas leves
                      </div>
                    </div>
                  </div>
                </div>

                {/* Charges List */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-3 text-sm flex items-center">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mr-2" />
                    Cargas Detectadas
                  </h5>
                  <div className="space-y-3">
                    {/* Hipoteca ejecutante */}
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-700 font-medium">Hipoteca 1ª: €45.000</p>
                          <p className="text-xs text-blue-700 mt-1">Ejecutante de la subasta</p>
                        </div>
                      </div>
                    </div>

                    {/* Embargo posterior */}
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <div className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-xs text-gray-700 font-medium">Embargo: €12.500</p>
                          <p className="text-xs text-green-700 mt-1">Posterior - Se cancela tras adjudicación</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-600 font-medium">Total cargas efectivas:</p>
                      <p className="text-sm font-bold text-green-600">€0</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Cargas se cancelan automáticamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Los desafíos de analizar subastas del BOE
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Invertir en subastas del BOE puede ser rentable, pero la complejidad de la documentación 
              genera incertidumbre y riesgo de decisiones mal informadas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="mb-4 sm:mb-6">
                  {problem.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {problem.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Subastas IA Pro</span> simplifica tu análisis
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nuestra inteligencia artificial procesa la documentación de subastas y te proporciona 
              la información que necesitas para automatizar el estudio legal y contextual antes de pujar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {solutionFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Cómo funciona en 3 pasos
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Un proceso simple y directo para obtener análisis profesionales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-full text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                  {step.number}
                </div>
                
                <div className="mb-4 sm:mb-6 flex justify-center">
                  {step.icon}
                </div>
                
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Qué incluye cada análisis
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Un informe completo que te proporciona toda la información necesaria 
              para evaluar la oportunidad de inversión.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="p-6 sm:p-8 hover:bg-amber-50 rounded-xl transition-colors duration-200">
                <div className="mb-4 sm:mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Modelo transparente de pago por análisis
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              No es una suscripción. Compra análisis y úsalos cuando necesites.
            </p>
             <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Sin permanencia, sin ataduras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {creditPacks.map((pack) => (
              <div
                key={pack.id}
                onMouseEnter={() => setHoveredPack(pack.id)}
                onMouseLeave={() => setHoveredPack(null)}
                className={`relative bg-white rounded-2xl shadow-sm border-2 p-6 sm:p-8 transition-transform duration-200 hover:scale-105 ${
                  pack.popular
                    ? 'border-amber-500 transform scale-105'
                    : 'border-gray-100'
                }`}
              >
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Zap size={14} />
                      Más Popular
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {pack.name}
                  </h4>
                  <div className="mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">€{(pack.price / 100).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="text-amber-600 font-medium mb-2 text-base sm:text-lg">
                    {pack.credits} análisis
                  </div>
                  <div className="text-sm text-gray-500 mb-6 sm:mb-8">
                    €{(pack.price / pack.credits / 100).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} por análisis
                  </div>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                    {pack.description}
                  </p>
                  <button
                    onClick={onGetStarted}
                    className={
                      pack.popular
                        ? 'w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-bold hover:from-amber-600 hover:to-orange-700 transition-all text-base sm:text-lg'
                        : 'w-full py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-all text-base sm:text-lg'
                    }
                  >
                    Comprar análisis
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-sm border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Ventajas de nuestro modelo
            </h4>
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="text-amber-600 flex-shrink-0 mt-0.5" size={22} />
                  <span className="text-gray-700 text-base leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="bg-yellow-50 border-y-2 border-yellow-200 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-yellow-200">
            <div className="flex items-start gap-4 sm:gap-6">
              <AlertTriangleIcon className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                  Aviso Legal Importante
                </h4>
                <div className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p className="font-medium">
                    Subastas IA Pro no sustituye el asesoramiento legal, fiscal ni profesional especializado.
                  </p>
                  <p>
                    La información generada por la inteligencia artificial es orientativa y puede contener errores o imprecisiones. 
                    Los análisis proporcionados no constituyen recomendaciones de inversión ni garantizan la exactitud de la información.
                  </p>
                  <p>
                    El usuario es el único responsable de las decisiones de inversión que tome basándose en estos análisis. 
                    Se recomienda encarecidamente consultar con profesionales cualificados (abogados, asesores fiscales, arquitectos técnicos, etc.) 
                    antes de realizar cualquier inversión inmobiliaria.
                  </p>
                  <p className="text-sm text-gray-600 mt-6">
                    El uso de esta plataforma implica la aceptación de estas limitaciones y la exoneración de responsabilidad 
                    de Subastas IA Pro por cualquier pérdida o daño derivado del uso de la información proporcionada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-8">
            Empieza a analizar subastas con más claridad
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl text-amber-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Deja de perderte en edictos complejos. Obtén la información que necesitas 
            para evaluar oportunidades de inversión inmobiliaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button 
              onClick={onGetStarted}
              className="bg-white text-amber-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center gap-2 text-lg w-full sm:w-auto min-w-[220px] justify-center shadow-lg"
            >
              Comprar créditos
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
              <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Subastas IA" className="h-10 w-auto object-contain" />
              <h4 className="text-xl sm:text-2xl font-bold text-white">SubastasIA</h4>
            </div>
            
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
              Análisis inteligente de subastas del BOE mediante inteligencia artificial. 
              Información orientativa para inversores inmobiliarios.
            </p>
            
            <div className="mb-6 sm:mb-8">
              <a 
                href="mailto:admin@subastasiapro.com"
                className="text-amber-400 hover:text-amber-300 transition-colors text-base sm:text-lg"
              >
                admin@subastasiapro.com
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6 sm:mb-8 text-sm">
              <button 
                type="button"
                onClick={() => onNavigate('terms')} 
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Términos de Servicio
              </button>
              <button 
                type="button"
                onClick={() => onNavigate('privacy')} 
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Política de Privacidad
              </button>
              <button 
                type="button"
                onClick={() => onNavigate('legal')} 
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Aviso Legal
              </button>
            </div>
            
            <div className="pt-6 sm:pt-8 border-t border-gray-800 text-sm text-gray-400">
              <p>© 2026 Subastas IA Pro. Todos los derechos reservados.</p>
              <p className="mt-2">
                Este servicio no sustituye el asesoramiento profesional especializado.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
