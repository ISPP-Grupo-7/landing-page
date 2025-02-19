import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Plan() {
  const [selectedView, setSelectedView] = useState<'cards' | 'comparison'>('cards');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const features = {
    basic: {
      "Registro de ubicaciones": {
        available: true,
        limit: "Hasta 50 ubicaciones",
        tooltip: "Guarda tus lugares favoritos con fotos y notas"
      },
      "Compartir experiencias": {
        available: true,
        limit: "Básico",
        tooltip: "Comparte tus viajes en la comunidad"
      },
      "Visualización de mapas": {
        available: true,
        limit: "Estándar",
        tooltip: "Visualiza tus ubicaciones en el mapa"
      },
      "Comunidad de viajeros": {
        available: true,
        limit: "Acceso básico",
        tooltip: "Conecta con otros viajeros"
      },
      "Anuncios": {
        available: true,
        limit: "Incluidos",
        tooltip: "Verás anuncios mientras usas la app"
      }
    },
    premium: {
      "Registro de ubicaciones": {
        available: true,
        limit: "Ilimitado",
        tooltip: "Sin límites en el registro de ubicaciones"
      },
      "Compartir experiencias": {
        available: true,
        limit: "Avanzado",
        tooltip: "Comparte con funciones premium y más detalles"
      },
      "Visualización de mapas": {
        available: true,
        limit: "Premium",
        tooltip: "Mapas personalizados y más capas de información"
      },
      "Comunidad de viajeros": {
        available: true,
        limit: "Acceso VIP",
        tooltip: "Acceso prioritario a eventos y contenido exclusivo"
      },
      "Anuncios": {
        available: false,
        limit: "Sin anuncios",
        tooltip: "Experiencia libre de anuncios"
      },
      "Estadísticas avanzadas": {
        available: true,
        limit: "Completo",
        tooltip: "Análisis detallado de tus viajes"
      },
      "Soporte prioritario": {
        available: true,
        limit: "24/7",
        tooltip: "Atención personalizada prioritaria"
      }
    }
  };

  const plans = [
    {
      name: "Gratuito",
      price: "0€",
      description: "Perfecto para empezar tu aventura",
      features: features.basic,
      buttonText: "Comenzar gratis",
      buttonLink: "/register",
      highlighted: false,
      badge: "Popular"
    },
    {
      name: "Premium",
      price: "5,50€",
      period: "/mes",
      description: "Para viajeros apasionados",
      features: features.premium,
      buttonText: "Próximamente",
      buttonLink: "#",
      highlighted: true,
      badge: "Próximamente"
    }
  ];

  const FeatureTooltip = ({ content }: { content: string }) => (
    <Tooltip>
      <TooltipTrigger>
        <HelpCircle className="w-4 h-4 text-gray-400 hover:text-[#40CEB5] transition-colors" />
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  );

  return (
    <div className="min-h-screen py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center parallax-bg opacity-20" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Planes y Precios</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus aventuras. Comienza gratis y actualiza cuando lo necesites.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant={selectedView === 'cards' ? 'default' : 'outline'}
              onClick={() => setSelectedView('cards')}
              className="transition-all duration-300 hover:scale-105"
            >
              Ver planes
            </Button>
            <Button
              variant={selectedView === 'comparison' ? 'default' : 'outline'}
              onClick={() => setSelectedView('comparison')}
              className="transition-all duration-300 hover:scale-105"
            >
              Comparar planes
            </Button>
          </div>
        </div>

        <div className="transition-all duration-300">
          {selectedView === 'cards' ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`
                    glass-panel p-8 rounded-xl transition-all duration-300
                    ${hoveredPlan === plan.name ? 'transform-gpu scale-[1.02] shadow-lg' : 'transform-gpu scale-100'}
                    ${plan.highlighted ? 'border-2 border-[#40CEB5]' : ''}
                  `}
                  onMouseEnter={() => setHoveredPlan(plan.name)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 -right-3">
                      <span className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${plan.badge === 'Popular' ? 'bg-[#40CEB5] text-white' : 'bg-secondary text-white'}
                      `}>
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                      {plan.name}
                      {plan.highlighted && <Sparkles className="w-5 h-5 text-[#40CEB5]" />}
                    </h3>
                    <div className="text-4xl font-bold text-[#40CEB5] mb-2">
                      {plan.price}
                      {plan.period && <span className="text-lg text-gray-600">{plan.period}</span>}
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {Object.entries(plan.features).map(([feature, details]) => (
                      <li key={feature} className="flex items-center gap-3 group">
                        {details.available ? (
                          <Check className="w-5 h-5 text-[#40CEB5]" />
                        ) : (
                          <X className="w-5 h-5 text-red-500" />
                        )}
                        <span className="flex-1">{feature}</span>
                        <span className="text-sm text-gray-500">{details.limit}</span>
                        <FeatureTooltip content={details.tooltip} />
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`
                      w-full h-12 transition-all duration-300
                      ${plan.highlighted
                        ? 'bg-[#40CEB5] hover:bg-[#40CEB5]/90 text-white'
                        : 'bg-white border-2 border-[#40CEB5] text-[#40CEB5] hover:bg-[#40CEB5]/10'
                      }
                      font-medium rounded-lg hover:scale-105
                    `}
                    onClick={() => window.location.href = plan.buttonLink}
                    disabled={plan.buttonText === 'Próximamente'}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left py-4">Característica</th>
                    {plans.map(plan => (
                      <th key={plan.name} className="text-center py-4">
                        <div className="font-bold text-xl mb-2">{plan.name}</div>
                        <div className="text-[#40CEB5] font-bold">
                          {plan.price}
                          {plan.period}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(features.premium).map(feature => (
                    <tr key={feature} className="border-t">
                      <td className="py-4 flex items-center gap-2">
                        {feature}
                        <FeatureTooltip content={
                          features.premium[feature].tooltip || features.basic[feature]?.tooltip
                        } />
                      </td>
                      {plans.map(plan => (
                        <td key={`${plan.name}-${feature}`} className="text-center py-4">
                          {plan.features[feature] ? (
                            <div className="flex flex-col items-center gap-1">
                              {plan.features[feature].available ? (
                                <Check className="w-5 h-5 text-[#40CEB5]" />
                              ) : (
                                <X className="w-5 h-5 text-red-500" />
                              )}
                              <span className="text-sm text-gray-500">
                                {plan.features[feature].limit}
                              </span>
                            </div>
                          ) : (
                            <X className="w-5 h-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            * El plan Premium estará disponible próximamente. Mientras tanto, disfruta de todas las funcionalidades básicas de forma gratuita.
          </p>
        </div>
      </div>
    </div>
  );
} 