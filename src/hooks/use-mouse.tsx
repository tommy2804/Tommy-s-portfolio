import { RefObject, useState, useEffect } from 'react';

export function useMouse(ref: RefObject<HTMLElement>) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const updateMouse = (e: MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    ref.current!.addEventListener('mousemove', updateMouse);

    return () => {
      ref.current!.removeEventListener('mousemove', updateMouse);
    };
  }, []);

  return { x: mouse.x, y: mouse.y };
}
