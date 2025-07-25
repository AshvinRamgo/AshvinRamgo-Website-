import Lottie from "lottie-react";
import animationData from "@/assets/Palm Tree Leaf Animation.json";
import { useIsMobile } from "@/hooks/use-mobile";

interface PalmTreeAnimationProps {
  className?: string;
}

const PalmTreeAnimation = ({ className = "" }: PalmTreeAnimationProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? 'w-24 h-24' : 'w-32 h-32'} ${className}`}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    </div>
  );
};

export default PalmTreeAnimation;