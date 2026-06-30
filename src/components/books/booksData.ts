// src/components/books/booksData.ts

export const booksPath = "/assets/books/";

export type BookCategory =
  | "Artificial Intelligence"
  | "Entrepreneurship"
  | "Innovation"
  | "Virtual Reality"
  | "Blockchain"
  | "Leadership"
  | "Comics & IP";

export type BookItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  amazon: string;
  year: string;
  category: BookCategory;
  featured?: boolean;
  alt: string;
  seoTitle: string;
  seoDescription: string;
};

export const books: BookItem[] = [
  {
    id: "future-entrepreneurship",
    title: "The Future of Entrepreneurship",
    subtitle: "The Decade in AI",
    description:
      "Explores how artificial intelligence is reshaping entrepreneurship, innovation, business models and the next generation of founders. The book examines the opportunities, challenges and strategic mindset required in an AI-first decade.",
    image: `${booksPath}entrepreneurship.png`,
    amazon: "https://www.amazon.com/dp/B0CL2PYQ95",
    year: "2023",
    category: "Entrepreneurship",
    featured: true,
    alt: "The Future of Entrepreneurship The Decade in AI by Arijit Bhattacharyya book cover",
    seoTitle: "The Future of Entrepreneurship: The Decade in AI",
    seoDescription:
      "Book by Arijit Bhattacharyya exploring entrepreneurship, innovation and artificial intelligence."
  },

  {
    id: "generic-ai",
    title: "The Power of Generic AI",
    subtitle: "Unleashing the Universal Mind",
    description:
      "Introduces the growing influence of Generic AI and its potential to transform industries, education, innovation and everyday life through intelligent systems.",
    image: `${booksPath}power of Ai.png`,
    amazon: "https://www.amazon.in/dp/B0CCZCG3NL",
    year: "2023",
    category: "Artificial Intelligence",
    alt: "The Power of Generic AI book cover by Arijit Bhattacharyya",
    seoTitle: "The Power of Generic AI",
    seoDescription:
      "Artificial Intelligence book discussing Generic AI and future technologies."
  },

  {
    id: "vr-sega",
    title: "The VR Sega",
    subtitle: "Virtual Reality and Society",
    description:
      "Looks at the evolution of Virtual Reality technologies, immersive experiences and how VR will influence education, business, entertainment and future human interaction.",
    image: `${booksPath}Vr.png`,
    amazon: "https://www.amazon.com/dp/B0CD6MSZHC",
    year: "2023",
    category: "Virtual Reality",
    alt: "The VR Sega by Arijit Bhattacharyya",
    seoTitle: "The VR Sega",
    seoDescription:
      "Virtual Reality book exploring emerging immersive technologies."
  },

  {
    id: "empowering-africa",
    title: "Empowering Africa",
    subtitle: "Transformative Impact of Blockchain",
    description:
      "Examines how blockchain technologies can create transparent, scalable and inclusive economic opportunities across Africa and emerging markets.",
    image: `${booksPath}Africa.png`,
    amazon: "https://www.amazon.com/dp/B0CDN7NK4W",
    year: "2023",
    category: "Blockchain",
    alt: "Empowering Africa book cover by Arijit Bhattacharyya",
    seoTitle: "Empowering Africa",
    seoDescription:
      "Book exploring blockchain innovation and Africa's digital transformation."
  },

  {
    id: "experts-can-blow-it",
    title: "Experts Can Blow It",
    subtitle: "Raising Capital at an Early Stage",
    description:
      "Shares perspectives on startup fundraising, early-stage investment, founder decisions and practical lessons from entrepreneurial ecosystems.",
    image: `${booksPath}Blow it.png`,
    amazon: "https://www.amazon.com/Experts-Can-Blow-Raising-capital-ebook/dp/B0BSSGL1KW",
    year: "2023",
    category: "Leadership",
    alt: "Experts Can Blow It book by Arijit Bhattacharyya",
    seoTitle: "Experts Can Blow It",
    seoDescription:
      "Startup investment and fundraising book by Arijit Bhattacharyya."
  },

  {
    id: "legend-comes-alive",
    title: "The Legend Comes Alive",
    subtitle: "Part One",
    description:
      "A mythology-inspired adventure that combines storytelling, heroes, fantasy worlds and original intellectual property developed through comics and entertainment.",
    image: `${booksPath}Alive.png`,
    amazon: "https://www.amazon.com/Archer-legend-comes-alive-Book-ebook/dp/B011UYF1RG",
    year: "2015",
    category: "Comics & IP",
    alt: "The Legend Comes Alive Part One by Arijit Bhattacharyya",
    seoTitle: "The Legend Comes Alive",
    seoDescription:
      "Fantasy adventure and mythology graphic novel by Arijit Bhattacharyya."
  }
];

export const knowledgeAreas = [
  {
    title: "Artificial Intelligence",
    description:
      "Exploring the future of AI, innovation and intelligent systems."
  },
  {
    title: "Entrepreneurship",
    description:
      "Helping founders build resilient and scalable businesses."
  },
  {
    title: "Virtual Reality",
    description:
      "Immersive technologies shaping tomorrow's experiences."
  },
  {
    title: "Blockchain",
    description:
      "Digital trust, decentralisation and global transformation."
  },
  {
    title: "Leadership",
    description:
      "Lessons from founders, innovators and investors."
  },
  {
    title: "Creative IP",
    description:
      "Original stories, mythology and entertainment innovation."
  }
];

export const booksTimeline = [
  {
    year: "2015",
    title: "Storytelling & Original IP",
    description:
      "Publishing begins with mythology-inspired storytelling and original intellectual property."
  },
  {
    year: "2023",
    title: "Entrepreneurship",
    description:
      "Books focusing on founders, startups and investment ecosystems."
  },
  {
    year: "2023",
    title: "Artificial Intelligence",
    description:
      "Research expands into AI, future technologies and innovation."
  },
  {
    year: "2023",
    title: "Virtual Reality",
    description:
      "Exploring immersive technologies and the next digital frontier."
  },
  {
    year: "2023",
    title: "Blockchain",
    description:
      "Examining blockchain's role in economic transformation and global development."
  }
];
