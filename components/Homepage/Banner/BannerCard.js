import Image from "next/image";

export default function BannerCard({title, description, image}) {
  return (
    <div className="xl:grid xl:grid-cols-2 items-center  p-6 ">
      {/* Text section */}
      <div className="text-center space-y-4 xl:text-left  xl:ml-28 text-white ">
        <h1 className="font-bold text-3xl xl:text-6xl ">
          {title}
        </h1>
        <p className="font-light xl:text-lg xl:w-2/3">
         {description}
        </p>
        <button className="px-2 py-1 border xl:text-lg text-white xl:px-4 xl:py-2 hover:-translate-y-2 transition-all duration-75">
          Buy Now
        </button>
      </div>
      <Image
        src={image}
        width={1600}
        height={900}
        layout="responsive"
        alt="product-image"
      />
    </div>
  );
}
