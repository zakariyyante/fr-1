export interface Brand {
  name: string;
  logo: string;
  bonus: string;
  url: string;
  votes: number;
  isMobile?: boolean;
  // auto-generated
  id: string;
  rating: number;
  badge: string | null;
}

interface BrandInput {
  name: string;
  logo: string;
  bonus: string;
  url: string;
  votes: number;
  isMobile?: boolean;
}

function generateId(name: string, index: number): string {
  let hash = 0;
  const str = name + index;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

const BADGES = ["Choix de la Rédaction", "Top Choix", "Tendance Actuelle"];

function buildBrands(inputs: BrandInput[]): Brand[] {
  return inputs.map((b, i) => ({
    ...b,
    id: generateId(b.name, i),
    rating: Math.round((10.0 - i * 0.1) * 10) / 10,
    badge: i < 3 ? BADGES[i] : null,
  }));
}

const brandInputs: BrandInput[] = [
  {
    name: "Winamax Casino",
    logo: "/winamax.webp",
    bonus: "100% JUSQU'À 500€ + 20 TOURS GRATUITS",
    url: "https://www.winamax.fr/",
    votes: 5920,
  },
  {
    name: "Unibet Casino",
    logo: "/unibet.webp",
    bonus: "200€ DE BONUS DE BIENVENUE",
    url: "https://www.unibet.fr/",
    votes: 5540,
  },
  {
    name: "Betclic Casino",
    logo: "/betclic.webp",
    bonus: "100% JUSQU'À 200€ + 50 TOURS GRATUITS",
    url: "https://www.betclic.fr/",
    votes: 5210,
  },
  {
    name: "bwin Casino",
    logo: "/bwin.webp",
    bonus: "100% JUSQU'À 300€ SUR 1ER DÉPÔT",
    url: "https://www.bwin.fr/",
    votes: 4890,
  },
  {
    name: "NetBet Casino",
    logo: "/netbet.webp",
    bonus: "150% JUSQU'À 200€ + 20 TOURS GRATUITS",
    url: "https://www.netbet.fr/",
    votes: 4650,
  },
  {
    name: "PMU Casino",
    logo: "/pmu.webp",
    bonus: "100€ OFFERTS SANS DÉPÔT",
    url: "https://www.pmu.fr/",
    votes: 4430,
  },
  {
    name: "Casino Extra",
    logo: "/casinoextra.webp",
    bonus: "300% JUSQU'À 900€ DE BONUS",
    url: "https://www.casinoextra.com/",
    votes: 4210,
  },
  {
    name: "Lucky31 Casino",
    logo: "/lucky31.webp",
    bonus: "150% JUSQU'À 150€ + 31 TOURS GRATUITS",
    url: "https://www.lucky31.com/",
    votes: 3980,
  },
  {
    name: "Cresus Casino",
    logo: "/cresus.webp",
    bonus: "200% JUSQU'À 500€ DE BIENVENUE",
    url: "https://www.cresuscasino.com/",
    votes: 3760,
  },
  // Marques mobiles (affichées dans MobileBrandModal quand ?gclid= présent)
  {
    name: "Lucky Games",
    logo: "/luckygames.webp",
    bonus: "BONUS DE BIENVENUE JUSQU'À 400€",
    url: "https://www.luckygames.fr/",
    votes: 3540,
    isMobile: true,
  },
  {
    name: "Tropezia Palace",
    logo: "/tropeziapalace.webp",
    bonus: "JUSQU'À 600€ DE BONUS DE BIENVENUE",
    url: "https://www.tropeziapalace.com/",
    votes: 3320,
    isMobile: true,
  },
  {
    name: "Dublinbet",
    logo: "/dublinbet.webp",
    bonus: "100% JUSQU'À 200€ + 50 TOURS GRATUITS",
    url: "https://www.dublinbet.com/",
    votes: 3100,
    isMobile: true,
  },
];

export const brands = buildBrands(brandInputs);
export const regularBrands = brands.filter((b) => !b.isMobile);
export const mobileBrands = brands.filter((b) => b.isMobile);
