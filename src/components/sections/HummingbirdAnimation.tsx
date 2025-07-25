import Lottie from "lottie-react";
import animationData from "@/assets/hummingbird.json";
import { useIsMobile } from "@/hooks/use-mobile";

interface HummingbirdAnimationProps {
  className?: string;
  maxWidth?: string;
  maxHeight?: string;
}

const HummingbirdAnimation = ({
  className = "",
  maxWidth,
  maxHeight
}: HummingbirdAnimationProps) => {
  const isMobile = useIsMobile();
  
  // Default max dimensions that can be overridden by props
  const responsiveMaxWidth = maxWidth || (isMobile ? "100px" : "150px");
  const responsiveMaxHeight = maxHeight || (isMobile ? "100px" : "150px");
  
  return (
    <div
      className={`w-full h-full ${className}`}
      style={{
        maxWidth: responsiveMaxWidth,
        maxHeight: responsiveMaxHeight
      }}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    </div>
  );
};

export default HummingbirdAnimation;