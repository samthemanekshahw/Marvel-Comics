
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

// Character data
const charactersData = [
  {
    id: 1,
    name: "Spider-Man",
    realName: "Peter Parker",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "With great power comes great responsibility. Bitten by a radioactive spider, Peter Parker gained incredible abilities that he uses to protect New York City.",
    powers: ["Wall-crawling", "Super strength", "Spider-sense", "Enhanced agility"],
    debut: "Amazing Fantasy #15 (August 1962)",
    creators: "Stan Lee, Steve Ditko",
    teams: ["Avengers", "Fantastic Four (temporarily)"],
    slug: "spider-man"
  },
  {
    id: 2,
    name: "Iron Man",
    realName: "Tony Stark",
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Genius, billionaire, playboy, philanthropist. Tony Stark created a powered suit of armor to escape captivity and now uses his technology to protect the world as Iron Man.",
    powers: ["Powered armor", "Genius intellect", "Expert engineer", "Flight"],
    debut: "Tales of Suspense #39 (March 1963)",
    creators: "Stan Lee, Larry Lieber, Don Heck, Jack Kirby",
    teams: ["Avengers", "Illuminati"],
    slug: "iron-man"
  },
  {
    id: 3,
    name: "Captain America",
    realName: "Steve Rogers",
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "The First Avenger. Steve Rogers was enhanced to the peak of human perfection by an experimental serum to aid the United States' war effort.",
    powers: ["Peak human strength", "Enhanced stamina", "Tactical genius", "Master combatant"],
    debut: "Captain America Comics #1 (March 1941)",
    creators: "Joe Simon, Jack Kirby",
    teams: ["Avengers", "Howling Commandos", "S.H.I.E.L.D."],
    slug: "captain-america"
  },
  {
    id: 4,
    name: "Thor",
    realName: "Thor Odinson",
    image: "https://images.unsplash.com/photo-1536896407451-6e3dd950498a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "The God of Thunder. Thor is an Asgardian prince and wielder of the enchanted hammer Mjolnir, which grants him the ability to fly and control lightning.",
    powers: ["Superhuman strength", "Weather manipulation", "Longevity", "Mjolnir wielding"],
    debut: "Journey into Mystery #83 (August 1962)",
    creators: "Stan Lee, Larry Lieber, Jack Kirby",
    teams: ["Avengers", "Warriors Three"],
    slug: "thor"
  },
  {
    id: 5,
    name: "Black Widow",
    realName: "Natasha Romanoff",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "A former KGB assassin trained in the Red Room, Natasha Romanoff defected to S.H.I.E.L.D. and became one of the world's greatest spies and Avengers.",
    powers: ["Expert spy", "Master martial artist", "Weapons expert", "Tactician"],
    debut: "Tales of Suspense #52 (April 1964)",
    creators: "Stan Lee, Don Rico, Don Heck",
    teams: ["Avengers", "S.H.I.E.L.D."],
    slug: "black-widow"
  },
  {
    id: 6,
    name: "Hulk",
    realName: "Bruce Banner",
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Exposed to gamma radiation, Dr. Bruce Banner transforms into the Hulk when angered or stressed—a green-skinned behemoth with incredible strength and durability.",
    powers: ["Superhuman strength", "Invulnerability", "Regeneration", "Increased strength with anger"],
    debut: "The Incredible Hulk #1 (May 1962)",
    creators: "Stan Lee, Jack Kirby",
    teams: ["Avengers", "Defenders"],
    slug: "hulk"
  },
  {
    id: 7,
    name: "Black Panther",
    realName: "T'Challa",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "King of Wakanda and protector of the advanced African nation. T'Challa is enhanced by the Heart-Shaped Herb and wears a vibranium suit as the Black Panther.",
    powers: ["Enhanced strength", "Enhanced speed", "Vibranium suit", "Genius intellect"],
    debut: "Fantastic Four #52 (July 1966)",
    creators: "Stan Lee, Jack Kirby",
    teams: ["Avengers", "Illuminati"],
    slug: "black-panther"
  },
  {
    id: 8,
    name: "Doctor Strange",
    realName: "Stephen Strange",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    description: "Once a brilliant but arrogant surgeon, Stephen Strange is now the Sorcerer Supreme, protecting the Earth from magical and mystical threats.",
    powers: ["Magic", "Astral projection", "Dimensional travel", "Longevity"],
    debut: "Strange Tales #110 (July 1963)",
    creators: "Stan Lee, Steve Ditko",
    teams: ["Avengers", "Defenders", "Illuminati"],
    slug: "doctor-strange"
  },
];

// Categories
const categories = [
  "All",
  "Avengers",
  "X-Men",
  "Guardians",
  "Defenders",
  "Heroes",
  "Villains"
];

const Characters = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter characters based on category and search query
  const filteredCharacters = charactersData.filter((character) => {
    const matchesCategory = 
      selectedCategory === "All" || 
      character.teams.includes(selectedCategory);
    
    const matchesSearch = 
      character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      character.realName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      character.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && (searchQuery === "" || matchesSearch);
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Characters Header */}
        <div className="relative py-20 bg-marvel-dark text-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-center bg-cover"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-comic mb-4">MARVEL CHARACTERS</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet the iconic heroes and villains of the Marvel Universe.
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
                placeholder="Search characters..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-marvel-red"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Characters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCharacters.map((character) => (
              <Link key={character.id} to={`/characters/${character.slug}`} className="group">
                <div className="comic-card overflow-hidden rounded-lg glass-card">
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={character.image} 
                      alt={character.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-2xl font-comic text-white">{character.name}</h3>
                      <p className="text-white/80">{character.realName}</p>
                    </div>
                    
                    <div className="absolute inset-0 bg-marvel-red/30 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-marvel-red text-white font-comic rounded-md">VIEW PROFILE</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="line-clamp-2 text-sm">{character.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {character.powers.slice(0, 2).map((power, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {power}
                        </span>
                      ))}
                      {character.powers.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          +{character.powers.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredCharacters.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-comic text-gray-600 mb-4">No characters found</h3>
              <p className="text-gray-500">
                Try changing your search criteria or check back later for new additions.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Characters;
