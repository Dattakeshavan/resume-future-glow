
import { useState, useRef, useEffect } from "react";
import { 
  Sparkles,
  BarChart3,
  MessageSquare,
  Upload,
  FileText
} from "lucide-react";

const Index = () => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // Handle drop event
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files[0]);
    }
  };
  
  // Handle file input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files[0]);
    }
  };
  
  // Process the file
  const handleFiles = (file: File) => {
    setFileName(file.name);
    simulateUpload();
  };
  
  // Trigger file input click
  const onButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  // Simulate file upload progress
  const simulateUpload = () => {
    setIsUploaded(false);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploaded(true);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };
  
  // Card animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const cards = document.querySelectorAll('.feature-card, .upload-section');
    cards.forEach(card => {
      card.classList.add('opacity-0');
      observer.observe(card);
    });
    
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center pb-20">
      {/* Hero Section */}
      <header className="w-full max-w-7xl px-4 md:px-8 pt-12 md:pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl mb-4 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-resumate-pale-blue">
            ResuMate
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-resumate-pale-blue/90 animate-fade-in">
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
      
      {/* Upload Section */}
      <section className="upload-section w-full max-w-3xl px-4 md:px-8 mb-16">
        <div className="glass-card p-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl mb-6 text-center">Upload Your Resume</h2>
          
          <div 
            className={`resume-upload-zone w-full ${dragActive ? 'active' : ''} ${isUploaded ? 'bg-resumate-glow-blue/10' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center">
              {!fileName ? (
                <>
                  <div className="w-16 h-16 rounded-full bg-resumate-glow-blue/20 flex items-center justify-center mb-4 animate-pulse-glow">
                    <Upload className="h-8 w-8 text-resumate-glow-blue" />
                  </div>
                  <p className="text-white/80 text-center mb-4">
                    Drag & drop your resume here or
                  </p>
                  <button 
                    className="glow-button"
                    onClick={onButtonClick}
                  >
                    Browse Files
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                  />
                  <p className="text-white/60 text-sm mt-4">
                    Supported formats: PDF, DOC, DOCX
                  </p>
                </>
              ) : isUploaded ? (
                <>
                  <div className="w-16 h-16 rounded-full bg-resumate-glow-blue/20 flex items-center justify-center mb-4 shadow-glow">
                    <FileText className="h-8 w-8 text-resumate-glow-blue" />
                  </div>
                  <p className="text-white/80 text-center mb-2">
                    <span className="font-medium text-white">{fileName}</span> uploaded successfully!
                  </p>
                  <p className="text-resumate-glow-blue text-center mb-4">
                    Your analysis is ready
                  </p>
                  <button className="glow-button">
                    View Analysis
                  </button>
                  <button 
                    className="text-white/60 hover:text-white mt-4 text-sm underline"
                    onClick={() => {
                      setFileName("");
                      setIsUploaded(false);
                      setUploadProgress(0);
                    }}
                  >
                    Upload a different file
                  </button>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-resumate-glow-blue/20 flex items-center justify-center mb-4 animate-pulse">
                    <FileText className="h-8 w-8 text-resumate-glow-blue" />
                  </div>
                  <p className="text-white/80 text-center mb-2">
                    <span className="font-medium text-white">{fileName}</span>
                  </p>
                  <div className="w-full max-w-xs bg-white/20 h-2 rounded-full overflow-hidden mb-4">
                    <div 
                      className="h-full bg-resumate-glow-blue"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-white/60 text-sm">
                    Uploading... {uploadProgress}%
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full max-w-7xl px-4 md:px-8 py-6 text-center text-white/60">
        <p>© 2025 ResuMate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
