import { useEffect, useRef, useState } from 'react';

export const useCarousel = (data: unknown[]) => {
  const [pos, setPos] = useState(0);

  const forward = useRef<boolean>();

  const previous = () => {
    forward.current = false;

    setPos(prev => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const next = () => {
    forward.current = true;

    setPos(prev => (prev + 1) % data.length);
  };

  useEffect(() => {
    const timeout = setTimeout(next, 5000);

    return () => clearTimeout(timeout);
  }, [pos]);

  return { pos, previous, next, forward: forward.current };
};
