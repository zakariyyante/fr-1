import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique des Cookies – Top Plateformes FR",
  description: "Politique des cookies de topfrplateformes.com – utilisation des cookies et technologies de suivi.",
  alternates: { canonical: "/cookies" },
};

const YEAR = new Date().getFullYear();

export default function CookiesPage() {
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
            Politique des <span className="gold-text">Cookies</span>
          </h1>
          <p className="text-sm mb-8" style={{ color: "rgba(232,232,240,0.5)" }}>
            Dernière mise à jour : janvier {YEAR}
          </p>
          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "rgba(232,232,240,0.75)" }}>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
              <p>
                Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, tablette, smartphone)
                lors de la visite d&apos;un site web. Il permet au site de mémoriser vos actions et préférences
                sur une période donnée.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Cookies que nous utilisons</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cookies techniques essentiels :</strong> nécessaires au fonctionnement du site
                  (navigation, sécurité). Ils ne peuvent pas être désactivés.
                </li>
                <li>
                  <strong>Cookies analytiques :</strong> nous utilisons Vercel Analytics pour mesurer
                  l&apos;audience de manière anonyme et agrégée, sans collecte de données personnelles identifiables.
                </li>
                <li>
                  <strong>Cookies tiers :</strong> les plateformes vers lesquelles pointent nos liens
                  peuvent déposer leurs propres cookies. Nous n&apos;avons pas de contrôle sur ces cookies.
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Gestion des cookies</h2>
              <p className="mb-2">
                Vous pouvez à tout moment modifier les paramètres de votre navigateur pour refuser ou
                supprimer les cookies. Voici comment procéder selon votre navigateur :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Chrome : Paramètres → Confidentialité → Cookies</li>
                <li>Firefox : Options → Vie privée → Cookies</li>
                <li>Safari : Préférences → Confidentialité → Cookies</li>
                <li>Edge : Paramètres → Confidentialité → Cookies</li>
              </ul>
              <p className="mt-2">
                Attention : la désactivation de certains cookies peut affecter le bon fonctionnement du site.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Durée de conservation</h2>
              <p>
                Les cookies analytiques sont conservés pour une durée maximale de 13 mois. Les cookies
                de session sont supprimés à la fermeture du navigateur.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Contact</h2>
              <p>
                Pour toute question relative à notre utilisation des cookies, contactez-nous via{" "}
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
