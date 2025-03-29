
import React, { useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-right' | 'fade-in-left' | 'zoom-in' | 'slide-up' | 'bounce';
  threshold?: number;
  duration?: number;
  once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-in',
  threshold = 0.2,
  duration = 700,
  once = true
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (sectionRef.current) {
                sectionRef.current.classList.add('opacity-100');
                sectionRef.current.classList.remove('opacity-0');
                sectionRef.current.classList.add(`animate-${animation}`);
                sectionRef.current.style.animationDuration = `${duration}ms`;
              }
            }, delay);
            
            if (once && sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          } else if (!once && sectionRef.current) {
            sectionRef.current.classList.remove('opacity-100');
            sectionRef.current.classList.add('opacity-0');
            sectionRef.current.classList.remove(`animate-${animation}`);
          }
        });
      },
      { 
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animation, delay, threshold, duration, once]);
  
  return (
    <div 
      ref={sectionRef} 
      className={`opacity-0 max-w-full overflow-x-hidden ${className}`}
      style={{ 
        willChange: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
      }}
      data-animation={animation}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
