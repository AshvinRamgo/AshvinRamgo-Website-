import Lottie from "lottie-react";
import animationData from "@/assets/hummingbird.json";
import { useIsMobile } from "@/hooks/use-mobile";

const MultipleHummingbirds = () => {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left bird - shown on all devices */}
      <div className="absolute top-[10%] left-[10%] w-[60px] md:w-[80px] transform scale-75 animate-float-delay-1">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      </div>
      
      {/* Top right bird - hidden on mobile */}
      {!isMobile && (
        <div className="absolute top-[15%] right-[15%] w-[60px] transform scale-50 animate-float-delay-2">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          />
        </div>
      )}
      
      {/* Bottom left bird - hidden on mobile */}
      {!isMobile && (
        <div className="absolute bottom-[20%] left-[20%] w-[70px] transform scale-60 animate-float-delay-3">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          />
        </div>
      )}
      
      {/* Center bird - shown on all devices but positioned differently on mobile */}
      <div className={`absolute ${isMobile ? 'bottom-[10%] right-[10%] w-[70px]' : 'top-[40%] right-[30%] w-[90px]'} transform scale-80 animate-float-delay-4`}>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      </div>
    </div>
  );
};

export default MultipleHummingbirds;