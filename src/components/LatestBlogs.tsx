
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { getRecentBlogPosts } from "@/data/blogData";

const LatestBlogs = () => {
  // Get 3 most recent blog posts from our data
  const latestBlogs = getRecentBlogPosts(3);
  
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with Marvel-inspired color scheme */}
      <div className="absolute inset-0 bg-gradient-to-br from-marvel-red via-marvel-dark to-marvel-gold opacity-90"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-marvel-red via-marvel-gold to-marvel-red"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-marvel-gold via-marvel-red to-marvel-gold"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-marvel-red/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-marvel-gold/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-comic text-white drop-shadow-md">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-marvel-gold to-white">LATEST ARTICLES</span>
          </h2>
          <Link to="/blog" className="font-comic text-white hover:text-marvel-gold transition-colors flex items-center group">
            VIEW ALL
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
