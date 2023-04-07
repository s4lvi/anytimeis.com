import React from 'react';

const AnytimeSoftwareLogo = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={`${className}`}
    >
      <circle cx="50" cy="50" r="48" className="stroke-current text-slate-600" strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="40" className="stroke-current text-white" strokeWidth="1" fill="none" />

      {/* Hour marks */}
      <line x1="50" y1="15" x2="50" y2="20" className="stroke-current text-white" strokeWidth="1.5" />
      <line x1="50" y1="80" x2="50" y2="85" className="stroke-current text-white" strokeWidth="1.5" />
      <line x1="15" y1="50" x2="20" y2="50" className="stroke-current text-white" strokeWidth="1.5" />
      <line x1="80" y1="50" x2="85" y2="50" className="stroke-current text-white" strokeWidth="1.5" />

      {/* Clock hands */}
      <line x1="50" y1="50" x2="50" y2="30" className="stroke-current text-white" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="50" x2="70" y2="50" className="stroke-current text-white" strokeWidth="2" strokeLinecap="round" />

      {/* Larger A */}
      <circle cx="50" cy="50" r="26" className="stroke-current text-slate-600" strokeWidth="2" fill="none" />
      <text
        x="50%"
        y="65%"
        textAnchor="middle"
        className="text-white font-light"
        style={{ fontSize: "50px" }}
      >
        A
      </text>

      <text
        x="50%"
        y="85%"
        textAnchor="middle"
        className="text-white font-semibold"
        style={{ fontSize: "12px" }}
      >
        Anytime Software
      </text>
    </svg>
  );
};

export default AnytimeSoftwareLogo;
