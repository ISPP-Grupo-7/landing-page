import React from 'react';

interface VideoHeroProps {
  videoUrl: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({ videoUrl }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default VideoHero;