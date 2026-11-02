import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, X, ArrowUp } from 'lucide-react';
import { Rich, richLength } from './Rich';
import { greeting, starters, fallback, findTopic, topicById } from './chatKnowledge';
import { site } from './content';

const track = (name, params = {}) => {
  try { if (window.gtag) window.gtag('event', name, params); } catch (e) { /* ignore */ }
};
const reduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const small = () => window.matchMedia && window.matchMedia('(max-width: 639px)').matches;

function lockPage(on) {
  document.body.style.overflow = on ? 'hidden' : '';
  const l = window.__lenis;
  if (l) { if (on) l.stop(); else l.start(); }
}

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ from: 'bot', text: greeting, follow: starters }]);
  const [shown, setShown] = useState(Infinity); // characters revealed of the last bot message
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // keep the newest message in view
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, shown, typing, open]);

  useEffect(() => {
    if (!open) return undefined;
    if (small()) lockPage(true);
    const t = setTimeout(() => { if (inputRef.current && !small()) inputRef.current.focus(); }, 250);
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => { clearTimeout(t); document.removeEventListener('keydown', onKey); if (small()) lockPage(false); };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const openChat = () => { setOpen(true); track('chat_open'); };
  const close = () => { setOpen(false); if (launcherRef.current) setTimeout(() => launcherRef.current && launcherRef.current.focus(), 50); };

  const reply = (text, follow) => {
    setTyping(true);
    const wait = reduced() ? 0 : 420 + Math.random() * 280;
    timers.current.push(setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: 'bot', text, follow }]);
      const total = richLength(text);
      if (reduced()) { setShown(Infinity); return; }
      setShown(0);
      let n = 0;
      const step = () => {
        n += 3;
        setShown(n);
        if (n < total) timers.current.push(setTimeout(step, 14));
        else setShown(Infinity);
      };
      timers.current.push(setTimeout(step, 14));
    }, wait));
  };

  const ask = (question, how, chipId) => {
    const q = question.trim();
    if (!q || typing || shown !== Infinity) return;
    setMsgs((m) => [...m, { from: 'me', text: q }]);
    const t = chipId ? topicById(chipId) : findTopic(q);
    if (t) {
      track('chat_ask', { topic: t.id, how });
      reply(t.answer, t.follow);
    } else {
      // remember what people ask that the chat can't answer yet (no emails or numbers)
      track('chat_unanswered', { question: q.replace(/\S+@\S+/g, '[email]').replace(/\d{4,}/g, '#').slice(0, 95) });
      reply(fallback, starters.slice(0, 4));
    }
  };

  const submit = (e) => { e.preventDefault(); ask(input, 'typed'); setInput(''); };
  const busy = typing || shown !== Infinity;
  const last = msgs.length - 1;

  return (
    <>
      <button ref={launcherRef} onClick={openChat} aria-haspopup="dialog" aria-expanded={open}
        className={`fixed z-[55] right-3 bottom-3 sm:right-6 sm:bottom-6 inline-flex items-center gap-2 rounded-full bg-forest-deep text-white pl-2.5 pr-3.5 py-2 sm:pl-3.5 sm:pr-4 sm:py-3 text-[13.5px] sm:text-[14.5px] font-semibold shadow-[0_14px_30px_-12px_rgba(31,68,50,.75)] hover:bg-forest hover:-translate-y-0.5 transition-all duration-300 ${open ? 'opacity-0 pointer-events-none translate-y-2' : 'opacity-100'}`}>
        <span className="relative grid place-items-center w-6 h-6 rounded-full bg-aspen text-ink">
          <Sparkles size={14} />
          <span className="absolute inset-0 rounded-full bg-aspen animate-ping opacity-40" />
        </span>
        Ask about me
      </button>

      {open && <div className="fixed inset-0 z-[56] bg-[#1C1A17]/30 sm:hidden fade-in" onClick={() => close()} aria-hidden="true" />}
      {open && (
        <div role="dialog" aria-modal={small() ? 'true' : 'false'} aria-label="Ask about Jinal"
          className="fixed z-[56] inset-x-2 bottom-2 h-[min(82svh,640px)] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[390px] sm:h-[min(600px,calc(100vh-120px))] rounded-[24px] bg-paper border border-line shadow-[0_30px_60px_-20px_rgba(40,30,20,.45)] flex flex-col overflow-hidden pop-in">
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-line bg-parchment/70">
            <img src={site.photo} alt="" className="w-10 h-10 rounded-full object-cover object-[50%_30%] border border-line" />
            <div className="min-w-0 flex-1">
              <p className="font-serif font-semibold text-[16.5px] text-ink leading-tight">Ask about Jinal</p>
              <p className="text-[12.5px] text-muted leading-tight mt-0.5 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#4CAF6E]" /> Answers from her resume &amp; this site</p>
            </div>
            <button onClick={close} aria-label="Close chat" className="w-9 h-9 rounded-full grid place-items-center text-body hover:bg-line/60 transition-colors"><X size={18} /></button>
          </div>

          <div ref={listRef} data-lenis-prevent className="flex-1 overflow-y-auto px-4 py-4 space-y-3" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={m.from === 'me' ? 'flex justify-end' : ''}>
                {m.from === 'me' ? (
                  <p className="max-w-[85%] rounded-[18px] rounded-br-md bg-forest-deep text-white px-3.5 py-2.5 text-[14.5px] leading-[1.5]">{m.text}</p>
                ) : (
                  <div className="max-w-[92%]">
                    <p className="rounded-[18px] rounded-bl-md bg-parchment border border-line/80 px-3.5 py-2.5 text-[14.5px] leading-[1.6] text-body">
                      <Rich text={m.text} limit={i === last ? (shown === Infinity ? undefined : shown) : undefined} />
                    </p>
                    {i === last && !busy && m.follow && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5 fade-up">
                        {m.follow.map((id) => {
                          const t = topicById(id);
                          return t && t.chip ? (
                            <button key={id} onClick={() => ask(t.chip, 'chip', id)}
                              className="rounded-full border border-forest/25 bg-paper px-3 py-1.5 text-[13px] font-medium text-forest-deep hover:bg-forest-soft hover:border-forest/40 transition-colors">
                              {t.chip}
                            </button>
                          ) : null;
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="inline-flex gap-1 rounded-[18px] rounded-bl-md bg-parchment border border-line/80 px-4 py-3" aria-label="Typing">
                {[0, 1, 2].map((d) => <span key={d} className="typing-dot w-1.5 h-1.5 rounded-full bg-muted" style={{ animationDelay: `${d * 150}ms` }} />)}
              </div>
            )}
          </div>

          <form onSubmit={submit} className="p-3 border-t border-line bg-paper flex items-center gap-2">
            <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} maxLength={200}
              placeholder="Ask about her work, releases, thesis…" aria-label="Your question"
              className="flex-1 min-w-0 rounded-full border border-line bg-parchment px-4 py-2.5 text-[15px] text-ink placeholder:text-muted focus:outline-none focus:border-forest/50 focus:ring-2 focus:ring-forest/15" />
            <button type="submit" disabled={!input.trim() || busy} aria-label="Send"
              className="w-10 h-10 shrink-0 rounded-full bg-forest-deep text-white grid place-items-center disabled:opacity-40 hover:bg-forest transition-colors"><ArrowUp size={18} /></button>
          </form>
        </div>
      )}
    </>
  );
}
