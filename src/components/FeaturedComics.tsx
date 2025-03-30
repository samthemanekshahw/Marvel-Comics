
import { Link } from "react-router-dom";

// Featured comics data
const featuredComics = [
  {
    id: 1,
    title: "The Amazing Spider-Man",
    issue: "#123",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    slug: "amazing-spider-man-123"
  },
  {
    id: 2,
    title: "X-Men",
    issue: "#98",
    image: "https://images.unsplash.com/photo-1559535332-db9971090158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    slug: "x-men-98"
  },
  {
    id: 3,
    title: "Avengers",
    issue: "#45",
    image: "https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    slug: "avengers-45"
  },
  {
    id: 4,
    title: "Black Panther",
    issue: "#12",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    slug: "black-panther-12"
  },
];

const FeaturedComics = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-comic text-marvel-red">FEATURED COMICS</h2>
          <Link to="/comics" className="font-medium text-primary hover:underline">
            View All Comics →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredComics.map((comic) => (
            <Link key={comic.id} to={`/comics/${comic.slug}`} className="comic-card group">
              <div className="relative overflow-hidden rounded-lg aspect-[2/3]">
                <img 
                  src={comic.image} 
                  alt={comic.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-comic text-white">{comic.title}</h3>
                  <p className="text-marvel-red font-comic">{comic.issue}</p>
                </div>
                
                <div className="absolute inset-0 bg-marvel-blue/30 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-marvel-red text-white font-comic rounded-md">VIEW DETAILS</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedComics;
