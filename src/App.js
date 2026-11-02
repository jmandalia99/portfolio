import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Lenis from 'lenis';
import {
  ArrowDown, ArrowUpRight, Mail, Linkedin, Github, FileText, X, ChevronDown,
  MapPin, Award, Trophy, GraduationCap, Mountain, Compass, Image as ImageIcon, Film,
  Video, Sparkles, Shield, Target, Microscope, Car, Cloud, Cpu, Plus, Copy, Check, RotateCw,
} from 'lucide-react';
import {
  site, hero, numbers, about, journey, research, projects, skills, education,
  certifications, recognition, beyond, bharatanatyam,
} from './content';
import { Rich } from './Rich';
import Chat from './Chat';

const NAV = [
  ['journey', 'Journey'],
  ['research', 'Research'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['certifications', 'Certifications'],
  ['beyond', 'Beyond Work'],
  ['contact', 'Contact'],
];

// Height of the fixed header, so in-page links stop just below it.
const headerOffset = () => {
  const h = document.querySelector('header');
  return -((h ? h.offsetHeight : 72) + 12);
};
// Bold words on dark green panels
const ON_DARK = 'font-semibold text-white';

// Sends an event to Google Analytics (see README for what each one means).
const track = (name, params = {}) => {
  try { if (window.gtag) window.gtag('event', name, params); } catch (e) { /* ignore */ }
};

// Fires section_<id> once per visit when a visitor scrolls a section into view.
function useSectionTracking() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const seen = new Set();
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting && !seen.has(e.target.id)) { seen.add(e.target.id); track(`section_${e.target.id}`); }
    }), { threshold: 0.25 });
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
}

/* ─────────────── hooks ─────────────── */

// Smooth, eased wheel scrolling. Skipped for people who prefer reduced motion.
function useSmoothScroll() {
  useEffect(() => {
    if (reducedMotion()) return undefined;
    const lenis = new Lenis({ lerp: 0.1 });
    window.__lenis = lenis;
    let id = requestAnimationFrame(function raf(t) { lenis.raf(t); id = requestAnimationFrame(raf); });
    // in-page links (#journey, #top …) glide instead of jumping
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute('href');
      const el = hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(hash === '#top' ? 0 : el, { offset: headerOffset(), duration: 1.2 });
    };
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('click', onClick); cancelAnimationFrame(id); lenis.destroy(); window.__lenis = null; };
  }, []);
}

// Lock the page behind menus and pop-ups (works with smooth scrolling too).
function lockScroll(on) {
  document.body.style.overflow = on ? 'hidden' : '';
  const l = window.__lenis;
  if (l) { if (on) l.stop(); else l.start(); }
}

function useRevealAll() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return undefined; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function useInView(ref, threshold = 0.4) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return undefined;
    if (!('IntersectionObserver' in window)) { setSeen(true); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, seen, threshold]);
  return seen;
}

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────── small pieces ─────────────── */

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 group" aria-label="Jinal Mandalia — home">
      <svg viewBox="0 0 64 64" className="w-9 h-9 transition-transform duration-500 group-hover:rotate-[-6deg]" aria-hidden="true">
        <g fill="none" stroke="#9A6E3A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M26 10v32c0 8-5 12-12 10" />
          <path d="M26 44V15l10 21 10-21v36" />
        </g>
      </svg>
      <span className="font-serif text-[19px] text-[#8A6438] tracking-[0.01em]">Jinal Mandalia</span>
    </a>
  );
}

function SectionHead({ kicker, title, children, center }) {
  return (
    <div className={`reveal mb-12 md:mb-14 ${center ? 'text-center mx-auto' : ''} max-w-3xl`}>
      <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-amber mb-3">{kicker}</p>
      <h2 className="font-serif font-bold text-ink text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] tracking-[-0.01em]">{title}</h2>
      {children && <p className="mt-4 text-[17px] leading-relaxed text-body">{children}</p>}
    </div>
  );
}

function Button({ href, onClick, children, variant = 'solid', external, ...rest }) {
  const base = 'inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-parchment';
  const styles = variant === 'solid'
    ? 'bg-forest-deep text-white shadow-[0_10px_24px_-10px_rgba(31,68,50,.7)] hover:bg-forest hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_rgba(31,68,50,.7)]'
    : 'bg-paper/70 text-ink border border-line hover:border-forest/40 hover:-translate-y-0.5 hover:bg-paper';
  return (
    <a href={href} onClick={onClick} className={`${base} ${styles}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  );
}

/* ─────────────── background ─────────────── */

function LivingBackground() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return undefined;
    let tx = window.innerWidth * 0.68, ty = window.innerHeight * 0.42, cx = tx, cy = ty, raf = 0, running = false;
    const loop = () => {
      cx += (tx - cx) * 0.1; cy += (ty - cy) * 0.1;
      el.style.setProperty('--mx', `${cx}px`);
      el.style.setProperty('--my', `${cy}px`);
      el.style.setProperty('--rx', `${15 + (cx / window.innerWidth) * 70}%`);
      el.style.setProperty('--ry', `${12 + (cy / window.innerHeight) * 76}%`);
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) raf = requestAnimationFrame(loop); else running = false;
    };
    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!running) { running = true; raf = requestAnimationFrame(loop); }
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={ref} className="bg-layer" aria-hidden="true">
      <div className="blob blob-gold" />
      <div className="blob blob-forest" />
      <div className="blob blob-sky" />
      <div className="ripples" />
      <div className="spotlight hidden md:block" />
      <div className="grain" />
    </div>
  );
}

/* ─────────────── header ─────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const barRef = useRef(null);
  const rowRef = useRef(null);

  // background after the first bit of scrolling + reading-progress line
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
        if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['top', ...NAV.map(([id]) => id)].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  // phones: keep the current section's chip in view
  useEffect(() => {
    const row = rowRef.current;
    if (!row || row.offsetParent === null) return;
    const a = row.querySelector(`[data-id="${active}"]`);
    row.scrollTo({ left: a ? a.offsetLeft - row.clientWidth / 2 + a.offsetWidth / 2 : 0, behavior: 'smooth' });
  }, [active]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${scrolled ? 'bg-parchment/85 backdrop-blur-xl border-b border-line/70' : 'border-b border-transparent'}`}>
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 h-[60px] lg:h-[72px] flex items-center justify-between gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center" aria-label="Main">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`}
              className={`relative px-2.5 xl:px-3.5 py-2 text-[14px] xl:text-[14.5px] font-medium transition-colors duration-300 ${active === id ? 'text-forest-deep' : 'text-body hover:text-ink'}`}>
              {label}
              <span className={`absolute left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 -bottom-0.5 h-[2px] rounded-full bg-aspen transition-transform duration-500 origin-left ${active === id ? 'scale-x-100' : 'scale-x-0'}`} />
            </a>
          ))}
        </nav>
      </div>
      <nav ref={rowRef} className="lg:hidden flex gap-1.5 overflow-x-auto no-scrollbar px-5 md:px-10 pb-2.5" aria-label="Sections">
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} data-id={id}
            className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] font-medium border transition-colors duration-300 ${active === id ? 'bg-forest-deep text-white border-forest-deep' : 'bg-paper/80 text-body border-line/80'}`}>
            {label}
          </a>
        ))}
      </nav>
      <span ref={barRef} aria-hidden="true" className="absolute left-0 right-0 bottom-[-1px] h-[2px] bg-gradient-to-r from-aspen to-amber origin-left" style={{ transform: 'scaleX(0)' }} />
    </header>
  );
}

/* ─────────────── hero ─────────────── */

function Hero() {
  const imgRef = useRef(null);
  const cardRef = useRef(null);
  const cueRef = useRef(null);
  const [flipped, setFlipped] = useState(false);
  const flip = () => setFlipped((f) => { if (!f) track('about_open'); return !f; });

  useEffect(() => {
    if (reducedMotion()) return undefined;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const p = Math.min(window.scrollY / 700, 1);
        if (imgRef.current) imgRef.current.style.transform = `scale(${1.02 + p * 0.07}) translateY(${p * 8}px)`;
        if (cueRef.current) cueRef.current.style.opacity = String(Math.max(0, 1 - window.scrollY / 160));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  const tilt = (e) => {
    if (reducedMotion() || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cardRef.current.style.transform = `perspective(1100px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
  };
  const untilt = () => { if (cardRef.current) cardRef.current.style.transform = ''; };

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center pt-32 pb-20 lg:pt-24">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 w-full grid lg:grid-cols-[1.32fr_1fr] gap-14 lg:gap-12 items-center">
        <div>
          <div className="reveal flex flex-wrap gap-2.5 mb-8 max-w-[520px]">
            {hero.tags.map((t) => (
              <span key={t} className="px-3 md:px-3.5 py-1.5 rounded-full border border-line bg-paper/80 text-[12.5px] md:text-[13.5px] text-body">{t}</span>
            ))}
          </div>
          <h1 className="reveal font-serif font-bold text-ink leading-[1.04] tracking-[-0.02em] text-[clamp(2.6rem,4.15vw,3.95rem)] lg:whitespace-nowrap" style={{ '--d': '80ms' }}>
            Hi, I’m Jinal Mandalia.
          </h1>
          <p className="reveal mt-7 text-[clamp(1.15rem,1.6vw,1.4rem)] leading-[1.5] text-[#3E3A35] max-w-[34rem]" style={{ '--d': '160ms' }}>
            <Rich text={hero.headline} />
          </p>
          <p className="reveal mt-5 text-[16px] leading-[1.7] text-body max-w-[33rem]" style={{ '--d': '220ms' }}>
            <Rich text={hero.intro} />
          </p>
          <div className="reveal mt-9 flex flex-wrap gap-3.5" style={{ '--d': '300ms' }}>
            <Button href="#journey">Explore My Journey <ArrowDown size={17} /></Button>
            <Button href={site.resume} variant="ghost" external onClick={() => track('resume_open', { from: 'hero' })}>View My Resume</Button>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-[440px] lg:max-w-none" style={{ '--d': '200ms' }} onMouseMove={tilt} onMouseLeave={untilt}>
          <div ref={cardRef} className="relative transition-transform duration-500 ease-out will-change-transform" style={{ perspective: '1600px' }}>
            <div className="absolute -inset-4 md:-inset-5 rounded-[36px] bg-gradient-to-br from-[#EFE2CB] via-[#E7E2D2] to-[#CFD8C8] shadow-lift" />
            <div className={`flipper relative aspect-[3/4] ${flipped ? 'is-flipped' : ''}`}>
              {/* front: the photo — click it to read about me */}
              <button type="button" onClick={flip} aria-expanded={flipped} aria-controls="about-card" tabIndex={flipped ? -1 : 0}
                className={`face group/photo absolute inset-0 rounded-[26px] overflow-hidden bg-[#cfd8c8] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-4 focus-visible:ring-offset-parchment ${flipped ? 'pointer-events-none' : ''}`}>
                <img ref={imgRef} src={site.photo} alt="Jinal Mandalia among golden aspens on a mountain trail"
                  className="w-full h-full object-cover object-[50%_45%] will-change-transform" style={{ transform: 'scale(1.02)' }} />
                <span className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-3.5 py-2 text-[13.5px] font-semibold text-ink shadow-card transition-all duration-300 group-hover/photo:bg-paper group-hover/photo:-translate-y-0.5">
                  <RotateCw size={14} className="transition-transform duration-500 group-hover/photo:rotate-180" /> About me
                </span>
              </button>
              {/* back: about me */}
              <div id="about-card" role="button" tabIndex={flipped ? 0 : -1} aria-hidden={!flipped} aria-label="About me — click to see the photo again"
                onClick={flip} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } }}
                className={`face face-back absolute inset-0 rounded-[26px] bg-paper border border-line p-6 md:p-8 flex flex-col cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forest ${flipped ? '' : 'pointer-events-none'}`}>
                <div className="flex-1 flex flex-col justify-center">
                <p className="text-[12.5px] font-semibold tracking-[0.18em] uppercase text-amber">About me</p>
                <h2 className="mt-2 font-serif font-bold text-ink text-[23px] md:text-[27px] lg:text-[30px] leading-tight">{about.title}</h2>
                <ul className="mt-4 md:mt-5 lg:mt-6 space-y-2.5 md:space-y-3 lg:space-y-4">
                  {about.lines.map((l) => (
                    <li key={l} className="grid grid-cols-[16px_1fr] text-[14px] md:text-[15.5px] lg:text-[16.5px] leading-[1.55] text-body">
                      <span className="mt-[8px] w-[7px] h-[7px] rounded-[2px] bg-aspen rotate-45" />
                      <span><Rich text={l} /></span>
                    </li>
                  ))}
                </ul>
                <dl className="hidden sm:grid grid-cols-2 gap-2.5 mt-5 lg:mt-7">
                  {about.glance.map(({ k, v }) => (
                    <div key={k} className="rounded-xl bg-parchment border border-line/80 px-3 py-2.5">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">{k}</dt>
                      <dd className="text-[13.5px] font-semibold text-ink leading-snug mt-0.5">{v}</dd>
                    </div>
                  ))}
                </dl>
                </div>
                <span className="pt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-forest-deep">
                  <RotateCw size={14} /> Back to the photo
                </span>
              </div>
            </div>
            <div className={`absolute -left-4 md:-left-9 bottom-8 bg-paper rounded-2xl shadow-lift px-4 py-3 flex items-center gap-3 border border-line/60 transition-all duration-500 ${flipped ? 'opacity-0 translate-y-2 pointer-events-none' : ''}`}>
              <span className="w-9 h-9 rounded-full bg-forest-soft text-forest-deep grid place-items-center"><MapPin size={17} /></span>
              <span>
                <span className="block text-[12.5px] text-muted leading-none mb-1">Based in</span>
                <span className="block text-[15px] font-semibold text-ink leading-none">{site.location}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <a ref={cueRef} href="#numbers" aria-label="Scroll down"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2.5 text-[11px] font-semibold tracking-[0.28em] uppercase text-muted hover:text-forest-deep transition-colors duration-300">
        Scroll
        <span className="relative block w-px h-11 bg-[#D9CDB9] overflow-hidden"><span className="cue-dot absolute left-0 top-0 w-px h-4 bg-forest" /></span>
      </a>
    </section>
  );
}

/* ─────────────── numbers ─────────────── */

function CountUp({ value, decimals = 0, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const seen = useInView(ref, 0.6);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return undefined;
    if (reducedMotion()) { setN(value); return undefined; }
    let raf; const t0 = performance.now(); const dur = 1500;
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);
  const shown = n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return <span ref={ref} className="tabular">{prefix}{shown}{suffix}</span>;
}

function Numbers() {
  return (
    <section id="numbers" className="relative py-16 md:py-20">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <p className="reveal text-[13px] font-semibold tracking-[0.18em] uppercase text-amber mb-6">By the numbers</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {numbers.map((s, i) => (
            <div key={s.label} className={`reveal group rounded-[22px] bg-paper/90 border border-line/80 p-5 md:p-6 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-500 ${i === numbers.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`} style={{ '--d': `${i * 80}ms` }}>
              <div className="font-serif font-bold text-ink text-[clamp(1.9rem,2.6vw,2.5rem)] leading-none tracking-[-0.02em]">
                <CountUp {...s} />
              </div>
              <div className="mt-3 h-[3px] w-8 rounded-full bg-aspen transition-all duration-500 group-hover:w-14" />
              <p className="mt-3 text-[14px] leading-snug text-body">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── journey ─────────────── */

function JourneyItem({ item, open, onToggle, index }) {
  const id = `journey-${index}`;
  return (
    <li className="reveal relative grid grid-cols-[52px_1fr] md:grid-cols-[150px_1fr] gap-4 md:gap-8" style={{ '--d': `${index * 50}ms` }}>
      {/* rail */}
      <div className="relative">
        <span className={`block font-serif font-bold tabular leading-none text-[20px] md:text-[56px] tracking-[-0.03em] transition-colors duration-500 pt-7 md:pt-5 ${open ? 'text-amber' : 'text-[#A88A62]'}`}>{item.year}</span>
        <span className={`absolute right-[-13.5px] md:right-[-21.5px] top-[33px] md:top-[34px] w-[11px] h-[11px] rounded-full border-2 transition-all duration-500 ${open ? 'bg-aspen border-aspen scale-125' : 'bg-parchment border-[#A88A62]'}`} />
      </div>
      {/* card */}
      <div className={`mb-5 rounded-[22px] border transition-all duration-500 ${open ? 'bg-paper border-line shadow-lift' : 'bg-paper/60 border-line/70 shadow-card hover:bg-paper hover:-translate-y-0.5'}`}>
        <button onClick={onToggle} aria-expanded={open} aria-controls={id}
          className="w-full text-left px-4 md:px-7 py-5 md:py-6 grid grid-cols-[1fr_auto] gap-x-4 items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-[22px]">
          <span className="min-w-0">
            <span className="block text-[12.5px] font-semibold uppercase tracking-[0.14em] text-amber mb-2">{item.theme}</span>
            <span className="block font-serif font-semibold text-ink text-[20px] md:text-[23px] leading-snug">{item.role}</span>
            <span className="block text-[15.5px] text-forest-deep font-medium mt-1">{item.org}</span>
            <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-muted tabular">
              <span>{item.period}</span><span className="w-1 h-1 rounded-full bg-[#C9BBA6]" /><span>{item.place}</span>
            </span>
          </span>
          <span className={`mt-1 w-9 h-9 rounded-full grid place-items-center border transition-all duration-500 ${open ? 'bg-forest-deep border-forest-deep text-white rotate-180' : 'border-line text-body'}`}>
            <ChevronDown size={18} />
          </span>
        </button>
        <div id={id} className={`acc ${open ? 'open' : ''}`}>
          <div>
            <div className="px-4 md:px-7 pb-7">
              <p className="text-[16px] leading-[1.7] text-body"><Rich text={item.summary} /></p>
              {item.stats && (
                <div className={`mt-5 grid gap-2.5 ${item.stats.length > 3 ? 'grid-cols-2 sm:grid-cols-4 max-w-xl' : 'grid-cols-3 max-w-md'}`}>
                  {item.stats.map(([v, l]) => (
                    <div key={l} className="rounded-xl bg-amber-soft/60 border border-amber/20 px-3 py-3 text-center">
                      <div className="font-serif font-bold text-ink text-[19px] leading-none tabular">{v}</div>
                      <div className="text-[12px] text-body mt-1.5 leading-tight">{l}</div>
                    </div>
                  ))}
                </div>
              )}
              {item.points.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                  {item.points.map((p) => (
                    <li key={p} className="grid grid-cols-[18px_1fr] text-[15.5px] leading-[1.6] text-body">
                      <span className="mt-[9px] w-[7px] h-[7px] rounded-[2px] bg-forest/70 rotate-45" />
                      <span><Rich text={p} /></span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tools.map((t) => (
                  <span key={t} className="text-[12.5px] px-2.5 py-1 rounded-md bg-forest-soft/70 text-forest-deep border border-forest/10">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

function Journey() {
  const [open, setOpen] = useState(() => new Set());
  const allOpen = open.size === journey.length;
  const toggle = (i) => setOpen((s) => { const n = new Set(s); if (n.has(i)) n.delete(i); else n.add(i); return n; });
  return (
    <section id="journey" className="relative py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead kicker="My journey" title="From the test bench to the release plan">
            Newest first — open any chapter for the details.
          </SectionHead>
          <button onClick={() => setOpen(allOpen ? new Set() : new Set(journey.map((_, i) => i)))}
            className="reveal mb-14 text-[14px] font-semibold text-forest-deep border border-forest/25 rounded-full px-4 py-2 hover:bg-forest-soft transition-colors">
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
        <ol className="relative">
          <span className="absolute left-[60px] md:left-[166px] top-6 bottom-10 w-px bg-gradient-to-b from-[#C9B591] via-[#C9B591] to-transparent" aria-hidden="true" />
          {journey.map((item, i) => (
            <JourneyItem key={item.period + item.role} item={item} index={i} open={open.has(i)} onToggle={() => { if (!open.has(i)) track('journey_open', { role: `${item.role} — ${item.org}` }); toggle(i); }} />
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────── research ─────────────── */

const STAGE_ICON = { image: ImageIcon, short: Film, long: Video };

function Research() {
  return (
    <section id="research" className="relative py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <SectionHead kicker="Research · M.S. thesis" title={research.title} />

        <div className="reveal rounded-[30px] bg-paper/90 border border-line shadow-lift overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_1.3fr]">
            <div className="p-7 md:p-10 bg-gradient-to-br from-forest-deep to-[#284F37] text-white relative overflow-hidden">
              <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full border border-white/10" />
              <p className="relative text-[12.5px] uppercase tracking-[0.16em] text-aspen font-semibold">In plain words</p>
              <p className="relative mt-4 font-serif text-[20px] md:text-[22px] leading-[1.55] text-white/90"><Rich text={research.plain} strong={ON_DARK} /></p>
              <p className="relative mt-7 text-[13.5px] leading-relaxed text-white/65">
                <span className="text-white/85 font-semibold">Thesis:</span> “{research.official}”
              </p>
              <p className="relative mt-2 text-[13.5px] text-white/65">{research.meta}</p>
            </div>

            <div className="p-5 md:p-8 flex flex-col gap-3">
              {research.stages.map((st, i) => {
                const Icon = STAGE_ICON[st.key];
                return (
                  <div key={st.key} className="reveal group rounded-2xl border border-line bg-parchment/60 p-5 grid sm:grid-cols-[170px_1fr] gap-3 sm:gap-6 sm:items-center hover:bg-paper hover:shadow-card transition-all duration-500" style={{ '--d': `${120 + i * 90}ms` }}>
                    <div>
                      <span className="flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] font-semibold text-amber"><Icon size={15} /> {st.label}</span>
                      <div className="mt-2 font-serif font-bold text-[30px] md:text-[34px] text-ink leading-none">{st.big}</div>
                      <div className="mt-1 text-[13.5px] font-medium text-forest-deep">{st.unit}</div>
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-[15.5px]">{st.lever}</p>
                      <p className="mt-1 text-[14.5px] leading-[1.6] text-body"><Rich text={st.note} /></p>
                    </div>
                  </div>
                );
              })}
              <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{research.honest}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── projects ─────────────── */

const PROJECT_ICON = { shield: Shield, target: Target, microscope: Microscope, car: Car, sparkles: Sparkles, cloud: Cloud, cpu: Cpu };
const PROJECT_TABS = [
  ['all', 'All'],
  ['ai', 'AI & Research'],
  ['auto', 'Automotive & Embedded'],
  ['cloud', 'GenAI & Cloud'],
];
const PROJECT_TINT = {
  ai: 'from-[#E3EBDF] via-[#EEF1E6] to-[#F7F1E5] text-forest-deep',
  auto: 'from-[#F6E7C1] via-[#F8EDD5] to-[#FBF4E6] text-bark',
  cloud: 'from-[#E1EAF4] via-[#ECF0F3] to-[#F8F4EC] text-sky',
};

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    lockScroll(true);
    if (closeRef.current) closeRef.current.focus();
    return () => { document.removeEventListener('keydown', onKey); lockScroll(false); };
  }, [project, onClose]);
  if (!project) return null;
  const Icon = PROJECT_ICON[project.icon] || Sparkles;
  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="project-title">
      <div className="absolute inset-0 bg-[#1C1A17]/40 backdrop-blur-sm fade-in" onClick={onClose} />
      <div data-lenis-prevent className="relative w-full sm:max-w-[680px] max-h-[88vh] overflow-y-auto rounded-t-[28px] sm:rounded-[28px] bg-paper shadow-lift pop-in">
        <div className={`relative px-6 sm:px-9 pt-8 pb-7 bg-gradient-to-br ${PROJECT_TINT[project.type]}`}>
          <button ref={closeRef} onClick={onClose} aria-label="Close"
            className="absolute right-5 top-5 w-10 h-10 rounded-full bg-paper/80 text-ink grid place-items-center hover:bg-paper transition-colors"><X size={19} /></button>
          <span className="w-12 h-12 rounded-2xl bg-paper/80 grid place-items-center shadow-card"><Icon size={22} /></span>
          <p className="mt-5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-amber">{project.label}</p>
          <h3 id="project-title" className="mt-2 font-serif font-bold text-[26px] sm:text-[30px] leading-tight text-ink pr-8">{project.title}</h3>
          <p className="mt-4 inline-block rounded-lg bg-paper/85 px-3 py-1.5 text-[14.5px] font-semibold text-ink">{project.impact}</p>
        </div>
        <div className="px-6 sm:px-9 py-7">
          <p className="text-[16px] leading-[1.7] text-body"><Rich text={project.short} /></p>
          <ul className="mt-5 space-y-3">
            {project.points.map((pt) => (
              <li key={pt} className="grid grid-cols-[18px_1fr] text-[15.5px] leading-[1.65] text-body">
                <span className="mt-[10px] w-[7px] h-[7px] rounded-[2px] bg-forest/70 rotate-45" />
                <span><Rich text={pt} /></span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => <span key={t} className="text-[12.5px] px-2.5 py-1 rounded-md bg-forest-soft/70 text-forest-deep border border-forest/10">{t}</span>)}
          </div>
          {(project.github || project.paper) && (
            <div className="mt-7 pt-6 border-t border-line flex flex-wrap gap-3">
              {project.github && <Button href={project.github} external onClick={() => track('project_github', { project_name: project.title })}><Github size={16} /> View code</Button>}
              {project.paper && <Button href={project.paper} variant="ghost" external onClick={() => track('project_paper', { project_name: project.title })}><FileText size={16} /> Read the paper</Button>}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

function Projects() {
  const [tab, setTab] = useState('all');
  const [openIdx, setOpenIdx] = useState(null);
  const tabIndex = PROJECT_TABS.findIndex(([k]) => k === tab);
  const list = projects.map((p, i) => ({ ...p, i })).filter((p) => tab === 'all' || p.type === tab);
  const close = React.useCallback(() => setOpenIdx(null), []);
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <SectionHead kicker="Projects" title="Things I’ve built along the way">
          Open any project for the details, code and papers.
        </SectionHead>

        <div className="reveal mb-8">
          <div className="relative grid grid-cols-2 gap-1 sm:gap-0 sm:inline-grid sm:grid-cols-none sm:grid-flow-col sm:auto-cols-fr p-1 rounded-2xl bg-[#F1EADF] border border-line" role="tablist" aria-label="Filter projects">
            <span className="hidden sm:block absolute top-1 bottom-1 left-1 rounded-xl bg-paper shadow-card transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
              style={{ width: `calc((100% - 0.5rem) / ${PROJECT_TABS.length})`, transform: `translateX(${tabIndex * 100}%)` }} />
            {PROJECT_TABS.map(([k, label]) => {
              const n = k === 'all' ? projects.length : projects.filter((p) => p.type === k).length;
              return (
                <button key={k} role="tab" aria-selected={tab === k} onClick={() => { setTab(k); track('project_filter', { filter: label }); }}
                  className={`relative z-10 whitespace-nowrap px-3 sm:px-5 py-2.5 rounded-xl text-[13.5px] sm:text-[14px] font-semibold transition-colors ${tab === k ? 'text-forest-deep bg-paper shadow-card sm:bg-transparent sm:shadow-none' : 'text-muted hover:text-ink'}`}>
                  {label} <span className="ml-1 text-[12px] font-medium opacity-70 tabular">{n}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p, k) => {
            const Icon = PROJECT_ICON[p.icon] || Sparkles;
            return (
              <button key={`${tab}-${p.title}`} onClick={() => { setOpenIdx(p.i); track('project_open', { project_name: p.title }); }}
                className="fade-up group text-left rounded-[24px] bg-paper/90 border border-line/80 shadow-card hover:shadow-lift hover:-translate-y-1.5 transition-all duration-500 flex flex-col overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                style={{ animationDelay: `${k * 60}ms` }}>
                <span className={`relative h-28 bg-gradient-to-br ${PROJECT_TINT[p.type]} overflow-hidden`}>
                  <span className="absolute -right-8 -top-8 w-36 h-36 rounded-full border border-current opacity-[0.12] transition-transform duration-700 group-hover:scale-125" />
                  <span className="absolute -right-2 -top-2 w-24 h-24 rounded-full border border-current opacity-[0.12] transition-transform duration-700 group-hover:scale-125" />
                  <span className="absolute left-6 bottom-5 w-12 h-12 rounded-2xl bg-paper/85 grid place-items-center shadow-card transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"><Icon size={22} /></span>
                  <span className="absolute right-5 bottom-5 text-[12.5px] font-semibold text-ink bg-paper/85 rounded-md px-2.5 py-1">{p.impact}</span>
                </span>
                <span className="p-6 flex flex-col flex-1">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-amber">{p.label}</span>
                  <span className="mt-2 font-serif font-semibold text-[20px] leading-snug text-ink">{p.title}</span>
                  <span className="mt-2 text-[15px] leading-[1.6] text-body"><Rich text={p.short} /></span>
                  <span className="mt-auto pt-5 flex items-center justify-between">
                    <span className="flex gap-1.5 text-muted">
                      {p.github && <Github size={16} aria-label="Code on GitHub" />}
                      {p.paper && <FileText size={16} aria-label="Paper" />}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-forest-deep">
                      Details <span className="w-7 h-7 rounded-full border border-forest/25 grid place-items-center transition-all duration-500 group-hover:bg-forest-deep group-hover:text-white group-hover:rotate-90"><Plus size={15} /></span>
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <ProjectModal project={openIdx === null ? null : projects[openIdx]} onClose={close} />
    </section>
  );
}

/* ─────────────── skills ─────────────── */

function Skills() {
  const [g, setG] = useState(0);
  const group = skills[g];
  return (
    <section id="skills" className="relative py-16 md:py-20">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <SectionHead kicker="Skills & tools" title="What I bring to a program" />
        <div className="reveal rounded-[24px] bg-paper/90 border border-line/80 shadow-card overflow-hidden md:grid md:grid-cols-[310px_1fr]">
          <div className="flex md:flex-col gap-1 p-2 md:p-3 overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-line/80 bg-parchment/60" role="tablist" aria-label="Skill groups">
            {skills.map((x, i) => (
              <button key={x.group} role="tab" aria-selected={g === i} onClick={() => setG(i)}
                className={`shrink-0 text-left flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-[14.5px] font-semibold transition-colors ${g === i ? 'bg-forest-deep text-white' : 'text-body hover:bg-paper'}`}>
                <span className="whitespace-nowrap">{x.group}</span>
                <span className={`text-[12px] tabular ${g === i ? 'text-white/70' : 'text-muted'}`}>{x.items.length}</span>
              </button>
            ))}
          </div>
          <div key={group.group} className="p-5 md:p-7 fade-up" role="tabpanel">
            <div className="flex flex-wrap gap-2">
              {group.items.map((name) => (
                <span key={name} className="text-[14px] px-3 py-[6px] rounded-[7px] border bg-parchment border-line text-body">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── education ─────────────── */

function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <SectionHead kicker="Education" title="From electrical engineering to computer science" />
        <div className="grid md:grid-cols-2 gap-5">
          {education.map((e, i) => (
            <div key={e.degree} className="reveal group relative rounded-[26px] bg-paper/90 border border-line/80 shadow-card p-7 md:p-9 overflow-hidden hover:shadow-lift transition-all duration-500" style={{ '--d': `${i * 80}ms` }}>
              <GraduationCap className="absolute -right-6 -bottom-6 text-forest/[0.06] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6" size={170} />
              <p className="text-[13.5px] text-muted tabular">{e.period}</p>
              <h3 className="mt-2 font-serif font-bold text-[26px] text-ink leading-tight">{e.degree}</h3>
              <p className="mt-1 text-[16px] font-medium text-forest-deep">{e.school}</p>
              <p className="mt-5 inline-block rounded-lg bg-aspen-soft/70 border border-aspen/30 px-3 py-1.5 text-[14.5px] font-semibold text-ink">{e.score}</p>
              <p className="mt-5 text-[15.5px] leading-[1.65] text-body max-w-md"><Rich text={e.note} /></p>
              {e.focus && (
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {e.focus.map((f) => <span key={f} className="text-[13px] px-2.5 py-1 rounded-md bg-forest-soft/70 text-forest-deep border border-forest/10">{f}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── certifications + recognition ─────────────── */

function Certifications() {
  return (
    <section id="certifications" className="relative py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <SectionHead kicker="Certifications" title="Always learning" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => {
            const Tag = c.link ? 'a' : 'div';
            return (
              <Tag key={c.name} {...(c.link ? { href: c.link, target: '_blank', rel: 'noopener noreferrer', onClick: () => track('certificate_open', { certificate: c.name }) } : {})}
                className={`reveal group rounded-[20px] bg-paper/90 border border-line/80 p-6 shadow-card transition-all duration-500 flex gap-4 ${c.link ? 'hover:shadow-lift hover:-translate-y-1 cursor-pointer' : ''}`}
                style={{ '--d': `${i * 60}ms` }}>
                <span className="shrink-0 w-11 h-11 rounded-xl bg-forest-soft text-forest-deep grid place-items-center"><Award size={20} /></span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-start justify-between gap-3">
                    <span className="font-semibold text-[16px] text-ink leading-snug">{c.name}</span>
                    {c.link && <ArrowUpRight size={18} className="shrink-0 text-muted transition-all group-hover:text-forest-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                  </span>
                  <span className="block mt-1 text-[14px] text-muted leading-snug">{c.by}</span>
                  {c.status && <span className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-amber bg-amber-soft/70 rounded-md px-2 py-1"><Sparkles size={13} /> {c.status}</span>}
                </span>
              </Tag>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="reveal mb-7 max-w-3xl">
            <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-amber mb-3">Recognition</p>
            <h3 className="font-serif font-bold text-ink text-[clamp(1.7rem,2.8vw,2.3rem)] leading-tight">Moments I’m proud of</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {recognition.map((r, i) => (
              <div key={r.title} className="reveal flex items-center gap-4 rounded-[18px] px-5 py-4 bg-gradient-to-br from-[#FBF1DE] to-[#F6E5C6] border border-amber/25 shadow-card hover:shadow-lift hover:-translate-y-0.5 transition-all duration-500" style={{ '--d': `${i * 70}ms` }}>
                <span className="shrink-0 w-10 h-10 rounded-xl bg-paper/80 text-amber grid place-items-center"><Trophy size={18} /></span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="font-serif font-semibold text-[17.5px] text-ink leading-snug">{r.title}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-bark bg-paper/70 rounded px-1.5 py-0.5">{r.tag}</span>
                  </span>
                  <span className="block mt-0.5 text-[14px] leading-snug text-body"><Rich text={r.by} /></span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── beyond work ─────────────── */

// Ghungroo — the ankle bells worn in Bharatanatyam
function DanceIcon(props) {
  const bells = [0.1, 0.23, 0.36, 0.5, 0.64, 0.77, 0.9].map((t) => [6 + 108 * t, 14 + 52 * t * (1 - t)]);
  return (
    <svg viewBox="0 0 120 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...props}>
      <path d="M6 14 Q60 40 114 14" />
      {bells.map(([x, y]) => (
        <g key={x} className="bell" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${(x % 40) * 6}ms` }}>
          <line x1={x} y1={y} x2={x} y2={y + 4} />
          <circle cx={x} cy={y + 11} r="6.5" />
          <path d={`M${x - 3} ${y + 13} h6`} />
        </g>
      ))}
    </svg>
  );
}

const BEYOND_ICON = { hike: Mountain, travel: Compass };

function Beyond() {
  const cards = [
    { key: 'dance', title: bharatanatyam.title, tag: bharatanatyam.tag, text: bharatanatyam.short },
    ...beyond,
  ];
  return (
    <section id="beyond" className="relative py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <SectionHead kicker="Beyond work" title="What keeps me curious" />
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((b, i) => {
            const isDance = b.key === 'dance';
            const Icon = isDance ? DanceIcon : BEYOND_ICON[b.key];
            const Tag = isDance ? 'a' : 'div';
            return (
              <Tag key={b.key} {...(isDance ? { href: bharatanatyam.site, target: '_blank', rel: 'noopener noreferrer', onClick: () => track('dance_site_open') } : {})}
                className={`reveal group group/dance text-left rounded-[26px] overflow-hidden bg-paper/90 border border-line/80 shadow-card hover:shadow-lift hover:-translate-y-1.5 transition-all duration-500 flex flex-col ${isDance ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-forest' : ''}`}
                style={{ '--d': `${i * 90}ms` }}>
                <span className={`relative block h-44 overflow-hidden ${isDance ? 'bg-gradient-to-br from-[#F4DDB0] via-[#EDC98A] to-[#C4873A]' : b.key === 'hike' ? 'bg-gradient-to-br from-[#DCE6D6] via-[#B9CBB1] to-[#2D5A3D]' : 'bg-gradient-to-br from-[#E1EAF4] via-[#C9D7E8] to-[#2F5F99]'}`}>
                  <Icon className={`absolute text-white/85 transition-transform duration-700 group-hover:scale-110 ${isDance ? 'ghungroo right-5 bottom-8' : 'right-6 bottom-5 group-hover:-rotate-6'}`}
                    width={isDance ? 150 : 84} height={isDance ? 80 : 84} />
                  <span className="absolute left-5 top-5 text-[12px] font-semibold text-ink bg-paper/90 rounded-md px-2.5 py-1">{String(i + 1).padStart(2, '0')}</span>
                </span>
                <span className="p-6 md:p-7 flex flex-col flex-1">
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-amber">{b.tag}</span>
                  <span className="mt-2 font-serif font-semibold text-[23px] text-ink">{b.title}</span>
                  <span className="mt-2 text-[15.5px] leading-[1.65] text-body"><Rich text={b.text} /></span>
                  {isDance && (
                    <span className="mt-auto pt-5 inline-flex items-center gap-2 text-[14.5px] font-semibold text-forest-deep">
                      Visit Routes &amp; Roots
                      <span className="w-7 h-7 rounded-full border border-forest/25 grid place-items-center transition-all duration-500 group-hover:bg-forest-deep group-hover:text-white"><ArrowUpRight size={15} /></span>
                    </span>
                  )}
                </span>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── contact ─────────────── */

function CopyEmail() {
  const [done, setDone] = useState(false);
  const copy = async () => {
    let ok = false;
    try { await navigator.clipboard.writeText(site.email); ok = true; } catch (e) {
      try {
        const t = document.createElement('textarea'); t.value = site.email; t.setAttribute('readonly', '');
        t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select();
        ok = document.execCommand('copy'); document.body.removeChild(t);
      } catch (err) { ok = false; }
    }
    if (ok) { setDone(true); track('email_copy'); setTimeout(() => setDone(false), 2000); }
  };
  return (
    <button onClick={copy} aria-live="polite"
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13.5px] font-semibold border transition-all ${done ? 'bg-aspen text-ink border-aspen' : 'border-white/30 text-white/90 hover:bg-white/10'}`}>
      {done ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy</>}
    </button>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="reveal relative rounded-[34px] overflow-hidden bg-forest-deep text-white px-7 py-14 md:px-16 md:py-20 shadow-lift">
          <div className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full bg-aspen/25 blur-3xl" />
          <div className="absolute -left-24 -bottom-40 w-[380px] h-[380px] rounded-full bg-[#4E7A5A]/40 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ background: 'repeating-radial-gradient(circle at 85% 20%, #fff 0 1px, transparent 1px 30px)' }} />
          <div className="relative">
            <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-aspen mb-4">Contact</p>
            <h2 className="font-serif font-bold text-[clamp(2.1rem,4.2vw,3.5rem)] leading-[1.08] max-w-2xl">Let’s take your next product to launch.</h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-white/80 max-w-xl">
              I’m looking for <strong className={ON_DARK}>Technical Program Manager</strong> roles where releases, devices and people come together.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3">
              <a href={`mailto:${site.email}`} onClick={() => track('email_click', { from: 'contact' })}
                className="inline-flex items-center gap-3 font-serif text-[clamp(1.2rem,2.4vw,1.75rem)] text-white border-b-2 border-aspen/70 pb-1 hover:border-aspen transition-colors break-all">
                <Mail size={22} className="shrink-0" /> {site.email}
              </a>
              <CopyEmail />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => track('linkedin_click', { from: 'contact' })}
                className="inline-flex items-center gap-2 rounded-full bg-white text-forest-deep px-5 py-3 text-[15px] font-semibold hover:bg-aspen-soft hover:-translate-y-0.5 transition-all"><Linkedin size={17} /> LinkedIn</a>
              <a href={site.resume} target="_blank" rel="noopener noreferrer" onClick={() => track('resume_open', { from: 'contact' })}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-[15px] font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all"><FileText size={17} /> Resume</a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" onClick={() => track('github_click', { from: 'contact' })}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-[15px] font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all"><Github size={17} /> GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── page ─────────────── */

export default function App() {
  useRevealAll();
  useSectionTracking();
  useSmoothScroll();
  return (
    <div className="relative min-h-screen font-sans text-body overflow-x-clip">
      <LivingBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Numbers />
        <Journey />
        <Research />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Beyond />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-line/80">
        <div className="max-w-[1240px] mx-auto px-5 md:px-10 py-8 flex flex-col sm:flex-row gap-3 items-center justify-between text-[14px] text-muted">
          <span>© {new Date().getFullYear()} Jinal Mandalia · {site.location}</span>
          <a href="#top" className="hover:text-ink transition-colors">Back to top ↑</a>
        </div>
      </footer>
      <Chat />
    </div>
  );
}
