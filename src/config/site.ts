// ============================================================
// 👉 MODIFICA QUI: configurazione del sito
// Cambia logo, link social, testi e prodotti senza toccare il codice.
// ============================================================

export const SITE = {
  // 👉 Nome del brand (mostrato nel footer e nei meta tag)
  brandName: "Smoke Gas Bomb",

  // 👉 URL del logo (puoi caricare un'immagine in /public e usare "/logo.jpg")
  logoUrl: "/logo.jpg",

  // 👉 Link social / contatto
  telegramUrl: "https://t.me/your_channel",
  instagramUrl: "https://instagram.com/your_profile",

  // 👉 Testi della pagina di accesso (age gate)
  ageGate: {
    badge: "Membri 18+",
    titleTop: "ACCESSO",
    titleBottom: "RISERVATO",
    description:
      "Questa è una collezione su invito. Verifica di essere maggiorenne per accedere allo shop.",
    enterLabel: "Entra nello Shop",
    exitLabel: "Esci",
    exitUrl: "https://www.google.com/",
  },

  // 👉 Hero principale dello shop
  hero: {
    overline: "Premium",
    title: "Selezioni",
    ctaLabel: "Visualizza il catalogo",
  },

  // 👉 Sezione catalogo
  catalog: {
    overline: "Stock",
    title: "Limitato",
    subtitle: "Qualità prima della quantità",
  },

  // 👉 Anno mostrato nel footer
  year: 2026,
};

// 👉 MODIFICA QUI: lista prodotti
// Per ogni prodotto puoi mettere image (URL immagine) oppure video (URL video mp4).
export type Product = {
  id: string;
  name: string;
  weight: string;     // es. "5 g", "100 g"
  price: number;      // in EUR
  image?: string;     // URL immagine prodotto
  video?: string;     // (opzionale) URL video mp4 prodotto
};

export const PRODUCTS: Product[] = [
  {
    id: "dry-ma",
    name: "DRY 🇲🇦",
    weight: "100 g",
    price: 400,
    image: "https://images.unsplash.com/photo-1536819114556-1c10b6b6f7f1?w=600",
  },
  {
    id: "super-boof",
    name: "SUPER BOOF 🎁",
    weight: "5 g",
    price: 45,
    image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=600",
  },
  {
    id: "ice-o-lator",
    name: "ICE O LATOR (1 lavaggio)",
    weight: "2 g",
    price: 50,
    image: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=600",
  },
  {
    id: "pop-stong",
    name: "POP STONG 🇺🇸 H",
    weight: "5 g",
    price: 60,
    image: "https://images.unsplash.com/photo-1536593018854-7d6ed5e89bbf?w=600",
  },
  {
    id: "special-pink",
    name: "SPECIAL PINK 🇺🇸 L",
    weight: "5 g",
    price: 60,
    image: "https://images.unsplash.com/photo-1585516586073-3219f81bee84?w=600",
  },
  {
    id: "gelato-44",
    name: "GELATO 44 🎁🇪🇸 R",
    weight: "5 g",
    price: 45,
    image: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600",
  },
];
