import {
  photographyCategories,
  photographyItems,
  type PhotographyItem,
} from "./photographyData";

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export const smoothEase = [0.22, 1, 0.36, 1] as const;

export const getCategoryPhotos = (category: string): PhotographyItem[] =>
  photographyItems.filter((item) => item.category === category);

export const getManyCategoryPhotos = (categories: string[]): PhotographyItem[] =>
  categories.flatMap((category) => getCategoryPhotos(category));

export const getFeaturedPhotos = (
  category: string,
  count = 6
): PhotographyItem[] => getCategoryPhotos(category).slice(0, count);

export const getHeroPhoto = (): PhotographyItem | undefined =>
  getCategoryPhotos("travelling")[1] ||
  getCategoryPhotos("nature")[0] ||
  photographyItems[0];

export const getPhotographyStats = () => ({
  photos: photographyItems.length,
  collections: photographyCategories.length,
  years: "29+",
});

export const prettyName = (name: string) =>
  name.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

export const categoryOrder = [
  "travelling",
  "nature",
  "food",
  "models",
  "dubai",
  "arabic",
  "Bhutan",
  "Nepal",
  "Shimla",
  "kul",
  "Shilchar",
];

export const orderedCategories = [
  ...categoryOrder.filter((category) => photographyCategories.includes(category)),
  ...photographyCategories.filter((category) => !categoryOrder.includes(category)),
];

export const categoryCopy: Record<string, string> = {
  travelling:
    "Roads, cities, airports, conferences and unexpected moments from a life of movement.",
  nature:
    "Landscapes, skies, trees, water and quiet natural frames captured through observation.",
  food:
    "Food as culture — plates, textures, meals, markets and culinary memories from different places.",
  models:
    "Portraits, styling, fashion and model-led photography connected with media and visual storytelling.",
  dubai:
    "Architecture, luxury, city lights, scale and modern urban imagination from Dubai.",
  arabic:
    "Middle Eastern frames — architecture, public spaces, travel atmosphere and cultural impressions.",
  Bhutan:
    "Himalayan calm, monasteries, mountain roads and spiritual landscapes from Bhutan.",
  Nepal:
    "Travel, streets, hills, people and everyday Himalayan visual storytelling from Nepal.",
  Shimla:
    "Hill-town textures, weather, old roads, mountain light and travel memories from Shimla.",
  kul:
    "Kuala Lumpur through an urban lens — city frames, streets, buildings and Southeast Asian impressions.",
  Shilchar:
    "Regional frames from Silchar — roads, people, places and everyday atmosphere.",
};

export const chunkPhotos = <T,>(items: T[], size: number): T[][] => {
  if (size <= 0) return [items];
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
};