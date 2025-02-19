import { ResourcePage } from "@/components/resources/ResourcePage";
import { MapPin, Calendar, User, Tag, Clock, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TravelBlog() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const featuredPosts = [
    {
      title: "Los 10 Mejores Destinos para 2024",
      excerpt: "Descubre los destinos más emocionantes y populares para este año, desde playas paradisíacas hasta ciudades vibrantes.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      author: "María García",
      date: "15 Feb 2024",
      readTime: "5 min",
      tags: ["Tendencias", "Destinos", "2024"],
      category: "Destinos"
    },
    {
      title: "Guía de Viaje Sostenible",
      excerpt: "Aprende a viajar de forma responsable y minimiza tu impacto ambiental mientras exploras el mundo.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      author: "Carlos Ruiz",
      date: "12 Feb 2024",
      readTime: "7 min",
      tags: ["Sostenibilidad", "Consejos", "Ecología"],
      category: "Sostenibilidad"
    }
  ];

  const recentPosts = [
    {
      title: "Viajando con Presupuesto Limitado",
      excerpt: "Tips y trucos para hacer que tu dinero rinda más durante tus viajes.",
      date: "10 Feb 2024",
      readTime: "4 min",
      tags: ["Presupuesto", "Consejos"],
      category: "Consejos de Viaje"
    },
    {
      title: "Fotografía de Viajes: Guía Básica",
      excerpt: "Aprende a capturar los mejores momentos de tus aventuras con estos consejos de fotografía.",
      date: "8 Feb 2024",
      readTime: "6 min",
      tags: ["Fotografía", "Guía"],
      category: "Fotografía"
    },
    {
      title: "Gastronomía Local: Una Aventura Culinaria",
      excerpt: "Descubre cómo la comida local puede enriquecer tu experiencia de viaje.",
      date: "5 Feb 2024",
      readTime: "5 min",
      tags: ["Gastronomía", "Cultura"],
      category: "Gastronomía"
    }
  ];

  const categories = [
    "Destinos",
    "Consejos de Viaje",
    "Fotografía",
    "Gastronomía",
    "Cultura",
    "Aventura",
    "Sostenibilidad"
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulamos el envío de la suscripción
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "¡Suscripción exitosa!",
      description: "Te has suscrito correctamente a nuestro newsletter.",
    });

    setEmail("");
    setIsSubscribing(false);
  };

  const filteredFeaturedPosts = selectedCategory
    ? featuredPosts.filter(post => post.category === selectedCategory)
    : featuredPosts;

  const filteredRecentPosts = selectedCategory
    ? recentPosts.filter(post => post.category === selectedCategory)
    : recentPosts;

  const handleReadMore = (title: string) => {
    toast({
      title: "Próximamente",
      description: `El artículo "${title}" estará disponible pronto.`,
    });
  };

  return (
    <ResourcePage 
      title="Blog de Viajes"
      description="Inspiración, consejos y experiencias para tus próximas aventuras"
    >
      <div className="space-y-12">
        {/* Artículos Destacados */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Artículos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredFeaturedPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full cursor-pointer hover:bg-primary/20 transition-colors"
                        onClick={() => setSelectedCategory(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Posts Recientes y Categorías */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Posts Recientes */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Posts Recientes</h2>
            {filteredRecentPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full cursor-pointer hover:bg-primary/20 transition-colors"
                      onClick={() => setSelectedCategory(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80"
                    onClick={() => handleReadMore(post.title)}
                  >
                    Leer más <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Categorías */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Categorías</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <ul className="space-y-2">
                <li>
                  <button 
                    className={`flex items-center justify-between w-full p-2 rounded-lg hover:bg-primary/5 transition-colors ${
                      selectedCategory === null ? 'text-primary font-medium' : 'text-gray-600'
                    }`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    <span>Todas las categorías</span>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </button>
                </li>
                {categories.map((category, index) => (
                  <li key={index}>
                    <button 
                      className={`flex items-center justify-between w-full p-2 rounded-lg hover:bg-primary/5 transition-colors ${
                        selectedCategory === category ? 'text-primary font-medium' : 'text-gray-600'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span>{category}</span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <p className="text-gray-600 text-sm mb-4">
                Suscríbete para recibir las últimas actualizaciones y consejos de viaje.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full" disabled={isSubscribing}>
                  {isSubscribing ? "Suscribiendo..." : "Suscribirse"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ResourcePage>
  );
} 