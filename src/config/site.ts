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
  instagramUrl: "https://www.instagram.com/haze.bomb?igsh=b2V3ZHhrc2Vlb2o1",

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

// ============================================================
// 👉 MODIFICA QUI: LISTA PRODOTTI (immagine OPPURE video)
// ------------------------------------------------------------
// Ogni prodotto è un oggetto { ... } separato da virgola.
//
//   • id      → identificativo univoco (qualsiasi stringa)
//   • name    → nome che appare sotto la card (puoi usare emoji 🇲🇦🎁🇺🇸)
//   • weight  → peso/quantità mostrato sotto il nome
//   • price   → prezzo numerico in € (senza simbolo)
//   • image   → URL immagine (in /public oppure link esterno)
//   • video   → URL video .mp4  ⚠️ SE PRESENTE, sostituisce l'immagine
//
// ➕ PER AGGIUNGERE un prodotto: copia un blocco { ... }, e incollalo
//    nella lista. Ricordati la virgola alla fine.
//
// ➖ PER RIMUOVERE un prodotto: cancella il suo blocco { ... }, virgola inclusa.
//
// 🎬 PER METTERE UN VIDEO al posto dell'immagine: aggiungi la riga
//      video: "https://link-al-tuo-video.mp4",
//    e (opzionale) togli/lascia la riga `image`.
//
// 🚫 PER TOGLIERE IL VIDEO: cancella la riga `video: "..."` — tornerà
//    a mostrare l'immagine.
// ============================================================
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
    id: "super-boof",
    name: "SUPER BOOF 🎁",
    weight: "5 g",
    price: 45,
    image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=600",
  },
];
