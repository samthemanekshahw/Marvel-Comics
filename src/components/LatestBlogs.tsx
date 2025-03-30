
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { getRecentBlogPosts } from "@/data/blogData";
import { useState } from "react";

const LatestBlogs = () => {
  // Get 6 most recent blog posts from our data
  const latestBlogs = getRecentBlogPosts(6);
  const [displayCount, setDisplayCount] = useState(3);
  
  const loadMore = () => {
    setDisplayCount(prevCount => Math.min(prevCount + 3, latestBlogs.length));
  };
  
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Enhanced Background with Marvel-inspired color scheme */}
      <div className="absolute inset-0 bg-gradient-to-br from-marvel-red via-marvel-dark to-marvel-gold opacity-90 animate-shimmer bg-[length:200%_200%]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-marvel-red via-marvel-gold to-marvel-red"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-marvel-gold via-marvel-red to-marvel-gold"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-marvel-red/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-marvel-gold/30 rounded-full blur-3xl"></div>
      
      {/* Comic-style decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-marvel-gold/30 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-4 border-marvel-red/30 rounded-full"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-white/10 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-white/10 rounded-full blur-sm"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-comic text-white drop-shadow-lg relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-marvel-gold to-white animate-pulse">
              LATEST ARTICLES
            </span>
            <span className="absolute -inset-1 opacity-40 bg-gradient-to-r from-marvel-gold/30 to-marvel-red/30 blur-lg"></span>
          </h2>
          <Link to="/blog" className="font-comic text-white hover:text-marvel-gold transition-colors flex items-center group relative overflow-hidden px-4 py-2 rounded-md bg-gradient-to-r from-marvel-red/20 to-marvel-gold/20 backdrop-blur-sm border border-white/10">
            <span className="relative z-10">VIEW ALL</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform relative z-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-marvel-gold/20 to-marvel-red/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.slice(0, displayCount).map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
        
        {displayCount < latestBlogs.length && (
          <div className="mt-10 text-center">
            <button 
              onClick={loadMore}
              className="font-comic text-white hover:text-marvel-gold transition-colors px-6 py-3 bg-gradient-to-r from-marvel-red/30 to-marvel-gold/30 hover:from-marvel-red/50 hover:to-marvel-gold/50 rounded-md border border-white/10 backdrop-blur-sm relative overflow-hidden group"
            >
              <span className="relative z-10">LOAD MORE ARTICLES</span>
              <span className="absolute inset-0 bg-gradient-to-r from-marvel-red/20 to-marvel-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestBlogs;
