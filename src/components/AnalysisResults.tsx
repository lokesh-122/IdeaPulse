import React, { useState } from 'react';
import { AnalysisResult } from '../types';
import FeasibilityAnalysis from './FeasibilityAnalysis';
import SwotAnalysis from './SwotAnalysis';
import MarketSizing from './MarketSizing';
import PitchGenerator from './PitchGenerator';
import { Clipboard, Presentation, BarChart, PieChart } from 'lucide-react';

interface AnalysisResultsProps {
  result: AnalysisResult | null;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ result }) => {
  const [activeTab, setActiveTab] = useState('feasibility');

  if (!result) return null;

  const tabs = [
    { id: 'feasibility', label: 'Feasibility', icon: <BarChart className="h-5 w-5" /> },
    { id: 'swot', label: 'SWOT', icon: <Clipboard className="h-5 w-5" /> },
    { id: 'market', label: 'Market Sizing', icon: <PieChart className="h-5 w-5" /> },
    { id: 'pitch', label: 'Pitch', icon: <Presentation className="h-5 w-5" /> },
  ];

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-t-lg shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-6 font-medium text-sm border-b-2 transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-6">
        {activeTab === 'feasibility' && <FeasibilityAnalysis feasibility={result.feasibility} />}
        {activeTab === 'swot' && <SwotAnalysis swot={result.swot} />}
        {activeTab === 'market' && <MarketSizing marketSizing={result.marketSizing} />}
        {activeTab === 'pitch' && <PitchGenerator pitch={result.pitch} />}
      </div>
    </div>
  );
};

export default AnalysisResults;