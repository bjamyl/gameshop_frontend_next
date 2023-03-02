import BannerCard from "./BannerCard";
import { useSpring, animated } from "react-spring";

export default function HeroBanner() {

const fade = useSpring({from:{opacity:0},to:{opacity:1}})

  return (
    <animated.header style={fade} className="flex justify-center mt-9">
      <div className="bg-gradient-to-bl from-[#000428] to-[#004e92]">
        {/* Card for swiping */}
        <BannerCard
          title=" The New DualSense Controller"
          description="Experience gaming like never before with the new controller
                  and seize every moment on the battlefield, feel every drift
                  and celebrate every goal. Available for PS5 only"
          image="/dualsense.png"
          page ='/products/3'
        />
      </div>
    </animated.header>
  );
}
