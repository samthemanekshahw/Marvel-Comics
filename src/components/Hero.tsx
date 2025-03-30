
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-marvel-dark/90 to-marvel-dark/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-comic text-white mb-4 drop-shadow-lg">
            MARVEL COMICS <span className="text-marvel-red">UNIVERSE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Explore the vast world of Marvel comics, characters, and stories through our 
            in-depth articles, reviews, and character analyses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/comics"
              className="comic-shine inline-block px-8 py-4 bg-marvel-red text-white font-bold rounded-lg text-center transform transition hover:scale-105"
            >
              EXPLORE COMICS
            </Link>
            <Link
              to="/blog"
              className="comic-shine inline-block px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg text-center transform transition hover:scale-105"
            >
              READ BLOG
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-10 right-0 w-64 h-64 md:w-96 md:h-96 bg-marvel-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-marvel-red/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
