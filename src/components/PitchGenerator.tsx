import React, { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react';

interface PitchGeneratorProps {
  pitch: string;
}

const PitchGenerator: React.FC<PitchGeneratorProps> = ({ pitch }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadPitch = () => {
    const element = document.createElement('a');
    const file = new Blob([pitch], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'startup-pitch.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Investor Pitch</h2>
        <div className="flex space-x-2">
          <button 
            onClick={copyToClipboard}
            className="flex items-center px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
          >
            {copied ? <Check className="h-4 w-4 mr-1 text-green-600" /> : <Copy className="h-4 w-4 mr-1" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button 
            onClick={downloadPitch}
            className="flex items-center px-3 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors duration-200"
          >
            <Download className="h-4 w-4 mr-1" />
            Download
          </button>
        </div>
      </div>
      
      <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 prose max-w-none">
        {pitch.split('\n\n').map((paragraph, index) => (
          <p key={index} className={index === 0 ? "font-medium" : ""}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default PitchGenerator;