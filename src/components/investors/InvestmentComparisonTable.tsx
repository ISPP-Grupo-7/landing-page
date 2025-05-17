import React from "react";

interface InvestmentPackage {
  name: string;
  amount: string;
  equity: string;
  perks: string[];
  badge: string;
}

interface InvestmentComparisonTableProps {
  packages: InvestmentPackage[];
}

export const InvestmentComparisonTable: React.FC<InvestmentComparisonTableProps> = ({ packages }) => {
  // Encuentra el máximo número de perks para alinear filas
  const maxPerks = Math.max(...packages.map(pkg => pkg.perks.length));

  return (
    <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg overflow-x-auto">
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="py-4 text-left text-lg font-semibold">Paquete</th>
            {packages.map(pkg => (
              <th key={pkg.name} className="py-4 text-lg font-bold text-primary">
                {pkg.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-4 text-left font-medium">Inversión</td>
            {packages.map(pkg => (
              <td key={pkg.name} className="py-4 text-2xl font-bold text-primary">{pkg.amount}</td>
            ))}
          </tr>
          <tr className="border-t">
            <td className="py-4 text-left font-medium">Equity (post-money)</td>
            {packages.map(pkg => (
              <td key={pkg.name} className="py-4 text-lg font-semibold text-secondary">{pkg.equity}</td>
            ))}
          </tr>
          <tr className="border-t">
            <td className="py-4 text-left font-medium">Ventajas</td>
            {packages.map(pkg => (
              <td key={pkg.name} className="py-4">
                {pkg.perks.length > 0 ? (
                  <span className="inline-flex flex-col items-start gap-2 text-foreground whitespace-pre-line">
                    {pkg.perks.join('\n')}
                  </span>
                ) : null}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};