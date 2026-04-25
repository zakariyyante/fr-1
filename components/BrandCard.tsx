"use client";

import Image from "next/image";
import type { Brand } from "@/data/brands";
import BrandLogos, { getLogoKey } from "./BrandLogos";

interface BrandCardProps {
  brand: Brand;
  isOnline?: boolean;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating / 2);
  const half = rating % 2 >= 1 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} className="star-filled text-sm">★</span>
      ))}
      {half === 1 && <span className="star-filled text-sm opacity-60">★</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} className="text-sm opacity-20">★</span>
      ))}
    </div>
  );
}

export default function BrandCard({ brand, isOnline = true }: BrandCardProps) {
  const key = getLogoKey(brand.name);
  const hasImage = brand.logo.startsWith("/");
  const FallbackLogo = BrandLogos[key];

  return (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="corner-accent brand-glow relative flex flex-col rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        background: "linear-gradient(145deg, #141428 0%, #0e0e22 100%)",
        border: "1px solid rgba(201,168,76,0.2)",
        transition: "transform 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.2)";
      }}
    >
      {/* Badge */}
      {isOnline && brand.badge && (
        <div
          className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
          style={{
            background: "linear-gradient(135deg, #c9a84c, #f5d27a)",
            color: "#080815",
          }}
        >
          {brand.badge}
        </div>
      )}

      {/* Card body */}
      <div className="p-6 flex flex-col gap-4">
        {/* Logo */}
        <div
          className="flex items-center justify-center rounded-xl overflow-hidden mx-auto"
          style={{
            width: 160,
            height: 60,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {hasImage ? (
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={150}
              height={50}
              className="object-contain w-full h-full p-2"
              unoptimized
            />
          ) : FallbackLogo ? (
            <div className="w-full h-full p-2">{FallbackLogo}</div>
          ) : (
            <span className="text-sm font-bold gold-text px-2 text-center">{brand.name}</span>
          )}
        </div>

        {/* Brand name */}
        <h3 className="text-white font-bold text-lg text-center leading-tight">{brand.name}</h3>

        {/* Rating */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-baseline gap-1">
            <span className="gold-shimmer font-black text-4xl leading-none">{brand.rating.toFixed(1)}</span>
            <span className="text-xs font-medium" style={{ color: "rgba(232,232,240,0.4)" }}>/10</span>
          </div>
          <StarRating rating={brand.rating} />
          <div className="flex items-center gap-1 mt-1">
            <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
            <span className="text-xs" style={{ color: "rgba(232,232,240,0.5)" }}>
              {brand.votes.toLocaleString("fr-FR")} avis vérifiés
            </span>
          </div>
        </div>

        {/* Bonus box */}
        <div
          className="rounded-xl px-4 py-3 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(245,210,122,0.06) 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "rgba(232,232,240,0.5)" }}>
            Bonus de Bienvenue
          </div>
          <div className="gold-text font-black text-sm leading-snug">{brand.bonus}</div>
        </div>

        {/* CTA */}
        <button
          className="btn-gold w-full py-3.5 rounded-xl font-black text-sm text-gray-900 uppercase tracking-widest"
          tabIndex={-1}
          aria-hidden="true"
        >
          Jouer Maintenant →
        </button>

        {/* T&Cs */}
        <p className="text-center text-xs" style={{ color: "rgba(232,232,240,0.3)" }}>
          Nouveaux clients uniquement. 18+. CGU applicables. JouezResponsable.fr
        </p>
      </div>
    </a>
  );
}
