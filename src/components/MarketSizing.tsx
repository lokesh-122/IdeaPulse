import React from 'react';
import { MarketSizing as MarketSizingType } from '../types';
import { PieChart, BarChart3, TrendingUp } from 'lucide-react';

interface MarketSizingProps {
  marketSizing: MarketSizingType;
}

const MarketSizing: React.FC<MarketSizingProps> = ({ marketSizing }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Market Sizing</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <PieChart className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="ml-2 font-semibold text-blue-800">Total Addressable Market (TAM)</h3>
          </div>
          <p className="text-2xl font-bold text-blue-900">{marketSizing.totalAddressableMarket}</p>
          <p className="text-sm text-blue-700 mt-1">The total market demand for your product/service</p>
        </div>
        
        <div className="bg-teal-50 border border-teal-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-3">
            <div className="bg-teal-100 p-2 rounded-lg">
              <BarChart3 className="h-5 w-5 text-teal-600" />
            </div>
            <h3 className="ml-2 font-semibold text-teal-800">Serviceable Available Market (SAM)</h3>
          </div>
          <p className="text-2xl font-bold text-teal-900">{marketSizing.servicedAvailableMarket}</p>
          <p className="text-sm text-teal-700 mt-1">The portion of TAM targeted by your products and services</p>
        </div>
        
        <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="ml-2 font-semibold text-purple-800">Serviceable Obtainable Market (SOM)</h3>
          </div>
          <p className="text-2xl font-bold text-purple-900">{marketSizing.servicedObtainableMarket}</p>
          <p className="text-sm text-purple-700 mt-1">The portion of SAM that you can realistically capture</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-5 border border-blue-100">
        <div className="flex items-center mb-3">
          <TrendingUp className="h-5 w-5 text-indigo-600" />
          <h3 className="ml-2 font-semibold text-indigo-800">Market Growth Projection</h3>
        </div>
        <p className="text-xl font-bold text-indigo-900">{marketSizing.growthRate} annual growth</p>
        <p className="text-sm text-indigo-700 mt-1">
          Based on current market trends and industry forecasts
        </p>
        
        <div className="mt-4 grid grid-cols-5 gap-1 h-16 items-end">
          {[15, 30, 45, 60, 80].map((height, i) => (
            <div key={i} className="relative group">
              <div 
                className="bg-gradient-to-t from-indigo-400 to-blue-500 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none mb-1 whitespace-nowrap">
                Year {i+1}: {height}% growth
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-1 text-xs text-center text-gray-600 mt-1">
          <div>Year 1</div>
          <div>Year 2</div>
          <div>Year 3</div>
          <div>Year 4</div>
          <div>Year 5</div>
        </div>
      </div>
    </div>
  );
};

export default MarketSizing;