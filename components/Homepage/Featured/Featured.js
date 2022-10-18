import FeaturedCard from "./FeaturedCard";
export default function Featured() {
  return (
    <section>
      <div>
        {/* Shows in desktop mode */}
        <div className="hidden lg:block">
          <FeaturedCard />
        </div>
        {/* Shows in mobile mode */}
        <div className="lg:hidden"></div>
      </div>
    </section>
  );
}
