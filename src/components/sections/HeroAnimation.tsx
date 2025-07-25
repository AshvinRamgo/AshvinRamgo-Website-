import Lottie from "lottie-react";
import animationData from "@/assets/Lottie Loop Project 1 copy.json";
import { useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroAnimationProps {
  onComplete: () => void;
  skipAnimation?: boolean;
}

const HeroAnimation = ({ onComplete, skipAnimation = false }: HeroAnimationProps) => {
  const lottieRef = useRef<any>(null);
  const isMobile = useIsMobile();

  // Set to specific frame based on conditions
  useEffect(() => {
    if (lottieRef.current) {
      const animation = lottieRef.current;
      
      if (skipAnimation) {
        // If skipAnimation is true, go to the last frame
        const totalFrames = animation.getDuration(true);
        animation.goToAndStop(totalFrames - 1, true);
        onComplete();
      } else if (isMobile) {
        // On mobile, immediately go to frame 100 without playing
        animation.goToAndStop(100, true);
        onComplete();
      }
    }
  }, [skipAnimation, onComplete, isMobile]);

  // Prevent scrolling during animation (only for desktop)
  useEffect(() => {
    if (skipAnimation || isMobile) return;
    
    // Add no-scroll class to html element (only for desktop)
    document.documentElement.classList.add('no-scroll');
    
    // Set a timeout to ensure the class is removed even if animation callback fails
    const timeoutId = setTimeout(() => {
      document.documentElement.classList.remove('no-scroll');
      onComplete();
    }, 5000);
    
    return () => {
      // Cleanup: ensure no-scroll class is removed
      document.documentElement.classList.remove('no-scroll');
      clearTimeout(timeoutId);
    };
  }, [skipAnimation, onComplete, isMobile]);

  return (
    <div className="absolute inset-0 z-0 w-full h-full left-0 right-0 overflow-hidden">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={!skipAnimation && !isMobile}
        onComplete={() => {
          if (!skipAnimation) {
            // Ensure no-scroll class is removed when animation completes
            document.documentElement.classList.remove('no-scroll');
            // Add a small delay to ensure the class removal takes effect
            setTimeout(() => {
              onComplete();
            }, 100);
          }
        }}
        style={{ 
          width: "100%", 
          height: "100%", 
          margin: 0, 
          padding: 0,
          objectFit: "cover",
          objectPosition: "center"
        }}
        rendererSettings={{ 
          preserveAspectRatio: isMobile ? 'xMidYMid slice' : 'xMidYMid meet'
        }}
      />
    </div>
  );
};

export default HeroAnimation;