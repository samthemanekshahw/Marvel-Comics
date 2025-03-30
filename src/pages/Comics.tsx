
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

// Comic data
const comicsData = [
  {
    id: 1,
    title: "The Amazing Spider-Man",
    issue: "#123",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Peter Parker faces his greatest challenge yet as a new villain threatens New York City.",
    price: "$4.99",
    date: "June 2023",
    writer: "Zeb Wells",
    artist: "John Romita Jr.",
    slug: "amazing-spider-man-123"
  },
  {
    id: 2,
    title: "X-Men",
    issue: "#98",
    image: "https://images.unsplash.com/photo-1559535332-db9971090158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "The mutants of Krakoa face a new threat that challenges everything they've built.",
    price: "$4.99",
    date: "June 2023",
    writer: "Gerry Duggan",
    artist: "Joshua Cassara",
    slug: "x-men-98"
  },
  {
    id: 3,
    title: "Avengers",
    issue: "#45",
    image: "https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Earth's Mightiest Heroes confront a cosmic threat that could end everything.",
    price: "$4.99",
    date: "June 2023",
    writer: "Jason Aaron",
    artist: "Javier Garrón",
    slug: "avengers-45"
  },
  {
    id: 4,
    title: "Black Panther",
    issue: "#12",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "T'Challa must defend Wakanda from both external threats and internal conflict.",
    price: "$4.99",
    date: "June 2023",
    writer: "John Ridley",
    artist: "Juann Cabal",
    slug: "black-panther-12"
  },
  {
    id: 5,
    title: "Fantastic Four",
    issue: "#36",
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Marvel's First Family explores the unknown reaches of the multiverse.",
    price: "$4.99",
    date: "June 2023",
    writer: "Ryan North",
    artist: "Iban Coello",
    slug: "fantastic-four-36"
  },
  {
    id: 6,
    title: "Daredevil",
    issue: "#27",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Matt Murdock balances his dual life while confronting a new criminal empire in Hell's Kitchen.",
    price: "$4.99",
    date: "June 2023",
    writer: "Chip Zdarsky",
    artist: "Marco Checchetto",
    slug: "daredevil-27"
  },
  {
    id: 7,
    title: "Captain America",
    issue: "#20",
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Steve Rogers confronts modern America in a story that tests his ideals and resolve.",
    price: "$4.99",
    date: "June 2023",
    writer: "Ta-Nehisi Coates",
    artist: "Leonard Kirk",
    slug: "captain-america-20"
  },
  {
    id: 8,
    title: "Thor",
    issue: "#55",
    image: "https://images.unsplash.com/photo-1536896407451-6e3dd950498a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "The God of Thunder faces an ancient threat from beyond the Nine Realms.",
    price: "$4.99",
    date: "June 2023",
    writer: "Donny Cates",
    artist: "Nic Klein",
    slug: "thor-55"
  },
];

// Categories
const categories = [
  "All",
  "Superhero",
  "X-Men",
  "Avengers",
  "Spider-Man",
  "Cosmic",
  "Street Level"
];

const Comics = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter comics based on category and search query
  const filteredComics = comicsData.filter((comic) => {
    const matchesCategory = selectedCategory === "All" || 
      (selectedCategory === "X-Men" && comic.title.includes("X-Men")) ||
      (selectedCategory === "Avengers" && comic.title.includes("Avengers")) ||
      (selectedCategory === "Spider-Man" && comic.title.includes("Spider-Man"));
    
    const matchesSearch = comic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comic.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && (searchQuery === "" || matchesSearch);
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Comics Header */}
        <div className="relative py-20 bg-marvel-dark text-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-center bg-cover"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-comic mb-4">MARVEL COMICS</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explore the latest and greatest comic books from the Marvel Universe.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-12">
          {/* Filters */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category
                      ? "bg-marvel-red text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search comics..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-marvel-red"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Comics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredComics.map((comic) => (
              <div key={comic.id} className="comic-card group">
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
                
                {/* Comic Info */}
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    {comic.writer} · {comic.artist}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {comic.description}
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="font-bold">{comic.price}</span>
                    <button className="px-3 py-1 bg-marvel-red text-white text-sm rounded hover:bg-red-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredComics.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-comic text-gray-600 mb-4">No comics found</h3>
              <p className="text-gray-500">
                Try changing your search criteria or check back later for new releases.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Comics;
