"use client";

import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #060612 0%, #030308 100%)",
        borderTop: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      {/* Logos strip */}
      <div
        className="py-4 px-4"
        style={{
          background: "rgba(201,168,76,0.06)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <Image
            src="/18+.jpg"
            alt="18+"
            width={36}
            height={36}
            className="object-contain opacity-80"
            unoptimized
          />
          <Image
            src="/GambleAware.webp"
            alt="GambleAware"
            width={120}
            height={36}
            className="object-contain opacity-80"
            unoptimized
          />
          <Image
            src="/GamCare.svg"
            alt="GamCare"
            width={90}
            height={36}
            className="object-contain opacity-80"
            unoptimized
          />
          <Image
            src="/gordonmoody.png"
            alt="Gordon Moody"
            width={80}
            height={36}
            className="object-contain opacity-80"
            unoptimized
          />
          <Image
            src="/anj_logo.png"
            alt="ANJ"
            width={60}
            height={36}
            className="object-contain opacity-80"
            unoptimized
          />
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Logo centred */}
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Liens Rapides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
              Liens Rapides
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#plateformes", label: "Top Plateformes" },
                { href: "#notre-methode", label: "Notre Méthode" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-xs transition-colors"
                    style={{ color: "rgba(232,232,240,0.5)" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a84c")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(232,232,240,0.5)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
              Légal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-xs transition-colors"
                  style={{ color: "rgba(232,232,240,0.5)" }}
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs transition-colors"
                  style={{ color: "rgba(232,232,240,0.5)" }}
                >
                  Conditions d&apos;Utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs transition-colors"
                  style={{ color: "rgba(232,232,240,0.5)" }}
                >
                  Nous Contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Avertissement (spans 2 cols) */}
          <div className="col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
              Avertissement
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(232,232,240,0.4)" }}>
                Top Plateformes FR est un site de comparaison indépendant à titre informatif. Nous pouvons
                percevoir une commission des plateformes référencées. Toutes les offres sont soumises aux
                conditions générales d&apos;utilisation de chaque plateforme.
                <br /><br />
                <strong style={{ color: "rgba(245,210,122,0.8)" }}>
                  ⚠️ Jouer comporte des risques : endettement, isolement, dépendance.
                </strong>{" "}
                Pour être aidé, appelez le{" "}
                <a href="tel:0974751313" style={{ color: "#c9a84c" }} className="hover:underline">
                  09 74 75 13 13
                </a>{" "}
                (appel non surtaxé) —{" "}
                <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer"
                  style={{ color: "#c9a84c" }} className="hover:underline">
                  joueurs-info-service.fr
                </a>
              </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="section-divider mb-6" />
        <p className="text-center text-xs" style={{ color: "rgba(232,232,240,0.3)" }}>
          © {year} topfrplateformes.com. À titre informatif uniquement. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
