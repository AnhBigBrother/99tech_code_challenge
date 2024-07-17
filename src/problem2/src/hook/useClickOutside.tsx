import { useEffect, useRef } from 'react';

function useClickOutside(callback: () => void) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as any)) {
        callback();
      }
    };
    document.addEventListener('click', e => handleClickOutside(e));
    return () => document.removeEventListener('click', e => handleClickOutside(e));
  }, [ref]);

  return ref;
}

export { useClickOutside };
