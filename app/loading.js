import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Modern SVG spinner with dash animation */}
        <svg 
          className="w-14 h-14 text-indigo-600 animate-rotate"
          viewBox="0 0 50 50"
        >
          <circle
            className="stroke-current"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1, 200"
            strokeDashoffset="0"
          />
        </svg>
      </div>
    </div>
  );
}