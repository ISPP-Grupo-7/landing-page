export type GalleryImage = {
  url: string;
  author: string;
  authorAvatar: string;
  date: string;
  isPremium: boolean;
  description?: string;
};

export type ExplorationCard = {
  id: string;
  title: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
  likes: number;
  comments: number;
  author: string;
  authorAvatar: string;
  tags: string[];
  date: string;
  duration: string;
  rating: number;
  category: string;
  description: string;
  gallery: GalleryImage[];
  highlights: string[];
}; 