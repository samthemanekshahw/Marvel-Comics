
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPostBySlug, getRecentBlogPosts, getBlogPostsByCategory } from "@/data/blogData";
import { Star, Calendar, User, Tag, Share2, Heart, MessageSquare, ChevronLeft, ChevronRight, Bookmark, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [comment, setComment] = useState("");
  
  const post = getBlogPostBySlug(slug || "");
  const recentPosts = getRecentBlogPosts(3).filter(p => p.slug !== slug);
  
  // Get related posts based on category
  const relatedPosts = post 
    ? getBlogPostsByCategory(post.category).filter(p => p.slug !== slug).slice(0, 3) 
    : [];
  
  useEffect(() => {
    // Redirect to 404 if post not found
    if (!post && slug) {
      navigate("/not-found");
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
    
    // Reset state when post changes
    setLiked(false);
    setBookmarked(false);
    setCommentOpen(false);
    setComment("");
    
  }, [post, slug, navigate]);
  
  if (!post) {
    return null;
  }
  
  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      toast({
        title: "Article liked!",
        description: "Thanks for supporting this content!",
        variant: "default",
      });
    }
  };
  
  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    toast({
      title: bookmarked ? "Removed from bookmarks" : "Saved to bookmarks",
      description: bookmarked ? "Article removed from your saved items" : "You can find this article in your saved items",
      variant: "default",
    });
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Article link copied to clipboard",
        variant: "default",
      });
    }
  };
  
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      toast({
        title: "Comment submitted!",
        description: "Your comment is awaiting moderation.",
        variant: "default",
      });
      setComment("");
      setCommentOpen(false);
    }
  };
  
  // Navigate to previous or next post in the same category
  const categoryPosts = getBlogPostsByCategory(post.category);
  const currentIndex = categoryPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : null;
  
  return (
    <div className="min-h-screen flex flex-col bg-marvel-dark">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Header with Comic-Style Elements */}
        <div className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-marvel-dark via-marvel-dark/80 to-marvel-dark/30"></div>
          </div>
          
          {/* Comic-Style Decorative Elements */}
          <div className="absolute top-20 left-20 w-40 h-40 bg-marvel-red/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-marvel-gold/30 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Comic Boom Effect */}
          <div className="absolute top-1/4 left-[15%] transform -rotate-12 comic-shine">
            <div className="bg-marvel-red/90 text-white font-comic px-4 py-2 rounded-lg shadow-lg">
              BOOM!
            </div>
          </div>
          <div className="absolute bottom-1/3 right-[20%] transform rotate-6 comic-shine">
            <div className="bg-marvel-blue/90 text-white font-comic px-4 py-2 rounded-lg shadow-lg">
              POW!
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/blog" className="inline-flex items-center text-white mb-4 hover:text-marvel-gold transition-colors font-comic group">
              <ChevronLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              BACK TO BLOG
            </Link>
            
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-marvel-red to-marvel-gold text-white font-comic rounded-md mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-comic text-white mb-4 leading-tight drop-shadow-lg">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center text-gray-300 mb-4 gap-y-2">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1 text-marvel-gold" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center mr-4">
                  <User className="h-4 w-4 mr-1 text-marvel-gold" />
                  <span>By {post.author}</span>
                </div>
                <div className="ml-auto flex">
                  <Star className="h-5 w-5 text-marvel-gold fill-marvel-gold" />
                  <Star className="h-5 w-5 text-marvel-gold fill-marvel-gold" />
                  <Star className="h-5 w-5 text-marvel-gold fill-marvel-gold" />
                  <Star className="h-5 w-5 text-marvel-gold fill-marvel-gold" />
                  <Star className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive Action Bar */}
        <div className="bg-gradient-to-r from-marvel-darkblue to-marvel-darkred sticky top-0 z-20 py-2 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/10"
                onClick={handleLike}
              >
                <Heart className={`h-5 w-5 mr-1 ${liked ? 'fill-marvel-red text-marvel-red' : 'text-white'}`} />
                <span className="hidden sm:inline">Like</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/10"
                onClick={() => setCommentOpen(!commentOpen)}
              >
                <MessageSquare className="h-5 w-5 mr-1" />
                <span className="hidden sm:inline">Comment</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/10"
                onClick={handleShare}
              >
                <Share2 className="h-5 w-5 mr-1" />
                <span className="hidden sm:inline">Share</span>
              </Button>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/10"
              onClick={handleBookmark}
            >
              <Bookmark className={`h-5 w-5 mr-1 ${bookmarked ? 'fill-marvel-gold text-marvel-gold' : 'text-white'}`} />
              <span className="hidden sm:inline">{bookmarked ? 'Saved' : 'Save'}</span>
            </Button>
          </div>
        </div>
        
        {/* Comment Form */}
        {commentOpen && (
          <div className="container mx-auto px-6 py-4">
            <div className="glass-card-dark p-4 rounded-lg">
              <form onSubmit={handleCommentSubmit}>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-3 bg-marvel-dark/80 text-white border border-marvel-blue/30 rounded-lg mb-3"
                  placeholder="Share your thoughts on this article..."
                  rows={3}
                ></textarea>
                <div className="flex justify-end gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setCommentOpen(false)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-marvel-blue hover:bg-marvel-darkblue"
                  >
                    Post Comment
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Article Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="lg:w-2/3">
              <div className="glass-card-dark p-8 rounded-lg">
                <div className="prose prose-lg max-w-none article-content prose-headings:font-comic prose-headings:text-marvel-gold prose-headings:my-6 prose-p:text-gray-200 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-marvel-red prose-a:text-marvel-gold prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:my-8 prose-blockquote:border-marvel-red prose-blockquote:bg-marvel-red/10 prose-blockquote:p-4 prose-blockquote:rounded-md prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-white" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                {/* Previous/Next Article Navigation */}
                <div className="mt-10 pt-6 border-t border-marvel-gold/30 flex justify-between">
                  {prevPost ? (
                    <Link to={`/blog/${prevPost.slug}`} className="group flex items-center">
                      <ChevronLeft className="mr-2 h-5 w-5 text-marvel-gold group-hover:-translate-x-1 transition-transform" />
                      <div>
                        <div className="text-sm text-gray-400">Previous Article</div>
                        <div className="text-marvel-gold font-comic line-clamp-1">{prevPost.title}</div>
                      </div>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                  
                  {nextPost && (
                    <Link to={`/blog/${nextPost.slug}`} className="group flex items-center text-right">
                      <div>
                        <div className="text-sm text-gray-400">Next Article</div>
                        <div className="text-marvel-gold font-comic line-clamp-1">{nextPost.title}</div>
                      </div>
                      <ChevronRight className="ml-2 h-5 w-5 text-marvel-gold group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
                
                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-marvel-gold/30">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link 
                        key={index}
                        to={`/blog?q=${tag}`}
                        className="px-3 py-1 bg-marvel-red/20 hover:bg-marvel-red/40 rounded-full text-sm text-white font-medium border border-marvel-red/30 transition-colors flex items-center"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Author Bio */}
                <div className="mt-10 pt-6 border-t border-marvel-gold/30">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-marvel-red to-marvel-gold p-0.5">
                        <div className="w-full h-full rounded-full bg-marvel-dark flex items-center justify-center text-white font-bold text-xl">
                          {post.author.charAt(0)}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg text-white">{post.author}</h3>
                      <p className="text-gray-300">Comic enthusiast and writer with a passion for Marvel's rich universe of characters and stories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="glass-card-marvel p-6 mb-8 rounded-lg sticky top-24">
                <h3 className="font-comic text-2xl marvel-gradient-text mb-4">RECENT ARTICLES</h3>
                <div className="space-y-6">
                  {recentPosts.map((recentPost) => (
                    <Link key={recentPost.id} to={`/blog/${recentPost.slug}`} className="group block">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                          <img 
                            src={recentPost.image} 
                            alt={recentPost.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-white group-hover:text-marvel-gold transition-colors line-clamp-2">
                            {recentPost.title}
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">{recentPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Related Articles */}
                <div className="mt-8 pt-6 border-t border-marvel-red/30">
                  <h3 className="font-comic text-xl marvel-gradient-text mb-4">RELATED ARTICLES</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group block">
                        <h4 className="font-medium text-white group-hover:text-marvel-gold transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">{relatedPost.date} • {relatedPost.category}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-marvel-red/30">
                  <h3 className="font-comic text-xl marvel-gradient-text mb-4">SHARE THIS ARTICLE</h3>
                  <div className="flex space-x-4">
                    <button 
                      onClick={handleShare}
                      className="w-10 h-10 rounded-full bg-marvel-red/20 flex items-center justify-center text-white hover:bg-marvel-red/40 transition-colors hover:scale-110 transform"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-marvel-red/20 flex items-center justify-center text-white hover:bg-marvel-red/40 transition-colors hover:scale-110 transform">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-marvel-red/20 flex items-center justify-center text-white hover:bg-marvel-red/40 transition-colors hover:scale-110 transform">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-marvel-red/30">
                  <div className="bg-gradient-to-br from-marvel-red/20 to-marvel-blue/20 p-4 rounded-lg">
                    <h4 className="font-comic text-lg text-white mb-2">Enjoying Marvel content?</h4>
                    <p className="text-sm text-gray-300 mb-3">Check out our latest comics and merchandise!</p>
                    <div className="flex gap-2">
                      <Link to="/comics">
                        <Button className="bg-marvel-red hover:bg-marvel-darkred text-white text-xs">
                          Browse Comics
                        </Button>
                      </Link>
                      <Link to="/characters">
                        <Button variant="outline" className="border-marvel-gold text-marvel-gold text-xs hover:bg-marvel-gold/20">
                          Explore Characters
                        </Button>
                      </Link>
                    </div>
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
