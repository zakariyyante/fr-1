import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité – Top Casinos FR",
  description:
    "Politique de confidentialité de topcasinosfr.com – comment nous collectons, utilisons et protégeons vos données.",
  alternates: { canonical: "/privacy" },
};

const YEAR = new Date().getFullYear();

export default function PrivacyPage() {
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
            Politique de <span className="gold-text">Confidentialité</span>
          </h1>
          <p className="text-sm mb-8" style={{ color: "rgba(232,232,240,0.5)" }}>
            Dernière mise à jour : janvier {YEAR}
          </p>

          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "rgba(232,232,240,0.75)" }}>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
              <p>
                Top Casinos FR (&ldquo;nous&rdquo;, &ldquo;notre&rdquo;) exploite le site web{" "}
                <strong>topcasinosfr.com</strong>. Cette politique de confidentialité explique comment nous
                collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Informations que nous collectons</h2>
              <p className="mb-2">Nous pouvons collecter les types d&apos;informations suivants :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Données de journal :</strong> Adresse IP, type de navigateur, pages visitées,
                  date/heure de visite, temps passé sur les pages et autres données de diagnostic.
                </li>
                <li>
                  <strong>Cookies et suivi :</strong> Nous utilisons des cookies et des technologies de suivi
                  similaires pour améliorer votre expérience et analyser le trafic du site.
                </li>
                <li>
                  <strong>Analytique :</strong> Nous utilisons Vercel Analytics pour comprendre comment les
                  visiteurs interagissent avec notre site. Ces données sont anonymisées et agrégées.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Comment nous utilisons vos informations</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Pour fournir, exploiter et maintenir notre site web</li>
                <li>Pour améliorer et personnaliser l&apos;expérience utilisateur</li>
                <li>Pour surveiller et analyser l&apos;utilisation et les tendances</li>
                <li>Pour se conformer aux obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Cookies</h2>
              <p>
                Nous utilisons des cookies pour stocker les préférences et collecter des données analytiques.
                Vous pouvez configurer votre navigateur pour refuser les cookies ; cela peut cependant affecter
                les fonctionnalités du site. Les opérateurs de casino tiers sur lesquels vous cliquez peuvent
                définir leurs propres cookies conformément à leurs politiques de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Liens vers des tiers</h2>
              <p>
                Notre site contient des liens vers des sites web tiers (opérateurs de casino). Nous ne sommes pas
                responsables des pratiques de confidentialité de ces sites. Nous vous encourageons à lire les
                politiques de confidentialité de tout site tiers que vous visitez.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Sécurité des données</h2>
              <p>
                Nous utilisons des mesures de sécurité standard pour protéger vos informations. Cependant,
                aucune transmission sur Internet n&apos;est totalement sécurisée et nous ne pouvons garantir
                une sécurité absolue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Vos droits (RGPD)</h2>
              <p className="mb-2">
                Si vous êtes résident de l&apos;UE, vous disposez des droits suivants en vertu du RGPD :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l&apos;effacement (&ldquo;droit à l&apos;oubli&rdquo;)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d&apos;opposition au traitement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Modifications de cette politique</h2>
              <p>
                Nous pouvons mettre à jour cette politique de confidentialité périodiquement. Les modifications
                sont effectives immédiatement après leur publication. La date de &ldquo;dernière mise à
                jour&rdquo; en haut de cette page sera révisée.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité, contactez-nous via le site{" "}
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
