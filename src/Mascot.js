import React, { useId } from 'react';

// The chat helper: a round, colourful little bird wearing headphones.
export default function Mascot({ className = '', still = false }) {
  const uid = useId().replace(/:/g, '');
  const belly = `belly${uid}`;
  const body = `body${uid}`;
  return (
    <svg viewBox="0 0 120 120" className={`${className} ${still ? '' : 'mascot-live'}`} aria-hidden="true">
      <defs>
        <linearGradient id={belly} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FCE07A" />
          <stop offset="1" stopColor="#F4A23B" />
        </linearGradient>
        <linearGradient id={body} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#36C2B0" />
          <stop offset="1" stopColor="#1E8E86" />
        </linearGradient>
      </defs>

      {/* a music note drifting up from the headphones */}
      {!still && (
        <g className="m-note" fill="#E4572E">
          <ellipse cx="104" cy="30" rx="4.2" ry="3.2" transform="rotate(-20 104 30)" />
          <path d="M107.6 29 V15 l6 2.4" fill="none" stroke="#E4572E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      <g className="m-bob">
        {/* tail feathers */}
        <g className="m-tail">
          <ellipse cx="94" cy="98" rx="17" ry="5.5" transform="rotate(28 94 98)" fill="#2F6FB5" />
          <ellipse cx="92" cy="103" rx="16" ry="5.2" transform="rotate(44 92 103)" fill="#E4572E" />
          <ellipse cx="88" cy="106" rx="14" ry="5" transform="rotate(62 88 106)" fill="#F6C945" />
        </g>
        {/* feet */}
        <g stroke="#F08A24" strokeWidth="2.6" strokeLinecap="round" fill="none">
          <path d="M51 104 v6 M47 111 l4 -1.5 l4 1.5" />
          <path d="M69 104 v6 M65 111 l4 -1.5 l4 1.5" />
        </g>

        <g className="m-head">
          {/* crest */}
          <g className="m-crest">
            <ellipse cx="54" cy="27" rx="4" ry="9" transform="rotate(-22 54 27)" fill="#E86FA0" />
            <ellipse cx="60" cy="24" rx="4.2" ry="10" fill="#F6C945" />
            <ellipse cx="66" cy="27" rx="4" ry="9" transform="rotate(22 66 27)" fill="#E4572E" />
          </g>
          {/* body */}
          <ellipse cx="60" cy="70" rx="36" ry="38" fill={`url(#${body})`} />
          <ellipse cx="60" cy="84" rx="24" ry="23" fill={`url(#${belly})`} />
          {/* wings */}
          <g>
            <ellipse cx="27" cy="80" rx="10" ry="19" transform="rotate(18 27 80)" fill="#3E9B5F" />
            <ellipse cx="24" cy="90" rx="6.5" ry="9" transform="rotate(18 24 90)" fill="#2F6FB5" />
          </g>
          <g className="m-wing">
            <ellipse cx="93" cy="80" rx="10" ry="19" transform="rotate(-18 93 80)" fill="#3E9B5F" />
            <ellipse cx="96" cy="90" rx="6.5" ry="9" transform="rotate(-18 96 90)" fill="#2F6FB5" />
          </g>
          {/* face */}
          <g className="m-eyes">
            <circle cx="47" cy="57" r="9" fill="#fff" />
            <circle cx="73" cy="57" r="9" fill="#fff" />
            <circle cx="48.5" cy="58" r="5.6" fill="#1E1A17" />
            <circle cx="71.5" cy="58" r="5.6" fill="#1E1A17" />
            <circle cx="50.3" cy="55.6" r="2" fill="#fff" />
            <circle cx="73.3" cy="55.6" r="2" fill="#fff" />
          </g>
          <ellipse cx="36" cy="69" rx="6" ry="3.8" fill="#F28CA8" opacity="0.75" />
          <ellipse cx="84" cy="69" rx="6" ry="3.8" fill="#F28CA8" opacity="0.75" />
          <path d="M54 66 Q60 62 66 66 Q60 77 54 66 Z" fill="#F08A24" />
          <path d="M55.5 67.5 Q60 70 64.5 67.5" fill="none" stroke="#C9661A" strokeWidth="1.2" strokeLinecap="round" />
          {/* headphones */}
          <path d="M23 60 C22 22 98 22 97 60" fill="none" stroke="#1F4432" strokeWidth="5" strokeLinecap="round" />
          <rect x="14" y="48" width="15" height="24" rx="7.5" fill="#E4572E" />
          <rect x="91" y="48" width="15" height="24" rx="7.5" fill="#E4572E" />
          <rect x="24" y="52" width="5" height="16" rx="2.5" fill="#F6C945" />
          <rect x="91" y="52" width="5" height="16" rx="2.5" fill="#F6C945" />
        </g>
      </g>
    </svg>
  );
}
