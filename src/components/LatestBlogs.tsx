
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { getRecentBlogPosts } from "@/data/blogData";

const LatestBlogs = () => {
  // Get 3 most recent blog posts from our data
  const latestBlogs = getRecentBlogPosts(3);
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-comic text-marvel-red">LATEST ARTICLES</h2>
          <Link to="/blog" className="font-medium text-primary hover:underline">
            View All Articles →
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
