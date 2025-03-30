
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPostBySlug, getRecentBlogPosts, BlogPost } from "@/data/blogData";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = getBlogPostBySlug(slug || "");
  const recentPosts = getRecentBlogPosts(3).filter(p => p.slug !== slug);
  
  useEffect(() => {
    // Redirect to 404 if post not found
    if (!post && slug) {
      navigate("/not-found");
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, slug, navigate]);
  
  if (!post) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Header */}
        <div className="relative h-[50vh] md:h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-marvel-dark via-marvel-dark/60 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/blog" className="inline-flex items-center text-white mb-4 hover:text-marvel-red transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-marvel-red text-white font-medium rounded-md mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-comic text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center text-gray-300 mb-2">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="lg:w-2/3">
              <div className="prose prose-lg max-w-none article-content" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Tags */}
              <div className="mt-10 pt-6 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index}
                      to={`/blog?q=${tag}`}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-10 pt-6 border-t">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">{post.author}</h3>
                    <p className="text-gray-600">Comic enthusiast and writer with a passion for Marvel's rich universe of characters and stories.</p>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="glass-card p-6 mb-8 sticky top-24">
                <h3 className="font-comic text-2xl text-marvel-red mb-4">RECENT ARTICLES</h3>
                <div className="space-y-6">
                  {recentPosts.map((recentPost) => (
                    <Link key={recentPost.id} to={`/blog/${recentPost.slug}`} className="group block">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                          <img 
                            src={recentPost.image} 
                            alt={recentPost.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-marvel-red transition-colors line-clamp-2">
                            {recentPost.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">{recentPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-comic text-xl text-marvel-red mb-4">SHARE THIS ARTICLE</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-marvel-red">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-marvel-red">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-marvel-red">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
