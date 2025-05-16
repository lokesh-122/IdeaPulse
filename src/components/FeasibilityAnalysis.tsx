import React from 'react';
import { FeasibilityScore } from '../types';
import { AlertCircle, ThumbsUp, AlertTriangle } from 'lucide-react';

interface FeasibilityAnalysisProps {
  feasibility: FeasibilityScore;
}

const FeasibilityAnalysis: React.FC<FeasibilityAnalysisProps> = ({ feasibility }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-blue-100';
    if (score >= 40) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 60) return <ThumbsUp className="h-5 w-5" />;
    if (score >= 40) return <AlertTriangle className="h-5 w-5" />;
    return <AlertCircle className="h-5 w-5" />;
  };

  const getScoreText = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Challenging';
  };

  const getScoreDescription = (type: string, score: number) => {
    if (type === 'overall') {
      if (score >= 80) return 'Your idea shows excellent potential for success.';
      if (score >= 60) return 'Your idea has good potential but could use refinement in specific areas.';
      if (score >= 40) return 'Your idea faces some significant challenges that should be addressed.';
      return 'Your idea faces major hurdles that need substantial rethinking.';
    }
    
    if (type === 'technical') {
      if (score >= 80) return 'Technical implementation appears straightforward.';
      if (score >= 60) return 'Technical implementation is feasible with moderate complexity.';
      if (score >= 40) return 'Technical implementation presents notable challenges.';
      return 'Technical implementation appears highly complex or unproven.';
    }
    
    if (type === 'market') {
      if (score >= 80) return 'Strong market potential with clear demand.';
      if (score >= 60) return 'Good market opportunity with some competitive challenges.';
      if (score >= 40) return 'Market is competitive with uncertain demand.';
      return 'Market appears saturated or demand is questionable.';
    }
    
    if (type === 'financial') {
      if (score >= 80) return 'Business model shows strong profit potential.';
      if (score >= 60) return 'Business model appears viable with reasonable costs.';
      if (score >= 40) return 'Financial viability depends on key assumptions.';
      return 'Financial model appears difficult to sustain.';
    }
    
    // team
    if (score >= 80) return 'Ideal startup with proper execution capabilities.';
    if (score >= 60) return 'Good startup with some gaps in needed skills.';
    if (score >= 40) return 'Would need significant team building.';
    return 'Requires extensive expertise that may be difficult to assemble.';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Feasibility Analysis</h2>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">Overall Score</h3>
          <div className={`${getScoreBg(feasibility.overall)} ${getScoreColor(feasibility.overall)} text-lg font-bold rounded-full px-4 py-1 flex items-center`}>
            {getScoreIcon(feasibility.overall)}
            <span className="ml-1">{feasibility.overall}/100</span>
          </div>
        </div>
        <p className="text-gray-700">{getScoreDescription('overall', feasibility.overall)}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">Technical Feasibility</h4>
            <span className={`${getScoreColor(feasibility.technical)} font-bold`}>{feasibility.technical}/100</span>
          </div>
          <p className="text-sm text-gray-600">{getScoreDescription('technical', feasibility.technical)}</p>
          <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-2 rounded-full ${feasibility.technical >= 80 ? 'bg-green-500' : feasibility.technical >= 60 ? 'bg-blue-500' : feasibility.technical >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} 
              style={{ width: `${feasibility.technical}%` }}
            ></div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">Market Feasibility</h4>
            <span className={`${getScoreColor(feasibility.market)} font-bold`}>{feasibility.market}/100</span>
          </div>
          <p className="text-sm text-gray-600">{getScoreDescription('market', feasibility.market)}</p>
          <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-2 rounded-full ${feasibility.market >= 80 ? 'bg-green-500' : feasibility.market >= 60 ? 'bg-blue-500' : feasibility.market >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} 
              style={{ width: `${feasibility.market}%` }}
            ></div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">Financial Feasibility</h4>
            <span className={`${getScoreColor(feasibility.financial)} font-bold`}>{feasibility.financial}/100</span>
          </div>
          <p className="text-sm text-gray-600">{getScoreDescription('financial', feasibility.financial)}</p>
          <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-2 rounded-full ${feasibility.financial >= 80 ? 'bg-green-500' : feasibility.financial >= 60 ? 'bg-blue-500' : feasibility.financial >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} 
              style={{ width: `${feasibility.financial}%` }}
            ></div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">Team Requirements</h4>
            <span className={`${getScoreColor(feasibility.team)} font-bold`}>{feasibility.team}/100</span>
          </div>
          <p className="text-sm text-gray-600">{getScoreDescription('team', feasibility.team)}</p>
          <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-2 rounded-full ${feasibility.team >= 80 ? 'bg-green-500' : feasibility.team >= 60 ? 'bg-blue-500' : feasibility.team >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} 
              style={{ width: `${feasibility.team}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeasibilityAnalysis;