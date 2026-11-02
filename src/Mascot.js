import React from 'react';

// The chat helper: a small caramel mouse wearing a support headset.
export default function Mascot({ className = '', still = false }) {
  return (
    <svg viewBox="0 0 120 120" className={`${className} ${still ? '' : 'mascot-live'}`} aria-hidden="true">
      <g className="m-bob">
        {/* tail + body */}
        <path className="m-tail" d="M84 106 C102 106 110 93 101 84" fill="none" stroke="#C99B74" strokeWidth="3.2" strokeLinecap="round" />
        <ellipse cx="60" cy="106" rx="29" ry="17" fill="#E6C5A0" />
        <ellipse cx="60" cy="110" rx="16" ry="9" fill="#F7E7D2" />
        <ellipse className="m-paw" cx="35" cy="99" rx="7.5" ry="6.5" fill="#EED3B2" />
        <ellipse cx="85" cy="99" rx="7.5" ry="6.5" fill="#EED3B2" />

        <g className="m-head">
          {/* ears */}
          <g className="m-ear-l">
            <circle cx="30" cy="35" r="20" fill="#E2BC93" />
            <circle cx="30" cy="36" r="12" fill="#F3B5AA" />
          </g>
          <g className="m-ear-r">
            <circle cx="90" cy="35" r="20" fill="#E2BC93" />
            <circle cx="90" cy="36" r="12" fill="#F3B5AA" />
          </g>
          {/* head */}
          <ellipse cx="60" cy="65" rx="38" ry="33" fill="#EED3B2" />
          {/* face */}
          <g className="m-eyes">
            <ellipse cx="46" cy="64" rx="5" ry="6.5" fill="#2B211B" />
            <ellipse cx="74" cy="64" rx="5" ry="6.5" fill="#2B211B" />
            <circle cx="47.8" cy="61.6" r="1.9" fill="#fff" />
            <circle cx="75.8" cy="61.6" r="1.9" fill="#fff" />
          </g>
          <ellipse cx="36.5" cy="77" rx="6.5" ry="4" fill="#F09A8C" opacity="0.55" />
          <ellipse cx="83.5" cy="77" rx="6.5" ry="4" fill="#F09A8C" opacity="0.55" />
          <ellipse cx="60" cy="75" rx="4.6" ry="3.4" fill="#D9787A" />
          <path d="M55 80 Q57.5 83.5 60 80 Q62.5 83.5 65 80" fill="none" stroke="#6B4A32" strokeWidth="1.8" strokeLinecap="round" />
          <g stroke="#B98F6C" strokeWidth="1.2" strokeLinecap="round">
            <line x1="50" y1="77" x2="31" y2="72.5" />
            <line x1="50" y1="80" x2="32" y2="83" />
            <line x1="70" y1="77" x2="89" y2="72.5" />
            <line x1="70" y1="80" x2="88" y2="83" />
          </g>
          {/* headset */}
          <path d="M23 62 C24 31 96 31 97 62" fill="none" stroke="#1F4432" strokeWidth="4.5" strokeLinecap="round" />
          <rect x="16" y="54" width="12" height="20" rx="6" fill="#1F4432" />
          <rect x="92" y="54" width="12" height="20" rx="6" fill="#1F4432" />
          <path d="M22 72 Q25 88 42 89" fill="none" stroke="#1F4432" strokeWidth="3" strokeLinecap="round" />
          <circle cx="44.5" cy="89" r="4.2" fill="#D9A429" />
        </g>
      </g>
    </svg>
  );
}
