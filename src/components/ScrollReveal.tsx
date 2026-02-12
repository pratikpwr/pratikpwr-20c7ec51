import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  distance = 40,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const getTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`;
      case 'down': return `translateY(-${distance}px)`;
      case 'left': return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      case 'none': return 'none';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
