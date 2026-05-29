/**
 * Product catalog for BH Custom Woodworks.
 *
 * Each product belongs to a `category` that maps to a section
 * on the /shop page.  The `cta` field controls which buttons render:
 *   - "etsy"          → "Buy on Etsy" only
 *   - "etsy+custom"   → "Order on Etsy" + "Need a custom version?"
 *   - "custom"        → "Request a Custom Quote" only
 */

export const categories = [
  {
    slug: "memorial-urns",
    title: "Handcrafted Memorial Urns",
    intro:
      "Losing someone you love is hard enough. Choosing how to honor them shouldn't be. Our memorial urns are handcrafted from solid American hardwoods (with no veneers or composites) and finished with the same care we'd put into a piece for our own family. Each one includes free custom laser engraving on one side: a name, a date, a favorite verse, or an image that meant something to them.",
  },
  {
    slug: "limited-editions",
    title: "Limited Editions",
    intro:
      "Seasonal and commemorative pieces available for a limited time. Once they're gone, they're gone.",
  },
];

export const products = [
  // ─── Memorial Urns ──────────────────────────────────
  {
    id: "urn-white-oak",
    category: "memorial-urns",
    name: "White Oak Memorial Urn",
    image: "/images/shop/urn-white-oak.jpg",
    alt: "Handcrafted white oak cremation urn with natural grain visible",
    startingPrice: 80,
    wood: "White Oak",
    woodNote: "Light, straight grain with a timeless, classic feel.",
    summary:
      "Built from solid White Oak and finished to show off the natural grain. A quiet, dignified choice for someone who valued simplicity and strength.",
    personalization: "Free laser engraving on one side: names, dates, verses, or custom artwork.",
    sizes: "Keepsake (55 cu in) through Companion (450 cu in)",
    etsyUrl: "https://www.etsy.com/listing/1203855699/wood-urns-for-human-or-pet-ashes",
    cta: "etsy+custom",
  },
  {
    id: "urn-walnut",
    category: "memorial-urns",
    name: "Black Walnut Memorial Urn",
    image: "/images/shop/urn-walnut.jpg",
    alt: "Handcrafted black walnut cremation urn with rich dark tones",
    startingPrice: 80,
    wood: "Black Walnut",
    woodNote: "Deep chocolate tones that darken naturally over time.",
    summary:
      "Rich, dark Walnut with a warmth you can feel. This is the wood people choose when they want something that looks as substantial as it feels in your hands.",
    personalization: "Free laser engraving on one side: names, dates, verses, or custom artwork.",
    sizes: "Keepsake (55 cu in) through Companion (450 cu in)",
    etsyUrl: "https://www.etsy.com/listing/1203845821/wooden-urns-for-human-or-pet-ashes",
    cta: "etsy+custom",
  },
  {
    id: "urn-cedar",
    category: "memorial-urns",
    name: "Aromatic Cedar Memorial Urn",
    image: "/images/shop/urn-cedar.jpg",
    alt: "Handcrafted aromatic cedar cremation urn with custom laser engravings of a golfer, a fisherman, mountains, and trees for a sports tribute",
    startingPrice: 90,
    wood: "Aromatic Cedar",
    woodNote: "Warm reddish tones with a natural, comforting fragrance.",
    summary:
      "Aromatic Cedar carries a gentle, familiar scent that most people associate with keepsakes and cherished things. The reddish-purple grain makes each piece distinctive.",
    personalization: "Free laser engraving on one side: names, dates, verses, or custom artwork.",
    sizes: "Keepsake (55 cu in) through Companion (450 cu in)",
    etsyUrl: "https://www.etsy.com/listing/1189467714/wooden-urns-for-human-or-pet-ashes",
    cta: "etsy+custom",
  },
  {
    id: "urn-cedar-crosses",
    category: "memorial-urns",
    name: "Cedar Memorial Urn with Cross Inlays",
    image: "/images/shop/urn-cedar-crosses.jpg",
    alt: "Aromatic cedar cremation urn with decorative cross inlays on the sides",
    startingPrice: 90,
    wood: "Aromatic Cedar",
    woodNote: "Warm cedar with handcrafted cross detailing.",
    summary:
      "The same solid Aromatic Cedar as our standard urn, with hand-cut cross inlays on the sides. Designed for families who want their faith reflected in every detail.",
    personalization: "Free laser engraving on one side: names, dates, verses, or custom imagery.",
    sizes: "Keepsake (55 cu in) through Companion (450 cu in)",
    etsyUrl: "https://www.etsy.com/listing/1189910522/wood-urns-for-pet-or-human-ashes",
    cta: "etsy+custom",
  },
  {
    id: "urn-oak-pet",
    category: "memorial-urns",
    name: "White Oak Pet Memorial Urn",
    image: "/images/shop/urn-oak-pet.jpg",
    alt: "Handcrafted white oak pet memorial urn with laser-engraved silhouette of a sitting dog holding a leash in its mouth",
    startingPrice: 80,
    wood: "White Oak",
    woodNote: "Clean, light grain that lets engraved pet portraits stand out.",
    summary:
      "Built to the same standard as our full-size urns, just sized for the companions who never left our side. Send us a photo and we'll engrave their portrait on the front.",
    personalization: "Free laser-engraved pet portrait or custom text on one side.",
    sizes: "Keepsake (55 cu in) and Small (85 cu in)",
    etsyUrl: "https://www.etsy.com/listing/1203391731/wooden-urns-for-human-or-pet-ashes",
    cta: "etsy+custom",
  },

  // ─── Limited Editions ───────────────────────────────
  {
    id: "anniversary-plaque",
    category: "limited-editions",
    name: "250th Anniversary USA Plaque",
    image: "/images/shop/anniversary-plaque.jpg",
    alt: "Solid cherry plaque commemorating 250 years of the United States with eagle and Liberty Bell engraving",
    startingPrice: 25,
    wood: "Cherry",
    woodNote: "Warm amber tones that deepen with age.",
    summary:
      "Commemorating 250 years of American history, this solid Cherry plaque features a detailed laser engraving of the American flag, the Liberty Bell, and the bald eagle. Finished with four coats of semi-gloss lacquer and fitted with a T-slot hanger for easy wall mounting.",
    details: "14\" × 10\" · Solid Cherry · T-slot wall hanger included",
    limited: true,
    limitedLabel: "2026 Only",
    etsyUrl: "https://www.etsy.com/listing/4372544593/250th-year-anniversary-of-our-great-usa",
    cta: "etsy",
  },
];

export const sizeGuide = [
  { size: "Keepsake", volume: "55 cu in", intended: "Portion of ashes or a small pet", startingPrice: 80 },
  { size: "Small", volume: "85 cu in", intended: "Pets up to 85 lbs", startingPrice: 100 },
  { size: "Medium", volume: "175 cu in", intended: "Adults up to 175 lbs", startingPrice: 150 },
  { size: "Standard", volume: "200 cu in", intended: "Most adults", startingPrice: 180 },
  { size: "Large", volume: "300 cu in", intended: "Larger adults", startingPrice: 220 },
  { size: "Companion", volume: "450 cu in", intended: "Two sets of remains, side by side", startingPrice: 260 },
];
