export type PlaceImage = {
  id: string;
  url: string;
  description?: string;
  authorId: string;
  createdAt: string;
};

export type PlaceComment = {
  id: string;
  content: string;
  rating: number;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  authorType: 'free' | 'premium';
  createdAt: string;
  likes: number;
  images?: PlaceImage[];
};

export type PlaceDetail = {
  id: string;
  title: string;
  description: string;
  location: {
    name: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  category: 'tendencias' | 'cercanos' | 'populares' | 'comunidad';
  images: PlaceImage[];
  mainImage: string;
  rating: number;
  totalReviews: number;
  priceLevel: 1 | 2 | 3 | 4 | 5;
  duration: string;
  distance?: string;
  difficulty?: 'fácil' | 'moderado' | 'difícil';
  bestTime?: string[];
  amenities: string[];
  tags: string[];
  author: {
    id: string;
    name: string;
    avatar: string;
    type: 'free' | 'premium';
    verified: boolean;
  };
  stats: {
    likes: number;
    comments: number;
    shares: number;
    saves: number;
  };
  recommendations: {
    where_to_stay?: string[];
    what_to_bring?: string[];
    tips?: string[];
  };
  weather?: {
    current: string;
    forecast: string[];
  };
  accessibility: {
    wheelchair: boolean;
    public_transport: boolean;
    parking: boolean;
  };
  openingHours?: {
    [key: string]: string;
  };
  createdAt: string;
  updatedAt: string;
}; 