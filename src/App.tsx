import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IdeaForm from './components/IdeaForm';
import AnalysisResults from './components/AnalysisResults';
import { IdeaData, AnalysisResult } from './types';
import { generateMockAnalysis } from './utils/mockData';
import { Rocket } from 'lucide-react';

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  const handleSubmit = (data: IdeaData) => {
    setIsAnalyzing(true);
    setShowIntro(false);
    
    // Simulate API call delay
    setTimeout(() => {
      const analysisResult = generateMockAnalysis(data);
      setResult(analysisResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {showIntro && (
          <div className="text-center max-w-3xl mx-auto mb-10 animate-fadeIn">
            <div className="bg-blue-600 text-white p-3 rounded-full inline-block mb-4">
              <Rocket className="h-10 w-10" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Validate Your Startup Idea</h1>
            <p className="text-xl text-gray-600 mb-6">
              Transform your concept into a validated business opportunity with data-driven insights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="text-blue-600 font-bold text-lg mb-2">Feasibility Analysis</div>
                <p className="text-gray-600">Get a comprehensive assessment of your idea's technical, market, and financial viability.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="text-blue-600 font-bold text-lg mb-2">SWOT Analysis</div>
                <p className="text-gray-600">Understand your strengths, weaknesses, opportunities, and threats with actionable insights.</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <div className="text-blue-600 font-bold text-lg mb-2">Investor-Ready Pitch</div>
                <p className="text-gray-600">Generate a compelling pitch that highlights your value proposition and market potential.</p>
              </div>
            </div>
          </div>
        )}
        
        {isAnalyzing ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-xl font-medium text-gray-700">Analyzing your startup idea...</p>
            <p className="text-gray-500 mt-2">Crunching the numbers and generating insights.</p>
          </div>
        ) : (
          <>
            {!result ? (
              <IdeaForm onSubmit={handleSubmit} isLoading={isAnalyzing} />
            ) : (
              <AnalysisResults result={result} />
            )}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;