import React from "react";
import Image from "next/image";

export default function Companies() {
  return (
    <section className="xl:flex justify-center">
      <div className="mx-10 grid gap-x-14 xl:w-[1280px] xl:gap-x-48 grid-cols-2 md:grid-cols-4">
        <div>
          <Image
            src="/logos/alienware.png"
            alt="alienware-logo"
            width={50}
            height={50}
            layout="responsive"
            objectFit="contain"
            className="opacity-80"
          />
        </div>
        <div>
          <Image
            src="/logos/logitech.png"
            alt="logitech-logo"
            width={50}
            height={50}
            layout="responsive"
            objectFit="contain"
            className="opacity-80"
          />
        </div>
        <div>
          <Image
            src="/logos/ps.png"
            alt="ps-logo"
            width={50}
            height={50}
            layout="responsive"
            objectFit="contain"
            className="opacity-80"
          />
        </div>
        <div>
          <Image
            src="/logos/nintendo.png"
            alt="nintendo-logo"
            width={50}
            height={50}
            layout="responsive"
            objectFit="contain"
            className="opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
