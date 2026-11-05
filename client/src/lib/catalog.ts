export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  texture: string;
  length: string;
  lace: string;
  colors: string[];
  price: number;
  compareAt?: number;
  stock: number;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  gallery: string[];
  badge?: string;
  details: string[];
};

export const categories = [
  "HD Lace Wigs",
  "Transparent Lace Wigs",
  "Closure Wigs",
  "Frontal Wigs",
  "Glueless Wigs",
  "Bob Wigs",
  "Straight Hair",
  "Body Wave",
  "Deep Wave",
  "Water Wave",
  "Curly Hair",
  "Raw Hair",
  "Virgin Human Hair",
  "Custom-Made Wigs",
];

export const products: Product[] = [
  {
    id: "vel-001",
    slug: "the-atelier-straight",
    name: "The Atelier Straight",
    category: "HD Lace Wigs",
    texture: "Straight",
    length: "24\"",
    lace: "HD Lace",
    colors: ["Natural black", "Espresso", "Warm brown"],
    price: 690,
    compareAt: 760,
    stock: 6,
    rating: 5,
    reviews: 18,
    description: "A silk-press finish with a natural-looking hairline and an immaculate fall. Made for quiet impact.",
    image: "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-2.webp",
    gallery: ["/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-2.webp", "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-1.webp"],
    badge: "Bestseller",
    details: ["180% density", "Pre-plucked hairline", "5x5 HD closure", "Made-to-order finish"],
  },
  {
    id: "vel-002",
    slug: "the-atelier-wave",
    name: "The Atelier Wave",
    category: "Glueless Wigs",
    texture: "Body Wave",
    length: "26\"",
    lace: "Transparent Lace",
    colors: ["Natural black", "Soft chocolate"],
    price: 760,
    stock: 4,
    rating: 4.9,
    reviews: 12,
    description: "Full, fluid body wave with movement that holds its shape from first light to last call.",
    image: "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-3.webp",
    gallery: ["/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-3.webp", "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-1.webp"],
    badge: "New arrival",
    details: ["200% density", "5x5 closure", "Adjustable band + combs", "Heat-friendly styling"],
  },
  {
    id: "vel-003",
    slug: "the-signature-curl",
    name: "The Signature Curl",
    category: "Curly Hair",
    texture: "Deep Curl",
    length: "22\"",
    lace: "Frontal Lace",
    colors: ["Natural black", "Espresso"],
    price: 720,
    stock: 3,
    rating: 5,
    reviews: 9,
    description: "Defined, touchable curls with a soft silhouette and a little more drama in the room.",
    image: "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-4.webp",
    gallery: ["/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-4.webp", "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-1.webp"],
    details: ["180% density", "13x4 frontal", "Pre-bleached knots", "Defined curl pattern"],
  },
  {
    id: "vel-004",
    slug: "the-noir-bob",
    name: "The Noir Bob",
    category: "Bob Wigs",
    texture: "Silky Straight",
    length: "12\"",
    lace: "HD Lace",
    colors: ["Natural black", "Blue black"],
    price: 490,
    stock: 8,
    rating: 4.8,
    reviews: 21,
    description: "A polished jaw-skimming bob with an elegant profile and a beautifully clean part.",
    image: "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-2.webp",
    gallery: ["/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-2.webp", "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-3.webp"],
    badge: "Low stock",
    details: ["150% density", "4x4 closure", "Custom parting available", "Ready to wear"],
  },
  {
    id: "vel-005",
    slug: "the-raw-silk-press",
    name: "The Raw Silk Press",
    category: "Raw Hair",
    texture: "Raw Straight",
    length: "28\"",
    lace: "Transparent Lace",
    colors: ["Natural black", "Warm brown"],
    price: 980,
    stock: 2,
    rating: 5,
    reviews: 7,
    description: "Unprocessed raw hair with a luminous, natural finish and the presence of a true investment piece.",
    image: "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-2.webp",
    gallery: ["/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-2.webp", "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-4.webp"],
    badge: "Private edit",
    details: ["220% density", "13x6 frontal", "Raw human hair", "Custom color available"],
  },
  {
    id: "vel-006",
    slug: "the-wet-wave",
    name: "The Wet Wave",
    category: "Water Wave",
    texture: "Water Wave",
    length: "20\"",
    lace: "HD Lace",
    colors: ["Natural black", "Espresso"],
    price: 625,
    stock: 5,
    rating: 4.9,
    reviews: 14,
    description: "A soft water wave with a luminous finish, made for undone elegance and warm-weather ease.",
    image: "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-3.webp",
    gallery: ["/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-3.webp", "/manus-storage/async-images/xOKyGinieQ9QYWLbOGJKq3/image-4.webp"],
    details: ["180% density", "5x5 HD closure", "Pre-plucked hairline", "Soft natural wave"],
  },
];

export const testimonials = [
  { quote: "The hair is even more beautiful in person. The finish, the packaging, the detail — everything felt considered.", name: "Amara K.", role: "Verified client", product: "The Atelier Straight" },
  { quote: "I wanted something that looked like me, only more polished. The consultation made the whole experience feel personal.", name: "Sofia M.", role: "Custom client", product: "Made-to-measure wig" },
  { quote: "My second GOLD LUXURY HAIR piece and the quality is still impeccable. It moves beautifully and photographs like a dream.", name: "Nia R.", role: "Verified client", product: "The Signature Curl" },
];

export const formatPrice = (price: number) => `£${price.toLocaleString("en-GB")}`;
