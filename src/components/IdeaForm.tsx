import React, { useState } from 'react';
import { ChevronRight, HelpCircle } from 'lucide-react';
import { IdeaData } from '../types';

interface IdeaFormProps {
  onSubmit: (data: IdeaData) => void;
  isLoading: boolean;
}

const industries = [
  "Technology", "E-commerce", "Healthcare", "Education",
  "Finance", "Food & Beverage", "Entertainment", "Real Estate",
  "Travel", "Manufacturing", "Energy", "Other"
];

const revenueModels = [
  "Subscription", "Freemium", "Marketplace", "E-commerce",
  "Advertising", "Licensing", "Service fees", "Other"
];

const IdeaForm: React.FC<IdeaFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<IdeaData>({
    title: '',
    description: '',
    industry: '',
    targetAudience: '',
    uniqueSellingPoint: '',
    competitors: '',
    revenueModel: ''
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const steps = [
    {
      title: "Basic Information",
      fields: (
        <>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Startup Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., TechNova, GreenEats"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Idea Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your startup idea in a few sentences..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select an industry</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
        </>
      )
    },
    {
      title: "Market & Competition",
      fields: (
        <>
          <div className="mb-4">
            <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-1">
              Target Audience
            </label>
            <textarea
              id="targetAudience"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              placeholder="Describe your ideal customer (age, location, interests, pain points)..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="competitors" className="block text-sm font-medium text-gray-700 mb-1">
              Competitors
            </label>
            <textarea
              id="competitors"
              name="competitors"
              value={formData.competitors}
              onChange={handleChange}
              placeholder="List main competitors and how you differ from them..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              required
            />
          </div>
        </>
      )
    },
    {
      title: "Value Proposition",
      fields: (
        <>
          <div className="mb-4">
            <label htmlFor="uniqueSellingPoint" className="block text-sm font-medium text-gray-700 mb-1">
              Unique Selling Point
            </label>
            <textarea
              id="uniqueSellingPoint"
              name="uniqueSellingPoint"
              value={formData.uniqueSellingPoint}
              onChange={handleChange}
              placeholder="What makes your idea special? Why would customers choose you over alternatives?"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="revenueModel" className="block text-sm font-medium text-gray-700 mb-1">
              Revenue Model
            </label>
            <select
              id="revenueModel"
              name="revenueModel"
              value={formData.revenueModel}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a revenue model</option>
              {revenueModels.map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>
        </>
      )
    },
    {
      title: "Review & Submit",
      fields: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">{formData.title || "Your Startup"}</h3>
            <p className="text-gray-600 text-sm mb-2">{formData.description || "No description provided"}</p>
            
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <span className="block text-gray-500">Industry</span>
                <span className="font-medium">{formData.industry || "Not specified"}</span>
              </div>
              <div>
                <span className="block text-gray-500">Revenue Model</span>
                <span className="font-medium">{formData.revenueModel || "Not specified"}</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-600">
            Please review your information above. Click submit to analyze your startup idea.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Validate Your Startup Idea</h2>
      
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  currentStep >= index 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </div>
              
              {index < steps.length - 1 && (
                <div className={`h-1 w-12 sm:w-16 md:w-24 ${
                  currentStep > index ? 'bg-blue-600' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-2 flex justify-between text-sm text-gray-600">
          {steps.map((step, index) => (
            <span key={index} className={`${
              currentStep === index ? 'text-blue-600 font-medium' : ''
            }`}>
              {step.title}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          {steps[currentStep].fields}
        </div>

        <div className="flex justify-between mt-8">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200"
            >
              Back
            </button>
          ) : (
            <div></div>
          )}

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center"
            >
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-2 bg-blue-600 text-white rounded-md flex items-center ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
              } transition-colors duration-200`}
            >
              {isLoading ? 'Analyzing...' : 'Analyze My Idea'}
              {!isLoading && <ChevronRight className="ml-1 h-4 w-4" />}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default IdeaForm;