import React, { useEffect } from "react";
import { InstagramEmbed } from "../components/InstagramEmbed";

const SocialPosts = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("async", "true");
    script.setAttribute("charset", "utf-8");
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center parallax-bg opacity-20" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Redes Sociales</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras últimas publicaciones en redes sociales y mantente al día con las novedades de MapYourWorld.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <InstagramEmbed url="https://www.instagram.com/reel/DIBjL33PiJA/" />
          <InstagramEmbed url="https://www.instagram.com/reel/DI1KxujsGex/" />
          <div className="w-full flex justify-center">
            <blockquote className="twitter-tweet">
              <p lang="es" dir="ltr">Roadmap 🗺️: desde el lanzamiento añadiremos nuevos distritos y funcionalidades nuevas para que puedas competir y compartir con todo el mundo. ¿Te lo vas a perder? <a href="https://t.co/IXaQDZEi0F">pic.twitter.com/IXaQDZEi0F</a></p>&mdash; Map Your World (@mapyourworldapp) <a href="https://twitter.com/mapyourworldapp/status/1923030623406653849?ref_src=twsrc%5Etfw">May 15, 2025</a>
            </blockquote>
          </div>
          <div className="w-full flex justify-center">
            <blockquote className="twitter-tweet">
              <p lang="es" dir="ltr">Inversores, si os gusta MapYourWorld, aquí tenéis un vídeo para demostraros lo buena idea que es📈 <a href="https://t.co/a99NDSFiL2">pic.twitter.com/a99NDSFiL2</a></p>&mdash; Map Your World (@mapyourworldapp) <a href="https://twitter.com/mapyourworldapp/status/1917684800527425974?ref_src=twsrc%5Etfw">April 30, 2025</a>
            </blockquote>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Síguenos en nuestras redes sociales para no perderte ninguna novedad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialPosts;