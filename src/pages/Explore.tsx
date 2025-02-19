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
  Clock
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { useNavigate } from "react-router-dom";

// Tipos
type ExplorationCard = {
  id: string;
  title: string;
  location: string;
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
};

export default function Explore() {
  const navigate = useNavigate();
  // Estados
  const [activeFilter, setActiveFilter] = useState<string>('tendencias');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [showWarning, setShowWarning] = useState(true);
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Datos de ejemplo expandidos
  const allExplorationCards: ExplorationCard[] = [
    {
      id: "1",
      title: "Ruta del Vino - Ribera del Duero",
      location: "Castilla y León, España",
      image: "https://images.unsplash.com/photo-1528323273322-d81458248d40",
      likes: 324,
      comments: 45,
      author: "María G.",
      authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      tags: ["Gastronomía", "Cultura", "Vino"],
      date: "2024-02-15",
      duration: "3 días",
      rating: 4.8,
      category: 'tendencias',
      description: "Descubre los mejores viñedos y bodegas de la región"
    },
    {
      id: "2",
      title: "Ruta de los Pueblos Blancos",
      location: "Andalucía, España",
      image: "https://images.unsplash.com/photo-1596627116762-bb01a46c8161",
      likes: 567,
      comments: 89,
      author: "Carlos M.",
      authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      tags: ["Pueblos", "Historia", "Arquitectura"],
      date: "2024-02-10",
      duration: "5 días",
      rating: 4.9,
      category: 'populares',
      description: "Un recorrido por los pueblos más bonitos de Andalucía"
    },
    {
      id: "3",
      title: "Camino de Santiago",
      location: "Varios, España",
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
      description: "La ruta más emblemática de España"
    },
    {
      id: "4",
      title: "Costa Brava en Velero",
      location: "Cataluña, España",
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
      description: "Explora las calas más hermosas desde el mar"
    },
    {
      id: "5",
      title: "Ruta Gastronómica por San Sebastián",
      location: "País Vasco, España",
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
      description: "Descubre la capital mundial de los pintxos"
    },
    {
      id: "6",
      title: "Sierra de Gredos",
      location: "Ávila, España",
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
      description: "Rutas de senderismo para todos los niveles"
    }
  ];

  // Filtros
  const filters = [
    { id: 'tendencias', name: 'Tendencias', icon: TrendingUp },
    { id: 'cercanos', name: 'Lugares Cercanos', icon: MapPin },
    { id: 'populares', name: 'Más Populares', icon: Trophy },
    { id: 'comunidad', name: 'Comunidad', icon: Users },
  ];

  // Logros
  const achievements = [
    {
      title: "Explorador Urbano",
      description: "Visita 10 ciudades diferentes",
      progress: 70,
      icon: MapPin
    },
    {
      title: "Fotógrafo Viajero",
      description: "Comparte 50 fotos de tus viajes",
      progress: 45,
      icon: Camera
    },
    {
      title: "Aventurero Social",
      description: "Conecta con 20 viajeros",
      progress: 30,
      icon: Users
    }
  ];

  // Filtrar y buscar explorations
  const filteredExplorations = useMemo(() => {
    return allExplorationCards
      .filter(card => {
        if (activeFilter !== 'todos') {
          const matchesFilter = card.category === activeFilter;
          const matchesSearch = debouncedSearch
            ? card.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
              card.location.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
              card.tags.some(tag => tag.toLowerCase().includes(debouncedSearch.toLowerCase()))
            : true;
          return matchesFilter && matchesSearch;
        }
        return debouncedSearch
          ? card.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            card.location.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            card.tags.some(tag => tag.toLowerCase().includes(debouncedSearch.toLowerCase()))
          : true;
      })
      .sort((a, b) => {
        if (activeFilter === 'populares') return b.likes - a.likes;
        if (activeFilter === 'tendencias') return new Date(b.date).getTime() - new Date(a.date).getTime();
        return 0;
      });
  }, [activeFilter, debouncedSearch]);

  // Simular carga al cambiar filtros
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  // Manejar likes
  const handleLike = (cardId: string) => {
    setLikedPosts(prev => {
      const newLikedPosts = new Set(prev);
      if (newLikedPosts.has(cardId)) {
        newLikedPosts.delete(cardId);
      } else {
        newLikedPosts.add(cardId);
      }
      return newLikedPosts;
    });
  };

  // Manejar compartir
  const handleShare = (card: ExplorationCard) => {
    if (navigator.share) {
      navigator.share({
        title: card.title,
        text: card.description,
        url: window.location.href
      }).catch(console.error);
    } else {
      // Fallback para navegadores que no soportan Web Share API
      console.log('Compartir no está disponible');
    }
  };

  const handleCardClick = (id: string) => {
    navigate(`/lugar/${id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {showWarning && (
        <div className="fixed top-20 left-0 right-0 z-50 bg-yellow-100/95 text-yellow-800 px-4 py-8 text-center animate-fade-out backdrop-blur-sm border-y-2 border-yellow-300 shadow-lg">
          <div className="container mx-auto">
            <div className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-4">
              <span role="img" aria-label="warning" className="text-4xl md:text-6xl">⚠️</span>
              <span>Módulo Demostrativo desarrollado a medias</span>
            </div>
          </div>
        </div>
      )}
      {/* Hero Search Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Explora Nuevas Aventuras</h1>
            <p className="text-xl text-gray-600">
              Descubre lugares increíbles y conecta con otros viajeros
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto flex gap-4">
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
            <Button className="h-12 px-6 bg-primary hover:bg-primary/90">
              <Filter className="w-5 h-5 mr-2" />
              Filtros
            </Button>
          </div>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className="h-10 px-4 flex items-center gap-2"
                onClick={() => setActiveFilter(filter.id)}
              >
                <filter.icon className="w-4 h-4" />
                {filter.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Trending Explorations */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-bold mb-6">Exploraciones Destacadas</h2>
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="animate-pulse">
                      <div className="h-64 bg-gray-200 rounded-xl mb-4" />
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              ) : filteredExplorations.length > 0 ? (
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
                          <button 
                            className={`flex items-center gap-1 transition-colors ${
                              likedPosts.has(card.id) 
                                ? 'text-red-500' 
                                : 'text-gray-600 hover:text-primary'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLike(card.id);
                            }}
                          >
                            <Heart 
                              className={`w-5 h-5 ${likedPosts.has(card.id) ? 'fill-current' : ''}`} 
                            />
                            {card.likes + (likedPosts.has(card.id) ? 1 : 0)}
                          </button>
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
            </div>

            {/* Right Column - Achievements & Suggestions */}
            <div className="space-y-8">
              <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Tus Logros</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{achievement.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-500"
                            style={{ width: `${achievement.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Próximas Aventuras</h3>
                <p className="text-gray-600 mb-4">
                  Basado en tus intereses, te sugerimos estos destinos:
                </p>
                <ul className="space-y-3">
                  {[
                    "Ruta de los Castillos Medievales",
                    "Parques Naturales del Norte",
                    "Ciudades Patrimonio de la Humanidad"
                  ].map((suggestion, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => setSearchQuery(suggestion)}
                    >
                      <Compass className="w-5 h-5 text-primary" />
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 