import Lottie from "lottie-react";
import animationData from "@/assets/FAS test.json";
import { useIsMobile } from "@/hooks/use-mobile";

interface EagleEyeAnimationProps {
  className?: string;
}

const EagleEyeAnimation = ({ className = "" }: EagleEyeAnimationProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? 'w-32 h-32' : 'w-40 h-40'} ${className}`}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    </div>
  );
};

export default EagleEyeAnimation;