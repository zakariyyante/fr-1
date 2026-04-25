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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
