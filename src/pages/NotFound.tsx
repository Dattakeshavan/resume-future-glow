import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center glass-card p-10 max-w-md animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
        <div className="h-1 w-20 bg-resumate-glow-blue mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-white/80 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <a 
          href="/" 
          className="glow-button inline-block"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
