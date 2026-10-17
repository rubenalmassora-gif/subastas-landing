// Mock data for credit packs (copied from subastas-app)
export interface CreditPack {
  id: string;
  name: string;
  credits: number;
  price: number; // En céntimos (ej: 990 = 9.90€)
  currency: string;
  description: string;
  popular?: boolean;
}

export const creditPacks: CreditPack[] = [
  {
    id: 'pack_basico',
    name: 'Análisis Individual Profesional',
    credits: 1,
    price: 1299, // 12.99€
    currency: 'eur',
    description: 'Para Inversores que quieren estudiar una subasta concreta con mejor estructura antes de decidir'
  },
  {
    id: 'pack_estandar',
    name: 'Pack Profesional',
    credits: 10,
    price: 7999, // 79.99€
    currency: 'eur',
    description: 'Para Inversores activos que analizan varias subastas al mes y buscan eficiencia en sus análisis',
    popular: true
  },
  {
    id: 'pack_inversor',
    name: 'Pack Avanzado',
    credits: 30,
    price: 14999, // 149.99€
    currency: 'eur',
    description: 'Para inversores con volumen recurrente que necesitan una herramienta dentro de su operativa'
  }
];