"use client";

import Image from "next/image";
import type { Brand } from "@/data/brands";
import BrandLogos, { getLogoKey } from "./BrandLogos";

interface BrandCardProps {
  brand: Brand;
  isOnline?: boolean;
  rank?: number;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating / 2);
  const half = rating % 2 >= 1 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} className="star-filled" style={{ fontSize: 13 }}>★</span>
      ))}
      {half === 1 && <span className="star-filled" style={{ fontSize: 13, opacity: 0.5 }}>★</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} style={{ fontSize: 13, opacity: 0.15, color: "#c9a84c" }}>★</span>
      ))}
    </div>
  );
}

export default function BrandCard({ brand, isOnline = true, rank }: BrandCardProps) {
  const key = getLogoKey(brand.name);
  const hasImage = brand.logo.startsWith("/");
  const FallbackLogo = BrandLogos[key];

  return (
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="brand-glow relative flex flex-col rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(160deg, #111028 0%, #0a0920 50%, #0d0c22 100%)",
        border: "1px solid rgba(139,92,246,0.15)",
        transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "translateY(-6px)";
        el.style.borderColor = "rgba(201,168,76,0.45)";
        el.style.boxShadow = "0 20px 60px rgba(139,92,246,0.2), 0 8px 30px rgba(201,168,76,0.15)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(139,92,246,0.15)";
        el.style.boxShadow = "";
      }}
    >
      {/* Gradient top strip */}
      <div className="card-border-shimmer" style={{ height: 3, flexShrink: 0 }} />

      {/* Large faded rank watermark */}
      {rank && (
        <span
          aria-hidden="true"
          className="absolute right-4 top-6 font-black select-none pointer-events-none"
          style={{
            fontSize: 96,
            lineHeight: 1,
            color: "rgba(139,92,246,0.07)",
            letterSpacing: -6,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {String(rank).padStart(2, "0")}
        </span>
      )}

      {/* Card content */}
      <div className="relative p-6 flex flex-col gap-4">

        {/* Top row: rank label + badge */}
        <div className="flex items-center justify-between min-h-[24px]">
          {rank ? (
            <span
              className="font-black text-xs tracking-wider"
              style={{ color: "rgba(201,168,76,0.6)" }}
            >
              #{rank}
            </span>
          ) : <span />}
          {isOnline && brand.badge && (
            <span
              className="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wide"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(139,92,246,0.2))",
                border: "1px solid rgba(201,168,76,0.4)",
                color: "#f5d27a",
                letterSpacing: "0.06em",
              }}
            >
              {brand.badge}
            </span>
          )}
        </div>

        {/* Logo container */}
        <div
          className="flex items-center justify-center rounded-xl overflow-hidden mx-auto"
          style={{
            width: 168,
            height: 64,
            background: "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {hasImage ? (
            <Image
              src={brand.logo}
              alt={brand.name}
              width={155}
              height={55}
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
        <h3
          className="text-white font-black text-lg text-center leading-tight tracking-tight"
          style={{ textShadow: "0 1px 8px rgba(139,92,246,0.2)" }}
        >
          {brand.name}
        </h3>

        {/* Thin divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.3), rgba(201,168,76,0.2), transparent)" }} />

        {/* Rating */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-baseline gap-1.5">
            <span className="gold-shimmer font-black leading-none" style={{ fontSize: 42 }}>
              {brand.rating.toFixed(1)}
            </span>
            <span className="text-xs font-semibold" style={{ color: "rgba(232,232,240,0.3)" }}>/10</span>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <StarRating rating={brand.rating} />
            <div className="flex items-center gap-1.5">
              <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#4ade80" }} />
              <span className="text-xs" style={{ color: "rgba(232,232,240,0.4)" }}>
                {brand.votes.toLocaleString("fr-FR")} avis
              </span>
            </div>
          </div>
        </div>

        {/* Thin divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)" }} />

        {/* Offer box */}
        <div
          className="rounded-xl px-4 py-3.5"
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(139,92,246,0.06) 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
            boxShadow: "inset 0 1px 0 rgba(201,168,76,0.08)",
          }}
        >
          <div
            className="text-xs font-bold uppercase tracking-widest mb-1.5 flex items-center gap-2"
            style={{ color: "rgba(232,232,240,0.4)" }}
          >
            <span
              style={{
                display: "inline-block",
                width: 16,
                height: 1,
                background: "linear-gradient(90deg, #c9a84c, transparent)",
              }}
            />
            Offre Exclusive
            <span
              style={{
                display: "inline-block",
                width: 16,
                height: 1,
                background: "linear-gradient(270deg, #c9a84c, transparent)",
              }}
            />
          </div>
          <div className="gold-text font-black text-sm leading-snug text-center">{brand.offer}</div>
        </div>

        {/* CTA */}
        <button
          className="btn-gold w-full rounded-xl font-black text-sm text-gray-900 uppercase tracking-widest flex items-center justify-center gap-2"
          style={{ padding: "14px 20px" }}
          tabIndex={-1}
          aria-hidden="true"
        >
          Visiter la Plateforme
          <span style={{ fontSize: 16, lineHeight: 1 }}>→</span>
        </button>

        {/* T&Cs */}
        <p className="text-center" style={{ fontSize: "0.65rem", color: "rgba(232,232,240,0.35)", letterSpacing: "0.02em", lineHeight: 1.5 }}>
          Jouer comporte des risques : endettement, isolement, dépendance.{" "}
          Appelez le{" "}
          <a href="tel:0974751313" style={{ color: "#c9a84c" }}>09 74 75 13 13</a>
          {" "}(appel non surtaxé).
        </p>
      </div>
    </a>
  );
}
