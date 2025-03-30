
import Hero from "@/components/Hero";
import FeaturedComics from "@/components/FeaturedComics";
import LatestBlogs from "@/components/LatestBlogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedComics />
        <LatestBlogs />
        
        {/* Characters Showcase */}
        <section className="py-16 bg-marvel-dark text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-comic text-marvel-red mb-10 text-center">
              ICONIC MARVEL CHARACTERS
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Spider-Man'].map((character, index) => (
                <Link to={`/characters/${character.toLowerCase().replace(' ', '-')}`} key={index} className="group">
                  <div className="relative rounded-full overflow-hidden aspect-square comic-shine border-4 border-transparent group-hover:border-marvel-red transition-all duration-300">
                    <img 
                      src={`https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80`} 
                      alt={character} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <h3 className="font-comic text-white text-center">{character}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/characters" className="comic-shine inline-block px-6 py-3 bg-marvel-red text-white font-comic rounded-md transform transition hover:scale-105">
                VIEW ALL CHARACTERS
              </Link>
            </div>
          </div>
        </section>
        
        {/* Subscription CTA */}
        <section className="py-16 bg-gradient-to-r from-marvel-blue to-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-comic text-white mb-4">
              JOIN THE MARVEL COMICS COMMUNITY
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest comic releases, character spotlights, and exclusive content delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white flex-grow"
              />
              <button 
                type="submit" 
                className="comic-shine px-6 py-3 bg-marvel-red text-white font-bold rounded-md transform transition hover:scale-105"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
