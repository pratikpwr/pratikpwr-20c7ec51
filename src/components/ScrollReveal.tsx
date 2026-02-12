import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none' | 'blur' | 'scale';

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
  duration = 0.8,
  className = '',
  distance = 50,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const getInitialStyles = (): React.CSSProperties => {
    switch (direction) {
      case 'up': return { opacity: 0, transform: `translateY(${distance}px)` };
      case 'down': return { opacity: 0, transform: `translateY(-${distance}px)` };
      case 'left': return { opacity: 0, transform: `translateX(${distance}px)` };
      case 'right': return { opacity: 0, transform: `translateX(-${distance}px)` };
      case 'blur': return { opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' };
      case 'scale': return { opacity: 0, transform: 'scale(0.92)' };
      case 'none': return { opacity: 0 };
    }
  };

  const getVisibleStyles = (): React.CSSProperties => ({
    opacity: 1,
    transform: 'translate(0, 0) scale(1)',
    filter: 'blur(0px)',
  });

  const styles = isVisible ? getVisibleStyles() : getInitialStyles();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...styles,
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
