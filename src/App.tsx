
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Comics from "./pages/Comics";
import ComicDetail from "./pages/ComicDetail";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import Search from "./pages/Search";

// Create Query Client with better error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Get base URL from environment or default to '/'
const getBasename = () => {
  // For GitHub Pages deployment
  return process.env.NODE_ENV === 'production' ? './' : '/';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-right" closeButton richColors />
      <BrowserRouter basename={getBasename()}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          
          {/* Handle old category paths - redirect to search with query */}
          <Route path="/blog/category/:category" element={<SearchCategoryRedirect />} />
          
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:slug" element={<ComicDetail />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:slug" element={<CharacterDetail />} />
          <Route path="/search" element={<Search />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// This component redirects old category URLs to the search page with the category as a query
function SearchCategoryRedirect() {
  const pathSegments = window.location.pathname.split('/');
  const category = pathSegments[pathSegments.length - 1];
  
  return <Navigate to={`/blog?q=${category}`} replace />;
}

export default App;
