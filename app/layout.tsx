import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://topfrplateformes.com"),
  title: "Top Plateformes FR - Meilleures Plateformes en Ligne France 2026",
  description:
    "Comparatif indépendant des meilleures plateformes en ligne en France pour 2026. Revues et classées selon leur fiabilité, leurs services et l'expérience utilisateur.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://topfrplateformes.com",
    siteName: "Top Plateformes FR",
    title: "Top Plateformes FR - Meilleures Plateformes en Ligne France 2026",
    description:
      "Comparatif indépendant des meilleures plateformes en ligne en France pour 2026. Revues et classées selon leur fiabilité, leurs services et l'expérience utilisateur.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ paddingBottom: "56px" }}>
        {children}
        <Analytics />

        {/* ── MANDATORY FRENCH GAMBLING WARNING (ANJ / Google Ads compliance) ── */}
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: "#0a0a0a",
            borderTop: "2px solid #c9a84c",
            padding: "10px 16px",
            textAlign: "center",
          }}
        >
          <p style={{
            margin: 0,
            fontSize: "0.72rem",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.85)",
            fontFamily: "Inter, sans-serif",
          }}>
            <strong style={{ color: "#f5d27a" }}>⚠️ Avertissement :</strong>{" "}
            Jouer comporte des risques&nbsp;: endettement, isolement, dépendance. Pour être aidé, appelez le{" "}
            <a
              href="tel:0974751313"
              style={{ color: "#f5d27a", fontWeight: 700, textDecoration: "none" }}
            >
              09 74 75 13 13
            </a>{" "}
            (appel non surtaxé) —{" "}
            <a
              href="https://www.joueurs-info-service.fr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f5d27a", fontWeight: 600, textDecoration: "underline" }}
            >
              joueurs-info-service.fr
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
