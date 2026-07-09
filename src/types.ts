export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface BlogParagraph {
  h: string;
  p: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  excerpt: string;
  author: string;
  tags: string[];
  content: BlogParagraph[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  isPopular?: boolean;
}
