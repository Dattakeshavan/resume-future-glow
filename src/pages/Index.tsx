
import { Link } from "react-router-dom";
import { Sparkles, BarChart3, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pb-20">
      {/* Hero Section */}
      <header className="w-full max-w-7xl px-4 md:px-8 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl mb-4 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-resumate-pale-blue">
            ResuMate
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-resumate-pale-blue/90">
          AI-Powered Resume Analyzer
        </h2>
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Elevate your job search with cutting-edge AI analysis. Upload your resume and get instant feedback, match scores, and smart insights.
        </p>
      </header>
      
      {/* Feature Cards */}
      <section className="w-full max-w-7xl px-4 md:px-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="feature-card glass-card p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-resumate-glow-blue/20 mr-4">
              <Sparkles className="h-6 w-6 text-resumate-glow-blue" />
            </div>
            <h3 className="text-xl">Smart Analysis</h3>
          </div>
          <p className="text-white/70">
            Our AI analyzes your resume structure, content, and keywords to provide actionable improvements.
          </p>
        </div>
        
        <div className="feature-card glass-card p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-resumate-glow-blue/20 mr-4">
              <BarChart3 className="h-6 w-6 text-resumate-glow-blue" />
            </div>
            <h3 className="text-xl">Match Score</h3>
          </div>
          <p className="text-white/70">
            See how well your resume matches job descriptions and get suggestions to improve your score.
          </p>
        </div>
        
        <div className="feature-card glass-card p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-resumate-glow-blue/20 mr-4">
              <MessageSquare className="h-6 w-6 text-resumate-glow-blue" />
            </div>
            <h3 className="text-xl">Instant Feedback</h3>
          </div>
          <p className="text-white/70">
            Receive personalized suggestions and areas of improvement within seconds of uploading.
          </p>
        </div>
      </section>
      
      {/* Wave Divider */}
      <div className="wave-divider w-full"></div>
      
      {/* Call to Action */}
      <section className="text-center mt-8 space-y-6">
        <div className="space-y-4">
          <Link to="/applicant" className="glow-button inline-block mr-4">
            Upload Resume
          </Link>
          <Link to="/hr" className="glow-button inline-block bg-white/10 hover:bg-white/20">
            Post a Job
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
