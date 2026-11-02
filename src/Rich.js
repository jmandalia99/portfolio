import React from 'react';

// Turns "**bold**" and "[text](link)" inside site text into real formatting.
export function parseRich(text = '') {
  const out = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({ type: 't', text: text.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ type: 'b', text: m[1] });
    else out.push({ type: 'a', text: m[2], href: m[3] });
    last = re.lastIndex;
  }
  if (last < text.length) out.push({ type: 't', text: text.slice(last) });
  return out;
}

export const richLength = (text) => parseRich(text).reduce((n, s) => n + s.text.length, 0);

export function Rich({ text, limit, strong = 'font-semibold text-ink', link = 'font-semibold text-forest-deep underline decoration-forest/30 underline-offset-2 hover:decoration-forest' }) {
  let left = limit === undefined ? Infinity : limit;
  return parseRich(text).map((s, i) => {
    if (left <= 0) return null;
    const t = s.text.length > left ? s.text.slice(0, left) : s.text;
    left -= t.length;
    if (s.type === 'b') return <strong key={i} className={strong}>{t}</strong>;
    if (s.type === 'a') {
      const external = /^https?:/.test(s.href) || s.href.endsWith('.pdf');
      return <a key={i} href={s.href} className={link} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{t}</a>;
    }
    return <React.Fragment key={i}>{t}</React.Fragment>;
  });
}
