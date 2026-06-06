import { Link } from "@tanstack/react-router";
import { Send, Star } from "lucide-react";
import { SITE } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={SITE.logoUrl}
            alt=""
            className="w-10 h-10 rounded-full object-cover ring-1 ring-primary/60"
          />
          <span className="display text-lg sm:text-xl text-gradient-gold tracking-wider hidden xs:inline">
            {SITE.brandName}
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={SITE.reviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-bold tracking-wider border border-primary/50 text-primary hover:bg-primary/10 transition"
          >
            <Star className="w-3.5 h-3.5" /> RECENSIONI
          </a>
          <a
            href={SITE.telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3 sm:px-5 py-2 text-[11px] sm:text-xs font-bold tracking-wider bg-primary text-primary-foreground hover:brightness-110 transition glow-gold"
          >
            <Send className="w-3.5 h-3.5" /> TELEGRAM
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <img src={SITE.logoUrl} alt="" className="w-8 h-8 rounded-full object-cover" />
        <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-muted-foreground text-center font-bold">
          © {SITE.year} {SITE.brandName} · Sito dimostrativo
        </p>
        <a
          href={SITE.telegramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
          className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-gold hover:brightness-110 transition"
        >
          <Send className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
