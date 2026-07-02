import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Play, Send } from "lucide-react";
import { useRef, useState } from "react";
import { SITE, getCategory, type Product } from "@/config/site";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/categoria/$category")({
  beforeLoad: ({ params }) => {
    if (params.category !== "hash") {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const c = params.category === "hash" ? getCategory("hash") : null;
    const title = c ? `${c.name} — ${SITE.brandName}` : SITE.brandName;
    const desc = c?.description ?? SITE.tagline;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const c = getCategory("hash");
  const color = "var(--primary)";

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-primary transition"
          >
            <ArrowLeft className="w-4 h-4" /> Indietro
          </Link>

          <div className="mt-6 text-center">
            <p className="display text-2xl sm:text-3xl text-muted-foreground/60">
              Categoria
            </p>
            <h1
              className="display text-6xl sm:text-8xl leading-none"
              style={{
                color,
                textShadow: `0 0 30px color-mix(in oklab, ${color} 60%, transparent)`,
              }}
            >
              {c.name}
            </h1>
            <p className="mt-3 text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground">
              {c.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.products.map((p) => (
              <ProductCard key={p.id} product={p} accent={color} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-sm text-muted-foreground tracking-wide">
              Per ordinare, scrivici su Telegram.
            </p>
            <a
              href={SITE.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold tracking-[0.2em] bg-primary text-primary-foreground glow-gold hover:brightness-110 transition"
            >
              <Send className="w-4 h-4" /> ORDINA SU TELEGRAM
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ProductCard({ product, accent }: { product: Product; accent: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    // wait for the video element to mount, then play
    setTimeout(() => videoRef.current?.play().catch(() => {}), 0);
  };

  return (
    <div className="card-surface rounded-2xl overflow-hidden group transition hover:-translate-y-1">
      <div className="relative aspect-square bg-muted">
        {product.video ? (
          <>
            {playing ? (
              <video
                ref={videoRef}
                src={product.video}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover bg-black"
              />
            ) : (
              <button
                type="button"
                onClick={handlePlay}
                aria-label={`Riproduci video ${product.name}`}
                className="relative w-full h-full flex items-center justify-center overflow-hidden group/play"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--primary) 30%, transparent), transparent 60%), radial-gradient(circle at 70% 70%, color-mix(in oklab, var(--accent) 35%, transparent), transparent 60%), #0a0a12",
                }}
              >
                {/* preview poster: first frame via <video preload=metadata> */}
                <video
                  src={product.video}
                  preload="metadata"
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div
                  className="relative z-10 flex flex-col items-center gap-3 text-center px-4 transition group-hover/play:scale-105"
                >
                  <span
                    className="w-16 h-16 rounded-full flex items-center justify-center glow-gold"
                    style={{ background: "var(--primary)" }}
                  >
                    <Play className="w-7 h-7 ml-1" style={{ color: "var(--primary-foreground)" }} fill="currentColor" />
                  </span>
                  <span className="text-[11px] tracking-[0.3em] uppercase font-bold text-white/90">
                    Clicca per riprodurre
                  </span>
                </div>
              </button>
            )}
          </>
        ) : product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full" style={{ background: "var(--gradient-gold)" }} />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold tracking-wide" style={{ color: accent }}>
          {product.name}
        </h3>
        <ul className="mt-3 divide-y divide-border/60">
          {product.tiers.map((t) => (
            <li key={t.weight} className="flex items-center justify-between py-2 text-sm">
              <span className="text-muted-foreground tracking-wide">{t.weight}</span>
              <span className="font-bold" style={{ color: accent }}>€{t.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
