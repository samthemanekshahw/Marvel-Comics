
import { Link } from "react-router-dom";

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
      <article className="comic-card glass-card overflow-hidden">
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-0 right-0 bg-marvel-red text-white px-3 py-1 font-comic">
            {category}
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <h3 className="text-xl font-comic text-marvel-dark group-hover:text-marvel-red transition-colors mb-2">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-2">{excerpt}</p>
          <div className="mt-4">
            <span className="text-primary font-medium group-hover:text-marvel-red transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
