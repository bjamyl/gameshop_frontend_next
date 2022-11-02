import Link from "next/link";

export default function Featured() {
  return (
    <section className="mx-4 lg:mx-20 xl:mx-72 mb-20">
      <div>
        {/* Mobile section */}
        <div className="xl:hidden">
          <div className="flex flex-col lg:gap-10 gap-4">
            <div className="rounded-xl border-4 md:h-96 lg:h-[600px] bg-ps flex flex-col justify-end w-full h-72 bg-cover bg-no-repeat bg-center">
              <div className="bg-white w-full h-full opacity-80 p-2 lg:flex-col lg:flex lg:justify-center lg:items-center">
                <h3 className="font-bold text-xl md:text-3xl text-blue-700">SHOP PLAYSTATION</h3>
                <p className="md:text-lg">Find all your favorite PlayStation consoles, accessories and games.</p>
                <Link href='/playstation'>
                <button className="border-2 md:text-lg border-blue-700 px-6 py-2 mt-4 text-blue-700 font-bold">Shop Now</button>
                </Link>
              </div>
            </div>
            <div className="rounded-xl border-4 md:h-96 lg:h-[600px] bg-xbox flex flex-col justify-end w-full h-72 bg-cover bg-no-repeat bg-center">
              <div className="bg-white w-full h-full opacity-80 p-2 lg:flex-col lg:flex lg:justify-center lg:items-center">
                <h3 className="font-bold text-xl md:text-3xl text-blue-700">SHOP XBOX</h3>
                <p className="md:text-lg">Find all your favorite Xbox consoles, accessories and games.</p>
                <Link href='/xbox'>
                <button className="border-2 md:text-lg border-blue-700 px-6 py-2 mt-4 text-blue-700 font-bold">Shop Now</button>
                </Link>
              </div>
            </div>
            <div className="rounded-xl border-4 md:h-96 lg:h-[600px] bg-pc flex flex-col justify-end w-full h-72 bg-cover bg-no-repeat bg-center">
              <div className="bg-white w-full h-full opacity-80 p-2 lg:flex-col lg:flex lg:justify-center lg:items-center">
                <h3 className="font-bold text-xl md:text-3xl text-blue-700">SHOP PC</h3>
                <p className="md:text-lg">Find all your favorite PC builds, accessories and games.</p>
                <Link href='/pc_and_others'>
                <button className="border-2 md:text-lg border-blue-700 px-6 py-2 mt-4 text-blue-700 font-bold">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* desktop section */}
        <div className="hidden xl:block">
          <div className="flex gap-8 h-[700px]">
            {/* The Stack */}
            <div className="flex flex-col gap-8 w-2/4">
              <div className="bg-ps bg-cover bg-center h-2/4">
                <div className="p-6 bg-white h-full opacity-75 hover:h-[85%] flex flex-col justify-end items-start transition-all duration-200">
                  <h3 className="text-blue-700 text-2xl font-bold">SHOP PLAYSTATION</h3>
                  <p>Find all your favorite PlayStation consoles, accessories and games.</p>
                  <Link href='/playstation'>
                  <button className="border-2 text-lg px-6 py-2 border-blue-700 text-blue-700">Shop Now</button>
                  </Link>
                </div>
              </div>
              <div className="bg-xbox bg-cover bg-center h-2/4">
                <div className="p-6 bg-white h-full opacity-75 hover:h-[85%] flex flex-col justify-end items-start transition-all duration-200">
                  <h3 className="text-blue-700 text-2xl font-bold">SHOP XBOX</h3>
                  <p>Find all your favorite Xbox consoles, accessories and games</p>
                  <Link href='/xbox'>
                  <button className="border-2 text-lg px-6 py-2 border-blue-700 text-blue-700">Shop Now</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* The SideBurner */}
            <div className="bg-pc bg-cover bg-center w-2/4">
              <div className="p-6 bg-white h-full opacity-75 hover:h-[85%] flex flex-col justify-end items-start transition-all duration-200">
                <h3 className="text-blue-700 text-2xl font-bold">SHOP PC</h3>
                <p>Shop all yout favorite PC builds, accessories and games</p>
                <Link href='/pc_and_others'>
                <button className="border-2 text-lg px-6 py-2 border-blue-700 text-blue-700">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
