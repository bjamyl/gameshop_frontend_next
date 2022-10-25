import React from "react";
import Image from "next/image";

export default function Links() {
  return (
    <section>
      <div>
        {/* Mobile section */}
        <div>
          <div>
            <div>
              <Image
                src="/links/ps.webp"
                width={500}
                height={200}
                alt="ps-image"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/links/xbox.jpg"
                width={500}
                height={200}
                alt="xbox-image"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div>
              <Image
                src="/links/pc.png"
                width={500}
                height={400}
                alt="pc-image"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
