
import { useState, useRef } from "react";
import { Upload, FileText } from "lucide-react";

const Applicant = () => {
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

  return (
    <div className="min-h-screen flex flex-col items-center pt-24 pb-20 px-4">
      <h1 className="text-5xl mb-4 animate-fade-in">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-resumate-pale-blue">
          Upload Your Resume
        </span>
      </h1>
      <p className="text-lg text-white/80 max-w-2xl text-center mb-12">
        Let our AI analyze your resume and match you with the perfect opportunities.
      </p>

      <section className="upload-section w-full max-w-3xl">
        <div className="glass-card p-8 flex flex-col items-center">
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
    </div>
  );
};

export default Applicant;
