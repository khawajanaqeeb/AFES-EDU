// src/components/ScrollToTop.tsx
'use client';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return show ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-yellow-400 text-[#001a33] shadow-lg hover:bg-yellow-300 transition"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
}
