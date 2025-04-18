
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-orbitron text-white">ResuMate</span>
          </Link>
          <div className="flex space-x-4">
            <Link 
              to="/applicant" 
              className="text-white/80 hover:text-white px-3 py-2 rounded-md transition-colors"
            >
              For Applicants
            </Link>
            <Link 
              to="/hr" 
              className="text-white/80 hover:text-white px-3 py-2 rounded-md transition-colors"
            >
              For HR
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
