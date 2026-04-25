import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation – Top Casinos FR",
  description:
    "Conditions d'utilisation de topcasinosfr.com – veuillez lire avant d'utiliser notre site.",
  alternates: { canonical: "/terms" },
};

const YEAR = new Date().getFullYear();

export default function TermsPage() {
  return (
    <>
      <Header />
      <main
        className="min-h-screen py-16 px-4"
        style={{ background: "var(--surface)" }}
      >
        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-xs font-medium" style={{ color: "#c9a84c" }}>
              ← Retour à l&apos;accueil
            </Link>
          </div>

          <h1 className="text-4xl font-black text-white mb-2">
            Conditions d&apos;<span className="gold-text">Utilisation</span>
          </h1>
          <p className="text-sm mb-8" style={{ color: "rgba(232,232,240,0.5)" }}>
            Dernière mise à jour : janvier {YEAR}
          </p>

          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "rgba(232,232,240,0.75)" }}>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptation des conditions</h2>
              <p>
                En accédant et en utilisant <strong>topcasinosfr.com</strong>, vous acceptez d&apos;être lié
                par ces conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez
                ne pas utiliser notre site. Ce site est exploité par Top Casinos FR.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. À titre informatif uniquement</h2>
              <p>
                Top Casinos FR est un site web indépendant de comparaison et d&apos;avis. Tout le contenu est
                fourni à titre informatif uniquement. Nous n&apos;exploitons pas de casino, de bookmaker ou
                d&apos;opérateur de jeux d&apos;argent. Nous ne sommes pas responsables des décisions de jeu
                prises sur la base de notre contenu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Divulgation des affiliés</h2>
              <p>
                Top Casinos FR peut recevoir une compensation des opérateurs de casino listés sur ce site via
                des liens d&apos;affiliation. Cela n&apos;influence pas nos évaluations, qui restent
                éditorialement indépendantes. Nous vous recommandons de lire les CGU de tout casino avant
                de vous inscrire.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Éligibilité</h2>
              <p>
                Ce site est destiné aux personnes âgées de 18 ans ou plus. En utilisant ce site, vous
                confirmez que vous avez au moins 18 ans. Les jeux d&apos;argent peuvent ne pas être légaux
                dans votre juridiction — il vous incombe de vérifier les lois locales avant de participer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Exactitude du contenu</h2>
              <p>
                Bien que nous nous efforcions de maintenir des informations précises et à jour, les bonus,
                les taux et les offres des casinos changent fréquemment. Vérifiez toujours directement auprès
                de l&apos;opérateur les conditions les plus récentes avant de vous inscrire.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Propriété intellectuelle</h2>
              <p>
                Tout le contenu de ce site, y compris les textes, images et le design, appartient à
                Top Casinos FR, sauf indication contraire. Vous ne pouvez pas reproduire le contenu sans
                autorisation écrite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Limitation de responsabilité</h2>
              <p>
                Top Casinos FR ne sera pas responsable des pertes ou dommages résultant de votre utilisation
                de ce site ou de votre participation à des jeux d&apos;argent sur des sites tiers. Le jeu
                comporte un risque financier — ne jouez jamais plus que ce que vous pouvez vous permettre
                de perdre.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Jeu responsable</h2>
              <p className="mb-2">
                Nous nous engageons pour la promotion du jeu responsable. Si vous êtes concerné par votre
                comportement de jeu ou celui d&apos;un proche :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Appelez{" "}
                  <a href="tel:0974751513" style={{ color: "#c9a84c" }}>
                    09 74 75 13 13
                  </a>{" "}
                  — Joueurs Info Service (gratuit, 24h/24)
                </li>
                <li>
                  Visitez{" "}
                  <a
                    href="https://www.joueurs-info-service.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#c9a84c" }}
                  >
                    joueurs-info-service.fr
                  </a>
                </li>
                <li>
                  Visitez{" "}
                  <a
                    href="https://www.begambleaware.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#c9a84c" }}
                  >
                    BeGambleAware.org
                  </a>{" "}
                  pour un soutien confidentiel
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Droit applicable</h2>
              <p>
                Ces conditions sont régies par les lois françaises applicables. Tout litige sera soumis à la
                juridiction des tribunaux compétents.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications
                prennent effet immédiatement après leur publication. L&apos;utilisation continue du site après
                modifications constitue votre acceptation des nouvelles conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Contact</h2>
              <p>
                Pour toute question concernant ces conditions, contactez-nous via{" "}
                <strong>topcasinosfr.com</strong>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
