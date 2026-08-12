export type Division = {
  title: string;
  description: string;
  image: string;
  partners: string[];
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
  partners: string[];
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

export const partnerLogos = [
  {
    name: "IJ",
    image: "https://adgully.com/img/800/202104/ij.png.jpg",
  },
  {
    name: "MWEB",
    image: "https://soliditech.com/wp-content/uploads/2016/04/MWEB-Logo_New.png",
  },
  {
    name: "Cell C",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cell_C_New_2024_logo.svg/1280px-Cell_C_New_2024_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    name: "Telkom",
    image: "https://upload.wikimedia.org/wikipedia/en/9/94/Telkom_Logo_2025.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
  },
  {
    name: "Partner network",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mmDNm6Ka2r2s4UDm7pTYO4SS9jFPRdy4lvNd_TnXNg&s=10",
  },
  {
    name: "Strategic partner",
    image: "https://image.jimcdn.com/app/cms/image/transf/dimension=900x10000:format=jpg/path/s1084e755aa436055/image/i75efb6e8bd445d48/version/1524002210/image.jpg",
  },
];

export const businesses: Business[] = [
  {
    index: "01",
    slug: "real-estate",
    category: "Real Estate",
    navCategory: "Real Estate",
    title: "Bioture Real Estate",
    shortTitle: "Real Estate",
    heroTitle: "Places of value.\nBuilt to endure.",
    introTitle: "Luxury homes, prime land and considered property spaces built for lasting value.",
    introCopy:
      "Bioture Real Estate develops luxury homes, prime land and considered property spaces that combine strategic locations, practical design and long-term investment value.",
    summary: "Developing residential, commercial and mixed-use assets that turn strategic locations into durable investment value.",
    partners: ["Landowners", "Developers", "Architects", "Investors", "Property buyers"],
    image: "/assets/real-estate/real-estate-hero.jpeg",
    divisions: [],
    approachTitle: "Real estate with a longer view.",
    approachCopy:
      "The corporate profile introduces the business, while a future dedicated property platform can host searchable land, houses and commercial listings.",
    approachImage: "/assets/real-estate/real-estate-development-2.jpeg",
    actionTitle: "Turn location into lasting value.",
    actionCopy: "Speak with our property team about buying, selling, development or institutional opportunities.",
    actionHref: "/contact?subject=real-estate",
    actionLabel: "Talk to the property team",
    footerTitle: "Discover places with enduring potential.",
    footerCta: "Explore real estate opportunities",
    platform: {
      title: "Browse more Bioture Real Estate properties like these.",
      copy: "See more luxury homes, land opportunities and considered property spaces from Bioture Real Estate on the dedicated property website.",
      href: "https://realestate.bioture.com",
      label: "Browse more properties",
    },
  },
  {
    index: "02",
    slug: "commerce",
    category: "Commerce",
    navCategory: "Commerce",
    title: "Bioture Commerce",
    shortTitle: "Commerce",
    heroTitle: "Quality products.\nGrowing markets.",
    introTitle: "Building trusted consumer brands and distribution channels across selected product categories.",
    introCopy: "Bioture Commerce builds trusted consumer brands across beverages and fashion, connecting manufacturers with growing regional markets.",
    summary: "Consumer brands and distribution channels designed to move quality products into growing regional markets.",
    partners: ["Product suppliers", "Retailers", "Distributors", "Fashion designers", "Beverage producers"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=90",
    divisions: [
      {
        title: "Beverages",
        description: "Develops distinctive beverage products with carefully selected ingredients, consistent quality and strong retail potential.",
        partners: ["Ingredient suppliers", "Bottling partners", "Retail outlets", "Wellness distributors"],
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=90",
      },
      {
        title: "Fashion",
        description:
          "Creates fashion products that translate cultural expression into wearable, market-ready collections.",
        partners: ["Design studios", "Textile suppliers", "Retail boutiques", "Creative collaborators"],
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Commercial strength built on trust.",
    approachCopy:
      "We aim to combine careful sourcing, strong supplier relationships, thoughtful presentation and dependable customer service.",
    approachImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Take your products further.",
    actionCopy:
      "Connect with our commercial team about sourcing, representation, wholesale and distribution opportunities.",
    actionHref: "/contact?subject=commerce",
    actionLabel: "Discuss commerce",
    footerTitle: "Build your route to market with Bioture.",
    footerCta: "Start a commerce conversation",
    platform: {
      title: "Shop and discover more products",
      copy: "Browse products, collections and commercial offers on the dedicated Bioture Commerce platform.",
      href: "https://commerce.bioture.com",
      label: "Shop and discover more products",
    },
  },
  {
    index: "03",
    slug: "agriculture-food",
    category: "Agriculture & Food",
    navCategory: "Agriculture",
    title: "Bioture Agriculture & Food",
    shortTitle: "Agriculture & Food",
    heroTitle: "Growing resources.\nTransforming food.",
    introTitle:
      "Advancing food security through responsible production, processing and market access.",
    introCopy:
      "Bioture Agriculture & Food builds practical farming and processing systems that strengthen food security and market access.",
    summary: "Food production and processing businesses that expand reliable supply, reduce waste and create market-ready products.",
    partners: ["Farmers", "Processors", "Cooperatives", "Distributors", "Food retailers"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Agriculture",
        description: "Builds practical farming capacity across animal husbandry, crop cultivation and technology-supported production.",
        partners: ["Farmers", "Input suppliers", "Agri-tech providers", "Research institutions"],
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Food processing",
        description: "Turns agricultural yields into safe, packaged and market-ready food products.",
        partners: ["Growers", "Packaging partners", "Food safety specialists", "Retail channels"],
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
    footerCta: "Grow with Bioture",
    platform: {
      title: "Explore our food and agriculture platform",
      copy: "Discover products, producer programmes and sector opportunities on a dedicated digital platform.",
      href: "https://agriculture.bioture.com",
      label: "Visit Agriculture & Food",
    },
  },
  {
    index: "04",
    slug: "resources-energy",
    category: "Resources & Energy",
    navCategory: "Resources",
    title: "Bioture Resources & Energy",
    shortTitle: "Resources & Energy",
    heroTitle: "Responsible resources.\nPowering progress.",
    introTitle: "Developing responsible resource and energy businesses that create long-term industrial value.",
    introCopy:
      "Bioture Resources & Energy develops mineral and energy assets through responsible exploration, extraction and strategic partnerships.",
    summary: "Developing mineral and energy assets through responsible exploration, extraction and strategic partnerships.",
    partners: ["License holders", "Technical operators", "Energy buyers", "Infrastructure partners", "Regulatory stakeholders"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Mining & minerals",
        description:
          "Developing mineral assets through responsible exploration, extraction and strategic partnerships.",
        partners: ["Concession owners", "Geologists", "Equipment providers", "Local communities"],
        image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Oil & gas",
        description: "Participates across exploration, production, refining and supply through technical partnerships and disciplined project governance.",
        partners: ["Exploration firms", "Refining partners", "Logistics operators", "Industrial buyers"],
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Value beneath the surface.",
    approachCopy:
      "We aim to pursue resource opportunities through disciplined partnerships, responsible conduct and a clear understanding of local and global markets.",
    approachImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Develop resources responsibly.",
    actionCopy:
      "Connect with Bioture about project participation, technical services, infrastructure and resource partnerships.",
    actionHref: "/contact?subject=resources-energy",
    actionLabel: "Discuss a resources partnership",
    footerTitle: "Power progress through responsible partnerships.",
    footerCta: "Connect with our resources team",
  },
  {
    index: "05",
    slug: "manufacturing",
    category: "Manufacturing",
    navCategory: "Manufacturing",
    title: "Bioture Manufacturing",
    shortTitle: "Manufacturing",
    heroTitle: "Making products.\nBuilding capacity.",
    introTitle: "Designing, engineering and manufacturing products, industrial equipment and intelligent consumer technologies.",
    introCopy:
      "Bioture Manufacturing designs, engineers and manufactures innovative products, industrial equipment and intelligent consumer technologies.",
    summary: "Engineering products, industrial equipment and intelligent consumer technologies for practical market needs.",
    partners: ["OEM partners", "Suppliers", "Engineering teams", "Technology providers", "Industrial buyers"],
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Manufacturing",
        description:
          "Designs and manufactures practical products, equipment and production systems for consumer and industrial needs.",
        partners: ["Component suppliers", "Fabricators", "Private-label clients", "Quality specialists"],
        image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Gadgets & artificial intelligence",
        description:
          "Develops intelligent devices and applied AI tools that improve productivity across priority sectors.",
        partners: ["AI builders", "Hardware suppliers", "Product designers", "Enterprise adopters"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Production with purpose.",
    approachCopy:
      "Our manufacturing vision is centred on quality, safety, efficient production and products that serve real market needs.",
    approachImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Manufacture what the market needs.",
    actionCopy: "Explore production, supply, private-label and industrial partnership opportunities with Bioture.",
    actionHref: "/contact?subject=manufacturing",
    actionLabel: "Discuss a manufacturing partnership",
    footerTitle: "Strengthen productive capacity with Bioture.",
    footerCta: "Build with our manufacturing team",
  },
  {
    index: "06",
    slug: "health-wellness",
    category: "Health & Wellness",
    navCategory: "Wellness",
    title: "Bioture Health & Wellness",
    shortTitle: "Health & Wellness",
    heroTitle: "Better wellness.\nDeeper care.",
    introTitle: "Advancing health, research and personal care solutions for everyday and specialist needs.",
    introCopy: "Bioture Health & Wellness develops healthcare, research and personal care ventures that support better everyday outcomes.",
    summary: "Health, biomedical research and personal care businesses designed around access, safety and trusted customer experience.",
    partners: ["Clinicians", "Researchers", "Pharmacies", "Beauty retailers", "Care providers"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Biomedicals & pharmaceuticals",
        description:
          "Supports biomedical research, pharmaceutical access and disease-control systems for stronger health outcomes.",
        partners: ["Medical researchers", "Clinics", "Laboratories", "Pharmaceutical distributors"],
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Cosmetics",
        description: "Creates skin care, fragrance and beauty products built around quality, safety and distinctive customer experience.",
        partners: ["Ingredient suppliers", "Dermatology advisers", "Beauty retailers", "Salons and spas"],
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Wellness shaped by research and care.",
    approachCopy:
      "Our approach connects research, medicine and personal care to improve wellness across everyday and specialist needs.",
    approachImage: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Advance wellness with Bioture.",
    actionCopy: "Connect with our team about medicine, research, personal care and wellness opportunities.",
    actionHref: "/contact?subject=health-wellness",
    actionLabel: "Discuss health and wellness",
    footerTitle: "Advance wellness with Bioture.",
    footerCta: "Speak with the wellness team",
  },
  {
    index: "07",
    slug: "transport-logistics",
    category: "Transport & Logistics",
    navCategory: "Transport",
    title: "Bioture Transport & Logistics",
    shortTitle: "Transport & Logistics",
    heroTitle: "Moving people.\nConnecting markets.",
    introTitle:
      "Operating mobility and logistics services that move people, goods and market opportunities more dependably.",
    introCopy:
      "Bioture Transport & Logistics operates mobility, freight and transit services that keep people, goods and markets moving dependably.",
    summary: "Transport, freight, transit and automotive services built for reliable movement across growing markets.",
    partners: ["Fleet owners", "Freight clients", "Transit operators", "Aviation partners", "Automotive suppliers"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Transport & logistics",
        description: "Delivers transport, fleet, warehousing and logistics support for businesses and communities.",
        partners: ["Freight forwarders", "Warehouse operators", "Fleet partners", "Corporate shippers"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Aviation & transport transit",
        description: "Develops transit services that make local and international travel connections more efficient.",
        partners: ["Air operators", "Travel agencies", "Airport services", "Transit hubs"],
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Automobile",
        description: "Develops accessible mobility solutions, vehicle services and practical automotive partnerships.",
        partners: ["Parts suppliers", "Assembly partners", "Service centers", "Mobility investors"],
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=86",
      },
    ],
    approachTitle: "Every route creates possibility.",
    approachCopy:
      "We aim to make movement more dependable through connected services, operational discipline and strong logistics partnerships.",
    approachImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=88",
    actionTitle: "Move further with a dependable partner.",
    actionCopy: "Discuss freight, fleet, transit, warehousing or transport requirements with our team.",
    actionHref: "/contact?subject=transport-logistics",
    actionLabel: "Plan a logistics solution",
    footerTitle: "Work with Bioture.",
    footerCta: "Plan your next move",
  },
  {
    index: "08",
    slug: "finance-consultancy",
    category: "Finance & Consultancy",
    navCategory: "Finance",
    title: "Bioture Finance & Consultancy",
    shortTitle: "Finance & Consultancy",
    heroTitle: "Informed decisions.\nStronger futures.",
    introTitle: "Finance, insurance and advisory support for stronger decisions.",
    introCopy:
      "Bioture Finance & Consultancy delivers finance, insurance and advisory services that help clients manage risk and pursue opportunity.",
    summary: "Financial, insurance and advisory capabilities that support resilient families, businesses and institutions.",
    partners: ["Financial institutions", "Insurers", "Entrepreneurs", "Family offices", "Governance teams"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=90",
    divisions: [
      {
        title: "Finance",
        description:
          "Supports access to financial services and intelligence for family, business and economic decision-making.",
        partners: ["Banks", "Fintech providers", "Investors", "SME networks"],
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Insurance",
        description: "Builds risk-protection solutions for individuals, businesses and institutions.",
        partners: ["Underwriters", "Brokers", "Risk advisers", "Corporate clients"],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1100&q=86",
      },
      {
        title: "Consultancy",
        description: "Advises families, businesses and leaders on strategy, governance and institutional growth.",
        partners: ["Business leaders", "Governance boards", "Family enterprises", "Implementation specialists"],
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
];

export function getBusiness(slug: string) {
  return businesses.find((business) => business.slug === slug);
}
