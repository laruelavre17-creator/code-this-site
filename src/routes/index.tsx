import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Package, Send } from "lucide-react";
import { SITE, CATEGORIES, type Category } from "@/config/site";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.brandName} — Top Shelf Delivery` },
      { name: "description", content: SITE.tagline },
      { property: "og:title", content: SITE.brandName },
      { property: "og:description", content: SITE.tagline },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Categories />
        <OrderInfo />
        <DeliveryArea />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-4 sm:px-6 pt-12 sm:pt-20 pb-10">
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{ background: "radial-gradient(50% 40% at 50% 30%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)" }}
      />
      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-3xl opacity-60" style={{ background: "var(--gradient-gold)" }} />
          <img
            src={SITE.logoUrl}
            alt={SITE.brandName}
            className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover ring-2 ring-primary/60 glow-gold"
          />
        </div>
        <h1 className="display mt-8 text-6xl sm:text-8xl leading-[0.95] text-gradient-gold">
          {SITE.brandName}
        </h1>
        <p className="mt-6 text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground max-w-xl">
          {SITE.tagline}
        </p>
        <div className="mt-6 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-primary/80">
          <span className="h-px w-10 bg-primary/60" />
          <span>18+ · Solo membri</span>
          <span className="h-px w-10 bg-primary/60" />
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="px-4 sm:px-6 py-10">
      <div className="max-w-xl mx-auto grid grid-cols-1 gap-4 sm:gap-6">
        {CATEGORIES.map((c) => <CategoryCard key={c.id} c={c} />)}
      </div>
    </section>
  );
}

function CategoryCard({ c }: { c: Category }) {
  const isGold = c.accent === "gold";
  return (
    <Link
      to="/categoria/$category"
      params={{ category: c.id }}
      className="card-surface rounded-2xl p-8 text-center group transition hover:-translate-y-1"
      style={{
        boxShadow: isGold
          ? "0 10px 60px -20px color-mix(in oklab, var(--primary) 70%, transparent)"
          : "0 10px 60px -20px color-mix(in oklab, var(--accent) 60%, transparent)",
        borderColor: isGold
          ? "color-mix(in oklab, var(--primary) 50%, transparent)"
          : "color-mix(in oklab, var(--accent) 45%, transparent)",
      }}
    >
      <h3
        className="display text-4xl sm:text-5xl"
        style={{
          color: isGold ? "var(--primary)" : "var(--accent)",
          textShadow: `0 0 24px color-mix(in oklab, ${isGold ? "var(--primary)" : "var(--accent)"} 60%, transparent)`,
        }}
      >
        {c.name}
      </h3>
      <p className="mt-3 text-xs sm:text-sm text-muted-foreground tracking-wide">
        {c.description}
      </p>
      <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-primary/80">
        Vedi prodotti →
      </p>
    </Link>
  );
}

function OrderInfo() {
  const items = [
    { icon: Package, title: "Minimo ordine", desc: "In base alla distanza. Es: 10 km = 100€ spesa min." },
    { icon: MapPin, title: "Peso + Zona", desc: "Servizio delivery calcolato in base a distanza, peso e rischio." },
  ];
  return (
    <section className="px-4 sm:px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="display text-3xl sm:text-4xl text-gradient-gold text-center mb-8">
          ORGANIZZA QUI IL TUO DELIVERY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <div key={it.title} className="card-surface rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                <it.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-4 display text-xl text-primary tracking-wider">{it.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryArea() {
  return (
    <section className="px-4 sm:px-6 py-16">
      <div className="max-w-5xl mx-auto card-surface rounded-3xl p-8 sm:p-12 text-center">
        <p className="display text-2xl sm:text-3xl text-muted-foreground/60">
          Area Consegna
        </p>
        <h2 className="display text-4xl sm:text-6xl leading-none text-gradient-gold mt-2">
          CONSEGNA IN TUTTA ITALIA 🇮🇹
        </h2>
        <div className="mt-8 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-50" style={{ background: "var(--gradient-gold)" }} />
            <div
              className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-primary/40 flex items-center justify-center"
              style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)" }}
            >
              <MapPin className="w-20 h-20 text-primary" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs sm:text-sm tracking-[0.25em] uppercase text-muted-foreground">
          Nord · Centro · Sud · Isole · Spedizione discreta
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-4 sm:px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="display text-3xl sm:text-5xl text-gradient-gold">
          Pronto ad ordinare?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground tracking-wide">
          Scrivici subito su Telegram per il listino e la consegna.
        </p>
        <a
          href={SITE.telegramUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold tracking-[0.2em] bg-primary text-primary-foreground glow-gold hover:brightness-110 transition"
        >
          <Send className="w-4 h-4" /> @H4SHBOMB
        </a>
      </div>
    </section>
  );
}
