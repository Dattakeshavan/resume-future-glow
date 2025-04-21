import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Applicant from "./pages/Applicant";
import HR from "./pages/HR";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.createElement('div');
      starsContainer.classList.add('fixed', 'inset-0', 'z-[-1]', 'overflow-hidden');
      document.body.appendChild(starsContainer);
      
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2;
        const opacity = Math.random() * 0.7 + 0.3;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.borderRadius = '50%';
        star.style.backgroundColor = 'white';
        star.style.opacity = String(opacity);
        star.style.position = 'absolute';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${3 + Math.random() * 7}s infinite alternate`;
        
        starsContainer.appendChild(star);
      }
      
      const style = document.createElement('style');
      style.textContent = `
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 0.8; }
        }
      `;
      document.head.appendChild(style);
    };
    
    createStars();
    
    return () => {
      const starsContainer = document.querySelector('div.fixed.inset-0.z-\\[-1\\]');
      if (starsContainer) {
        starsContainer.remove();
      }
      
      const style = document.head.querySelector('style:last-child');
      if (style && style.textContent.includes('twinkle')) {
        style.remove();
      }
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen w-full overflow-x-hidden">
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/applicant" element={<Applicant />} />
              <Route path="/hr" element={<HR />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
