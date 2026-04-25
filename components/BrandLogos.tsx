// SVG fallback logos keyed by brand name slug
const BrandLogos: Record<string, React.ReactElement> = {
  wimaxcasino: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#e63329" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="14">
        Winamax
      </text>
    </svg>
  ),
  winamaxcasino: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#e63329" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="14">
        Winamax
      </text>
    </svg>
  ),
  unibetcasino: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#147b45" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="14">
        Unibet
      </text>
    </svg>
  ),
  betcliccasino: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#0066cc" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="14">
        Betclic
      </text>
    </svg>
  ),
  bwincasino: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#ff6600" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="16">
        bwin
      </text>
    </svg>
  ),
  netbetcasino: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#c00" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="14">
        NetBet
      </text>
    </svg>
  ),
  pmucasino: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#003087" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="16">
        PMU
      </text>
    </svg>
  ),
  casinoextra: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#7b1fa2" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="12">
        Casino Extra
      </text>
    </svg>
  ),
  lucky31casino: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#c9a84c" />
      <text x="60" y="27" textAnchor="middle" fill="#1a1a1a" fontFamily="Arial" fontWeight="bold" fontSize="13">
        Lucky31
      </text>
    </svg>
  ),
  cresuscasino: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#1a3a8f" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="13">
        Cresus
      </text>
    </svg>
  ),
  luckygames: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#2e7d32" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="12">
        Lucky Games
      </text>
    </svg>
  ),
  tropeziapalace: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#880e4f" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="10">
        Tropezia Palace
      </text>
    </svg>
  ),
  dublinbet: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="120" height="40" rx="6" fill="#00695c" />
      <text x="60" y="27" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="12">
        Dublinbet
      </text>
    </svg>
  ),
};

export function getLogoKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export default BrandLogos;
