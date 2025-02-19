import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  Compass, 
  Trophy, 
  TrendingUp, 
  Users, 
  Camera,
  Heart,
  MessageCircle,
  Share2,
  Filter,
  Calendar,
  Star,
  Clock,
  ArrowLeft,
  Map,
  ThumbsUp,
  X,
  Navigation,
  Crown,
  SlidersHorizontal,
  Check
} from "lucide-react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { ImageSlider } from "@/components/ui/image-slider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Slider
} from "@/components/ui/slider";
import { cn } from "@/lib/utils";

// Tipos
type ExplorationCard = {
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
  category: 'tendencias' | 'cercanos' | 'populares' | 'comunidad';
  description: string;
  gallery: {
    url: string;
    author: string;
    authorAvatar: string;
    date: string;
    isPremium: boolean;
    description: string;
  }[];
  highlights: string[];
};

type Comment = {
  id: string;
  placeId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  date: string;
  rating: number;
  content: string;
  likedBy?: string[];
  likes: number;
};

// Simular datos del usuario actual
const currentUser = {
  id: 'user-1',
  name: 'Usuario Demo',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
};

// Añadir después de la definición de tipos
type FilterState = {
  duration: number[];
  rating: number;
  difficulty: string;
  priceRange: number[];
  categories: string[];
  isOpen: boolean; // Nuevo estado para controlar la visibilidad
};

// Componentes
const LikeButton = ({ 
  cardId, 
  initialLikes, 
  isLiked, 
  onLike 
}: { 
  cardId: string; 
  initialLikes: number; 
  isLiked: boolean; 
  onLike: (id: string) => void;
}) => {
  const buttonClass = isLiked ? 'text-red-500' : 'text-gray-600 hover:text-primary';
  const heartIconClass = `w-5 h-5 ${isLiked ? 'fill-current' : ''}`;
  const totalLikes = initialLikes + (isLiked ? 1 : 0);

  return (
    <button 
      className={`flex items-center gap-1 transition-colors ${buttonClass}`}
      onClick={(e) => {
        e.stopPropagation();
        onLike(cardId);
      }}
    >
      <Heart className={heartIconClass} />
      {totalLikes}
    </button>
  );
};

export default function Explore() {
  const navigate = useNavigate();

  useEffect(() => {
    // Limpiar la caché al montar
    const navigationEntries = performance.getEntriesByType('navigation');
    const isReload = navigationEntries.length > 0 && 
      (navigationEntries[0] as PerformanceNavigationTiming).type === 'reload';
    
    if (isReload) {
      sessionStorage.clear();
      localStorage.removeItem('likedPosts');
    }
  }, []);

  // Estados simplificados
  const [activeFilter, setActiveFilter] = useState('tendencias');
  const [searchQuery, setSearchQuery] = useState("");
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [showWarning, setShowWarning] = useState(true);
  const debouncedSearch = useDebounce(searchQuery, 1000);
  const [selectedPlace, setSelectedPlace] = useState<ExplorationCard | null>(null);
  const [comments, setComments] = useLocalStorage<Comment[]>('place_comments', []);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [showMap, setShowMap] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Reemplazar el estado filterState
  const [filterState, setFilterState] = useState<FilterState>({
    duration: [1, 30],
    rating: 0,
    difficulty: 'all',
    priceRange: [0, 1000],
    categories: [],
    isOpen: false
  });

  const difficulties = [
    { value: 'all', label: 'Todas' },
    { value: 'easy', label: 'Fácil' },
    { value: 'moderate', label: 'Moderada' },
    { value: 'hard', label: 'Difícil' }
  ];

  const categories = [
    'Gastronomía',
    'Cultura',
    'Naturaleza',
    'Aventura',
    'Playa',
    'Montaña',
    'Ciudad',
    'Rural'
  ];

  // Manejar cambio de filtro
  const handleFilterChange = useCallback((filterId: string) => {
    setActiveFilter(filterId);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Datos de ejemplo expandidos
  const allExplorationCards = useMemo((): ExplorationCard[] => [
    {
      id: "1",
      title: "Ruta del Vino - Ribera del Duero",
      location: "Castilla y León, España",
      coordinates: {
        lat: 41.6167,
        lng: -4.0833
      },
      image: "https://images.unsplash.com/photo-1528323273322-d81458248d40",
      likes: 324,
      comments: 45,
      author: "María G.",
      authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      tags: ["Gastronomía", "Cultura", "Vino", "Enoturismo", "Historia"],
      date: "2024-02-15",
      duration: "3 días",
      rating: 4.8,
      category: 'tendencias',
      description: "Sumérgete en un viaje sensorial por la Ribera del Duero, una de las regiones vinícolas más prestigiosas de España. Esta ruta te llevará a través de viñedos centenarios, bodegas históricas y modernas, y pueblos medievales que respiran historia. Descubrirás los secretos de la elaboración del vino, desde la vendimia hasta la crianza en barricas de roble. Cada parada es una oportunidad para degustar vinos excepcionales maridados con la rica gastronomía local.",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1528323273322-d81458248d40",
          author: "María G.",
          authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
          date: "2024-02-15",
          isPremium: true,
          description: "Vista panorámica de los viñedos al atardecer"
        },
        {
          url: "https://images.unsplash.com/photo-1515779122185-2390ccdf060b",
          author: "María G.",
          authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
          date: "2024-02-15",
          isPremium: true,
          description: "Barricas de roble en bodega tradicional"
        },
        {
          url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
          author: "María G.",
          authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
          date: "2024-02-15",
          isPremium: false,
          description: "Cata de vinos premium con sumiller experto"
        }
      ],
      highlights: [
        "Catas de vino exclusivas con sumilleres expertos",
        "Visitas a bodegas centenarias y modernas",
        "Gastronomía local de alta calidad",
        "Alojamiento en hoteles boutique",
        "Paseos en bicicleta por los viñedos",
        "Talleres de maridaje y cata"
      ]
    },
    {
      id: "2",
      title: "Ruta de los Pueblos Blancos",
      location: "Andalucía, España",
      coordinates: {
        lat: 36.7213,
        lng: -5.3717
      },
      image: "https://images.unsplash.com/photo-1559060680-36abfac01944",
      likes: 567,
      comments: 89,
      author: "Carlos M.",
      authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      tags: ["Pueblos", "Historia", "Arquitectura", "Cultura", "Fotografía"],
      date: "2024-02-10",
      duration: "5 días",
      rating: 4.9,
      category: 'populares',
      description: "Explora la magia de los Pueblos Blancos andaluces, un recorrido fascinante por algunas de las localidades más pintorescas de España. Calles empedradas que serpentean entre casas encaladas, plazas llenas de historia, y miradores con vistas espectaculares a la sierra. Esta ruta te llevará por pueblos como Ronda, Grazalema, Zahara de la Sierra y Setenil de las Bodegas, cada uno con su propio encanto y tradiciones únicas. Descubre la artesanía local, la gastronomía tradicional y el cálido ambiente de estos pueblos donde el tiempo parece haberse detenido.",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1559060680-36abfac01944",
          author: "Carlos M.",
          authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
          date: "2024-02-10",
          isPremium: false,
          description: "Calles empedradas y casas blancas tradicionales"
        },
        {
          url: "https://images.unsplash.com/photo-1591622180684-b96c52b31b27",
          author: "Carlos M.",
          authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
          date: "2024-02-10",
          isPremium: true,
          description: "Atardecer en Ronda con vistas al Tajo"
        },
        {
          url: "https://images.unsplash.com/photo-1591622180627-3c3c8b5dd6f3",
          author: "Carlos M.",
          authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
          date: "2024-02-10",
          isPremium: false,
          description: "Plaza principal de Grazalema"
        }
      ],
      highlights: [
        "Arquitectura tradicional andaluza",
        "Vistas panorámicas desde miradores históricos",
        "Gastronomía local y tapas tradicionales",
        "Rutas de senderismo entre pueblos",
        "Talleres de artesanía local",
        "Experiencias fotográficas únicas"
      ]
    },
    {
      id: "3",
      title: "Camino de Santiago",
      location: "Varios, España",
      coordinates: {
        lat: 42.8805,
        lng: -8.5456
      },
      image: "https://images.unsplash.com/photo-1583318432730-a19c89692612",
      likes: 892,
      comments: 156,
      author: "Laura P.",
      authorAvatar: "https://randomuser.me/api/portraits/women/22.jpg",
      tags: ["Senderismo", "Espiritual", "Naturaleza", "Historia", "Aventura"],
      date: "2024-02-01",
      duration: "30 días",
      rating: 5.0,
      category: 'populares',
      description: "Emprende el viaje de tu vida por el legendario Camino de Santiago, una experiencia transformadora que combina naturaleza, historia y espiritualidad. Esta ruta milenaria te llevará a través de paisajes impresionantes, desde los Pirineos hasta Santiago de Compostela. Cada etapa es una nueva aventura: dormirás en albergues históricos, compartirás experiencias con peregrinos de todo el mundo, y descubrirás joyas arquitectónicas medievales. El Camino no es solo un recorrido físico, sino también un viaje interior que te permitirá desconectar del mundo moderno y reconectar contigo mismo.",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1583318432730-a19c89692612",
          author: "Laura P.",
          authorAvatar: "https://randomuser.me/api/portraits/women/22.jpg",
          date: "2024-02-01",
          isPremium: true,
          description: "Peregrinos en el Camino Francés al amanecer"
        },
        {
          url: "https://images.unsplash.com/photo-1583318432234-8e85f8574e86",
          author: "Laura P.",
          authorAvatar: "https://randomuser.me/api/portraits/women/22.jpg",
          date: "2024-02-01",
          isPremium: true,
          description: "Catedral de Santiago al atardecer"
        },
        {
          url: "https://images.unsplash.com/photo-1583318432456-8e85f8574e86",
          author: "Laura P.",
          authorAvatar: "https://randomuser.me/api/portraits/women/22.jpg",
          date: "2024-02-01",
          isPremium: false,
          description: "Momentos de descanso en un albergue tradicional"
        }
      ],
      highlights: [
        "Experiencia espiritual única",
        "Patrimonio histórico y cultural",
        "Naturaleza impresionante",
        "Encuentros multiculturales",
        "Albergues tradicionales",
        "Gastronomía regional variada",
        "Certificado de Compostela"
      ]
    },
    {
      id: "4",
      title: "Costa Brava en Velero",
      location: "Cataluña, España",
      coordinates: {
        lat: 41.9702,
        lng: 3.2234
      },
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
      likes: 423,
      comments: 67,
      author: "Pablo R.",
      authorAvatar: "https://randomuser.me/api/portraits/men/28.jpg",
      tags: ["Náutico", "Playa", "Aventura", "Lujo", "Naturaleza"],
      date: "2024-02-20",
      duration: "7 días",
      rating: 4.7,
      category: 'cercanos',
      description: "Navega por las cristalinas aguas de la Costa Brava en una experiencia única a bordo de un velero de lujo. Descubre calas secretas solo accesibles por mar, fondea en aguas turquesas y disfruta de atardeceres mágicos desde la cubierta. Esta aventura combina la emoción de la navegación con el descubrimiento de pueblos costeros medievales como Cadaqués y Calella de Palafrugell. Aprenderás los fundamentos de la navegación a vela, practicarás snorkel en aguas cristalinas y degustarás la exquisita gastronomía marinera en restaurantes locales seleccionados.",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
          author: "Pablo R.",
          authorAvatar: "https://randomuser.me/api/portraits/men/28.jpg",
          date: "2024-02-20",
          isPremium: true,
          description: "Navegando al atardecer por la Costa Brava"
        },
        {
          url: "https://images.unsplash.com/photo-1534447677123-be436bb09401",
          author: "Pablo R.",
          authorAvatar: "https://randomuser.me/api/portraits/men/28.jpg",
          date: "2024-02-20",
          isPremium: true,
          description: "Cala secreta con aguas turquesas"
        },
        {
          url: "https://images.unsplash.com/photo-1534447677456-be436bb09401",
          author: "Pablo R.",
          authorAvatar: "https://randomuser.me/api/portraits/men/28.jpg",
          date: "2024-02-20",
          isPremium: false,
          description: "Experiencia de snorkel en aguas cristalinas"
        }
      ],
      highlights: [
        "Navegación en velero de lujo",
        "Calas secretas y aguas cristalinas",
        "Clases de navegación básica",
        "Experiencias de snorkel y buceo",
        "Gastronomía marinera local",
        "Pueblos costeros medievales",
        "Atardeceres desde el mar"
      ]
    },
    {
      id: "5",
      title: "Ruta Gastronómica por San Sebastián",
      location: "País Vasco, España",
      coordinates: {
        lat: 43.3183,
        lng: -1.9812
      },
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
      likes: 756,
      comments: 134,
      author: "Elena M.",
      authorAvatar: "https://randomuser.me/api/portraits/women/56.jpg",
      tags: ["Gastronomía", "Cultura", "Ciudad", "Pintxos", "Estrellas Michelin"],
      date: "2024-02-18",
      duration: "4 días",
      rating: 4.9,
      category: 'tendencias',
      description: "Embárcate en un viaje culinario por San Sebastián, la capital mundial de la alta gastronomía. Esta experiencia única te llevará por los mejores bares de pintxos del casco viejo, restaurantes con estrellas Michelin, y mercados tradicionales donde conocerás los secretos de la cocina vasca. Aprenderás a preparar pintxos en talleres exclusivos, visitarás una sidrería tradicional, y degustarás platos innovadores creados por chefs de renombre mundial. Todo esto mientras descubres la belleza arquitectónica de la ciudad y su incomparable paseo marítimo de La Concha.",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
          author: "Elena M.",
          authorAvatar: "https://randomuser.me/api/portraits/women/56.jpg",
          date: "2024-02-18",
          isPremium: false,
          description: "Selección de pintxos tradicionales vascos"
        },
        {
          url: "https://images.unsplash.com/photo-1514933651789-005eec06c04b",
          author: "Elena M.",
          authorAvatar: "https://randomuser.me/api/portraits/women/56.jpg",
          date: "2024-02-18",
          isPremium: true,
          description: "Plato de alta cocina en restaurante estrella Michelin"
        },
        {
          url: "https://images.unsplash.com/photo-1514933651456-005eec06c04b",
          author: "Elena M.",
          authorAvatar: "https://randomuser.me/api/portraits/women/56.jpg",
          date: "2024-02-18",
          isPremium: true,
          description: "Taller de cocina con chef local"
        }
      ],
      highlights: [
        "Tour guiado por los mejores bares de pintxos",
        "Cena en restaurante con estrella Michelin",
        "Taller de cocina vasca tradicional",
        "Visita a mercados locales",
        "Experiencia en sidrería tradicional",
        "Degustación de vinos txakoli",
        "Paseos por la playa de La Concha"
      ]
    },
    {
      id: "6",
      title: "Sierra de Gredos",
      location: "Ávila, España",
      coordinates: {
        lat: 40.2599,
        lng: -5.1388
      },
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      likes: 345,
      comments: 78,
      author: "Daniel F.",
      authorAvatar: "https://randomuser.me/api/portraits/men/62.jpg",
      tags: ["Montaña", "Naturaleza", "Senderismo", "Fotografía", "Aventura"],
      date: "2024-02-22",
      duration: "2 días",
      rating: 4.6,
      category: 'cercanos',
      description: "Adéntrate en el corazón de la Sierra de Gredos, un paraíso natural que alberga algunos de los paisajes más espectaculares del Sistema Central. Esta aventura te llevará por senderos históricos entre circos glaciares, lagunas cristalinas y picos majestuosos. Observarás la fauna local, incluyendo la cabra montés, y descubrirás la rica flora de alta montaña. Las rutas están diseñadas para todos los niveles, desde caminatas suaves hasta ascensiones más desafiantes al Pico Almanzor. Al anochecer, podrás disfrutar de uno de los mejores cielos estrellados de España.",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
          author: "Daniel F.",
          authorAvatar: "https://randomuser.me/api/portraits/men/62.jpg",
          date: "2024-02-22",
          isPremium: false,
          description: "Amanecer en la Laguna Grande de Gredos"
        },
        {
          url: "https://images.unsplash.com/photo-1464822759789-fed622ff2c3b",
          author: "Daniel F.",
          authorAvatar: "https://randomuser.me/api/portraits/men/62.jpg",
          date: "2024-02-22",
          isPremium: true,
          description: "Cabras montesas en su hábitat natural"
        },
        {
          url: "https://images.unsplash.com/photo-1464822759456-fed622ff2c3b",
          author: "Daniel F.",
          authorAvatar: "https://randomuser.me/api/portraits/men/62.jpg",
          date: "2024-02-22",
          isPremium: true,
          description: "Cielo estrellado sobre el Circo de Gredos"
        }
      ],
      highlights: [
        "Rutas de senderismo para todos los niveles",
        "Observación de fauna salvaje",
        "Fotografía de paisaje y naturaleza",
        "Ascensión opcional al Pico Almanzor",
        "Alojamiento en refugios de montaña",
        "Observación astronómica nocturna",
        "Guías locales expertos"
      ]
    },
    {
      id: "7",
      title: "Festival de Las Fallas",
      location: "Valencia, España",
      coordinates: {
        lat: 39.4699,
        lng: -0.3763
      },
      image: "https://images.unsplash.com/photo-1560986752-2e31d9507413",
      likes: 1203,
      comments: 245,
      author: "Ana V.",
      authorAvatar: "https://randomuser.me/api/portraits/women/67.jpg",
      tags: ["Cultura", "Festivales", "Arte", "Tradición", "Pirotecnia"],
      date: "2024-03-15",
      duration: "5 días",
      rating: 4.9,
      category: 'tendencias',
      description: "Sumérgete en la explosión de color, arte y tradición del Festival de Las Fallas, declarado Patrimonio Cultural Inmaterial de la Humanidad. Durante cinco días intensos, Valencia se transforma en un museo al aire libre con más de 700 monumentos artísticos (fallas) que combinan sátira, tradición y creatividad. Vivirás la emoción de las mascletás diarias en la Plaza del Ayuntamiento, te maravillarás con los espectaculares castillos de fuegos artificiales nocturnos, y participarás en la emotiva ofrenda floral a la Virgen. Una experiencia única que combina arte efímero, pirotecnia y tradiciones centenarias.",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1560986752-2e31d9507413",
          author: "Ana V.",
          authorAvatar: "https://randomuser.me/api/portraits/women/67.jpg",
          date: "2024-03-15",
          isPremium: true,
          description: "Espectacular castillo de fuegos artificiales nocturno"
        },
        {
          url: "https://images.unsplash.com/photo-1560986752-789-2e31d9507413",
          author: "Ana V.",
          authorAvatar: "https://randomuser.me/api/portraits/women/67.jpg",
          date: "2024-03-15",
          isPremium: true,
          description: "Falla monumental en el centro histórico"
        },
        {
          url: "https://images.unsplash.com/photo-1560986752-456-2e31d9507413",
          author: "Ana V.",
          authorAvatar: "https://randomuser.me/api/portraits/women/67.jpg",
          date: "2024-03-15",
          isPremium: false,
          description: "Ofrenda floral a la Virgen de los Desamparados"
        }
      ],
      highlights: [
        "Monumentos falleros de gran formato",
        "Mascletás diarias en directo",
        "Castillos de fuegos artificiales nocturnos",
        "Ofrenda floral a la Virgen",
        "Gastronomía tradicional valenciana",
        "Desfiles y música tradicional",
        "Nit del Foc y Cremà"
      ]
    },
    {
      id: "8",
      title: "Ruta del Modernismo",
      location: "Barcelona, España",
      coordinates: {
        lat: 41.3851,
        lng: 2.1734
      },
      image: "https://images.unsplash.com/photo-1617178851416-16180c2dddd6",
      likes: 678,
      comments: 98,
      author: "Marc B.",
      authorAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
      tags: ["Arquitectura", "Arte", "Ciudad", "Modernismo", "Fotografía"],
      date: "2024-03-10",
      duration: "3 días",
      rating: 4.8,
      category: 'populares',
      description: "Descubre la Barcelona modernista a través de las obras maestras de Antoni Gaudí y otros arquitectos visionarios del siglo XIX. Este recorrido te llevará por las joyas arquitectónicas más emblemáticas de la ciudad: la Sagrada Familia, el Park Güell, la Casa Batlló y la Casa Milà. Aprenderás sobre las técnicas innovadoras y los simbolismos ocultos en cada detalle, desde los mosaicos coloridos hasta las formas orgánicas inspiradas en la naturaleza. La ruta incluye visitas guiadas por expertos en arquitectura modernista, acceso preferente a los monumentos, y experiencias exclusivas como el atardecer en la terraza de la Casa Milà.",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1617178851416-16180c2dddd6",
          author: "Marc B.",
          authorAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
          date: "2024-03-10",
          isPremium: true,
          description: "Interior de la Casa Batlló al atardecer"
        },
        {
          url: "https://images.unsplash.com/photo-1617178851789-16180c2dddd6",
          author: "Marc B.",
          authorAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
          date: "2024-03-10",
          isPremium: true,
          description: "Detalles arquitectónicos de la Sagrada Familia"
        },
        {
          url: "https://images.unsplash.com/photo-1617178851456-16180c2dddd6",
          author: "Marc B.",
          authorAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
          date: "2024-03-10",
          isPremium: false,
          description: "Vistas panorámicas desde el Park Güell"
        }
      ],
      highlights: [
        "Visitas guiadas por expertos en modernismo",
        "Acceso preferente a monumentos",
        "Experiencia exclusiva en Casa Milà",
        "Taller de mosaico tradicional",
        "Tour fotográfico especializado",
        "Degustación de cocina modernista",
        "Concierto en el Palau de la Música"
      ]
    },
    {
      id: "9",
      title: "Aventura en Picos de Europa",
      location: "Asturias, España",
      coordinates: {
        lat: 43.1937,
        lng: -4.8333
      },
      image: "https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6",
      likes: 892,
      comments: 167,
      author: "Roberto A.",
      authorAvatar: "https://randomuser.me/api/portraits/men/89.jpg",
      tags: ["Montaña", "Aventura", "Naturaleza", "Senderismo", "Fotografía"],
      date: "2024-03-05",
      duration: "4 días",
      rating: 4.9,
      category: 'tendencias',
      description: "Vive una aventura inolvidable en los Picos de Europa, el primer Parque Nacional de España. Esta experiencia combina senderismo de altura, observación de fauna salvaje y la exploración de pueblos tradicionales asturianos. Recorrerás la Ruta del Cares, conocida como la 'Garganta Divina', te adentrarás en los Lagos de Covadonga, y podrás realizar ascensiones opcionales al mítico Naranjo de Bulnes. Las noches las pasarás en auténticas cabañas de montaña, degustando la rica gastronomía asturiana y compartiendo historias junto al fuego.",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6",
          author: "Roberto A.",
          authorAvatar: "https://randomuser.me/api/portraits/men/89.jpg",
          date: "2024-03-05",
          isPremium: true,
          description: "Amanecer en el Naranjo de Bulnes"
        },
        {
          url: "https://images.unsplash.com/photo-1513311068789-19c8fbdc0bb6",
          author: "Roberto A.",
          authorAvatar: "https://randomuser.me/api/portraits/men/89.jpg",
          date: "2024-03-05",
          isPremium: false,
          description: "Ruta del Cares entre paredes verticales"
        },
        {
          url: "https://images.unsplash.com/photo-1513311068456-19c8fbdc0bb6",
          author: "Roberto A.",
          authorAvatar: "https://randomuser.me/api/portraits/men/89.jpg",
          date: "2024-03-05",
          isPremium: true,
          description: "Lagos de Covadonga al atardecer"
        }
      ],
      highlights: [
        "Ruta del Cares completa",
        "Lagos de Covadonga y Santuario",
        "Ascensión opcional al Naranjo de Bulnes",
        "Observación de fauna salvaje",
        "Alojamiento en cabañas tradicionales",
        "Gastronomía asturiana auténtica",
        "Guías locales expertos en montaña"
      ]
    },
    {
      id: "10",
      title: "Semana Santa en Sevilla",
      location: "Sevilla, España",
      coordinates: {
        lat: 37.3891,
        lng: -5.9845
      },
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
      likes: 1456,
      comments: 289,
      author: "Carmen S.",
      authorAvatar: "https://randomuser.me/api/portraits/women/91.jpg",
      tags: ["Cultura", "Religión", "Tradición", "Arte Sacro", "Fotografía"],
      date: "2024-03-20",
      duration: "7 días",
      rating: 5.0,
      category: 'tendencias',
      description: "Vive la pasión y el fervor de la Semana Santa sevillana, una de las celebraciones religiosas más impresionantes del mundo. Durante siete días intensos, las calles de Sevilla se transforman en un museo viviente de arte, música y tradición. Presenciarás el paso de más de 60 hermandades con sus impresionantes pasos, algunos de ellos obras maestras del barroco español. Descubrirás los secretos de los talleres de bordado en oro, los artesanos cereros y los talleres de orfebrería. Las noches estarán llenas de la emotiva música de saetas y el aroma del azahar en las calles del casco antiguo.",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
          author: "Carmen S.",
          authorAvatar: "https://randomuser.me/api/portraits/women/91.jpg",
          date: "2024-03-20",
          isPremium: true,
          description: "Procesión nocturna en la Madrugá"
        },
        {
          url: "https://images.unsplash.com/photo-1555881400-789-74d7acaacd8b",
          author: "Carmen S.",
          authorAvatar: "https://randomuser.me/api/portraits/women/91.jpg",
          date: "2024-03-20",
          isPremium: true,
          description: "Detalle de paso de palio bajo la luna llena"
        },
        {
          url: "https://images.unsplash.com/photo-1555881400-456-74d7acaacd8b",
          author: "Carmen S.",
          authorAvatar: "https://randomuser.me/api/portraits/women/91.jpg",
          date: "2024-03-20",
          isPremium: false,
          description: "Nazarenos cruzando la Plaza del Salvador"
        }
      ],
      highlights: [
        "Procesiones principales de la Madrugá",
        "Visitas a talleres de artesanía sacra",
        "Conciertos de música sacra",
        "Recorrido por iglesias históricas",
        "Experiencia gastronómica de Cuaresma",
        "Tour fotográfico nocturno",
        "Acceso VIP a palcos de procesiones"
      ]
    }
  ], []); // Array vacío porque los datos son constantes

  // Filtros
  const filters = [
    { id: 'tendencias', name: 'Tendencias', icon: TrendingUp },
    { id: 'cercanos', name: 'Lugares Cercanos', icon: MapPin },
    { id: 'populares', name: 'Más Populares', icon: Trophy },
    { id: 'comunidad', name: 'Comunidad', icon: Users },
  ];

  // Logros actualizados con enfoque en exploración
  const achievements = [
    {
      title: "Explorador Novato",
      description: "Has descubierto tus primeros 5 lugares",
      progress: 60,
      icon: Compass,
      level: 1,
      nextLevel: "Explorador Aventurero",
      pointsToNext: 200,
      rewards: ["Insignia especial", "Acceso a rutas exclusivas"]
    },
    {
      title: "Cazador de Tesoros",
      description: "Has encontrado 3 lugares secretos",
      progress: 45,
      icon: MapPin,
      level: 2,
      nextLevel: "Maestro de Tesoros",
      pointsToNext: 150,
      rewards: ["Mapa de lugares ocultos", "Guía premium"]
    },
    {
      title: "Fotógrafo Viajero",
      description: "Has capturado 10 momentos únicos",
      progress: 75,
      icon: Camera,
      level: 3,
      nextLevel: "Fotógrafo Experto",
      pointsToNext: 300,
      rewards: ["Filtros exclusivos", "Galería destacada"]
    },
    {
      title: "Aventurero Social",
      description: "Has inspirado a 5 viajeros",
      progress: 30,
      icon: Users,
      level: 1,
      nextLevel: "Líder Aventurero",
      pointsToNext: 250,
      rewards: ["Badge de influencer", "Menciones especiales"]
    }
  ];

  // Recompensas por descubrir lugares
  const discoveryRewards = [
    {
      title: "Primer Descubrimiento",
      points: 100,
      icon: Star,
      description: "¡Enhorabuena! Has desbloqueado tu primer lugar"
    },
    {
      title: "Explorador Frecuente",
      points: 500,
      icon: Crown,
      description: "Visitas 5 lugares en un mes"
    },
    {
      title: "Maestro del Territorio",
      points: 1000,
      icon: Trophy,
      description: "Descubre todos los lugares de una región"
    }
  ];

  // Función para normalizar texto (quitar tildes y convertir a minúsculas)
  const normalizeText = (text: string) => {
    return text.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  };

  // Funciones auxiliares para filtrado
  const matchesSearchCriteria = (card: ExplorationCard, normalizedSearch: string) => {
    if (!normalizedSearch) return true;
    
    return normalizeText(card.title).includes(normalizedSearch) ||
           normalizeText(card.location).includes(normalizedSearch) ||
           card.tags.some(tag => normalizeText(tag).includes(normalizedSearch));
  };

  const sortByFilter = (a: ExplorationCard, b: ExplorationCard) => {
    switch (activeFilter) {
      case 'populares':
        return b.likes - a.likes;
      case 'tendencias':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      default:
        return 0;
    }
  };

  // Filtrar y buscar explorations
  const filteredExplorations = useMemo(() => {
    const normalizedSearch = normalizeText(debouncedSearch);
    return allExplorationCards
      .filter(card => {
        if (activeFilter === 'todos') return true;
        return card.category === activeFilter;
      })
      .filter(card => matchesSearchCriteria(card, normalizedSearch))
      .filter(card => {
        // Filtrar por duración
        const cardDuration = parseInt(card.duration);
        if (cardDuration < filterState.duration[0] || cardDuration > filterState.duration[1]) return false;

        // Filtrar por rating
        if (filterState.rating > 0 && card.rating < filterState.rating) return false;

        // Filtrar por categorías seleccionadas
        if (filterState.categories.length > 0) {
          const hasMatchingCategory = card.tags.some(tag => 
            filterState.categories.includes(tag)
          );
          if (!hasMatchingCategory) return false;
        }

        return true;
      })
      .sort(sortByFilter);
  }, [activeFilter, debouncedSearch, allExplorationCards, filterState]);

  const handleCardClick = useCallback((id: string) => {
    const place = allExplorationCards.find(card => card.id === id);
    if (place) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setSelectedPlace(place);
    }
  }, [allExplorationCards]);

  const handleBack = () => {
    setSelectedPlace(null);
    setShowMap(false);
    setSelectedImageIndex(null);
  };

  // Manejar likes de manera optimizada
  const handleLike = useCallback((cardId: string) => {
    setLikedPosts(prev => {
      const newLikedPosts = new Set(prev);
      if (newLikedPosts.has(cardId)) {
        newLikedPosts.delete(cardId);
      } else {
        newLikedPosts.add(cardId);
      }
      return newLikedPosts;
    });
  }, []);

  // Manejar compartir de manera optimizada
  const handleShare = useCallback((card: ExplorationCard) => {
    if (navigator.share) {
      navigator.share({
        title: card.title,
        text: card.description,
        url: window.location.href
      }).catch(() => {
        console.log('Error al compartir');
      });
    }
  }, []);

  const handleDeleteComment = (commentId: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
      const updatedComments = comments.filter(comment => comment.id !== commentId);
      setComments(updatedComments);
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      placeId: selectedPlace?.id || '',
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      content: newComment,
      rating: newRating,
      date: new Date().toISOString(),
      likes: 0,
      likedBy: []
    };

    setComments([...comments, comment]);
    setNewComment('');
    setNewRating(5);
  };

  const handleLikeComment = (commentId: string) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        const likedByArray = comment.likedBy || [];
        const userIndex = likedByArray.indexOf(currentUser.id);
        
        if (userIndex !== -1) {
          const newLikedBy = [...likedByArray];
          newLikedBy.splice(userIndex, 1);
          return { ...comment, likes: comment.likes - 1, likedBy: newLikedBy };
        } else {
          return { 
            ...comment, 
            likes: comment.likes + 1, 
            likedBy: [...likedByArray, currentUser.id] 
          };
        }
      }
      return comment;
    });
    setComments(updatedComments);
  };

  // Reemplazar el componente FiltersButton con el nuevo desplegable
  const FiltersPanel = () => {
    const toggleFilters = () => {
      setFilterState(prev => ({ ...prev, isOpen: !prev.isOpen }));
    };

    const handleMouseLeave = () => {
      setFilterState(prev => ({ ...prev, isOpen: false }));
    };

    return (
      <div className="relative">
        <Button 
          onClick={toggleFilters}
          className="h-12 px-6 bg-primary hover:bg-primary/90"
        >
          <Filter className="w-5 h-5 mr-2" />
          Filtros
        </Button>

        {filterState.isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full right-0 mt-2 w-[400px] -right-48 bg-white rounded-xl shadow-xl p-6 z-50 space-y-6"
          >
            {/* Duración */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">Duración</h3>
                <span className="text-sm text-gray-600">
                  {filterState.duration[0]} - {filterState.duration[1]} días
                </span>
              </div>
              <div className="relative pt-1">
                <Slider
                  value={filterState.duration}
                  min={1}
                  max={30}
                  step={1}
                  onValueChange={(value) => setFilterState(prev => ({ 
                    ...prev, 
                    duration: value 
                  }))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Rating mínimo */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Rating mínimo</h3>
              <div className="grid grid-cols-3 gap-2">
                {[0, 3.5, 4.5].map((rating) => (
                  <Button
                    key={rating}
                    variant={filterState.rating === rating ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterState(prev => ({ ...prev, rating }))}
                    className="h-9"
                  >
                    {rating === 0 ? 'Todos' : (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {rating}+
                      </div>
                    )}
                  </Button>
                ))}
              </div>
            </div>

            {/* Dificultad */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Dificultad</h3>
              <div className="grid grid-cols-2 gap-2">
                {difficulties.map((diff) => (
                  <Button
                    key={diff.value}
                    variant={filterState.difficulty === diff.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterState(prev => ({ ...prev, difficulty: diff.value }))}
                    className="h-9"
                  >
                    {diff.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Categorías */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Categorías</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className={cn(
                      "h-9 justify-start",
                      filterState.categories.includes(category) && "border-primary text-primary"
                    )}
                    onClick={() => {
                      setFilterState(prev => ({
                        ...prev,
                        categories: prev.categories.includes(category)
                          ? prev.categories.filter(c => c !== category)
                          : [...prev.categories, category]
                      }));
                    }}
                  >
                    <div className="flex items-center gap-1">
                      {filterState.categories.includes(category) && (
                        <Check className="w-3 h-3" />
                      )}
                      {category}
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Botones de acción */}
            <div className="col-span-2 flex justify-end gap-4 mt-4 pt-4 border-t">
              <Button
                variant="outline"
                onClick={() => setFilterState({
                  duration: [1, 30],
                  rating: 0,
                  difficulty: 'all',
                  priceRange: [0, 1000],
                  categories: [],
                  isOpen: true
                })}
              >
                Limpiar filtros
              </Button>
              <Button 
                onClick={toggleFilters}
              >
                Aplicar filtros
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  // Si hay un lugar seleccionado, mostrar la vista detallada
  if (selectedPlace) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white"
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -50 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="fixed top-20 left-8 z-50"
          >
            <Button
              variant="ghost"
              size="icon"
              className="bg-primary/20 hover:bg-primary/40 hover:scale-110 active:scale-95 transition-all duration-200 text-white rounded-full w-10 h-10 shadow-lg backdrop-blur-sm"
              onClick={handleBack}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1
          }}
          className="relative h-[50vh] overflow-hidden"
        >
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={selectedPlace.image}
            alt={selectedPlace.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-4xl font-bold text-white mb-4"
              >
                {selectedPlace.title}
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex items-center gap-6 text-white"
              >
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {selectedPlace.location}
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {selectedPlace.duration}
                </p>
                <p className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  {selectedPlace.rating} (45 valoraciones)
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="container mx-auto px-4 py-12"
        >
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="prose max-w-none"
              >
                <h2 className="text-2xl font-bold mb-4">Sobre este lugar</h2>
                <p className="text-gray-600">{selectedPlace.description}</p>
              </motion.div>

              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-bold mb-4"
                >
                  Destacados
                </motion.h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedPlace.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.1 * index,
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }}
                      whileHover={{ 
                        scale: 1.03,
                        transition: { duration: 0.2 }
                      }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-primary/5"
                    >
                      <Star className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl font-bold mb-4"
                >
                  Galería
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedPlace.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 0.1 * index,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img
                        src={image.url}
                        alt={`Galería ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center gap-2 text-white">
                            <img
                              src={image.authorAvatar}
                              alt={image.author}
                              className="w-6 h-6 rounded-full border border-white/20"
                            />
                            <span className="text-sm font-medium">{image.author}</span>
                            {image.isPremium && (
                              <Crown className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Ubicación</h3>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                  {showMap ? (
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${selectedPlace.coordinates.lat},${selectedPlace.coordinates.lng}`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        onClick={() => setShowMap(true)}
                        className="gap-2"
                      >
                        <Map className="w-5 h-5" />
                        Cargar mapa
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Comentarios y Valoraciones</h3>
                
                <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{currentUser.name}</p>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setNewRating(star)}
                            className="focus:outline-none"
                          >
                            <Star
                              className={`w-5 h-5 ${
                                star <= newRating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Comparte tu experiencia..."
                      className="flex-1 min-h-[100px]"
                    />
                    <Button
                      onClick={handleAddComment}
                      className="self-end"
                      disabled={!newComment.trim()}
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {comments
                    .filter(comment => comment.placeId === selectedPlace.id)
                    .map((comment) => (
                      <motion.div 
                        key={comment.id} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-panel p-4 rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <img 
                              src={comment.userAvatar} 
                              alt={comment.userName}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <p className="font-medium">{comment.userName}</p>
                              <p className="text-sm text-gray-500">
                                {new Date(comment.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex">
                              {[...Array(comment.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            {comment.userId === currentUser.id && (
                              <button
                                onClick={() => handleDeleteComment(comment.id)}
                                className="text-red-500 hover:text-red-600 transition-colors"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{comment.content}</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleLikeComment(comment.id)}
                            className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${
                              comment.likedBy?.includes(currentUser.id)
                                ? 'bg-primary/10 text-primary'
                                : 'text-gray-600 hover:text-primary'
                            }`}
                            disabled={comment.userId === currentUser.id}
                          >
                            <ThumbsUp className={`w-4 h-4 ${
                              comment.likedBy?.includes(currentUser.id) ? 'fill-current' : ''
                            }`} />
                            {comment.likes}
                          </button>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-panel p-6 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={selectedPlace.authorAvatar}
                    alt={selectedPlace.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{selectedPlace.author}</p>
                    <p className="text-sm text-gray-500">Guía local verificado</p>
                  </div>
                </div>
                <Button className="w-full">Contactar guía</Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-panel p-6 rounded-xl space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Duración</p>
                    <p className="text-sm text-gray-600">{selectedPlace.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Distancia</p>
                    <p className="text-sm text-gray-600">12 km aproximadamente</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Dificultad</p>
                    <p className="text-sm text-gray-600">Moderada</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-6 rounded-xl"
              >
                <h4 className="font-medium mb-4">Etiquetas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPlace.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {selectedImageIndex !== null && (
          <ImageSlider
            images={selectedPlace.gallery}
            initialIndex={selectedImageIndex}
            onClose={() => setSelectedImageIndex(null)}
          />
        )}
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <AnimatePresence>
        {showWarning && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black py-4 text-center shadow-lg"
          >
            <div className="container mx-auto px-4">
              <p className="text-2xl font-bold">
                🚧 Módulo de demostración en proceso
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center parallax-bg"
      />
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="container mx-auto px-4"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="max-w-4xl mx-auto text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-4">Explora Nuevas Aventuras</h1>
            <p className="text-xl text-gray-600">
              Descubre lugares increíbles y conecta con otros viajeros
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="max-w-2xl mx-auto flex gap-4"
          >
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Busca destinos, rutas o viajeros..."
                className="w-full h-12 pl-12 pr-4 rounded-lg border-2 border-primary/20 focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <FiltersPanel />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.25 }}
            className="flex justify-center gap-4 mt-8 flex-wrap"
          >
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className="h-10 px-4 flex items-center gap-2"
                onClick={() => handleFilterChange(filter.id)}
              >
                <filter.icon className="w-4 h-4" />
                {filter.name}
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <motion.h2 
                key={activeFilter}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold mb-6"
              >
                Exploraciones en {filters.find(f => f.id === activeFilter)?.name}
              </motion.h2>
              {filteredExplorations.length > 0 ? (
                filteredExplorations.map((card) => (
                  <div
                    key={card.id}
                    className="glass-panel rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 group cursor-pointer"
                    onClick={() => handleCardClick(card.id)}
                  >
                    <div className="relative h-64">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                        <div className="flex items-center gap-4">
                          <p className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {card.location}
                          </p>
                          <p className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {card.duration}
                          </p>
                          <p className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            {card.rating}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={card.authorAvatar}
                            alt={card.author}
                            className="w-10 h-10 rounded-full"
                          />
                          <span className="font-medium">{card.author}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <LikeButton
                            cardId={card.id}
                            initialLikes={card.likes}
                            isLiked={likedPosts.has(card.id)}
                            onLike={handleLike}
                          />
                          <button className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors">
                            <MessageCircle className="w-5 h-5" />
                            {card.comments}
                          </button>
                          <button 
                            className="text-gray-600 hover:text-primary transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShare(card);
                            }}
                          >
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {card.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600">No se encontraron resultados para tu búsqueda.</p>
                </div>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.35 }}
              className="space-y-8"
            >
              <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Tu Progreso de Explorador</h3>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <achievement.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="font-medium">{achievement.title}</h4>
                            <span className="text-sm text-primary font-medium">Nivel {achievement.level}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                            <div
                              className="h-full bg-primary transition-all duration-500"
                              style={{ width: `${achievement.progress}%` }}
                            />
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Siguiente: {achievement.nextLevel}</span>
                            <span>{achievement.pointsToNext} puntos restantes</span>
                          </div>
                        </div>
                      </div>
                      <div className="pl-16">
                        <p className="text-sm font-medium text-primary mb-2">Recompensas desbloqueadas:</p>
                        <div className="flex gap-2 flex-wrap">
                          {achievement.rewards.map((reward, i) => (
                            <span key={i} className="px-2 py-1 bg-primary/5 rounded-full text-xs text-primary">
                              {reward}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Recompensas por Descubrir</h3>
                <div className="space-y-4">
                  {discoveryRewards.map((reward, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <reward.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium">{reward.title}</h4>
                          <span className="text-sm font-bold text-primary">+{reward.points} pts</span>
                        </div>
                        <p className="text-sm text-gray-600">{reward.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Próximas Aventuras</h3>
                <p className="text-gray-600 mb-4">
                  ¡Nuevos lugares por descubrir basados en tu nivel de explorador!
                </p>
                <ul className="space-y-3">
                  {[
                    { name: "Ruta de los Castillos Medievales", difficulty: "Nivel 2 requerido" },
                    { name: "Parques Naturales del Norte", difficulty: "Nivel 3 requerido" },
                    { name: "Ciudades Patrimonio de la Humanidad", difficulty: "Nivel 4 requerido" }
                  ].map((suggestion, index) => (
                    <li 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => setSearchQuery(suggestion.name)}
                    >
                      <div className="flex items-center gap-3">
                        <Compass className="w-5 h-5 text-primary" />
                        <span>{suggestion.name}</span>
                      </div>
                      <span className="text-xs text-primary font-medium">{suggestion.difficulty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 