// ============================================================
// 👉 MODIFICA QUI: configurazione del sito
// Cambia logo, link social, testi e prodotti senza toccare il codice.
// ============================================================

export const SITE = {
  // 👉 Nome del brand
  brandName: "Haze Bomb",

  // 👉 URL del logo (file in /public oppure URL esterno)
  logoUrl: "/__l5e/assets-v1/5a30e238-39fb-4595-9952-81cc6ba043d5/haze-bomb-logo.jpg",

  // 👉 Link social / contatto
  telegramUrl: "https://t.me/HazeBomb10",
  instagramUrl: "https://instagram.com/your_profile",

  // 👉 Testi della pagina di accesso (age gate)
  ageGate: {
    badge: "SOLO GAS ⛽😉",
    titleTop: "INGRESSO",
    titleBottom: "PRIVATO",
    description:
      "⚠️ Attenzione ⚠️\n\nQuesto sito web è stato realizzato esclusivamente a scopo illustrativo, dimostrativo e di portfolio. Tutti i contenuti presenti, inclusi testi, immagini, video, marchi e prezzi, sono puramente fittizi e utilizzati unicamente per mostrare capacità tecniche, grafiche e di sviluppo web.\n\nNessun prodotto o servizio mostrato è realmente disponibile per la vendita o l'acquisto tramite questo sito. Qualsiasi riferimento a prodotti, offerte commerciali o prezzi è da considerarsi simulato e privo di validità commerciale.\n\nNon è possibile effettuare transazioni, ordini o pagamenti reali attraverso questa piattaforma. Questo progetto non rappresenta un'attività commerciale reale e non ha finalità di vendita.",
    enterLabel: "Entra nello Shop",
    exitLabel: "Annulla",
    exitUrl: "https://www.google.com/",
  },


  // 👉 Hero principale dello shop
  hero: {
    overline: "Top Shelf",
    title: "Selezioni",
    ctaLabel: "Esplora il catalogo",
  },

  // 👉 Sezione catalogo
  catalog: {
    overline: "Drop",
    title: "Esclusivo",
    subtitle: "Scelta selezionata · disponibilità limitata",
  },

  // 👉 Anno nel footer
  year: 2026,
};

// 👉 MODIFICA QUI: lista prodotti (image OPPURE video mp4)
export type Product = {
  id: string;
  name: string;
  weight: string;
  price: number;
  image?: string;
  video?: string;
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
    name: "POP STRONG 🇺🇸 H",
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
