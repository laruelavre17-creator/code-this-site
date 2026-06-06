import logoAsset from "@/assets/h4sh-bomb-logo.jpg.asset.json";

export const SITE = {
  brandName: "H4SH BOMB",
  logoUrl: logoAsset.url,
  telegramUrl: "https://t.me/H4SHBOMB",
  reviewsUrl: "https://t.me/+kMGEzX7AEApjYTI0",
  tagline: "Qualità premium · Spedizione discreta · Prezzi imbattibili",
  year: 2026,
};

export type Product = {
  id: string;
  name: string;
  weight: string;
  price: number;
  image?: string;
};

export type Category = {
  id: "hash" | "weed";
  name: string;
  description: string;
  accent: "gold" | "ember";
  products: Product[];
};

export const CATEGORIES: Category[] = [
  {
    id: "hash",
    name: "HASH",
    description: "Hash tradizionale da tutto il mondo",
    accent: "gold",
    products: [
      { id: "super-boof", name: "SUPER BOOF 🎁", weight: "5 g", price: 45, image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=600" },
      { id: "moroccan-gold", name: "MOROCCAN GOLD 🇲🇦", weight: "5 g", price: 40, image: "https://images.unsplash.com/photo-1536819114556-1e10f967fb61?w=600" },
      { id: "ketama", name: "KETAMA HASH", weight: "5 g", price: 35, image: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=600" },
      { id: "afghan-black", name: "AFGHAN BLACK 🇦🇫", weight: "5 g", price: 50, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600" },
      { id: "lebanese-red", name: "LEBANESE RED 🇱🇧", weight: "5 g", price: 55, image: "https://images.unsplash.com/photo-1611237104477-39ea49b21c1f?w=600" },
      { id: "bubble-hash", name: "BUBBLE HASH 💧", weight: "3 g", price: 60, image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=600" },
    ],
  },
  {
    id: "weed",
    name: "WEED",
    description: "Selezione premium di fiori top-shelf",
    accent: "ember",
    products: [
      { id: "gelato", name: "GELATO 🍨", weight: "3 g", price: 40, image: "https://images.unsplash.com/photo-1603909223358-72ebf94a23fc?w=600" },
      { id: "purple-haze", name: "PURPLE HAZE 💜", weight: "3 g", price: 45, image: "https://images.unsplash.com/photo-1536819114556-1e10f967fb61?w=600" },
      { id: "og-kush", name: "OG KUSH 🇺🇸", weight: "3 g", price: 42, image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=600" },
      { id: "amnesia", name: "AMNESIA HAZE", weight: "3 g", price: 38, image: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=600" },
      { id: "white-widow", name: "WHITE WIDOW ❄️", weight: "3 g", price: 40, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600" },
      { id: "zkittlez", name: "ZKITTLEZ 🌈", weight: "3 g", price: 48, image: "https://images.unsplash.com/photo-1611237104477-39ea49b21c1f?w=600" },
    ],
  },
];

export const getCategory = (id: "hash" | "weed") =>
  CATEGORIES.find((c) => c.id === id)!;
