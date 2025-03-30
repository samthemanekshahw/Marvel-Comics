
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would redirect to search results
    console.log("Searching for:", searchQuery);
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <header className="sticky top-0 z-50 glass-card shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-comic text-3xl text-marvel-red">MARVEL</span>
              <span className="font-comic text-xl ml-1 text-marvel-blue">COMICS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/comics" className="nav-link">Comics</Link>
            <Link to="/characters" className="nav-link">Characters</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-3 pr-10 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-600">
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <Link to="/" className="mobile-nav-link block py-2">Home</Link>
            <Link to="/comics" className="mobile-nav-link block py-2">Comics</Link>
            <Link to="/characters" className="mobile-nav-link block py-2">Characters</Link>
            <Link to="/blog" className="mobile-nav-link block py-2">Blog</Link>
            <form onSubmit={handleSearch} className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-3 pr-10 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-3 top-2.5 text-gray-600">
                  <Search size={18} />
                </button>
              </div>
            </form>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
