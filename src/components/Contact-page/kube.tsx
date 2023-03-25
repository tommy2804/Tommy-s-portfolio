import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

export default function Kube() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current!.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="container">
      <div className="cube" ref={ref}>
        <div className="side-cube front-cube" />
        <div className="side-cube left-cube" />
        <div className="side-cube right-cube" />
        <div className="side-cube top-cube" />
        <div className="side-cube bottom-cube" />
        <div className="side-cube back-cube" />
      </div>
    </div>
  );
}
