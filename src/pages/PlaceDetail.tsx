import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocalStorage } from "@/hooks/use-local-storage";
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
  X
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
    // Aquí cargaríamos los datos del lugar desde una API
    // Por ahora usamos datos de ejemplo
    setPlace({
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
      description: "Descubre los mejores viñedos y bodegas de la región. Un recorrido por la historia y la cultura del vino en una de las denominaciones de origen más prestigiosas de España. Visita bodegas centenarias, participa en catas exclusivas y disfruta de la gastronomía local. Esta ruta te llevará por los paisajes más emblemáticos de la Ribera del Duero, donde podrás conocer de primera mano el proceso de elaboración del vino y su importancia en la cultura local.",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1528323273322-d81458248d40",
          author: "María G.",
          authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
          date: "2024-02-15",
          isPremium: true,
          description: "Vista panorámica de los viñedos al atardecer en la Ribera del Duero"
        },
        {
          url: "https://images.unsplash.com/photo-1560493676-04071c5f467b",
          author: "Carlos R.",
          authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
          date: "2024-02-14",
          isPremium: false,
          description: "Cata de vinos premium en bodega centenaria"
        },
        {
          url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
          author: "Laura M.",
          authorAvatar: "https://randomuser.me/api/portraits/women/22.jpg",
          date: "2024-02-13",
          isPremium: true,
          description: "Barricas de roble en la sala de envejecimiento"
        },
        {
          url: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb",
          author: "Pedro S.",
          authorAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
          date: "2024-02-12",
          isPremium: true,
          description: "Degustación de vinos y tapas locales"
        },
        {
          url: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea",
          author: "Ana R.",
          authorAvatar: "https://randomuser.me/api/portraits/women/67.jpg",
          date: "2024-02-11",
          isPremium: false,
          description: "Viñedos en primavera con el castillo de Peñafiel al fondo"
        },
        {
          url: "https://images.unsplash.com/photo-1507434965515-61775ba49a61",
          author: "Juan M.",
          authorAvatar: "https://randomuser.me/api/portraits/men/78.jpg",
          date: "2024-02-10",
          isPremium: true,
          description: "Experiencia de vendimia tradicional"
        }
      ],
      highlights: [
        "Visitas guiadas a bodegas históricas con más de 100 años de antigüedad",
        "Catas de vino premium con sumilleres expertos",
        "Alojamiento en hoteles boutique con encanto entre viñedos",
        "Gastronomía local de primera calidad maridada con vinos de la región",
        "Experiencias únicas como la vendimia tradicional o talleres de cata",
        "Visita al Museo del Vino en el Castillo de Peñafiel",
        "Recorridos en bicicleta por los viñedos",
        "Cenas exclusivas en bodegas subterráneas medievales"
      ]
    });
  }, [id]);

  const handleDeleteComment = (commentId: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
      setComments((prevComments: Comment[]) => 
        prevComments.filter(comment => comment.id !== commentId)
      );
    }
  };

  const handleLikeComment = (commentId: string) => {
    setComments((prevComments: Comment[]) => 
      prevComments.map(comment => {
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
      })
    );
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

    setComments((prevComments: Comment[]) => [...prevComments, comment]);
    setNewComment('');
    setNewRating(5);
  };

  if (!place) return <div>Cargando...</div>;

  return (
    <div className="min-h-screen bg-white">
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