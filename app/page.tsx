"use client";

import Image from "next/image";
import Header from "@/components/Header";
import BrandCard from "@/components/BrandCard";
import Footer from "@/components/Footer";
import MobileBrandModal from "@/components/MobileBrandModal";
import Logo from "@/components/Logo";
import Link from "next/link";
import { regularBrands } from "@/data/brands";

const YEAR = new Date().getFullYear();

export default function HomePage() {
  return (
    <>
      {/* Mobile Brand Modal – renders only when ?gclid= present */}
      <MobileBrandModal />

      <Header />

      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="hero-bg relative overflow-hidden py-20 md:py-28 px-4">
          {/* Decorative card suits */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          >
            {["♠", "♥", "♦", "♣"].map((suit, i) => (
              <span
                key={suit}
                className="suit-float absolute text-white select-none"
                style={{
                  fontSize: "clamp(80px, 15vw, 200px)",
                  left: `${[10, 25, 65, 80][i]}%`,
                  top: `${[5, 55, 10, 50][i]}%`,
                  color: i % 2 === 0 ? "#c9a84c" : "#1a3a8f",
                  animationDelay: `${i * 1.5}s`,
                }}
              >
                {suit}
              </span>
            ))}
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge pill */}
            <div className="badge-pill mx-auto mb-6 inline-flex">
              <span className="pulse-dot inline-block w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
              <span>Top Casinos FR • Mis à jour {YEAR}</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              Les{" "}
              <span className="gold-shimmer">Meilleurs Casinos</span>
              <br />
              en Ligne France {YEAR}
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
              style={{ color: "rgba(232,232,240,0.7)" }}
            >
              Revus et classés indépendamment. Seuls les casinos agréés ANJ avec
              bonus vérifiés et paiements rapides figurent sur notre liste.
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: "🏆", text: "Licencié ANJ" },
                { icon: "✍️", text: "Choix de la Rédaction" },
                { icon: "⚡", text: "Paiements Rapides" },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "rgba(232,232,240,0.8)",
                  }}
                >
                  <span>{icon}</span>
                  <span>{text}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── BRAND CARDS ────────────────────────────────── */}
        <section id="casinos" className="py-16 px-4" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                <span className="gold-text">Top Casinos</span> en Ligne France
              </h2>
              <p className="text-sm" style={{ color: "rgba(232,232,240,0.5)" }}>
                Classements mis à jour chaque semaine selon les bonus, licences, variété de jeux et vitesse de paiement
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regularBrands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} isOnline={true} />
              ))}
            </div>

            {/* Disclaimer */}
            <div
              className="mt-8 rounded-xl px-6 py-4 text-xs leading-relaxed text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "rgba(232,232,240,0.4)",
              }}
            >
              Divulgation publicitaire : Top Casinos FR peut recevoir une rémunération des casinos listés. Les classements
              sont éditorialement indépendants. Nouveaux clients uniquement. 18+. CGU applicables.
              Le jeu peut être addictif — jouez responsablement.{" "}
              <a
                href="https://www.joueurs-info-service.fr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c9a84c" }}
              >
                joueurs-info-service.fr
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── ABOUT / COMMENT NOUS CLASSONS ─────────────── */}
        <section
          id="comment-nous-classons"
          className="py-16 px-4"
          style={{
            background: "linear-gradient(180deg, #0b0b1c 0%, #060612 100%)",
            borderTop: "1px solid rgba(201,168,76,0.1)",
            borderBottom: "1px solid rgba(201,168,76,0.1)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-white mb-3">
                Comment Nous <span className="gold-text">Classons les Casinos</span>
              </h2>
              <p className="text-sm" style={{ color: "rgba(232,232,240,0.5)" }}>
                Notre méthodologie est transparente, rigoureuse et centrée sur le joueur
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ce qui rend nos avis différents */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(145deg, #141428 0%, #0e0e22 100%)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-4">
                  Ce qui rend nos avis{" "}
                  <span className="gold-text">différents ?</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      suit: "♠",
                      text: "Nous ne présentons que des casinos agréés ANJ avec des dossiers de paiement vérifiés et des conditions équitables.",
                    },
                    {
                      suit: "♦",
                      text: "Nos évaluations de bonus tiennent compte des exigences de mise, des limites de temps et des restrictions de jeux.",
                    },
                    {
                      suit: "♣",
                      text: "Les avis des joueurs sont pondérés avec les tests d'experts pour un score équilibré sur 10.",
                    },
                  ].map(({ suit, text }) => (
                    <li key={suit} className="flex items-start gap-3">
                      <span className="gold-text font-bold text-lg flex-shrink-0">{suit}</span>
                      <span className="text-sm" style={{ color: "rgba(232,232,240,0.7)" }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Jeu Responsable */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(145deg, #141428 0%, #0e0e22 100%)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-4">
                  Jeu <span className="gold-text">Responsable</span>
                </h3>
                <p className="text-sm mb-4" style={{ color: "rgba(232,232,240,0.6)" }}>
                  Le jeu doit rester un divertissement, pas une solution financière. Si vous pensez avoir un problème,
                  de l&apos;aide est disponible 24h/24.
                </p>
                <ul className="space-y-2">
                  {[
                    {
                      href: "https://www.begambleaware.org",
                      label: "BeGambleAware",
                      desc: "Soutien et conseils gratuits",
                    },
                    {
                      href: "https://www.gamcare.org.uk",
                      label: "GamCare",
                      desc: "Conseil et soutien",
                    },
                    {
                      href: "https://www.joueurs-info-service.fr",
                      label: "Joueurs Info Service",
                      desc: "09 74 75 13 13 — Gratuit, 24h/24",
                    },
                  ].map(({ href, label, desc }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 group"
                      >
                        <span
                          className="text-xs font-bold transition-colors"
                          style={{ color: "#c9a84c" }}
                        >
                          {label}
                        </span>
                        <span className="text-xs" style={{ color: "rgba(232,232,240,0.4)" }}>
                          — {desc}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER (inline) ─────────────────────────────── */}
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
            <div className="flex justify-center mb-8">
              <Logo />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
                  Liens Rapides
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#casinos" className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
                      Top Casinos
                    </a>
                  </li>
                  <li>
                    <a href="#comment-nous-classons" className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
                      Notre Méthode
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
                  Légal
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
                      Politique de Confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
                      Conditions d&apos;Utilisation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
                  Avertissement
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(232,232,240,0.4)" }}>
                  Top Casinos FR est un site de comparaison indépendant. Nous pouvons recevoir une commission
                  des casinos listés. Toutes les offres sont soumises aux CGU. Le jeu comporte des risques.
                  Ligne d&apos;aide nationale jeu :{" "}
                  <a href="tel:0974751513" style={{ color: "#c9a84c" }}>
                    09 74 75 13 13
                  </a>{" "}
                  (gratuit, 24h/24).
                </p>
              </div>
            </div>

            <div className="section-divider mb-6" />
            <p className="text-center text-xs" style={{ color: "rgba(232,232,240,0.3)" }}>
              © {YEAR} topcasinosfr.com. À titre informatif uniquement. Tous droits réservés.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
