import React from 'react';

const Recruitment = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative p-8 border border-blue-500/30 rounded-xl bg-black/80 backdrop-blur-sm max-w-md w-full mx-4 transform transition-all duration-300 ease-out">
        <div className="absolute inset-0 bg-blue-500/10 blur-xl"></div>
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 mb-6 relative">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-[ping_1s_ease-in-out_1]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-10 h-10 text-blue-500 animate-[bounce_1s_ease-in-out_1]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7"
                  className="animate-[dash_1s_ease-in-out_forwards]"
                  style={{
                    strokeDasharray: 50,
                    strokeDashoffset: 50
                  }}
                />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">
            Recruitments are closed for now!
          </h2>
          <p className="text-blue-300 text-center mb-6">
            We appreciate your interest. We'll notify once we are on!
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;