'use client';

import { RefObject, useEffect, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView(
  ref: RefObject<Element | null>,
  options: UseInViewOptions = {}
): boolean {
  const [inView, setInView] = useState(false);
  const { threshold = 0.1, rootMargin = '0px' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return inView;
}
