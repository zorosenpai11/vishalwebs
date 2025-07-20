import { useState } from 'react';
import { Play, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const videos = [
    {
      id: 1,
      title: 'Brand Promo - Tech Startup',
      category: 'Promo',
      type: 'Long Form',
      thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2:30'
    },
    {
      id: 2,
      title: 'Instagram Reel - Fashion',
      category: 'Reels',
      type: 'Short Form',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '0:30'
    },
    {
      id: 3,
      title: 'YouTube Tutorial Edit',
      category: 'YouTube',
      type: 'Long Form',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '12:45'
    },
    {
      id: 4,
      title: 'Product Launch Reel',
      category: 'Reels',
      type: 'Short Form',
      thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '0:45'
    },
    {
      id: 5,
      title: 'Podcast Highlights',
      category: 'Podcast',
      type: 'Long Form',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '8:20'
    },
    {
      id: 6,
      title: 'Travel Vlog Edit',
      category: 'YouTube',
      type: 'Long Form',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '15:30'
    },
    {
      id: 7,
      title: 'Fitness Motivation Reel',
      category: 'Reels',
      type: 'Short Form',
      thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '0:60'
    },
    {
      id: 8,
      title: 'Corporate Event Recap',
      category: 'Promo',
      type: 'Long Form',
      thumbnail: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '5:15'
    }
  ];

  const filters = ['All', 'Reels', 'YouTube', 'Promo', 'Podcast'];

  const filteredVideos = activeFilter === 'All' 
    ? videos 
    : videos.filter(video => video.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full mb-8"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore my latest video editing work across different formats and styles
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-white/70 mb-4 sm:mb-0">
            <Filter size={20} />
            <span className="font-medium">Filter:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Play className="text-white ml-1" size={24} />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg font-medium">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    video.category === 'Reels' ? 'bg-pink-500/80 text-white' :
                    video.category === 'YouTube' ? 'bg-red-500/80 text-white' :
                    video.category === 'Promo' ? 'bg-blue-500/80 text-white' :
                    'bg-purple-500/80 text-white'
                  }`}>
                    {video.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm font-medium">
                    {video.type}
                  </span>
                  <button className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                    Watch →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105">
            View More Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;