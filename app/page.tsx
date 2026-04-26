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
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge pill */}
            <div className="badge-pill mx-auto mb-6 inline-flex">
              <span className="pulse-dot inline-block w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
              <span>Top Plateformes FR • Mis à jour {YEAR}</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              Les{" "}
              <span className="gold-shimmer">Meilleures Plateformes</span>
              <br />
              en Ligne France {YEAR}
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
              style={{ color: "rgba(232,232,240,0.7)" }}
            >
              Comparatif indépendant des plateformes en ligne les mieux notées.
              Sélectionnées pour leur fiabilité, leurs services et leur expérience utilisateur.
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: "🏆", text: "Plateformes Certifiées" },
                { icon: "✍️", text: "Choix de la Rédaction" },
                { icon: "⚡", text: "Accès Rapide" },
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
        <section id="plateformes" className="py-16 px-4" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                <span className="gold-text">Top Plateformes</span> en Ligne France
              </h2>
              <p className="text-sm" style={{ color: "rgba(232,232,240,0.5)" }}>
                Classement mis à jour chaque semaine selon la fiabilité, les services proposés et les avis utilisateurs
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regularBrands.map((brand, i) => (
                <BrandCard key={brand.id} brand={brand} isOnline={true} rank={i + 1} />
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
              Divulgation : Top Plateformes FR peut percevoir une commission des plateformes référencées. Les
              classements sont éditorialement indépendants et basés sur des critères objectifs. Les offres sont
              soumises aux conditions générales de chaque plateforme.
              <br />
              <span style={{ color: "rgba(245,210,122,0.7)", fontWeight: 600 }}>
                ⚠️ Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le{" "}
                <a href="tel:0974751313" style={{ color: "#f5d27a" }}>09 74 75 13 13</a>
                {" "}(appel non surtaxé) —{" "}
                <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#f5d27a" }}>
                  joueurs-info-service.fr
                </a>
              </span>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── ABOUT / NOTRE MÉTHODE ─────────────────────── */}
        <section
          id="notre-methode"
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
                Comment Nous <span className="gold-text">Évaluons les Plateformes</span>
              </h2>
              <p className="text-sm" style={{ color: "rgba(232,232,240,0.5)" }}>
                Notre méthodologie est transparente, rigoureuse et centrée sur l&apos;utilisateur
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
                  Ce qui rend nos comparatifs{" "}
                  <span className="gold-text">différents ?</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      suit: "♠",
                      text: "Nous ne référençons que des plateformes vérifiées, avec un historique de service fiable et des conditions transparentes.",
                    },
                    {
                      suit: "♦",
                      text: "Nos évaluations prennent en compte la qualité des services, la facilité d'utilisation et la transparence des offres.",
                    },
                    {
                      suit: "♣",
                      text: "Les avis des utilisateurs sont intégrés aux tests de notre équipe pour obtenir une note équilibrée sur 10.",
                    },
                  ].map(({ suit, text }) => (
                    <li key={suit} className="flex items-start gap-3">
                      <span className="gold-text font-bold text-lg flex-shrink-0">{suit}</span>
                      <span className="text-sm" style={{ color: "rgba(232,232,240,0.7)" }}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notre engagement */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(145deg, #141428 0%, #0e0e22 100%)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-4">
                  Notre <span className="gold-text">Engagement</span>
                </h3>
                <p className="text-sm mb-4" style={{ color: "rgba(232,232,240,0.6)" }}>
                  Nous nous engageons à fournir des informations objectives, claires et à jour pour aider
                  les utilisateurs à faire des choix éclairés.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: "✓", text: "Indépendance éditoriale totale" },
                    { icon: "✓", text: "Mise à jour hebdomadaire des classements" },
                    { icon: "✓", text: "Transparence sur nos critères d'évaluation" },
                  ].map(({ icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <span className="font-bold" style={{ color: "#c9a84c" }}>{icon}</span>
                      <span className="text-sm" style={{ color: "rgba(232,232,240,0.7)" }}>{text}</span>
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
          {/* Logos strip */}
          <div
            className="py-4 px-4"
            style={{
              background: "rgba(201,168,76,0.06)",
              borderBottom: "1px solid rgba(201,168,76,0.1)",
            }}
          >
            <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <Image src="/18+.jpg" alt="18+" width={36} height={36} className="object-contain opacity-80" unoptimized />
              <Image src="/GambleAware.webp" alt="GambleAware" width={120} height={36} className="object-contain opacity-80" unoptimized />
              <Image src="/GamCare.svg" alt="GamCare" width={90} height={36} className="object-contain opacity-80" unoptimized />
              <Image src="/gordonmoody.png" alt="Gordon Moody" width={80} height={36} className="object-contain opacity-80" unoptimized />
              <Image src="/anj_logo.png" alt="ANJ" width={60} height={36} className="object-contain opacity-80" unoptimized />
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
                    <a href="#plateformes" className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
                      Top Plateformes
                    </a>
                  </li>
                  <li>
                    <a href="#notre-methode" className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
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
                  <li>
                    <Link href="/contact" className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
                      Nous Contacter
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
                  Avertissement
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(232,232,240,0.4)" }}>
                  Top Plateformes FR est un site de comparaison indépendant. Nous pouvons percevoir une commission
                  des plateformes référencées. Toutes les offres sont soumises aux conditions générales
                  d&apos;utilisation de chaque service. Ce site est fourni à titre informatif uniquement.
                </p>
              </div>
            </div>

            <div className="section-divider mb-6" />
            <p className="text-center text-xs" style={{ color: "rgba(232,232,240,0.3)" }}>
              © {YEAR} topfrplateformes.com. À titre informatif uniquement. Tous droits réservés.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
