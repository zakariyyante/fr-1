import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation – Top Plateformes FR",
  description:
    "Conditions d'utilisation de topfrplateformes.com – veuillez lire avant d'utiliser notre site de comparaison.",
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
                En accédant et en utilisant <strong>topfrplateformes.com</strong>, vous acceptez d&apos;être lié
                par ces conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez
                ne pas utiliser notre site. Ce site est exploité par Top Plateformes FR.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. À titre informatif uniquement</h2>
              <p>
                Top Plateformes FR est un site web indépendant de comparaison et d&apos;évaluation de
                plateformes en ligne. Tout le contenu est fourni à titre informatif uniquement. Nous
                n&apos;exploitons aucune des plateformes référencées sur ce site. Nous ne sommes pas
                responsables des décisions prises sur la base de notre contenu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Divulgation des affiliés</h2>
              <p>
                Top Plateformes FR peut percevoir une rémunération des plateformes référencées via des liens
                d&apos;affiliation. Cela n&apos;influence pas nos évaluations, qui restent éditorialement
                indépendantes. Nous vous recommandons de lire les CGU de chaque plateforme avant toute
                inscription.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Exactitude du contenu</h2>
              <p>
                Bien que nous nous efforcions de maintenir des informations précises et à jour, les offres
                et les conditions des plateformes peuvent changer. Vérifiez toujours directement auprès de
                la plateforme les informations les plus récentes avant de vous inscrire.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Propriété intellectuelle</h2>
              <p>
                Tout le contenu de ce site, y compris les textes, images et le design, appartient à
                Top Plateformes FR, sauf indication contraire. Vous ne pouvez pas reproduire le contenu
                sans autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Limitation de responsabilité</h2>
              <p>
                Top Plateformes FR ne sera pas responsable des pertes ou dommages résultant de votre
                utilisation de ce site ou de votre inscription sur des plateformes tierces. L&apos;utilisation
                de toute plateforme référencée se fait sous votre entière responsabilité.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Droit applicable</h2>
              <p>
                Ces conditions sont régies par les lois françaises applicables. Tout litige sera soumis à
                la juridiction des tribunaux compétents en France.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications
                prennent effet immédiatement après leur publication. L&apos;utilisation continue du site
                après modifications constitue votre acceptation des nouvelles conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Contact</h2>
              <p>
                Pour toute question concernant ces conditions, contactez-nous via{" "}
                <strong>topfrplateformes.com</strong>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
