export const AGENT_INFO = {
  name: 'Deepak Sharma',
  role: 'Real Estate Consultant',
  location: 'Noida & Yamuna Expressway',
  coverage: 'Noida | Greater Noida | Yamuna Expressway',
  services: 'Residential & Commercial Properties',
  servicesList: 'Buying • Selling • Renting',
  phone: '9953245542',
  displayPhone: '+91 99532 45542',
  whatsappNumber: '919953245542',
  tagline: 'Residential & Commercial Property Consultant',
  motto: '|| Self Believer ||',
};

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${AGENT_INFO.whatsappNumber}?text=${encodeURIComponent(message.trim())}`;
}

export const PREFILLED_MESSAGES = {
  hero: 'Hi Deepak, I am looking for property assistance in Noida & Yamuna Expressway. Please share available options.',
  buying: 'Hi Deepak, I am looking to BUY a residential/commercial property in Noida/Yamuna Expressway. Please share suitable options.',
  selling: 'Hi Deepak, I want to SELL my property in Noida/Yamuna Expressway. Please assist me with genuine buyers.',
  renting: 'Hi Deepak, I am looking to RENT / RENT OUT a property in Noida/Yamuna Expressway. Please share details.',
  generalInquiry: 'Hi Deepak, I am looking for a property in Noida/Yamuna Expressway. I would like to discuss my requirement.',
  floating: 'Hi Deepak, I found your website and I am interested in a property in Noida/Yamuna Expressway. Please share available options.',
  propertyTypes: "Hi Deepak, I am looking for property options in Noida/Yamuna Expressway. Here is what I am looking for:",
};

export const RESIDENTIAL_TYPES = [
  { name: 'Apartments', desc: 'High-rise luxury & affordable apartments with modern amenities.' },
  { name: 'Flats', desc: 'Ready-to-move and under-construction 2, 3 & 4 BHK units.' },
  { name: 'Villas', desc: 'Independent luxury villas, duplexes, and gated community homes.' },
  { name: 'Plots', desc: 'Authority & freehold residential plots with clear titles.' },
];

export const COMMERCIAL_TYPES = [
  { name: 'Shops', desc: 'Retail high-street shops with high footfall & guaranteed rental yield.' },
  { name: 'Offices', desc: 'Lockable corporate office spaces & IT/ITES park workspaces.' },
  { name: 'Commercial Spaces', desc: 'Food courts, anchor stores, and institutional spaces.' },
  { name: 'Commercial Plots', desc: 'Commercial zoned land parcels for showrooms and warehouses.' },
];

export const FEATURED_PROPERTIES = [
  {
    id: 'prop-1',
    title: 'Skyline Golf-Facing Residences',
    category: 'Residential',
    tag: 'PENTHOUSE',
    badge: 'FOR SALE',
    location: 'Sector 150, Noida Expressway',
    specs: '3 & 4 BHK Luxury Residences',
    price: '₹ 1.85 Cr',
    beds: 4,
    baths: 4,
    sqft: '2,850',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Golf-facing, sports city infra, direct access to Expressway & Metro',
  },
  {
    id: 'prop-2',
    title: 'Modern High-Rise Apartment in Sector 137',
    category: 'Residential',
    tag: 'APARTMENT',
    badge: 'FOR RENT',
    location: 'Sector 137, Noida Expressway',
    specs: '3 BHK Semi-Furnished Flat',
    price: '₹ 42,000 / mo',
    beds: 3,
    baths: 3,
    sqft: '1,750',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Metro-connected, gated society, clubhouse, pool and 24/7 security',
  },
  {
    id: 'prop-3',
    title: 'Heritage Independent Luxury Villa',
    category: 'Residential',
    tag: 'BUNGALOW',
    badge: 'FOR SALE',
    location: 'Pari Chowk, Greater Noida',
    specs: '5 BHK Luxury Duplex Villa',
    price: '₹ 3.85 Cr',
    beds: 5,
    baths: 5,
    sqft: '4,600',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Private landscaped lawn, Italian marble, private lift & rooftop terrace',
  },
  {
    id: 'prop-4',
    title: 'Yamuna Expressway Authority Plots',
    category: 'Plots / Land',
    tag: 'AUTHORITY PLOT',
    badge: 'FOR SALE',
    location: 'Sector 18 & 20, Yamuna Expressway',
    specs: '300 & 500 Sq. Mtr Registered Plots',
    price: '₹ 1.25 Cr onwards',
    beds: null,
    baths: null,
    sqft: '3,230',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Close to upcoming Jewar International Airport & Film City corridor',
  },
  {
    id: 'prop-5',
    title: 'Prime High-Street Retail Shops & Offices',
    category: 'Commercial',
    tag: 'COMMERCIAL',
    badge: 'FOR SALE',
    location: 'Central Noida & Expressway Hub',
    specs: 'Lockable Retail & Office Units',
    price: '₹ 55.0 Lacs onwards',
    beds: null,
    baths: 1,
    sqft: '650',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    highlight: 'High footfall density, guaranteed lease assistance & high rental yields',
  },
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Priya Sharma',
    role: 'Homeowner in Sector 150',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Deepak Sharma found us the perfect golf-facing apartment in Sector 150. His team was transparent, guided us through all registry paperwork seamlessly, and negotiated the best price. Highly recommended!',
  },
  {
    id: 'test-2',
    name: 'Rajeev Malhotra',
    role: 'Investor in Yamuna Expressway',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Genuine authority plot deal near Jewar Airport. Deepak provided 100% legal verification and clear paperwork within 3 days. Best property consultant in Noida!',
  },
  {
    id: 'test-3',
    name: 'Amit & Neha Verma',
    role: 'Villa Buyers in Greater Noida',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Exceptional service! We were looking for an independent villa for 6 months. Deepak arranged immediate site visits and closed the deal below our expected budget.',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'verified',
    title: '100% Verified Listings',
    desc: 'Every property goes through a rigorous physical inspection and legal check before making it to our recommendations.',
    icon: 'ShieldCheck',
  },
  {
    id: 'fast',
    title: 'Lightning Fast Process',
    desc: 'End-to-end documentation and direct consultant coordination speed up your buying or selling experience.',
    icon: 'Clock',
  },
  {
    id: 'insights',
    title: 'Deep Locality Insights',
    desc: 'Get data-driven insights about neighborhoods, connectivity, and Jewar Airport infrastructure developments.',
    icon: 'MapPin',
  },
  {
    id: 'price',
    title: 'Best Price Guarantee',
    desc: 'We negotiate directly with top developers and genuine owners to bring you exclusive offers and guaranteed lowest market prices.',
    icon: 'BadgePercent',
  },
  {
    id: 'support',
    title: '24/7 Priority Support',
    desc: 'Your dedicated property consultant is available round the clock to assist you with any queries or site visits.',
    icon: 'Headphones',
  },
];

export const KEY_HUBS = [
  {
    name: 'Noida City & Expressway',
    sectors: 'Sectors 62, 74-79, 128, 137, 143, 150',
    description: 'Premier residential high-rises, corporate tech parks, and thriving green sectors.',
  },
  {
    name: 'Greater Noida',
    sectors: 'Pari Chowk, Knowledge Park, Delta, Omega, Alpha',
    description: 'Wide planned avenues, educational hubs, and spacious independent housing societies.',
  },
  {
    name: 'Yamuna Expressway',
    sectors: 'Sector 18, 20, 22D, Jewar International Airport corridor',
    description: 'India’s fastest appreciating investment zone with Film City, Formula 1 track, and airport.',
  },
];
