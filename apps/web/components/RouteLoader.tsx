'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteLoader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<'idle' | 'active' | 'complete'>('idle');

  useEffect(() => {
    setPhase('active');
    const t = setTimeout(() => setPhase('complete'), 400);
    const t2 = setTimeout(() => setPhase('idle'), 650);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [pathname]);

  return (
    <div
      className={`loader ${phase === 'active' ? 'is-active' : ''} ${
        phase === 'complete' ? 'is-complete' : ''
      }`}
    />
  );
}
