
import { useState } from "react";
import { FileText } from "lucide-react";

const HR = () => {
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job Description submitted:", jobDescription);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-24 pb-20 px-4">
      <h1 className="text-5xl mb-4 animate-fade-in">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-resumate-pale-blue">
          HR Dashboard
        </span>
      </h1>
      <p className="text-lg text-white/80 max-w-2xl text-center mb-12">
        Enter your job description to find the perfect match from our applicant pool.
      </p>

      <div className="upload-section w-full max-w-3xl">
        <div className="glass-card p-8">
          <div className="mb-6 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-resumate-glow-blue/20 flex items-center justify-center">
              <FileText className="h-8 w-8 text-resumate-glow-blue" />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Enter job description here..."
                className="w-full h-64 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-resumate-glow-blue focus:ring-1 focus:ring-resumate-glow-blue"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="glow-button">
                Analyze Requirements
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HR;
