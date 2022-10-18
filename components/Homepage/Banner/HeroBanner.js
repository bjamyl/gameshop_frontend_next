import BannerCard from "./BannerCard";

export default function HeroBanner() {
  return (
    <header className="flex justify-center">
      <div className="bg-gradient-to-bl from-[#000428] to-[#004e92]">
        {/* Card for swiping */}
        <BannerCard
          title=" The New DualSense Controller"
          description="Experience gaming like never before with the new controller
                  and seize every moment on the battlefield, feel every drift
                  and celebrate every goal. Available for PS5 only"
          image="/dualsense.png"
        />
      </div>
    </header>
  );
}
