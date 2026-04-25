export interface Brand {
  name: string;
  logo: string;
  offer: string;
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
  offer: string;
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
    name: "bwin",
    logo: "/bwin_dark.png",
    offer: "PLATEFORME INTERNATIONALE — SERVICES DIVERSIFIÉS",
    url: "https://www.bwin.fr/",
    votes: 4890,
  }
];

export const brands = buildBrands(brandInputs);
export const regularBrands = brands.filter((b) => !b.isMobile);
export const mobileBrands = brands.filter((b) => b.isMobile);
