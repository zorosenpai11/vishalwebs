
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import testimonialsVideo from '@assets/0c57743b821c57c284a5e37bfbb4bbde_1753001496840.mp4';

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      company: '@sarahjcreates',
      content: 'Vishal transformed my raw footage into viral content! His editing style perfectly captures the energy I want to convey. My engagement has increased by 300% since working with him.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Marcus Chen',
      role: 'YouTube Creator',
      company: 'TechReview Pro',
      content: 'Professional, fast, and incredibly creative. Vishal understands storytelling and knows exactly how to keep viewers engaged throughout the entire video. Highly recommended!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Brand Manager',
      company: 'FitLife Nutrition',
      content: 'Our brand videos have never looked better! Vishal captured our brand essence perfectly and delivered content that converts. The ROI on our video campaigns has been outstanding.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Park',
      role: 'Podcast Host',
      company: 'The Growth Mindset',
      content: 'Vishal turned our audio podcast into engaging video content that performs amazingly on social media. His attention to detail and quick turnaround time is impressive.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa Thompson',
      role: 'Entrepreneur',
      company: 'Bloom Digital',
      content: 'Working with Vishal has been a game-changer for our content strategy. His edits are clean, professional, and always delivered on time. Our social media presence has never been stronger.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Alex Kumar',
      role: 'Fitness Influencer',
      company: '@alexfitjourney',
      content: 'Vishal knows how to make fitness content that motivates and inspires. His editing style perfectly matches my brand, and the results speak for themselves - massive growth!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src={testimonialsVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-20" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Client <span className="text-blue-400">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto rounded-full mb-8"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about working with me
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Quote className="text-blue-400" size={24} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 leading-relaxed mb-6 text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-blue-400 text-xs">{testimonial.role}</p>
                  <p className="text-white/60 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Videos Edited' },
            { number: '50+', label: 'Happy Clients' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24h', label: 'Average Turnaround' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;