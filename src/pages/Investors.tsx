import { Button } from "@/components/ui/button";
import { useState } from "react";
import { InvestmentComparisonTable } from "@/components/investors/InvestmentComparisonTable";

const investmentPackages = [
  {
    name: "Starter",
    amount: "1.000 €",
    equity: "0,33 %",
    perks: [
      "Agradecimiento en la web",
      "Acceso anticipado a betas"
    ],
    color: "primary",
    badge: "Económico"
  },
  {
    name: "Explorador",
    amount: "2.500 €",
    equity: "0,83 %",
    perks: [
      "Pack Starter",
      "Invitación a webinar de roadmap"
    ],
    color: "primary",
    badge: "Crecimiento"
  },
  {
    name: "Conquistador",
    amount: "5.000 €",
    equity: "1,67 %",
    perks: [
      "Pack Explorador",
      "6 meses de suscripción premium"
    ],
    color: "primary",
    badge: "Élite"
  },
  {
    name: "Impulsor",
    amount: "10.000 €",
    equity: "3,33 %",
    perks: [
      "Pack Conquistador",
      "Asiento en Advisory Board"
    ],
    color: "primary",
    badge: "Avanzado"
  },
  {
    name: "Co-fundador",
    amount: "20.000 €",
    equity: "6,67 %",
    perks: [
      "Pack Impulsor",
      "Merchandising exclusivo",
      "Invitación VIP a testeo presencial"
    ],
    color: "primary",
    badge: "Exclusivo"
  }
];

function getColorClass(color: string) {
  switch (color) {
    case "primary":
      return "border-primary text-primary";
    case "secondary":
      return "border-secondary text-secondary";
    case "tertiary":
      return "border-[#0003ff] text-[#0003ff]";
    default:
      return "border-accent text-foreground";
  }
}

function InvestmentCard({ pkg }: { pkg: typeof investmentPackages[0] }) {
  return (
    <div
      className={`glass-panel rounded-xl p-8 shadow-lg border-2 ${getColorClass(pkg.color)} flex flex-col items-center relative transition-all duration-300 hover:scale-[1.03] hover:shadow-xl`}
    >
      {pkg.badge && (
        <span className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-muted text-foreground border border-accent shadow-sm`}>{pkg.badge}</span>
      )}
      <h3 className="text-2xl font-bold mb-2 text-center">{pkg.name}</h3>
      <div className="text-3xl font-bold mb-1 text-primary">{pkg.amount}</div>
      <div className="text-lg font-medium mb-4 text-secondary">Equity: {pkg.equity}</div>
      <ul className="mb-6 w-full space-y-2">
        {pkg.perks.map((perk, i) => (
          <li key={i} className="flex items-center gap-2 text-foreground">
            <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
            <span>{perk}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full mt-auto">
        Contactar
      </Button>
    </div>
  );
}

export default function Investors() {
  const [selectedView, setSelectedView] = useState<'cards' | 'comparison'>('cards');

  return (
    <div className="min-h-screen py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center parallax-bg opacity-20" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Paquetes de <span className="text-primary">Inversión</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el paquete que mejor se adapte a ti y forma parte de nuestro crecimiento.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant={selectedView === 'cards' ? 'default' : 'outline'}
              onClick={() => setSelectedView('cards')}
              className="transition-all duration-300 hover:scale-105"
            >
              Ver paquetes
            </Button>
            <Button
              variant={selectedView === 'comparison' ? 'default' : 'outline'}
              onClick={() => setSelectedView('comparison')}
              className="transition-all duration-300 hover:scale-105"
            >
              Comparar paquetes
            </Button>
          </div>
        </div>
        <div className="transition-all duration-300">
          {selectedView === 'cards' ? (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-7xl mx-auto">
              {investmentPackages.map((pkg) => (
                <InvestmentCard key={pkg.name} pkg={pkg} />
              ))}
            </div>
          ) : (
            <InvestmentComparisonTable packages={investmentPackages} />
          )}
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            * Si deseas más información sobre oportunidades de inversión, contacta con nuestro equipo a través de <a href="mailto:mapyourworld7@gmail.com" className="text-primary underline">mapyourworld7@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}