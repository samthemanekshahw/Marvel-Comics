
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Comic data (in a real app, this would be fetched from an API)
const comicsData = [
  {
    id: 1,
    title: "The Amazing Spider-Man",
    issue: "#123",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "Peter Parker faces his greatest challenge yet as a new villain threatens New York City.",
    longDescription: "In this thrilling issue, Peter Parker finds himself caught between his responsibilities as Spider-Man and his personal life when a mysterious new villain emerges from the shadows. With a technological suit that seems to counter Spider-Man's every move, this adversary has been studying the web-slinger for years and knows exactly how to exploit his weaknesses.\n\nAs the city faces increasing danger, Spider-Man must confront not only this new threat but also deal with the return of an old nemesis who has forged an unlikely alliance with the new villain. With his aunt May falling ill and his job at the Daily Bugle hanging by a thread, Peter's world is being tested like never before.\n\nThis issue features stunning artwork that brings the web-swinging action to life across New York's skyline, culminating in a breathtaking battle atop the Empire State Building that will change Spider-Man's status quo moving forward.",
    price: "$4.99",
    date: "June 2023",
    writer: "Zeb Wells",
    artist: "John Romita Jr.",
    colorist: "Marcio Menyz",
    letterer: "Joe Caramagna",
    coverArtist: "John Romita Jr.",
    variantCovers: [
      "Mark Bagley", 
      "Peach Momoko", 
      "Stanley 'Artgerm' Lau"
    ],
    pages: 32,
    rating: "T",
    characters: [
      "Spider-Man/Peter Parker",
      "Mary Jane Watson",
      "Aunt May",
      "J. Jonah Jameson",
      "Robbie Robertson"
    ],
    slug: "amazing-spider-man-123"
  },
  {
    id: 2,
    title: "X-Men",
    issue: "#98",
    image: "https://images.unsplash.com/photo-1559535332-db9971090158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "The mutants of Krakoa face a new threat that challenges everything they've built.",
    longDescription: "Following the events of the Hellfire Gala, the X-Men find themselves confronting unprecedented challenges to the mutant nation of Krakoa. A mysterious energy signature has been detected near the island, and preliminary investigations reveal potential links to ancient mutant civilizations that predate recorded history.\n\nAs the team investigates, they discover artifacts that suggest Krakoa itself may be far older than they realized, with a complicated relationship to these ancient mutants. Meanwhile, on the diplomatic front, tensions rise as several nations begin to question their treaties with Krakoa following controversial actions taken by certain mutant leaders.\n\nThis issue features stunning artwork that depicts both the lush paradise of Krakoa and the ancient ruins that hold secrets to mutantkind's past. With internal divisions threatening to splinter the fragile unity of the mutant nation, the X-Men must reconcile their differences to face this new threat together.",
    price: "$4.99",
    date: "June 2023",
    writer: "Gerry Duggan",
    artist: "Joshua Cassara",
    colorist: "Dean White",
    letterer: "Clayton Cowles",
    coverArtist: "Pepe Larraz",
    variantCovers: [
      "Russell Dauterman", 
      "Stephanie Hans"
    ],
    pages: 32,
    rating: "T+",
    characters: [
      "Cyclops",
      "Jean Grey",
      "Wolverine",
      "Emma Frost",
      "Magneto"
    ],
    slug: "x-men-98"
  },
  {
    id: 3,
    title: "Avengers",
    issue: "#45",
    image: "https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "Earth's Mightiest Heroes confront a cosmic threat that could end everything.",
    longDescription: "The Avengers face their greatest challenge yet as a being from beyond the multiverse begins to unravel the very fabric of reality. After the strange disappearance of several cosmic entities, including the Living Tribunal, the team realizes something fundamental to the universe itself is changing.\n\nWhen Thor's hammer Mjolnir suddenly becomes unbearably heavy—even for the God of Thunder—and Iron Man's technology begins operating in ways that defy the laws of physics, the team must consult with Doctor Strange to understand what's happening. Strange reveals that the fundamental constants of the universe are being altered, and tracks the disturbance to a tear in reality forming above New York City.\n\nThis issue features spectacular cosmic artwork that stretches the boundaries of comic book visuals, with mind-bending sequences that illustrate reality breaking down around Earth's Mightiest Heroes. As they venture into the tear to confront whatever lies beyond, they'll need to overcome their personal demons as well as this exterior threat.",
    price: "$4.99",
    date: "June 2023",
    writer: "Jason Aaron",
    artist: "Javier Garrón",
    colorist: "David Curiel",
    letterer: "Cory Petit",
    coverArtist: "Leinil Francis Yu",
    variantCovers: [
      "Alex Ross", 
      "Jen Bartel"
    ],
    pages: 32,
    rating: "T+",
    characters: [
      "Iron Man",
      "Captain America",
      "Thor",
      "Black Panther",
      "Captain Marvel"
    ],
    slug: "avengers-45"
  },
  {
    id: 4,
    title: "Black Panther",
    issue: "#12",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "T'Challa must defend Wakanda from both external threats and internal conflict.",
    longDescription: "As King T'Challa balances his duties to Wakanda with his international obligations, tensions within the kingdom reach a breaking point. A faction within the border tribes has begun questioning whether Wakanda's gradual opening to the world has brought more harm than good, pointing to recent incursions by foreign operatives seeking vibranium.\n\nMeanwhile, Wakandan intelligence has discovered a plot by a neighboring nation to develop weapons based on stolen vibranium technology. T'Challa must navigate this delicate diplomatic situation while also addressing the legitimate concerns of his people. When evidence emerges that someone within the Wakandan royal court may be feeding information to outsiders, the Black Panther must determine who he can truly trust.\n\nThis issue features stunning artwork that showcases both Wakanda's futuristic cityscape and its lush natural landscapes, along with dynamic action sequences as T'Challa investigates the conspiracy in his panther suit. The story examines the challenges of leadership and the balance between tradition and progress in a rapidly changing world.",
    price: "$4.99",
    date: "June 2023",
    writer: "John Ridley",
    artist: "Juann Cabal",
    colorist: "Federico Blee",
    letterer: "Joe Sabino",
    coverArtist: "Alex Ross",
    variantCovers: [
      "Brian Stelfreeze", 
      "Elizabeth Torque"
    ],
    pages: 32,
    rating: "T",
    characters: [
      "T'Challa/Black Panther",
      "Shuri",
      "Okoye",
      "Queen Ramonda",
      "W'Kabi"
    ],
    slug: "black-panther-12"
  },
];

const ComicDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the comic by slug
  const comic = comicsData.find(c => c.slug === slug);
  
  useEffect(() => {
    // Redirect to 404 if comic not found
    if (!comic && slug) {
      navigate("/not-found");
    }
    
    // Scroll to top when comic loads
    window.scrollTo(0, 0);
  }, [comic, slug, navigate]);
  
  if (!comic) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <Link to="/comics" className="inline-flex items-center text-primary mb-8 hover:text-marvel-red transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Comics
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Comic Cover */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="comic-card overflow-hidden rounded-lg">
                  <div className="aspect-[2/3] overflow-hidden">
                    <img 
                      src={comic.image} 
                      alt={`${comic.title} ${comic.issue} Cover`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold">{comic.price}</span>
                    <button className="px-6 py-3 bg-marvel-red text-white font-bold rounded-md hover:bg-red-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Wishlist
                    </button>
                    <button className="flex items-center justify-center py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Comic Details */}
            <div className="lg:w-2/3">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-marvel-red text-white text-sm font-medium rounded-md">
                  New Release
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-comic text-marvel-dark mb-2">
                {comic.title} <span className="text-marvel-red">{comic.issue}</span>
              </h1>
              
              <p className="text-lg mb-6">{comic.description}</p>
              
              {/* Publication Details */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div>
                  <h3 className="font-medium text-gray-500">Release Date</h3>
                  <p>{comic.date}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Writer</h3>
                  <p>{comic.writer}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Artist</h3>
                  <p>{comic.artist}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Pages</h3>
                  <p>{comic.pages}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-500">Rating</h3>
                  <p>{comic.rating}</p>
                </div>
              </div>
              
              {/* Synopsis */}
              <div className="mb-10">
                <h2 className="text-2xl font-comic text-marvel-red mb-4">SYNOPSIS</h2>
                <div className="space-y-4">
                  {comic.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-gray-700">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* Featured Characters */}
              <div className="mb-10">
                <h2 className="text-2xl font-comic text-marvel-red mb-4">FEATURED CHARACTERS</h2>
                <div className="flex flex-wrap gap-2">
                  {comic.characters.map((character, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full">
                      {character}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Variant Covers */}
              <div className="mb-10">
                <h2 className="text-2xl font-comic text-marvel-red mb-4">VARIANT COVERS</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {comic.variantCovers.map((artist, index) => (
                    <div key={index} className="comic-card">
                      <div className="aspect-[2/3] bg-gray-200 rounded overflow-hidden">
                        <img 
                          src={comic.image} 
                          alt={`${comic.title} ${comic.issue} ${artist} Variant`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium">{artist} Variant</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Recommended Comics */}
              <div>
                <h2 className="text-2xl font-comic text-marvel-red mb-4">YOU MIGHT ALSO LIKE</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {comicsData
                    .filter(c => c.id !== comic.id)
                    .slice(0, 4)
                    .map((relatedComic) => (
                      <Link key={relatedComic.id} to={`/comics/${relatedComic.slug}`} className="comic-card group">
                        <div className="relative overflow-hidden rounded aspect-[2/3]">
                          <img 
                            src={relatedComic.image} 
                            alt={relatedComic.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <h3 className="text-sm font-comic text-white">{relatedComic.title}</h3>
                            <p className="text-marvel-red text-sm font-comic">{relatedComic.issue}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComicDetail;
