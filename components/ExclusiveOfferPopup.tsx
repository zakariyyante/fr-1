// ExclusiveOfferPopup – disabled by default
// To enable: uncomment and import in page.tsx

/*
"use client";
import { useState, useEffect } from "react";

export default function ExclusiveOfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        className="relative max-w-md w-full mx-4 rounded-2xl p-8"
        style={{
          background: "linear-gradient(145deg, #141428 0%, #0e0e22 100%)",
          border: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-white/50 hover:text-white"
          aria-label="Fermer"
        >
          ✕
        </button>
        <h2 className="text-2xl font-black text-white mb-2">
          Offre <span className="gold-text">Exclusive</span>
        </h2>
        <p className="text-sm mb-6" style={{ color: "rgba(232,232,240,0.6)" }}>
          Réclamez votre bonus de bienvenue dès aujourd&apos;hui.
        </p>
        <a
          href="#casinos"
          onClick={() => setShow(false)}
          className="btn-gold block text-center py-3.5 rounded-xl font-black text-sm text-gray-900 uppercase tracking-widest"
        >
          Voir les Offres →
        </a>
        <p className="text-center text-xs mt-3" style={{ color: "rgba(232,232,240,0.3)" }}>
          18+. CGU applicables.
        </p>
      </div>
    </div>
  );
}
*/

export default function ExclusiveOfferPopup() {
  return null;
}
