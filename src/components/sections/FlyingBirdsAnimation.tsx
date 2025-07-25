import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/assets/Flying Bird.json';
import { useIsMobile } from '@/hooks/use-mobile';

interface FlyingBirdsAnimationProps {
  count?: number;
}

const FlyingBirdsAnimation: React.FC<FlyingBirdsAnimationProps> = ({ count: propCount = 5 }) => {
  const isMobile = useIsMobile();
  
  // Reduce bird count on mobile
  const count = isMobile ? Math.min(3, propCount) : propCount;
  
  // Create an array of birds with different positions, sizes, and delays
  const birds = Array.from({ length: count }, (_, index) => {
    // Vary the starting positions - adjust for mobile
    const topPosition = isMobile
      ? 10 + (index * 20) + Math.random() * 5 // More spread out vertically on mobile
      : 20 + (index * 15) + Math.random() * 10;
    
    // Vary the sizes - smaller on mobile
    const size = isMobile
      ? 40 + Math.random() * 20 // 40-60px on mobile
      : 60 + Math.random() * 30; // 60-90px on desktop
    
    // Vary the delays
    const delayClass = index % 4 === 0 ? '' :
                      index % 4 === 1 ? 'delay-500' :
                      index % 4 === 2 ? 'delay-1000' :
                      'delay-1500';
    
    // Vary the left starting position
    const leftPosition = -10 - (index * 5) - Math.random() * 10;
    
    // Use mobile-specific animation class
    const animationClass = isMobile ? 'animate-fly-diagonal-mobile' : 'animate-fly-diagonal';
    
    return {
      id: index,
      top: topPosition,
      left: leftPosition,
      size,
      delayClass,
      animationClass
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {birds.map((bird) => (
        <div
          key={bird.id}
          className={`absolute ${bird.animationClass} ${bird.delayClass}`}
          style={{
            left: `${bird.left}%`,
            top: `${bird.top}%`,
            width: `${bird.size}px`,
            height: `${bird.size * 0.7}px`
          }}
        >
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          />
        </div>
      ))}
    </div>
  );
};

export default FlyingBirdsAnimation;