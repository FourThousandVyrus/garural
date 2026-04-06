'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
}

export default function CountUp({ end, duration = 2, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration, decimals]);

  return <span ref={ref}>{count}</span>;
}
