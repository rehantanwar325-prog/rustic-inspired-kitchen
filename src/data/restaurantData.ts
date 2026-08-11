export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  category: string;
  isPopular?: boolean;
  spiceLevel?: 'Mild' | 'Medium' | 'Spicy';
  image?: string;
}

export interface SignatureDish {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  isVeg: boolean;
  image: string;
  badge?: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ambience' | 'Kebabs' | 'Biryani & Mains' | 'Dining Experience';
  image: string;
  span?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
}

export const RESTAURANT_INFO = {
  name: "Rustic – Inspired Kitchen",
  shortName: "Rustic",
  tagline: "Inspired by Flavour. Rooted in Tradition.",
  eyebrow: "JAIPUR • INDIA",
  description: "A contemporary Indian dining experience where timeless flavours meet modern culinary craft.",
  storyTitle: "Where Tradition Meets the Table.",
  storySubtitle: "OUR STORY",
  storyParagraph1: "Nestled in the sophisticated culinary heart of C-Scheme, Jaipur, Rustic – Inspired Kitchen was born out of a deep passion for authentic North Indian and Mughlai heritage. We blend centuries-old charcoal tandoor techniques with elevated presentation, creating a space where every dish tells a story of royalty, warmth, and spice.",
  storyParagraph2: "From the soft melt-in-mouth Awadhi kebabs to the slow-cooked fragrant dum biryanis, our kitchen honors original recipes refined across generations. We select only the finest aromatic spices, cold-pressed oils, and farm-fresh ingredients to craft an unforgettable feast for your senses.",
  
  entranceImage: "/rustic-entrance.jpg",
  heroImage: "/rustic-entrance.jpg",

  rating: 4.8,
  reviewCount: "1,300+",
  reviewBadgeText: "Loved by diners in Jaipur",
  
  location: "C-Scheme, Jaipur",
  city: "Jaipur, Rajasthan",
  address: "G-3, Ground Floor, UKMS, AURUM, Tilak Marg, near CBI Office, C-Scheme, Ashok Nagar, Jaipur, Rajasthan 302005",
  phone: "+91 99285 97479",
  phoneClean: "+919928597479",
  whatsappUrl: "https://wa.me/919928597479?text=Hello%20Rustic%20Team,%20I%20would%20like%20to%20reserve%20a%20table.",
  googleMapsDirections: "https://maps.google.com/?q=Rustic+Inspired+Kitchen+Tilak+Marg+C-Scheme+Jaipur",
  
  openingHours: {
    days: "MONDAY – SUNDAY",
    time: "11:00 AM – 11:00 PM"
  },
  
  cuisines: ["North Indian", "Mughlai", "Kebabs", "Biryani", "Indian Breads", "Artisanal Desserts"]
};

export const CORE_FEATURES = [
  {
    id: "f1",
    title: "Authentic Flavours",
    description: "Traditional Indian flavours crafted with care and deep respect for spice heritage.",
    icon: "Flame"
  },
  {
    id: "f2",
    title: "Crafted Daily",
    description: "Fresh ingredients, hand-pounded spices, and slow-cooked marinades prepared every morning.",
    icon: "Sparkles"
  },
  {
    id: "f3",
    title: "Signature Kebabs",
    description: "Rich aromas, smoky flavours and perfectly grilled favourites from live coal tandoors.",
    icon: "UtensilsCrossed"
  },
  {
    id: "f4",
    title: "Jaipur Dining",
    description: "A warm, intimate and elegant dining experience in the prime heart of C-Scheme.",
    icon: "Crown"
  }
];

export const CATEGORY_SHOWCASE = [
  {
    number: "01",
    title: "KEBABS & STARTERS",
    subtitle: "Smoky, aromatic and freshly prepared.",
    buttonText: "EXPLORE KEBABS",
    categoryKey: "Starters & Kebabs",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "BIRYANI & MAINS",
    subtitle: "Rich Indian flavours made for a memorable meal.",
    buttonText: "EXPLORE BIRYANI",
    categoryKey: "Biryani & Breads",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "DESSERTS & DRINKS",
    subtitle: "The perfect ending to your dining experience.",
    buttonText: "EXPLORE DESSERTS",
    categoryKey: "Desserts & Pastries",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000&auto=format&fit=crop"
  }
];

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: "sig-1",
    name: "Galouti Kebab Royal",
    subtitle: "Awadhi Heritage Specialty",
    description: "Melt-in-mouth ground lamb patties infused with 24 secret royal spices and subtle rose water essence, served with mint chutney.",
    price: 495,
    isVeg: false,
    rating: 4.9,
    badge: "Chef's Choice",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sig-2",
    name: "Dum Pukht Awadhi Biryani",
    subtitle: "Slow Dum Cooked Rice",
    description: "Long-grain aromatic Basmati rice layered with succulent marinated chicken, saffron milk, caramelized onions and sealed in a clay handi.",
    price: 545,
    isVeg: false,
    rating: 4.9,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sig-3",
    name: "Dal-e-Rustic Signature",
    subtitle: "Overnight Slow Simmered",
    description: "Black lentils slow-cooked for 36 hours over live embers, finished with white butter, fresh milk cream and smoky coal ghee splash.",
    price: 395,
    isVeg: true,
    rating: 4.8,
    badge: "Must Try",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sig-4",
    name: "Paneer Tikka Angara",
    subtitle: "Live Charcoal Grilled",
    description: "Thick cottage cheese cubes marinated in hung curd, Kashmiri chilli paste, and smoked mustard oil, roasted with charred capsicum.",
    price: 425,
    isVeg: true,
    rating: 4.8,
    badge: "Vegetarian Icon",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sig-5",
    name: "Murgh Makhani Khas",
    subtitle: "Velvety Tomato Gravy",
    description: "Tandoori char-broiled chicken morsels folded in a rich velvety butter sauce infused with sun-dried kasuri methi and green cardamom.",
    price: 495,
    isVeg: false,
    rating: 4.9,
    badge: "House Classic",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sig-6",
    name: "Shahi Tukda & Kesar Phirni Dual",
    subtitle: "Royal Dessert Platter",
    description: "Golden saffron fried brioche steeped in rabri accompanied by rich chilled saffron rice pudding topped with crushed pistachios.",
    price: 295,
    isVeg: true,
    rating: 4.9,
    badge: "Royal Sweet",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop"
  }
];

export const MENU_CATEGORIES = [
  "Starters & Kebabs",
  "Main Course",
  "Biryani & Breads",
  "Espresso & Coffee Bar",
  "Coolers & Beverages",
  "Smoothies & Shakes",
  "Desserts & Pastries"
];

export const MENU_ITEMS: MenuItem[] = [
  // --- STARTERS & KEBABS ---
  {
    id: "m-101",
    name: "Galouti Kebab Awadhi",
    description: "Legendary melt-in-mouth spiced lamb kebabs served on mini saffron parathas with laccha onion.",
    price: 495,
    isVeg: false,
    category: "Starters & Kebabs",
    isPopular: true,
    spiceLevel: "Medium"
  },
  {
    id: "m-102",
    name: "Kakori Lamb Seekh",
    description: "Finely ground lamb skewers blended with aromatic whole spices, rose petals, and charcoal grilled.",
    price: 525,
    isVeg: false,
    category: "Starters & Kebabs",
    isPopular: true,
    spiceLevel: "Medium"
  },
  {
    id: "m-103",
    name: "Paneer Tikka Angara",
    description: "Cottage cheese marinated in Kashmiri red chilli curd paste and roasted over glowing coals.",
    price: 425,
    isVeg: true,
    category: "Starters & Kebabs",
    isPopular: true,
    spiceLevel: "Medium"
  },
  {
    id: "m-104",
    name: "Murgh Malai Tikka",
    description: "Succulent chicken breast marinated in rich cashew paste, green cardamom, and fresh cream.",
    price: 465,
    isVeg: false,
    category: "Starters & Kebabs",
    spiceLevel: "Mild"
  },
  {
    id: "m-105",
    name: "Dahi ke Kebab",
    description: "Velvety spiced hung curd patties coated with crisp breadcrumbs, pan-fried to golden amber.",
    price: 365,
    isVeg: true,
    category: "Starters & Kebabs",
    spiceLevel: "Mild"
  },
  {
    id: "m-106",
    name: "Hara Bhara Subz Kebab",
    description: "Healthy patties made of spinach, green peas, raw banana, and aromatic roasted cumin.",
    price: 345,
    isVeg: true,
    category: "Starters & Kebabs",
    spiceLevel: "Mild"
  },
  {
    id: "m-107",
    name: "Kurkuri Bhindi Chaat",
    description: "Crispy fried thinly sliced okra tossed with chaat masala, tangy pomegranate seeds, and tamarind drizzle.",
    price: 325,
    isVeg: true,
    category: "Starters & Kebabs",
    spiceLevel: "Medium"
  },
  {
    id: "m-108",
    name: "Tandoori Malai Broccoli",
    description: "Tender broccoli florets marinated in cream cheese, white pepper, and cardamom baked in the tandoor.",
    price: 395,
    isVeg: true,
    category: "Starters & Kebabs",
    spiceLevel: "Mild"
  },
  {
    id: "m-109",
    name: "Amritsari Fish Fry",
    description: "Fresh river fish fillets coated in spiced gram flour batter, deep-fried with ajwain and carom seeds.",
    price: 485,
    isVeg: false,
    category: "Starters & Kebabs",
    spiceLevel: "Medium"
  },

  // --- MAIN COURSE ---
  {
    id: "m-201",
    name: "Dal-e-Rustic (36-Hour Simmered)",
    description: "Our signature slow-cooked black lentils prepared with slow-churned butter and pure cream.",
    price: 395,
    isVeg: true,
    category: "Main Course",
    isPopular: true,
    spiceLevel: "Mild"
  },
  {
    id: "m-202",
    name: "Murgh Makhani Khas",
    description: "Tandoori chicken in rich cashew-tomato gravy garnished with sun-dried fenugreek leaves.",
    price: 495,
    isVeg: false,
    category: "Main Course",
    isPopular: true,
    spiceLevel: "Mild"
  },
  {
    id: "m-203",
    name: "Nalli Nihari Royal",
    description: "Slow-braised lamb shanks cooked overnight in an aromatic marrow gravy infused with potli spices.",
    price: 595,
    isVeg: false,
    category: "Main Course",
    isPopular: true,
    spiceLevel: "Medium"
  },
  {
    id: "m-204",
    name: "Paneer Butter Masala",
    description: "Fresh cottage cheese cubes cooked in a rich tomato gravy with capsicum and mild butter glaze.",
    price: 415,
    isVeg: true,
    category: "Main Course",
    spiceLevel: "Medium"
  },
  {
    id: "m-205",
    name: "Subz Handi Deewani",
    description: "Seasonal garden vegetables tossed in a tangy spinach and onion gravy in a traditional earthenware handi.",
    price: 375,
    isVeg: true,
    category: "Main Course",
    spiceLevel: "Medium"
  },

  // --- BIRYANI & BREADS ---
  {
    id: "m-301",
    name: "Awadhi Murgh Dum Biryani",
    description: "Fragrant Basmati rice sealed with marinated tender chicken, saffron, and fried onions.",
    price: 545,
    isVeg: false,
    category: "Biryani & Breads",
    isPopular: true,
    spiceLevel: "Medium"
  },
  {
    id: "m-302",
    name: "Gosht Dum Pukht Biryani",
    description: "Bone-in lamb pieces slow-cooked with basmati rice, Kewra water, and royal spices under dough seal.",
    price: 625,
    isVeg: false,
    category: "Biryani & Breads",
    isPopular: true,
    spiceLevel: "Medium"
  },
  {
    id: "m-303",
    name: "Subz Kesari Biryani",
    description: "Aromatic basmati rice cooked with fresh seasonal vegetables, mint leaves, and pure saffron milk.",
    price: 445,
    isVeg: true,
    category: "Biryani & Breads",
    spiceLevel: "Mild"
  },
  {
    id: "m-304",
    name: "Chur Chur Stuffed Naan",
    description: "Layered crispy naan filled with spiced paneer and potatoes, crushed with desi ghee.",
    price: 135,
    isVeg: true,
    category: "Biryani & Breads",
    isPopular: true
  },
  {
    id: "m-305",
    name: "Warqi Paratha",
    description: "Multi-layered flaky saffron bread brushed with clarified butter.",
    price: 110,
    isVeg: true,
    category: "Biryani & Breads"
  },
  {
    id: "m-306",
    name: "Garlic Butter Naan",
    description: "Clay oven baked refined flour flatbread brushed with garlic butter and fresh cilantro.",
    price: 95,
    isVeg: true,
    category: "Biryani & Breads"
  },
  {
    id: "m-307",
    name: "Khamiri Roti Royal",
    description: "Traditional soft leavened Mughal bread baked in earthen tandoor.",
    price: 85,
    isVeg: true,
    category: "Biryani & Breads"
  },

  // --- ESPRESSO & COFFEE BAR ---
  {
    id: "c-101",
    name: "Hot Spanish Latte",
    description: "Rich espresso blended with velvety steamed milk and sweetened condensed milk.",
    price: 255,
    isVeg: true,
    category: "Espresso & Coffee Bar",
    isPopular: true
  },
  {
    id: "c-102",
    name: "Cold Spanish Latte",
    description: "Chilled espresso poured over creamy sweetened milk and ice.",
    price: 265,
    isVeg: true,
    category: "Espresso & Coffee Bar",
    isPopular: true
  },
  {
    id: "c-103",
    name: "Deconstructed Iced Coffee",
    description: "Signature cold brew ice cubes served with chilled whole milk and syrup shot.",
    price: 245,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-104",
    name: "Vietnamese Cold Coffee",
    description: "Strong dark roast drip coffee poured over sweetened condensed milk and ice.",
    price: 225,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-105",
    name: "Zesty Orange Iced Coffee",
    description: "Freshly pulled espresso shot shaken with cold orange juice and tonic ice.",
    price: 235,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-106",
    name: "Café Mocha (Hot / Iced)",
    description: "Espresso combined with rich Callebaut chocolate cocoa and velvety steamed milk.",
    price: 235,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-107",
    name: "Café Latte (Single / Double)",
    description: "Smooth espresso topped with steamed milk and a light layer of microfoam.",
    price: 210,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-108",
    name: "Cappuccino (Single / Double)",
    description: "Equal parts intense espresso, steamed milk, and thick velvety foam.",
    price: 190,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-109",
    name: "Spiced Cappuccino",
    description: "Classic cappuccino infused with cinnamon and nutmeg spice notes.",
    price: 215,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-110",
    name: "Flat White",
    description: "Double shot espresso folded into silky steamed microfoam milk.",
    price: 210,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-111",
    name: "South Indian Filter Coffee",
    description: "Traditional chicory-infused decoction froth-poured with piping hot sweet milk.",
    price: 190,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-112",
    name: "Americano (Hot / Iced)",
    description: "Espresso diluted with hot water or poured over cold ice.",
    price: 180,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-113",
    name: "Espresso (Single / Double)",
    description: "Concentrated bold coffee shot extracted under high pressure.",
    price: 140,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-114",
    name: "Macchiato",
    description: "Espresso marked with a small dollop of foamed milk.",
    price: 160,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-115",
    name: "Cortado",
    description: "Equal balance of double espresso shot and warm steamed milk.",
    price: 180,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-116",
    name: "Café Bombon",
    description: "Intense espresso layered over sweet condensed milk.",
    price: 190,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-117",
    name: "Irish Coffee",
    description: "Hot coffee sweetened and topped with whipped cream foam.",
    price: 225,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-118",
    name: "Coffee Tonic / Coffee Soda / Coffee Lemonade",
    description: "Sparkling tonic water or fizzy lemonade topped with cold espresso shot.",
    price: 245,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-119",
    name: "Manual Brew (French Press / Aeropress / V60)",
    description: "Hand-poured filter coffee using single-origin beans (Hot / Iced available).",
    price: 225,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-120",
    name: "Cold Brew",
    description: "18-hour slow steeped cold coffee, naturally smooth and low acidity.",
    price: 190,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },
  {
    id: "c-121",
    name: "Affogato (Vanilla / Salted Caramel / Chocolate)",
    description: "Scoop of creamy ice cream drowned in a hot shot of fresh espresso.",
    price: 235,
    isVeg: true,
    category: "Espresso & Coffee Bar"
  },

  // --- COOLERS & BEVERAGES ---
  {
    id: "b-101",
    name: "Virgin Mojito / Kiwi / Orange Mojito",
    description: "Fresh crushed mint, lime wedges, simple syrup topped with sparkling soda.",
    price: 235,
    isVeg: true,
    category: "Coolers & Beverages",
    isPopular: true
  },
  {
    id: "b-102",
    name: "Strawberry Jam Refresher",
    description: "Tangy strawberry preserve muddled with fresh mint, lime, and crushed ice.",
    price: 235,
    isVeg: true,
    category: "Coolers & Beverages"
  },
  {
    id: "b-103",
    name: "Cucumber & Basil Cooler",
    description: "Crisp cucumber slices muddled with holy basil leaves, lemon, and chilled soda.",
    price: 235,
    isVeg: true,
    category: "Coolers & Beverages"
  },
  {
    id: "b-104",
    name: "Watermelon Bubblegum Cooler",
    description: "Fresh watermelon juice infused with nostalgic bubblegum notes and ice.",
    price: 245,
    isVeg: true,
    category: "Coolers & Beverages"
  },
  {
    id: "b-105",
    name: "Green Apple & Elderflower Cooler",
    description: "Tart green apple syrup blended with fragrant elderflower and sparkling water.",
    price: 245,
    isVeg: true,
    category: "Coolers & Beverages"
  },
  {
    id: "b-106",
    name: "Strawberry Margarita Cooler",
    description: "Salt-rimmed glass with blended fresh strawberry puree, lime juice, and agave.",
    price: 245,
    isVeg: true,
    category: "Coolers & Beverages"
  },
  {
    id: "b-107",
    name: "Watermelon Lemonade / Fresh Lime",
    description: "Chilled fresh fruit lemonade served sweet or salted over ice cubes.",
    price: 245,
    isVeg: true,
    category: "Coolers & Beverages"
  },
  {
    id: "b-108",
    name: "Fresh Juices (Orange / Watermelon / Pineapple / Mix Fruit)",
    description: "100% pure cold-pressed seasonal fresh fruit juice.",
    price: 250,
    isVeg: true,
    category: "Coolers & Beverages"
  },
  {
    id: "b-109",
    name: "Flavoured Ice Teas (Peach / Watermelon / Lemon / Red Bull)",
    description: "House brewed black tea infused with fruit purees and mint over ice.",
    price: 235,
    isVeg: true,
    category: "Coolers & Beverages"
  },
  {
    id: "b-110",
    name: "Selection of Dip Teas",
    description: "Honey Ginger Lemon, Chamomile, English Breakfast, or Jasmine Tea.",
    price: 160,
    isVeg: true,
    category: "Coolers & Beverages"
  },
  {
    id: "b-111",
    name: "Kombucha (Peach / Coffee Orange / Apple Cinnamon)",
    description: "Artisanal fermented probiotic tea drink, naturally effervescent.",
    price: 245,
    isVeg: true,
    category: "Coolers & Beverages"
  },
  {
    id: "b-112",
    name: "Soft Drinks & Red Bull",
    description: "Diet Coke, Coca Cola, Sprite (₹85) or Red Bull Energy Drink (₹245).",
    price: 85,
    isVeg: true,
    category: "Coolers & Beverages"
  },
  {
    id: "b-113",
    name: "Royal Saffron Lassi",
    description: "Thick churned yogurt drink sweetened with crushed pistachios, almonds, and Kashmiri saffron.",
    price: 185,
    isVeg: true,
    category: "Coolers & Beverages",
    isPopular: true
  },

  // --- SMOOTHIES & SHAKES ---
  {
    id: "s-101",
    name: "Banana Peanut Butter Espresso Smoothie",
    description: "Creamy peanut butter, ripe bananas, espresso shot, and almond milk blend.",
    price: 345,
    isVeg: true,
    category: "Smoothies & Shakes",
    isPopular: true
  },
  {
    id: "s-102",
    name: "Almond & Dates Smoothie",
    description: "Nutritious blend of crushed almonds, sweet Arabian dates, and thick milk.",
    price: 345,
    isVeg: true,
    category: "Smoothies & Shakes"
  },
  {
    id: "s-103",
    name: "Kiwi Apple Banana Smoothie",
    description: "Refreshing green blend of fresh kiwi, green apple slices, and banana puree.",
    price: 345,
    isVeg: true,
    category: "Smoothies & Shakes"
  },
  {
    id: "s-104",
    name: "Strawberry Banana Flaxseeds Smoothie",
    description: "Fresh strawberry compote, bananas, organic flaxseeds, and chilled milk.",
    price: 345,
    isVeg: true,
    category: "Smoothies & Shakes"
  },
  {
    id: "s-105",
    name: "Blueberry Banana Flaxseeds Smoothie",
    description: "Wild blueberry pulp, banana, roasted flaxseeds, and thick yogurt milk.",
    price: 345,
    isVeg: true,
    category: "Smoothies & Shakes"
  },
  {
    id: "s-106",
    name: "Chocolate Protein Shake",
    description: "Premium whey chocolate protein blended with chilled milk and ice.",
    price: 325,
    isVeg: true,
    category: "Smoothies & Shakes"
  },
  {
    id: "s-107",
    name: "Nutella Hazelnut Shake",
    description: "Rich Nutella spread blended with roasted hazelnuts and vanilla ice cream.",
    price: 315,
    isVeg: true,
    category: "Smoothies & Shakes",
    isPopular: true
  },
  {
    id: "s-108",
    name: "Belgian Chocolate Shake",
    description: "Thick milk shake made with melted 54% Callebaut dark chocolate ganache.",
    price: 335,
    isVeg: true,
    category: "Smoothies & Shakes"
  },
  {
    id: "s-109",
    name: "Oreo / Toblerone / Kit Kat Shake",
    description: "Thick ice cream shake blended with crushed chocolate bars and cookies.",
    price: 295,
    isVeg: true,
    category: "Smoothies & Shakes"
  },
  {
    id: "s-110",
    name: "Blueberry / Strawberry Shake",
    description: "Real fruit berry preserves blended with cream milk and ice cream.",
    price: 295,
    isVeg: true,
    category: "Smoothies & Shakes"
  },
  {
    id: "s-111",
    name: "Ice Cream Frappe (Caramel / Banana / Chocolate / Oreo)",
    description: "Blended ice cream cold coffee frappe topped with whipped cream.",
    price: 265,
    isVeg: true,
    category: "Smoothies & Shakes"
  },
  {
    id: "s-112",
    name: "Hot Chocolate",
    description: "Steaming hot thick Callebaut milk chocolate drink with cocoa dust.",
    price: 275,
    isVeg: true,
    category: "Smoothies & Shakes"
  },
  {
    id: "s-113",
    name: "Homemade Ginger Ale (Hot / Cold)",
    description: "Freshly brewed spicy ginger reduction served warm or over crushed ice soda.",
    price: 195,
    isVeg: true,
    category: "Smoothies & Shakes"
  },

  // --- DESSERTS & PASTRIES ---
  {
    id: "d-101",
    name: "Nutella Cold Cheese Cake",
    description: "Cream cheese, dairy cream, Callebaut milk chocolate 33.6% cocoa, cookie crumble.",
    price: 245,
    isVeg: true,
    category: "Desserts & Pastries",
    isPopular: true
  },
  {
    id: "d-102",
    name: "Belgian Truffle Pastry",
    description: "Moist chocolate sponge layered with 54% Callebaut dark chocolate ganache.",
    price: 265,
    isVeg: true,
    category: "Desserts & Pastries",
    isPopular: true
  },
  {
    id: "d-103",
    name: "Mango Cold Cheese Cake (Seasonal)",
    description: "Cream cheese, Alphonso mango pulp, fresh mango compote, Callebaut white chocolate.",
    price: 235,
    isVeg: true,
    category: "Desserts & Pastries"
  },
  {
    id: "d-104",
    name: "Strawberry Cold Cheese Cake (Seasonal)",
    description: "Cream cheese, fresh strawberry compote, Callebaut white chocolate, cooking cream.",
    price: 235,
    isVeg: true,
    category: "Desserts & Pastries"
  },
  {
    id: "d-105",
    name: "Blueberry Milk Chocolate Delight",
    description: "Almond blueberry sponge, cheese frosting, blueberry compote, Callebaut milk chocolate ganache.",
    price: 295,
    isVeg: false,
    category: "Desserts & Pastries"
  },
  {
    id: "d-106",
    name: "Flourless Orange Moist Cake",
    description: "Gluten-free cake made with almond flour, fresh orange juice, orange zest, and castor sugar.",
    price: 235,
    isVeg: true,
    category: "Desserts & Pastries"
  },
  {
    id: "d-107",
    name: "Blueberry Baked Cheese Cake",
    description: "Cream cheese baked cheesecake topped with preserved wild blueberry reduction.",
    price: 265,
    isVeg: false,
    category: "Desserts & Pastries"
  },
  {
    id: "d-108",
    name: "Biscoff Cheese Cake",
    description: "Cream cheese, Lotus Biscoff biscuits, dairy cream, lemon juice, Biscoff spread.",
    price: 265,
    isVeg: false,
    category: "Desserts & Pastries",
    isPopular: true
  },
  {
    id: "d-109",
    name: "Chocolate Brownie",
    description: "Fudgy brownie made with Callebaut chocolate 54% cocoa, butter, and flour.",
    price: 235,
    isVeg: false,
    category: "Desserts & Pastries"
  },
  {
    id: "d-110",
    name: "Chocolate Éclairs",
    description: "Choux pastry filled with rich pastry cream and topped with Callebaut chocolate glaze.",
    price: 225,
    isVeg: false,
    category: "Desserts & Pastries"
  },
  {
    id: "d-111",
    name: "Mascarpone Cheese Cake",
    description: "Light Italian mascarpone cream, honey sweetness, and vanilla cookie crumble.",
    price: 245,
    isVeg: false,
    category: "Desserts & Pastries"
  },
  {
    id: "d-112",
    name: "Brownie Cheese Cake",
    description: "Dark chocolate brownie base topped with white chocolate cream cheese layer.",
    price: 295,
    isVeg: false,
    category: "Desserts & Pastries"
  },
  {
    id: "d-113",
    name: "Shahi Tukda Rabri",
    description: "Crispy fried brioche soaked in saffron cardamom rabri topped with silver leaf and nuts.",
    price: 245,
    isVeg: true,
    category: "Desserts & Pastries",
    isPopular: true
  },
  {
    id: "d-114",
    name: "Kesar Phirni",
    description: "Traditional Kashmiri ground rice pudding flavored with saffron, cardamom, and silver foil.",
    price: 225,
    isVeg: true,
    category: "Desserts & Pastries"
  },
  {
    id: "d-115",
    name: "Gulab Jamun with Cream Rabri",
    description: "Warm golden khoya dumplings served with cold cardamom rabri.",
    price: 235,
    isVeg: true,
    category: "Desserts & Pastries"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "g-1",
    title: "Night View - Rustic Fairy Lights Facade",
    category: "Ambience",
    image: "/images/gallery/rustic-entrance-night.jpg",
    span: "col-span-1 md:col-span-2 h-[420px]"
  },
  {
    id: "g-2",
    title: "Rustic Dining Hall & Golden Logo View",
    category: "Ambience",
    image: "/images/gallery/rustic-interior-perspective.png",
    span: "col-span-1 h-[420px]"
  },
  {
    id: "g-3",
    title: "Warm Ambient Table Seating",
    category: "Dining Experience",
    image: "/images/gallery/rustic-interior-warm.jpg",
    span: "col-span-1 h-[340px]"
  },
  {
    id: "g-4",
    title: "Daytime Garden Entrance & Kebabi Niwala",
    category: "Ambience",
    image: "/images/gallery/rustic-entrance-day.jpg",
    span: "col-span-1 h-[340px]"
  },
  {
    id: "g-5",
    title: "Golden Rustic Branding & Display Counter",
    category: "Dining Experience",
    image: "/images/gallery/rustic-counter-logo.jpg",
    span: "col-span-1 h-[340px]"
  },
  {
    id: "g-6",
    title: "Panoramic Main Dining Hall & Teal Seating",
    category: "Ambience",
    image: "/images/gallery/rustic-interior-teal.jpg",
    span: "col-span-1 md:col-span-3 h-[420px]"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    author: "Vikramaditya S.",
    location: "C-Scheme Diner",
    rating: 5,
    date: "August 2026",
    highlight: "Best Kebabs in C-Scheme!",
    comment: "The Galouti kebabs literally melt in your mouth! Rustic brings a high-end royal Awadhi experience right into Jaipur. Beautiful warm ambience and world-class hospitality."
  },
  {
    id: "t-2",
    author: "Priya Sharma",
    location: "Food Critic & Guest",
    rating: 5,
    date: "July 2026",
    highlight: "Unmatched Dum Biryani & Dal-e-Rustic",
    comment: "The aroma of saffron when they break the handi dough seal is magical. Dal-e-Rustic easily rivals top fine-dining places in Delhi & Jaipur. Highly recommended!"
  },
  {
    id: "t-3",
    author: "Rohit & Ananya",
    location: "Anniversary Dinner",
    rating: 5,
    date: "August 2026",
    highlight: "Elegant & Memorable Evening",
    comment: "Celebrated our anniversary at Rustic. The lighting, classical instrumental background vibe, and rich Mughlai dishes made our night truly special. 5 stars all around."
  }
];
