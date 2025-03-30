
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMenuOpen) setIsMenuOpen(false);
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
            <Link to="/" className="nav-link hover:text-marvel-red transition-colors">Home</Link>
            <Link to="/comics" className="nav-link hover:text-marvel-red transition-colors">Comics</Link>
            <Link to="/characters" className="nav-link hover:text-marvel-red transition-colors">Characters</Link>
            <Link to="/blog" className="nav-link hover:text-marvel-red transition-colors">Blog</Link>
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
            <button onClick={() => handleNavigation("/")} className="mobile-nav-link block py-2 w-full text-left">Home</button>
            <button onClick={() => handleNavigation("/comics")} className="mobile-nav-link block py-2 w-full text-left">Comics</button>
            <button onClick={() => handleNavigation("/characters")} className="mobile-nav-link block py-2 w-full text-left">Characters</button>
            <button onClick={() => handleNavigation("/blog")} className="mobile-nav-link block py-2 w-full text-left">Blog</button>
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
