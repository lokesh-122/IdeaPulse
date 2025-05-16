import React, { useState } from 'react';
import { SwotAnalysis as SwotType } from '../types';
import { Plus, Minus, ArrowUpRight, ArrowDownRight, Star, Shield, TrendingUp, AlertTriangle } from 'lucide-react';

interface SwotAnalysisProps {
  swot: SwotType;
}

const SwotAnalysis: React.FC<SwotAnalysisProps> = ({ swot }) => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    strengths: true,
    weaknesses: false,
    opportunities: false,
    threats: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getSectionIcon = (section: string) => {
    switch(section) {
      case 'strengths': return <Star className="h-5 w-5 text-green-600" />;
      case 'weaknesses': return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'opportunities': return <TrendingUp className="h-5 w-5 text-blue-600" />;
      case 'threats': return <Shield className="h-5 w-5 text-purple-600" />;
      default: return null;
    }
  };

  const getSectionColor = (section: string) => {
    switch(section) {
      case 'strengths': return 'border-green-200 bg-green-50';
      case 'weaknesses': return 'border-red-200 bg-red-50';
      case 'opportunities': return 'border-blue-200 bg-blue-50';
      case 'threats': return 'border-purple-200 bg-purple-50';
      default: return '';
    }
  };

  const getSectionHeadingColor = (section: string) => {
    switch(section) {
      case 'strengths': return 'text-green-700 bg-green-100';
      case 'weaknesses': return 'text-red-700 bg-red-100';
      case 'opportunities': return 'text-blue-700 bg-blue-100';
      case 'threats': return 'text-purple-700 bg-purple-100';
      default: return '';
    }
  };

  const getArrowIcon = (section: string) => {
    switch(section) {
      case 'strengths': return <ArrowUpRight className="h-4 w-4 text-green-600" />;
      case 'weaknesses': return <ArrowDownRight className="h-4 w-4 text-red-600" />;
      case 'opportunities': return <ArrowUpRight className="h-4 w-4 text-blue-600" />;
      case 'threats': return <ArrowDownRight className="h-4 w-4 text-purple-600" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">SWOT Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(swot).map(([key, items]) => (
          <div 
            key={key}
            className={`rounded-lg border transition-all duration-300 ${getSectionColor(key)}`}
          >
            <button 
              onClick={() => toggleSection(key)}
              className={`w-full flex justify-between items-center p-4 font-semibold rounded-t-lg ${getSectionHeadingColor(key)}`}
            >
              <div className="flex items-center">
                {getSectionIcon(key)}
                <span className="ml-2 capitalize">{key}</span>
              </div>
              {expandedSections[key] ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </button>
            
            {expandedSections[key] && (
              <div className="p-4 space-y-3">
                {items.map((item, index) => (
                  <div key={index} className="flex items-start">
                    {getArrowIcon(key)}
                    <div className="ml-2">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwotAnalysis;