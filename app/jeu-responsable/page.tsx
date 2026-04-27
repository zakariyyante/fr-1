import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jeu Responsable – Top Plateformes FR",
  description: "Informations sur le jeu responsable, aide et ressources pour les joueurs en difficulté en France.",
  alternates: { canonical: "/jeu-responsable" },
};

export default function JeuResponsablePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 px-4" style={{ background: "var(--surface)" }}>
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-xs font-medium" style={{ color: "#c9a84c" }}>
              ← Retour à l&apos;accueil
            </Link>
          </div>

          <h1 className="text-4xl font-black text-white mb-2">
            Jeu <span className="gold-text">Responsable</span>
          </h1>
          <p className="text-sm mb-8" style={{ color: "rgba(232,232,240,0.5)" }}>
            Le jeu doit rester un divertissement. Jouez dans vos limites.
          </p>

          {/* Warning banner */}
          <div
            className="rounded-2xl p-6 mb-10"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(139,92,246,0.08))",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            <p className="text-sm font-semibold text-center" style={{ color: "#f5d27a", lineHeight: 1.7 }}>
              ⚠️ Jouer comporte des risques : endettement, isolement, dépendance.
              <br />
              Pour être aidé, appelez le{" "}
              <a href="tel:0974751313" className="font-black underline" style={{ color: "#f5d27a" }}>
                09 74 75 13 13
              </a>
              {" "}(appel non surtaxé, 7j/7)
            </p>
          </div>

          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "rgba(232,232,240,0.75)" }}>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Reconnaître un problème de jeu</h2>
              <p className="mb-3">Certains signes peuvent indiquer que le jeu devient problématique :</p>
              <ul className="list-disc pl-6 space-y-1" style={{ color: "rgba(232,232,240,0.7)" }}>
                <li>Jouer avec de l&apos;argent que vous ne pouvez pas vous permettre de perdre</li>
                <li>Penser constamment au jeu</li>
                <li>Tenter de récupérer ses pertes en jouant davantage</li>
                <li>Mentir à ses proches sur sa pratique du jeu</li>
                <li>Négliger ses obligations professionnelles ou familiales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Ressources d&apos;aide en France</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    href: "https://www.joueurs-info-service.fr",
                    logo: "/joueurs-info-service.png",
                    name: "Joueurs Info Service",
                    desc: "Ligne d'écoute et de conseil 7j/7. Tél : 09 74 75 13 13 (appel non surtaxé)",
                    w: 120,
                  },
                  {
                    href: "https://anj.fr",
                    logo: "/anj.png",
                    name: "ANJ – Autorité Nationale des Jeux",
                    desc: "Régulateur français des jeux. Auto-exclusion, interdiction volontaire de jeu.",
                    w: 70,
                  },
                  {
                    href: "https://mediateurdesjeuxenligne.fr",
                    logo: "/mediateurdesjeux.png",
                    name: "Médiateur des jeux en ligne",
                    desc: "Résolution des litiges entre joueurs et opérateurs agréés.",
                    w: 120,
                  },
                  {
                    href: "https://www.gambleaware.org",
                    logo: "/GambleAware.webp",
                    name: "GambleAware",
                    desc: "Conseils et soutien gratuits pour les personnes affectées par le jeu.",
                    w: 130,
                  },
                ].map(({ href, logo, name, desc, w }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl p-4 flex flex-col gap-3 transition-all"
                    style={{
                      background: "linear-gradient(145deg, #141428, #0e0e22)",
                      border: "1px solid rgba(201,168,76,0.15)",
                    }}
                  >
                    <Image src={logo} alt={name} width={w} height={36} className="object-contain" unoptimized />
                    <div>
                      <p className="text-xs font-bold text-white mb-1">{name}</p>
                      <p className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>{desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Conseils pour jouer responsable</h2>
              <ul className="list-disc pl-6 space-y-2" style={{ color: "rgba(232,232,240,0.7)" }}>
                <li>Fixez-vous un budget strict avant de jouer et ne le dépassez jamais</li>
                <li>Considérez toute perte comme le coût du divertissement</li>
                <li>Ne jouez jamais pour tenter de récupérer vos pertes</li>
                <li>Utilisez les outils de dépôt limité et d&apos;auto-exclusion proposés par les opérateurs</li>
                <li>Ne jouez jamais sous l&apos;effet de l&apos;alcool ou du stress</li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
