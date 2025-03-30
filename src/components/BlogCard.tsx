
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

const BlogCard = ({ id, title, excerpt, image, category, date, slug }: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="group">
      <article className="comic-card overflow-hidden border-2 border-yellow-400/30 relative backdrop-blur-sm bg-gradient-to-br from-marvel-red/10 to-marvel-gold/10">
        <div className="absolute inset-0 bg-gradient-to-br from-marvel-red/10 via-transparent to-marvel-gold/10 opacity-50"></div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-marvel-gold/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-marvel-red/30 rounded-full blur-xl"></div>
        
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-0 right-0 bg-gradient-to-l from-marvel-red to-marvel-gold text-white px-3 py-1 font-comic">
            {category}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        
        <div className="p-6 relative z-10">
          <div className="flex items-center mb-2">
            <p className="text-sm text-gray-200 bg-marvel-dark/70 px-2 py-1 rounded-full">{date}</p>
            <div className="ml-auto flex">
              <Star className="h-4 w-4 text-marvel-gold fill-marvel-gold" />
              <Star className="h-4 w-4 text-marvel-gold fill-marvel-gold" />
              <Star className="h-4 w-4 text-marvel-gold fill-marvel-gold" />
            </div>
          </div>
          
          <h3 className="text-xl font-comic text-white group-hover:text-marvel-gold transition-colors mb-2 drop-shadow-md">
            {title}
          </h3>
          
          <p className="text-gray-200 line-clamp-2 drop-shadow-sm">{excerpt}</p>
          
          <div className="mt-4">
            <span className="inline-flex items-center text-marvel-gold font-comic group-hover:text-white transition-colors">
              READ MORE
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </article>
    </Link>
  );
};

export default BlogCard;
