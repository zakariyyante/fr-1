"use client";

export default function ContactForm() {
  return (
    <div
      className="rounded-2xl p-8"
      style={{
        background: "linear-gradient(145deg, #141428 0%, #0e0e22 100%)",
        border: "1px solid rgba(201,168,76,0.2)",
      }}
    >
      <h2 className="text-xl font-bold text-white mb-6">
        Envoyer un <span className="gold-text">Message</span>
      </h2>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "rgba(232,232,240,0.6)" }}>
              Prénom
            </label>
            <input
              type="text"
              placeholder="Votre prénom"
              className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "rgba(232,232,240,0.6)" }}>
              Nom
            </label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "rgba(232,232,240,0.6)" }}>
            Adresse e-mail
          </label>
          <input
            type="email"
            placeholder="votre@email.com"
            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "rgba(232,232,240,0.6)" }}>
            Sujet
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)", color: "rgba(232,232,240,0.8)" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
          >
            <option value="" style={{ background: "#141428" }}>Choisir un sujet…</option>
            <option value="question" style={{ background: "#141428" }}>Question générale</option>
            <option value="partenariat" style={{ background: "#141428" }}>Demande de partenariat</option>
            <option value="erreur" style={{ background: "#141428" }}>Signaler une erreur</option>
            <option value="autre" style={{ background: "#141428" }}>Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "rgba(232,232,240,0.6)" }}>
            Message
          </label>
          <textarea
            rows={5}
            placeholder="Votre message…"
            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none resize-none"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.6)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
          />
        </div>

        <button
          type="submit"
          className="btn-gold w-full py-3.5 rounded-xl font-black text-sm text-gray-900 uppercase tracking-widest"
        >
          Envoyer le Message →
        </button>

        <p className="text-center text-xs" style={{ color: "rgba(232,232,240,0.3)" }}>
          Nous vous répondrons dans les 48 heures ouvrées.
        </p>
      </form>
    </div>
  );
}
