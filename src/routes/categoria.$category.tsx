import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Send } from "lucide-react";
import { SITE, getCategory, type Product } from "@/config/site";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/categoria/$category")({
  beforeLoad: ({ params }) => {
    if (params.category !== "hash" && params.category !== "weed") {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const id = params.category as "hash" | "weed";
    const c = id === "hash" || id === "weed" ? getCategory(id) : null;
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
  const { category } = Route.useParams();
  const c = getCategory(category as "hash" | "weed");
  const isGold = c.accent === "gold";
  const color = isGold ? "var(--primary)" : "var(--accent)";

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

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
  return (
    <div className="card-surface rounded-xl overflow-hidden group transition hover:-translate-y-1">
      <div className="relative aspect-square bg-muted">
        {product.image ? (
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
      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-bold truncate">{product.name}</h3>
          <span className="font-bold text-sm" style={{ color: accent }}>
            €{product.price}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">{product.weight}</p>
      </div>
    </div>
  );
}
