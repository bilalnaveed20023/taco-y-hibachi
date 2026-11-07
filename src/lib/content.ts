// All copy and business facts live here. See PLACEHOLDERS.md for what is verified vs. assumed.

export const site = {
  name: "Taco Y Hibachi",
  phone: "(313) 858-2880",
  tel: "+13138582880",
  street: "3535 Vernor Hwy",
  city: "Detroit",
  state: "MI",
  zip: "48216",
  neighborhood: "Southwest Detroit",
  // Google Business Profile, read 2026-11-06
  rating: 4.9,
  reviewCount: 28,
  // 24h clock, same every day per Google listing
  open: 11,
  close: 23,
  tz: "America/Detroit",
  lat: 42.3235242,
  lng: -83.0872229,
};

const addr = encodeURIComponent(`${site.street}, ${site.city}, ${site.state} ${site.zip}`);

export const links = {
  directions: `https://www.google.com/maps/dir/?api=1&destination=${addr}`,
  place: "https://www.google.com/maps/place/Taco+Y+Hibachi/@42.3235242,-83.0872229,17z",
  embed: `https://www.google.com/maps?q=${addr}&output=embed`,
  tel: `tel:${site.tel}`,
};

export const flavors = ["Steak", "Asada", "Pollo", "Camarón", "Al Pastor", "Salmon", "Pescado", "Quesadillas", "Hibachi", "Yum Yum"];

export type Sauce = { id: string; name: string; color: string; line: string };

export const sauces: Sauce[] = [
  { id: "yum", name: "Yum Yum", color: "#f3d3b5", line: "Creamy, a little sweet, a little tangy. The hibachi classic, and it works on a taco." },
  { id: "roja", name: "Salsa Roja", color: "#c2301a", line: "Brick red and built for steak. Bring a napkin." },
  { id: "verde", name: "Salsa Verde", color: "#6c9a2e", line: "Bright and sharp. Cuts straight through the char." },
];

export type MenuItem = { name: string; note?: string; price?: string };
export type MenuSection = {
  no: string;
  title: string;
  kicker: string;
  /** one price that covers every item, drawn like the handwritten circles on their board */
  badge?: string;
  items: MenuItem[];
  extras?: { label: string; price?: string }[];
};

// Read off the posted menu board (owner photo, Nov 2026). See PLACEHOLDERS.md for what was unreadable.
export const menu: MenuSection[] = [
  {
    no: "01",
    title: "Hibachi",
    kicker: "Every plate comes with rice, zucchini, mushrooms and onions",
    badge: "$20",
    items: [
      { name: "Steak / Asada", note: "Most-reviewed. Add yum yum." },
      { name: "Chicken / Pollo" },
      { name: "Shrimp / Camarón" },
      { name: "Salmon" },
    ],
    extras: [
      { label: "Double meats", price: "$25" },
      { label: "Triple meats", price: "$30" },
    ],
  },
  {
    no: "02",
    title: "Tacos",
    kicker: "One hand, no fork",
    items: [
      { name: "Steak / Asada", note: "The one people drive in from Clinton Township for." },
      { name: "Chicken / Pollo" },
      { name: "Shrimp / Camarón" },
      { name: "Marinated Pork / Al Pastor" },
      { name: "Pescado", note: "Fish tacos. Look for the sign in the window." },
    ],
    extras: [{ label: "Flour tortilla or shrimp", price: "$3.50" }],
  },
  {
    no: "03",
    title: "Quesadillas",
    kicker: "Street style",
    badge: "$4.50",
    items: [
      { name: "Steak / Asada", note: "Packed with meat and onions." },
      { name: "Chicken / Pollo" },
      { name: "Shrimp / Camarón" },
      { name: "Marinated Pork / Al Pastor" },
    ],
    extras: [{ label: "Shrimp is priced at the window" }],
  },
  {
    no: "04",
    title: "Also on the window",
    kicker: "When tacos aren’t the whole plan",
    items: [
      { name: "Torta de Milanesa de Pollo", note: "Breaded chicken.", price: "$14" },
      { name: "Hamburger with fries", price: "$13" },
      { name: "5 wings with fries", price: "$13" },
      { name: "Bottled water", price: "$1" },
    ],
  },
  {
    no: "05",
    title: "Extras",
    kicker: "Make it yours",
    items: [
      { name: "Yum Yum sauce", price: "$1" },
      { name: "Garlic butter", price: "$1" },
      { name: "Side of salmon", price: "$10" },
    ],
  },
];

export type Review = { name: string; badge?: string; text: string };

// Excerpts of public Google reviews, shown as first name + initial.
export const reviews: Review[] = [
  {
    name: "Morenike S.",
    badge: "Local Guide · 40 reviews",
    text: "Me and my husband travel all the way from Clinton Township we get the steak tacos best we’ve ever eaten!!",
  },
  {
    name: "Alanna C.",
    badge: "Local Guide · 78 reviews",
    text: "The best street quesadilla I’ve ever had! Packed with meat and onions. Everyone come to The Regal Eagle to watch a soccer game and then grab a steak quesadilla (or several) from Taco Y Hibachi because you will not be disappointed!",
  },
  {
    name: "Jon J.",
    badge: "Local Guide · 140 reviews",
    text: "We love coming here! Their beef tacos are to die for. Highly recommend!!",
  },
  {
    name: "Dee G.",
    badge: "Local Guide · 16 reviews",
    text: "Excellent and flavorful fish tacos.",
  },
  {
    name: "D. D.",
    text: "Best place to enjoy a delicious Hibachi, all served fresh and juicy meat. Me and family love the tacos and shrimp, quesadillas… also red and green salsa is on point.",
  },
];

export const patioQuote = "I like grabbing tacos then eating them on the bar’s patio with a beer.";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${base}${p}`;
