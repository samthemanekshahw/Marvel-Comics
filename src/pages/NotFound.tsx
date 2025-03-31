
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-marvel-dark">
      <div className="w-full max-w-3xl p-8 glass-card-marvel text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-marvel-red/20 flex items-center justify-center animate-pulse">
            <AlertTriangle size={40} className="text-marvel-red" />
          </div>
        </div>
        
        <h1 className="text-6xl font-comic mb-4 bg-clip-text text-transparent bg-gradient-to-r from-marvel-red to-marvel-gold">404</h1>
        <h2 className="text-3xl text-white font-comic mb-6">Page Not Found</h2>
        
        <p className="text-xl text-gray-300 mb-8">
          Oops! The page you're looking for has been lost in the multiverse.
          <br />
          <span className="text-gray-400">
            We couldn't find: <span className="text-marvel-gold font-mono">{location.pathname}</span>
          </span>
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button 
            onClick={() => window.history.back()} 
            className="bg-marvel-red hover:bg-marvel-darkred text-white font-comic"
          >
            <ArrowLeft className="mr-2" size={18} />
            Go Back
          </Button>
          
          <Link to="/">
            <Button className="bg-marvel-blue hover:bg-marvel-darkblue text-white font-comic">
              <Home className="mr-2" size={18} />
              Return to Home
            </Button>
          </Link>
          
          <Link to="/blog">
            <Button variant="outline" className="border-marvel-gold text-marvel-gold hover:bg-marvel-gold/20 font-comic">
              Browse Blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
