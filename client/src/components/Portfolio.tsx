import { useState } from 'react';
import { Volume2, VolumeX, Instagram } from 'lucide-react';

const Portfolio = () => {
  const [mutedVideos, setMutedVideos] = useState<{[key: number]: boolean}>({
    1: true,
    2: true,  
    3: true
  });

  const videos = [
    {
      id: 1,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const toggleMute = (videoId: number) => {
    setMutedVideos(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full mb-8"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Check out some of my recent video editing projects
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video) => (
            <div key={video.id} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
              <div className="aspect-[9/16] relative">
                <video
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  muted={mutedVideos[video.id]}
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                {/* Mute/Unmute Button */}
                <button
                  onClick={() => toggleMute(video.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-200"
                >
                  {mutedVideos[video.id] ? (
                    <VolumeX size={16} />
                  ) : (
                    <Volume2 size={16} />
                  )}
                </button>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Work Button */}
        <div className="text-center">
          <a
            href="https://instagram.com/vishaledits25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-600 hover:scale-105"
          >
            <Instagram size={20} />
            View More Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;