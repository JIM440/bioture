export type Division = {
  title: string;
  description: string;
  image: string;
};

export type Business = {
  index: string;
  slug: string;
  category: string;
  navCategory: string;
  title: string;
  shortTitle: string;
  heroTitle: string;
  introTitle: string;
  introCopy: string;
  summary: string;
  image: string;
  divisions: Division[];
  approachTitle: string;
  approachCopy: string;
  approachImage: string;
  actionTitle: string;
  actionCopy: string;
  actionHref: string;
  actionLabel: string;
  footerTitle: string;
  footerCta: string;
  platform?: {
    title: string;
    copy: string;
    href: string;
    label: string;
  };
};

export const businesses: Business[] = [
  {
    index: "01",
    slug: "sales-solutions",
    category: "Commerce",
    navCategory: "Commerce",
    title: "BioTure Sales Solutions",
    shortTitle: "Sales Solutions",
    heroTitle: "Quality products.\nGrowing markets.",
    introTitle: "Connecting dependable products with the customers who need them.",
    introCopy:
      "BioTure Sales Solutions is the group's commercial and distribution company, focused on sourcing, presenting and delivering products across selected consumer and business categories.",
    summary: "Electrical equipment, cosmetics, fashion and beverages.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Electrical equipment",
        description: "Dependable electrical products, equipment and accessories for domestic and business needs.",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Cosmetics",
        description: "Beauty, personal care and wellness products selected for growing markets.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Fashion & design",
        description: "Apparel, accessories and creative products aligned with modern lifestyles.",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Beverages",
        description: "Consumer beverage products supported by commercial distribution capability.",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Commercial strength built on trust.",
    approachCopy:
      "We aim to combine careful sourcing, strong supplier relationships, thoughtful presentation and dependable customer service.",
    approachImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Take your products further.",
    actionCopy:
      "Connect with our commercial team about sourcing, representation, wholesale and distribution opportunities.",
    actionHref: "/contact?subject=sales-distribution",
    actionLabel: "Discuss distribution",
    footerTitle: "Build your route to market with BioTure.",
    footerCta: "Start a sales conversation",
    platform: {
      title: "Shop and discover products",
      copy: "Browse products, collections and commercial offers on the dedicated BioTure Sales Solutions platform.",
      href: "https://sales.bioture.com",
      label: "Visit the sales platform",
    },
  },
  {
    index: "02",
    slug: "agriculture-food",
    category: "Food & Agriculture",
    navCategory: "Food",
    title: "BioTure Agriculture & Food",
    shortTitle: "Agriculture & Food",
    heroTitle: "Growing resources.\nTransforming food.",
    introTitle:
      "Strengthening the journey from farm to table through responsible production, value addition and dependable food systems.",
    introCopy:
      "BioTure Agriculture & Food brings together agricultural development and food processing capabilities designed to support stronger value chains, improve product quality and create opportunities for producers and communities.",
    summary: "Agriculture and food processing that strengthen value chains.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Agriculture",
        description: "Crop production, agricultural partnerships, sourcing and practical support for productive farms.",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Food processing",
        description: "Transformation, preservation, packaging and preparation of agricultural products for market.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "From productive land to stronger food systems.",
    approachCopy:
      "Our approach connects responsible agricultural activity with processing capability, market access and long-term value creation.",
    approachImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Grow a stronger value chain.",
    actionCopy: "Work with us as a producer, supplier, distributor, processor or institutional partner.",
    actionHref: "/contact?subject=agriculture-partnership",
    actionLabel: "Explore an agriculture partnership",
    footerTitle: "From productive land to stronger markets.",
    footerCta: "Grow with BioTure",
    platform: {
      title: "Explore our food and agriculture platform",
      copy: "Discover products, producer programmes and sector opportunities on a dedicated digital platform.",
      href: "https://agriculture.bioture.com",
      label: "Visit Agriculture & Food",
    },
  },
  {
    index: "03",
    slug: "finance-consultancy",
    category: "Finance & Advisory",
    navCategory: "Advisory",
    title: "BioTure Finance & Consultancy",
    shortTitle: "Finance & Consultancy",
    heroTitle: "Informed decisions.\nStronger futures.",
    introTitle: "Supporting individuals and organizations with financial thinking, risk protection and professional guidance.",
    introCopy:
      "BioTure Finance & Consultancy is designed as the group's professional advisory platform, bringing together finance, insurance and consultancy services around a shared commitment to clarity, responsibility and client confidence.",
    summary: "Finance, insurance and expert consultancy services.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Finance",
        description: "Financial solutions and support shaped around responsible growth and informed decision-making.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Insurance",
        description: "Risk protection and insurance solutions developed with appropriate licensed partners.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Consultancy",
        description: "Business strategy, project advisory, market insight and professional support for organizations.",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Confidence built through clarity.",
    approachCopy:
      "We aim to combine careful analysis, practical advice and trusted relationships to help clients understand risk and pursue opportunity.",
    approachImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Move forward with greater clarity.",
    actionCopy: "Talk to our advisory team about strategy, finance, risk and business transformation.",
    actionHref: "/contact?subject=consultation",
    actionLabel: "Request a consultation",
    footerTitle: "Make the next decision with confidence.",
    footerCta: "Speak with an adviser",
  },
  {
    index: "04",
    slug: "real-estate",
    category: "Property",
    navCategory: "Property",
    title: "BioTure Real Estate",
    shortTitle: "Real Estate",
    heroTitle: "Places of value.\nBuilt to endure.",
    introTitle: "Creating and connecting people with land, homes, commercial property and development opportunities.",
    introCopy:
      "BioTure Real Estate serves as the group's property company, presenting opportunities across land, residential and commercial real estate while supporting development and property-related partnerships.",
    summary: "Property development, land, homes and commercial spaces.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Land",
        description: "Verified land opportunities for individuals, developers and institutional partners.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Residential property",
        description: "Homes and residential developments designed around quality, location and long-term value.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Commercial property",
        description: "Commercial spaces and investment opportunities supporting business growth.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Property development",
        description: "Development partnerships and projects shaped around viable market needs.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Real estate with a longer view.",
    approachCopy:
      "The corporate profile introduces the business, while a future dedicated property platform can host searchable land, houses and commercial listings.",
    approachImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Turn location into lasting value.",
    actionCopy: "Speak with our property team about buying, selling, development or institutional opportunities.",
    actionHref: "/contact?subject=real-estate",
    actionLabel: "Talk to the property team",
    footerTitle: "Discover places with enduring potential.",
    footerCta: "Explore real estate opportunities",
    platform: {
      title: "Find your next property opportunity",
      copy: "Search houses, land, commercial spaces and development opportunities on the dedicated property website.",
      href: "https://realestate.bioture.com",
      label: "Browse properties",
    },
  },
  {
    index: "05",
    slug: "resources-energy",
    category: "Resources & Energy",
    navCategory: "Energy",
    title: "BioTure Resources & Energy",
    shortTitle: "Resources & Energy",
    heroTitle: "Responsible resources.\nPowering progress.",
    introTitle: "Developing opportunities across minerals, precious metals, oil, gas and supporting energy infrastructure.",
    introCopy:
      "BioTure Resources & Energy focuses on responsible participation in natural-resource and energy value chains, from precious-metal opportunities to technical, infrastructure and partnership services in oil and gas.",
    summary: "Responsible opportunities across precious metals, mining, oil and gas.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Mining & minerals",
        description: "Responsible opportunities across mineral resources including gold, diamonds, cobalt, copper, iron ore and the wider mining value chain.",
        image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Gold, diamonds & precious minerals",
        description: "Gold, diamonds, silver and other valuable minerals, including sourcing, processing and trading opportunities.",
        image: "https://images.unsplash.com/photo-1610375461369-d613b56476ed?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Oil & gas",
        description: "Project support, infrastructure, logistics and technical opportunities rather than ordinary retail gas sales.",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Energy services",
        description: "Partnerships and capabilities that support reliable energy development and operations.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Value beneath the surface.",
    approachCopy:
      "We aim to pursue resource opportunities through disciplined partnerships, responsible conduct and a clear understanding of local and global markets.",
    approachImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Develop resources responsibly.",
    actionCopy:
      "Connect with BioTure about project participation, technical services, infrastructure and resource partnerships.",
    actionHref: "/contact?subject=resources-energy",
    actionLabel: "Discuss an energy partnership",
    footerTitle: "Power progress through responsible partnerships.",
    footerCta: "Connect with our resources team",
  },
  {
    index: "06",
    slug: "tech",
    category: "Technology",
    navCategory: "Digital",
    title: "BioTure Tech",
    shortTitle: "BioTure Tech",
    heroTitle: "Intelligent systems.\nPractical impact.",
    introTitle: "Building digital products, business systems and artificial-intelligence solutions for modern organizations.",
    introCopy:
      "BioTure Tech is the group's technology company, focused on helping organizations improve operations, customer experiences and decision-making through carefully designed digital systems.",
    summary: "Business systems, artificial intelligence, software solutions and digital transformation.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Business systems",
        description: "Enterprise applications, process automation, data platforms and integrated operational tools.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Artificial intelligence",
        description: "Applied AI solutions that support analysis, automation, personalization and better decisions.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Software solutions",
        description: "Web, mobile and desktop products designed around real operational requirements.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Digital transformation",
        description: "Technology strategy and implementation support for organizations modernizing their work.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Technology shaped around people.",
    approachCopy:
      "We combine business understanding, thoughtful design and technical capability to create systems that are useful, maintainable and ready to grow.",
    approachImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Turn an operational challenge into a digital advantage.",
    actionCopy: "Tell our technology team what you need to improve, automate or build.",
    actionHref: "/contact?subject=technology-project",
    actionLabel: "Start a technology project",
    footerTitle: "Build technology that works for people.",
    footerCta: "Start a digital project",
    platform: {
      title: "Build with BioTure Tech",
      copy: "Explore digital products, case studies and technology services on the dedicated BioTure Tech website.",
      href: "https://tech.bioture.com",
      label: "Visit BioTure Tech",
    },
  },
  {
    index: "07",
    slug: "manufacturing",
    category: "Industry",
    navCategory: "Industry",
    title: "BioTure Manufacturing",
    shortTitle: "Manufacturing",
    heroTitle: "Making products.\nBuilding capacity.",
    introTitle: "Developing industrial capability across general manufacturing, plastics, biomedical products and pharmaceuticals.",
    introCopy:
      "BioTure Manufacturing is designed to create practical products and strengthen productive capacity through modern processes, quality systems and strategic manufacturing partnerships.",
    summary: "General manufacturing, plastics, biomedical products and pharmaceuticals.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "General manufacturing",
        description: "Production of practical industrial and consumer goods across selected categories.",
        image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Plastics & packaging",
        description: "Plastic products, packaging and components for household and commercial use.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Biomedical products",
        description: "Medical consumables, laboratory products and biomedical manufacturing opportunities.",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Pharmaceuticals",
        description: "Future pharmaceutical production and partnerships subject to applicable licensing and standards.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Production with purpose.",
    approachCopy:
      "Our manufacturing vision is centred on quality, safety, efficient production and products that serve real market needs.",
    approachImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Manufacture what the market needs.",
    actionCopy: "Explore production, supply, private-label and industrial partnership opportunities with BioTure.",
    actionHref: "/contact?subject=manufacturing",
    actionLabel: "Discuss a manufacturing partnership",
    footerTitle: "Strengthen productive capacity with BioTure.",
    footerCta: "Build with our manufacturing team",
  },
  {
    index: "08",
    slug: "transport-logistics",
    category: "Mobility",
    navCategory: "Mobility",
    title: "BioTure Transport & Logistics",
    shortTitle: "Transport & Logistics",
    heroTitle: "Moving people.\nConnecting markets.",
    introTitle:
      "Connecting people, products and opportunities through transport, freight, aviation, transit and automobile services.",
    introCopy:
      "BioTure Transport & Logistics brings together mobility and supply-chain capabilities that can support businesses, institutions and individuals across local, regional and international routes.",
    summary: "Transport and logistics, aviation, transit and automobile services.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Transport & logistics",
        description: "Road transport, cargo movement, warehousing, distribution and supply-chain coordination.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Aviation",
        description: "Air cargo, charter coordination, aviation support and related partnership opportunities.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Transit & freight",
        description: "Customs transit, freight forwarding and cross-border movement support.",
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Automobile",
        description: "Vehicle sales, fleet services, leasing, maintenance and mobility solutions.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Every route creates possibility.",
    approachCopy:
      "We aim to make movement more dependable through connected services, operational discipline and strong logistics partnerships.",
    approachImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Move further with a dependable partner.",
    actionCopy: "Discuss freight, fleet, transit, warehousing or mobility requirements with our team.",
    actionHref: "/contact?subject=transport-logistics",
    actionLabel: "Plan a logistics solution",
    footerTitle: "Work with BioTure.",
    footerCta: "Plan your next move",
  },
];

export function getBusiness(slug: string) {
  return businesses.find((business) => business.slug === slug);
}
