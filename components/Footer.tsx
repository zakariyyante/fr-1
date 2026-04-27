"use client";

import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

const navLinks = [
  { href: "/terms", label: "Conditions d'utilisation" },
  { href: "/privacy", label: "Politique de confidentialité" },
  { href: "/cookies", label: "Politique des cookies" },
  { href: "/jeu-responsable", label: "Jeu responsable" },
  { href: "/contact", label: "Contactez-nous" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a0920 0%, #060613 100%)",
        borderTop: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center gap-8 text-center">

        {/* Logo */}
        <Logo />

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-6">
              <Link
                href={link.href}
                className="text-xs font-medium transition-colors hover:underline"
                style={{ color: "rgba(232,232,240,0.6)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a84c")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(232,232,240,0.6)")}
              >
                {link.label}
              </Link>
              {i < navLinks.length - 1 && (
                <span style={{ color: "rgba(232,232,240,0.2)", fontSize: "0.6rem" }}>◆</span>
              )}
            </span>
          ))}
        </nav>

        {/* Contact email */}
        <p className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
          Contact :{" "}
          <a
            href="mailto:contact@topfrplateformes.com"
            className="hover:underline transition-colors"
            style={{ color: "#c9a84c" }}
          >
            contact@topfrplateformes.com
          </a>
        </p>

        {/* Divider */}
        <div className="section-divider w-full" />

        {/* Company info */}
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(232,232,240,0.75)" }}>
            Top Plateformes FR
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(232,232,240,0.4)" }}>
            Site de comparaison indépendant — topfrplateformes.com
            <br />
            Les offres présentées sont soumises aux CGU de chaque opérateur. Ce site est fourni à titre informatif uniquement.
          </p>
        </div>

        {/* Responsible gambling helpline */}
        <p className="text-xs leading-relaxed" style={{ color: "rgba(232,232,240,0.55)" }}>
          Problèmes de jeu :{" "}
          <a
            href="https://www.joueurs-info-service.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "#c9a84c" }}
          >
            Joueurs Info Service
          </a>
          {" "}— Tél :{" "}
          <a href="tel:0974751313" className="font-bold hover:underline" style={{ color: "#c9a84c" }}>
            09 74 75 13 13
          </a>
          {" "}(appel non surtaxé)
        </p>

        {/* Logo strip */}
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
          <Image src="/18+.jpg" alt="18+" width={44} height={44} className="object-contain" unoptimized />
          <a href="https://anj.fr" target="_blank" rel="noopener noreferrer" aria-label="ANJ – Autorité Nationale des Jeux"
            className="opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/anj.png" alt="ANJ – Opérateur Agréé" width={72} height={44} className="object-contain" unoptimized />
          </a>
          <a href="https://mediateurdesjeuxenligne.fr" target="_blank" rel="noopener noreferrer" aria-label="Médiateur des jeux en ligne"
            className="opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/mediateurdesjeux.png" alt="Médiateur des jeux en ligne" width={115} height={44} className="object-contain" unoptimized />
          </a>
          <a href="https://www.gambleaware.org" target="_blank" rel="noopener noreferrer" aria-label="GambleAware"
            className="opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/GambleAware.webp" alt="GambleAware" width={130} height={44} className="object-contain" unoptimized />
          </a>
          <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" aria-label="Joueurs Info Service"
            className="opacity-80 hover:opacity-100 transition-opacity">
            <Image src="/joueurs-info-service.png" alt="Joueurs Info Service" width={115} height={44} className="object-contain" unoptimized />
          </a>
        </div>

        {/* Divider */}
        <div className="section-divider w-full" />

        {/* Copyright */}
        <p style={{ fontSize: "0.7rem", color: "rgba(232,232,240,0.3)" }}>
          © {year} topfrplateformes.com. Tous droits réservés. 18+. Jeu responsable.
        </p>
      </div>
    </footer>
  );
}
