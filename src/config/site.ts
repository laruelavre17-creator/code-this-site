import logoAsset from "@/assets/h4sh-bomb-logo.jpg.asset.json";

export const SITE = {
  brandName: "H4SH BOMB",
  logoUrl: logoAsset.url,
  telegramUrl: "https://t.me/H4SHBOMB",
  tagline: "Qualità premium · Spedizione discreta · Prezzi imbattibili",
  year: 2026,
};

export type Category = {
  id: string;
  name: string;
  description: string;
  accent: "gold" | "ember";
};

export const CATEGORIES: Category[] = [
  {
    id: "hash",
    name: "HASH",
    description: "Hash tradizionale da tutto il mondo",
    accent: "gold",
  },
  {
    id: "weed",
    name: "WEED",
    description: "Selezione premium di fiori top-shelf",
    accent: "ember",
  },
];
