"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BrandCard from "./BrandCard";
import { mobileBrands } from "@/data/brands";

function ModalContent() {
  const searchParams = useSearchParams();
  const gclid = searchParams.get("gclid");

  if (!gclid) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ background: "rgba(3,3,8,0.98)" }}
    >
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <div className="badge-pill mx-auto mb-4" style={{ display: "inline-flex" }}>
            <span>📱</span>
            <span>Offres Plateformes Mobile</span>
          </div>
          <h1 className="text-3xl font-black text-white mb-2">
            Top <span className="gold-text">Plateformes Mobile</span>
          </h1>
          <p className="text-sm" style={{ color: "rgba(232,232,240,0.5)" }}>
            Sélection exclusive de plateformes optimisées pour mobile
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mobileBrands.map((brand) => {
            const urlWithParams = `${brand.url}${brand.url.includes("?") ? "&" : "?"}s=4&utm_medium=${gclid}`;
            return (
              <BrandCard
                key={brand.id}
                brand={{ ...brand, url: urlWithParams }}
                isOnline={false}
              />
            );
          })}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "rgba(232,232,240,0.3)" }}>
          Sous réserve des conditions générales d&apos;utilisation de chaque plateforme.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default function MobileBrandModal() {
  return (
    <Suspense fallback={null}>
      <ModalContent />
    </Suspense>
  );
}
