
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

// Sample data for latest blog posts
const latestBlogs = [
  {
    id: 1,
    title: "The Evolution of Captain America Through the Decades",
    excerpt: "From fighting Nazis to confronting modern ethical dilemmas, see how Cap has evolved while staying true to his core values.",
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Character Analysis",
    date: "June 12, 2023",
    slug: "evolution-captain-america-decades"
  },
  {
    id: 2,
    title: "The Legacy of Stan Lee in Modern Comics",
    excerpt: "How the visionary creator continues to influence storytelling and character development in contemporary comics.",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Industry",
    date: "May 28, 2023",
    slug: "legacy-stan-lee-modern-comics"
  },
  {
    id: 3,
    title: "X-Men: Exploring the Mutant Metaphor",
    excerpt: "Examining how the X-Men comics have addressed real-world discrimination and marginalization through the mutant experience.",
    image: "https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Analysis",
    date: "May 15, 2023",
    slug: "x-men-exploring-mutant-metaphor"
  },
];

const LatestBlogs = () => {
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
