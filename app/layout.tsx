import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://topcasinosfr.com"),
  title: "Top Casinos FR - Meilleurs Casinos en Ligne France 2026",
  description:
    "Comparez les meilleurs casinos en ligne en France pour 2026. Revus indépendamment, licenciés ANJ. Trouvez des bonus exclusifs, tours gratuits et les meilleurs sites de casino.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://topcasinosfr.com",
    siteName: "Top Casinos FR",
    title: "Top Casinos FR - Meilleurs Casinos en Ligne France 2026",
    description:
      "Comparez les meilleurs casinos en ligne en France pour 2026. Revus indépendamment, licenciés ANJ. Trouvez des bonus exclusifs, tours gratuits et les meilleurs sites de casino.",
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
