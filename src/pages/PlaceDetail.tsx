import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  Star,
  Heart,
  MessageCircle,
  Share2,
  Navigation,
  Clock,
  ThumbsUp,
  Send,
  Image as ImageIcon,
  Map,
  Crown,
  X,
  ArrowLeft
} from "lucide-react";
import { ExplorationCard } from "@/types/explore";
import { ImageSlider } from "@/components/ui/image-slider";

type Comment = {
  id: string;
  placeId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  rating: number;
  date: string;
  likes: number;
  likedBy: string[];
};

export default function PlaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState<ExplorationCard | null>(null);
  const [comments, setComments] = useLocalStorage<Comment[]>('place_comments', []);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [showMap, setShowMap] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Simular datos del usuario actual
  const currentUser = {
    id: 'user-1',
    name: 'Usuario Demo',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  };

  useEffect(() => {
    // Usamos los mismos datos que en Explore.tsx
    const mockPlaces: ExplorationCard[] = [
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
        description: "Descubre los mejores viñedos y bodegas de la región. Un recorrido por la historia y la cultura del vino en una de las denominaciones de origen más prestigiosas de España.",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1528323273322-d81458248d40",
            author: "María G.",
            authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
            date: "2024-02-15",
            isPremium: true,
            description: "Vista panorámica de los viñedos al atardecer"
          }
        ],
        highlights: ["Catas de vino exclusivas", "Visitas a bodegas centenarias", "Gastronomía local"]
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
        tags: ["Pueblos", "Historia", "Arquitectura", "Cultura"],
        date: "2024-02-10",
        duration: "5 días",
        rating: 4.9,
        category: 'populares',
        description: "Descubre la belleza de los pueblos blancos andaluces, con sus calles empedradas y casas encaladas.",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1559060680-36abfac01944",
            author: "Carlos M.",
            authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
            date: "2024-02-10",
            isPremium: false,
            description: "Vista de las calles empedradas y casas blancas"
          }
        ],
        highlights: ["Arquitectura tradicional", "Vistas panorámicas", "Gastronomía local"]
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
        tags: ["Senderismo", "Espiritual", "Naturaleza"],
        date: "2024-02-01",
        duration: "30 días",
        rating: 5.0,
        category: 'populares',
        description: "La ruta más emblemática de España, un camino de descubrimiento personal y cultural.",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1583318432730-a19c89692612",
            author: "Laura P.",
            authorAvatar: "https://randomuser.me/api/portraits/women/22.jpg",
            date: "2024-02-01",
            isPremium: true,
            description: "Peregrinos en el Camino Francés"
          }
        ],
        highlights: ["Experiencia espiritual", "Patrimonio histórico", "Naturaleza impresionante"]
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
        tags: ["Náutico", "Playa", "Aventura"],
        date: "2024-02-20",
        duration: "7 días",
        rating: 4.7,
        category: 'cercanos',
        description: "Explora las calas más hermosas desde el mar en una aventura única.",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
            author: "Pablo R.",
            authorAvatar: "https://randomuser.me/api/portraits/men/28.jpg",
            date: "2024-02-20",
            isPremium: true,
            description: "Navegando por la Costa Brava"
          }
        ],
        highlights: ["Calas secretas", "Navegación", "Snorkel"]
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
        tags: ["Gastronomía", "Cultura", "Ciudad"],
        date: "2024-02-18",
        duration: "4 días",
        rating: 4.9,
        category: 'tendencias',
        description: "Descubre la capital mundial de los pintxos y su exquisita gastronomía.",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
            author: "Elena M.",
            authorAvatar: "https://randomuser.me/api/portraits/women/56.jpg",
            date: "2024-02-18",
            isPremium: false,
            description: "Pintxos tradicionales vascos"
          }
        ],
        highlights: ["Pintxos gourmet", "Restaurantes estrella Michelin", "Mercados locales"]
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
        tags: ["Montaña", "Naturaleza", "Senderismo"],
        date: "2024-02-22",
        duration: "2 días",
        rating: 4.6,
        category: 'cercanos',
        description: "Descubre la majestuosidad de la Sierra de Gredos y sus rutas de montaña.",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            author: "Daniel F.",
            authorAvatar: "https://randomuser.me/api/portraits/men/62.jpg",
            date: "2024-02-22",
            isPremium: false,
            description: "Vistas panorámicas de la sierra"
          }
        ],
        highlights: ["Rutas de senderismo", "Fauna local", "Paisajes de montaña"]
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
        tags: ["Cultura", "Festivales", "Arte"],
        date: "2024-03-15",
        duration: "5 días",
        rating: 4.9,
        category: 'tendencias',
        description: "Vive la magia y el espectáculo de las Fallas valencianas.",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1560986752-2e31d9507413",
            author: "Ana V.",
            authorAvatar: "https://randomuser.me/api/portraits/women/67.jpg",
            date: "2024-03-15",
            isPremium: true,
            description: "Fuegos artificiales en la noche valenciana"
          }
        ],
        highlights: ["Mascletás", "Fallas monumentales", "Ofrenda floral"]
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
        tags: ["Arquitectura", "Arte", "Ciudad"],
        date: "2024-03-10",
        duration: "3 días",
        rating: 4.8,
        category: 'populares',
        description: "Explora las joyas arquitectónicas del modernismo catalán.",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1617178851416-16180c2dddd6",
            author: "Marc B.",
            authorAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
            date: "2024-03-10",
            isPremium: true,
            description: "Detalles modernistas de la Casa Batlló"
          }
        ],
        highlights: ["Obras de Gaudí", "Casa Batlló", "Palau de la Música"]
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
        tags: ["Montaña", "Aventura", "Naturaleza"],
        date: "2024-03-05",
        duration: "4 días",
        rating: 4.9,
        category: 'tendencias',
        description: "Aventúrate en uno de los parques nacionales más espectaculares.",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6",
            author: "Roberto A.",
            authorAvatar: "https://randomuser.me/api/portraits/men/89.jpg",
            date: "2024-03-05",
            isPremium: true,
            description: "Vistas del Naranjo de Bulnes"
          }
        ],
        highlights: ["Naranjo de Bulnes", "Lagos de Covadonga", "Rutas de montaña"]
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
        tags: ["Cultura", "Religión", "Tradición"],
        date: "2024-03-20",
        duration: "7 días",
        rating: 5.0,
        category: 'tendencias',
        description: "Vive la pasión y el fervor de la Semana Santa sevillana.",
        gallery: [
          {
            url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
            author: "Carmen S.",
            authorAvatar: "https://randomuser.me/api/portraits/women/91.jpg",
            date: "2024-03-20",
            isPremium: true,
            description: "Procesión nocturna en el centro histórico"
          }
        ],
        highlights: ["Procesiones", "Arte sacro", "Tradiciones centenarias"]
      }
    ];

    const selectedPlace = mockPlaces.find(place => place.id === id);
    if (selectedPlace) {
      setPlace(selectedPlace);
    }
  }, [id]);

  const handleDeleteComment = (commentId: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
      const updatedComments = comments.filter(comment => comment.id !== commentId);
      setComments(updatedComments);
    }
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

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      placeId: id || '',
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      content: newComment,
      rating: newRating,
      date: new Date().toISOString(),
      likes: 0,
      likedBy: []
    };

    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    setNewComment('');
    setNewRating(5);
  };

  if (!place) return <div>Cargando...</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* Botón Volver */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 left-4 z-50 bg-primary/20 hover:bg-primary/40 text-white rounded-full w-10 h-10 shadow-lg backdrop-blur-sm"
            onClick={() => navigate('/explorar')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </motion.div>
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">{place.title}</h1>
            <div className="flex items-center gap-6 text-white">
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {place.location}
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {place.duration}
              </p>
              <p className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                {place.rating} (45 valoraciones)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Sobre este lugar</h2>
              <p className="text-gray-600">{place.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xl font-bold mb-4">Destacados</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {place.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-primary/5"
                  >
                    <Star className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-xl font-bold mb-4">Galería</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {place.gallery.map((image, index) => (
                  <div
                    key={index}
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
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-xl font-bold mb-4">Ubicación</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                {showMap ? (
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${place.coordinates.lat},${place.coordinates.lng}`}
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

            {/* Comments Section */}
            <div>
              <h3 className="text-xl font-bold mb-6">Comentarios y Valoraciones</h3>
              
              {/* Add Comment */}
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

              {/* Comments List */}
              <div className="space-y-4">
                {comments
                  .filter(comment => comment.placeId === id)
                  .map((comment) => (
                    <div key={comment.id} className="glass-panel p-4 rounded-lg">
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
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Author Card */}
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={place.authorAvatar}
                  alt={place.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">{place.author}</p>
                  <p className="text-sm text-gray-500">Guía local verificado</p>
                </div>
              </div>
              <Button className="w-full">Contactar guía</Button>
            </div>

            {/* Quick Info */}
            <div className="glass-panel p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Duración</p>
                  <p className="text-sm text-gray-600">{place.duration}</p>
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
            </div>

            {/* Tags */}
            <div className="glass-panel p-6 rounded-xl">
              <h4 className="font-medium mb-4">Etiquetas</h4>
              <div className="flex flex-wrap gap-2">
                {place.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      {selectedImageIndex !== null && (
        <ImageSlider
          images={place.gallery}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </div>
  );
} 