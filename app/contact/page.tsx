import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nous Contacter – Top Plateformes FR",
  description:
    "Contactez l'équipe de topfrplateformes.com pour toute question relative à notre comparatif de plateformes en ligne.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
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
            Nous <span className="gold-text">Contacter</span>
          </h1>
          <p className="text-sm mb-10" style={{ color: "rgba(232,232,240,0.5)" }}>
            Une question, une suggestion ou une demande de partenariat ? Nous vous répondons sous 48h.
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(145deg, #141428 0%, #0e0e22 100%)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div className="text-2xl mb-3">✉️</div>
              <h2 className="text-base font-bold text-white mb-1">Email</h2>
              <p className="text-xs mb-3" style={{ color: "rgba(232,232,240,0.5)" }}>
                Pour toute question générale ou demande d&apos;information.
              </p>
              <a
                href="mailto:contact@topfrplateformes.com"
                className="text-sm font-semibold hover:underline"
                style={{ color: "#c9a84c" }}
              >
                contact@topfrplateformes.com
              </a>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(145deg, #141428 0%, #0e0e22 100%)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div className="text-2xl mb-3">🤝</div>
              <h2 className="text-base font-bold text-white mb-1">Partenariats & Affiliés</h2>
              <p className="text-xs mb-3" style={{ color: "rgba(232,232,240,0.5)" }}>
                Vous souhaitez référencer votre plateforme sur notre comparatif ?
              </p>
              <a
                href="mailto:partenaires@topfrplateformes.com"
                className="text-sm font-semibold hover:underline"
                style={{ color: "#c9a84c" }}
              >
                partenaires@topfrplateformes.com
              </a>
            </div>
          </div>

          {/* Contact form (client component) */}
          <ContactForm />
        </article>
      </main>
      <Footer />
    </>
  );
}
