import Lottie from "lottie-react";
import animationData from "@/assets/FAS test.json";
import { useIsMobile } from "@/hooks/use-mobile";

const FASAnimation = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? 'w-[180px]' : 'w-[250px] md:w-[300px]'} transform scale-x-[-1] animate-float`}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ maxHeight: isMobile ? "150px" : "200px" }}
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    </div>
  );
};

export default FASAnimation;