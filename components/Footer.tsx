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
      {/* Jouez Responsable Strip */}
      <div
        className="py-4 px-4"
        style={{
          background: "rgba(201,168,76,0.06)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#c9a84c" }}>
            Jouez Responsable
          </span>
          <Image
            src="/18plus.png"
            alt="18+ uniquement"
            width={36}
            height={36}
            className="object-contain opacity-80"
            unoptimized
          />
          <a
            href="https://www.gambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
            aria-label="BeGambleAware"
          >
            <Image
              src="/gambleaware.png"
              alt="BeGambleAware"
              width={120}
              height={36}
              className="object-contain"
              unoptimized
            />
          </a>
          <a
            href="https://www.gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
            aria-label="GamCare"
          >
            <Image
              src="/gamcare.png"
              alt="GamCare"
              width={90}
              height={36}
              className="object-contain"
              unoptimized
            />
          </a>
          <a
            href="https://www.gamstop.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
            aria-label="GamStop"
          >
            <Image
              src="/gamestop.png"
              alt="GamStop"
              width={80}
              height={36}
              className="object-contain"
              unoptimized
            />
          </a>
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
                { href: "#casinos", label: "Top Casinos" },
                { href: "#comment-nous-classons", label: "Notre Méthode" },
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
            </ul>
          </div>

          {/* Avertissement (spans 2 cols) */}
          <div className="col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
              Avertissement
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(232,232,240,0.4)" }}>
              Top Casinos FR est un site de comparaison indépendant. Nous pouvons recevoir une commission
              des casinos listés. Toutes les offres sont soumises aux conditions générales. Le jeu implique
              des risques — ne jouez qu&apos;avec de l&apos;argent que vous pouvez vous permettre de perdre.
              Ligne d&apos;aide nationale jeu :{" "}
              <a
                href="tel:0974751513"
                style={{ color: "#c9a84c" }}
                className="hover:underline"
              >
                09 74 75 13 13
              </a>{" "}
              (gratuit, 24h/24). Pour de l&apos;aide visitez{" "}
              <a
                href="https://www.joueurs-info-service.fr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c9a84c" }}
                className="hover:underline"
              >
                joueurs-info-service.fr
              </a>.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="section-divider mb-6" />
        <p className="text-center text-xs" style={{ color: "rgba(232,232,240,0.3)" }}>
          © {year} topcasinosfr.com. À titre informatif uniquement. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
