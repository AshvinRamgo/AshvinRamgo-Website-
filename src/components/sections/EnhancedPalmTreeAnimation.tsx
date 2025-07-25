import Lottie from "lottie-react";
import animationData from "@/assets/Palm Tree Leaf Animation.json";
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface EnhancedPalmTreeAnimationProps {
  position?: "left" | "right";
  scale?: number;
  className?: string;
  addBounceEffect?: boolean;
  hideOnMobile?: boolean;
}

const EnhancedPalmTreeAnimation = ({
  position = "left",
  scale = 1,
  className = "",
  addBounceEffect = false,
  hideOnMobile = false,
}: EnhancedPalmTreeAnimationProps) => {
  const treeRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Adjust scale for mobile
  const responsiveScale = isMobile ? Math.min(0.8, scale) : scale;

  useEffect(() => {
    if (addBounceEffect && treeRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              treeRef.current?.classList.add("animate-bounce-once");
              observer.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(treeRef.current);

      return () => {
        if (treeRef.current) observer.disconnect();
      };
    }
  }, [addBounceEffect]);

  // Hide on mobile if specified
  if (isMobile && hideOnMobile) {
    return null;
  }

  return (
    <div
      ref={treeRef}
      className={`tree-swing ${position === "left" ? "tree-left" : "tree-right"} ${className}`}
      style={{
        transform: `scale(${responsiveScale})`,
        transformOrigin: position === "left" ? "bottom right" : "bottom left",
        maxWidth: isMobile ? "120px" : "150px",
        maxHeight: isMobile ? "120px" : "150px",
      }}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="filter drop-shadow(2px 4px 6px rgba(0,0,0,0.2))"
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    </div>
  );
};

export default EnhancedPalmTreeAnimation;