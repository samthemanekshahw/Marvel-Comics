
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { searchBlogPosts } from "@/data/blogData";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [blogResults, setBlogResults] = useState([]);
  const [charactersResults, setCharactersResults] = useState([]);
  const [comicsResults, setComicsResults] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    if (query) {
      // Search blogs (using our real data function)
      setBlogResults(searchBlogPosts(query));
      
      // For characters and comics, in a real app we would search databases or APIs
      // Here we're just simulating results with placeholders
      setCharactersResults([
        { id: 1, name: "Spider-Man", realName: "Peter Parker", slug: "spider-man", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
        { id: 2, name: "Iron Man", realName: "Tony Stark", slug: "iron-man", image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
      ]);
      
      setComicsResults([
        { id: 1, title: "The Amazing Spider-Man", issue: "#123", slug: "amazing-spider-man-123", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
        { id: 2, title: "Avengers", issue: "#45", slug: "avengers-45", image: "https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
      ]);
    } else {
      // Clear results if no query
      setBlogResults([]);
      setCharactersResults([]);
      setComicsResults([]);
    }
  }, [query]);
  
  const totalResults = blogResults.length + charactersResults.length + comicsResults.length;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Search Header */}
        <div className="relative py-20 bg-marvel-dark text-white">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-center bg-cover"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-comic mb-4">SEARCH RESULTS</h1>
            <p className="text-xl">
              {query ? (
                <>
                  Found <span className="text-marvel-red font-bold">{totalResults}</span> results for: 
                  <span className="ml-2 font-bold">"{query}"</span>
                </>
              ) : (
                "Enter a search term to find comics, characters, and articles."
              )}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-12">
          {/* Tabs for filtering results */}
          {totalResults > 0 && (
            <div className="mb-8 border-b">
              <div className="flex flex-wrap -mb-px">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`inline-block py-4 px-6 rounded-t-lg ${
                    activeTab === "all"
                      ? "border-b-2 border-marvel-red text-marvel-red"
                      : "hover:text-gray-600 hover:border-gray-300"
                  }`}
                >
                  All Results ({totalResults})
                </button>
                <button
                  onClick={() => setActiveTab("blogs")}
                  className={`inline-block py-4 px-6 rounded-t-lg ${
                    activeTab === "blogs"
                      ? "border-b-2 border-marvel-red text-marvel-red"
                      : "hover:text-gray-600 hover:border-gray-300"
                  }`}
                >
                  Articles ({blogResults.length})
                </button>
                <button
                  onClick={() => setActiveTab("characters")}
                  className={`inline-block py-4 px-6 rounded-t-lg ${
                    activeTab === "characters"
                      ? "border-b-2 border-marvel-red text-marvel-red"
                      : "hover:text-gray-600 hover:border-gray-300"
                  }`}
                >
                  Characters ({charactersResults.length})
                </button>
                <button
                  onClick={() => setActiveTab("comics")}
                  className={`inline-block py-4 px-6 rounded-t-lg ${
                    activeTab === "comics"
                      ? "border-b-2 border-marvel-red text-marvel-red"
                      : "hover:text-gray-600 hover:border-gray-300"
                  }`}
                >
                  Comics ({comicsResults.length})
                </button>
              </div>
            </div>
          )}
          
          {/* Search Results */}
          {totalResults > 0 ? (
            <div>
              {/* Blog Results */}
              {(activeTab === "all" || activeTab === "blogs") && blogResults.length > 0 && (
                <section className="mb-12">
                  {activeTab === "all" && <h2 className="text-2xl font-comic text-marvel-red mb-6">ARTICLES</h2>}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogResults.slice(0, activeTab === "all" ? 3 : undefined).map((blog) => (
                      <Link key={blog.id} to={`/blog/${blog.slug}`} className="group">
                        <div className="comic-card glass-card overflow-hidden">
                          <div className="relative aspect-video overflow-hidden">
                            <img 
                              src={blog.image} 
                              alt={blog.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-0 right-0 bg-marvel-red text-white px-3 py-1 font-comic">
                              {blog.category}
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold group-hover:text-marvel-red transition-colors line-clamp-2">
                              {blog.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {activeTab === "all" && blogResults.length > 3 && (
                    <div className="text-center mt-6">
                      <button
                        onClick={() => setActiveTab("blogs")}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md"
                      >
                        View all {blogResults.length} articles
                      </button>
                    </div>
                  )}
                </section>
              )}
              
              {/* Characters Results */}
              {(activeTab === "all" || activeTab === "characters") && charactersResults.length > 0 && (
                <section className="mb-12">
                  {activeTab === "all" && <h2 className="text-2xl font-comic text-marvel-red mb-6">CHARACTERS</h2>}
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {charactersResults.map((character) => (
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
                              <h3 className="text-xl font-comic text-white">{character.name}</h3>
                              <p className="text-white/80">{character.realName}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
              
              {/* Comics Results */}
              {(activeTab === "all" || activeTab === "comics") && comicsResults.length > 0 && (
                <section>
                  {activeTab === "all" && <h2 className="text-2xl font-comic text-marvel-red mb-6">COMICS</h2>}
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {comicsResults.map((comic) => (
                      <Link key={comic.id} to={`/comics/${comic.slug}`} className="group">
                        <div className="comic-card overflow-hidden rounded-lg">
                          <div className="relative overflow-hidden aspect-[2/3]">
                            <img 
                              src={comic.image} 
                              alt={comic.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-lg font-comic text-white">{comic.title}</h3>
                              <p className="text-marvel-red font-comic">{comic.issue}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          ) : (
            <div className="text-center py-20">
              {query ? (
                <>
                  <h2 className="text-2xl font-comic text-gray-600 mb-4">No results found</h2>
                  <p className="text-gray-500 mb-6">
                    We couldn't find any matches for "{query}". 
                    Please try another search term or browse our content.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link to="/comics" className="px-4 py-2 bg-marvel-red text-white rounded-md hover:bg-red-700 transition-colors">
                      Browse Comics
                    </Link>
                    <Link to="/blog" className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">
                      Read Articles
                    </Link>
                  </div>
                </>
              ) : (
                <p className="text-gray-500">
                  Enter a search term above to find content.
                </p>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
