import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, Instagram, ArrowRight, Play, ArrowUp } from "lucide-react";
import { SITE, PRODUCTS, type Product } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.brandName} — Accesso Riservato` },
      { name: "description", content: "Collezione premium su invito. Solo membri 18+." },
      { property: "og:title", content: `${SITE.brandName} — Accesso Riservato` },
      { property: "og:description", content: "Collezione premium su invito. Solo membri 18+." },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);
  return entered ? <Shop /> : <AgeGate onEnter={() => setEntered(true)} />;
}

/* ------------------------------ AGE GATE ------------------------------ */
function AgeGate({ onEnter }: { onEnter: () => void }) {
  const g = SITE.ageGate;
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="card-surface ring-gold rounded-2xl w-full max-w-md p-8 sm:p-10 text-center">
        <img
          src={SITE.logoUrl}
          alt={`${SITE.brandName} logo`}
          className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full object-cover glow-gold"
        />
        <div className="my-6 h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        <p className="text-xs tracking-[0.35em] text-muted-foreground uppercase">{g.badge}</p>
        <h1 className="display mt-3 text-4xl sm:text-5xl leading-none">
          <span className="block text-foreground">{g.titleTop}</span>
          <span className="block text-gradient-gold">{g.titleBottom}</span>
        </h1>
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{g.description}</p>

        <button
          onClick={onEnter}
          className="mt-7 w-full rounded-full bg-primary text-primary-foreground font-bold tracking-wider text-sm py-3.5 glow-gold hover:brightness-110 transition"
        >
          {g.enterLabel.toUpperCase()}
        </button>
        <a
          href={g.exitUrl}
          className="mt-3 block w-full rounded-full border border-destructive/50 text-destructive font-bold tracking-wider text-sm py-3 hover:bg-destructive/10 transition"
          style={{ boxShadow: "0 8px 30px -10px oklch(0.55 0.24 27 / 0.5)" }}
        >
          {g.exitLabel.toUpperCase()}
        </a>
      </div>
    </main>
  );
}

/* -------------------------------- SHOP -------------------------------- */
function Shop() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Catalog />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/60 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={SITE.logoUrl} alt="" className="w-9 h-9 rounded-full object-cover ring-1 ring-primary/50" />
          <span className="display text-xl text-gradient-gold tracking-wider hidden sm:inline">
            {SITE.brandName.toUpperCase()}
          </span>
        </a>
        <a
          href={SITE.telegramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-wider bg-accent text-accent-foreground hover:brightness-110 transition glow-crimson"
        >
          <Send className="w-4 h-4" /> TELEGRAM
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-4 sm:px-6 pt-10">
      <div className="max-w-5xl mx-auto card-surface rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-60 pointer-events-none"
             style={{ background: "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)" }} />
        <div className="relative flex flex-col items-center text-center px-6 sm:px-12 py-16 sm:py-20">
          <img
            src={SITE.logoUrl}
            alt={SITE.brandName}
            className="w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover glow-gold ring-1 ring-primary/40"
          />
          <p className="display mt-8 text-3xl sm:text-4xl text-muted-foreground/60 leading-none">
            {SITE.hero.overline.toUpperCase()}
          </p>
          <h1 className="display text-6xl sm:text-8xl leading-[0.95] text-gradient-gold mt-2">
            {SITE.hero.title.toUpperCase()}
          </h1>
          <div className="mt-6 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            <span className="h-px w-10 bg-primary/60" />
            <span>Drop · Privato · 18+</span>
            <span className="h-px w-10 bg-primary/60" />
          </div>
          <a
            href="#catalogo"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-bold tracking-wider text-xs px-6 py-3.5 glow-gold hover:brightness-110 transition"
          >
            {SITE.hero.ctaLabel.toUpperCase()} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

  return (
    <section id="catalogo" className="px-4 sm:px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="display text-3xl sm:text-4xl text-muted-foreground/50 leading-none">
            {SITE.catalog.overline.toUpperCase()}
          </p>
          <h2 className="display text-5xl sm:text-6xl leading-none text-gradient-gold">
            {SITE.catalog.title.toUpperCase()}
          </h2>
          <p className="mt-2 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            {SITE.catalog.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={SITE.telegramUrl}
      target="_blank"
      rel="noreferrer"
      className="card-surface rounded-xl overflow-hidden group transition hover:-translate-y-1 hover:glow-gold"
    >
      <div className="relative aspect-square bg-muted">
        {product.video ? (
          <video src={product.video} className="w-full h-full object-cover" muted playsInline />
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-gold group-hover:scale-110 transition">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-bold truncate">{product.name}</h3>
          <span className="text-primary font-bold text-sm">€{product.price}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">{product.weight}</p>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <img src={SITE.logoUrl} alt="" className="w-8 h-8 rounded-full object-cover" />
        <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-muted-foreground text-center">
          © {SITE.year} · Solo Membri · 18+
        </p>
        <div className="flex items-center gap-2">
          <a
            href={SITE.telegramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="w-9 h-9 rounded-full bg-[#29b6f6] text-white flex items-center justify-center hover:brightness-110 transition"
          >
            <Send className="w-4 h-4" />
          </a>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full text-white flex items-center justify-center hover:brightness-110 transition"
            style={{ background: "linear-gradient(135deg,#f58529,#dd2a7b,#8134af,#515bd4)" }}
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Torna su"
      className="fixed bottom-5 right-5 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-gold hover:brightness-110 transition"
    >
      <ArrowUp className="w-5 h-5" />
    </a>
  );
}
