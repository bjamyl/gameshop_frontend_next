import React from "react";
import { useStateContext } from "../context/StateContext";
import { RiSearchLine } from "react-icons/ri";

export default function Search() {
  const {
    setShowSearch,
    showSearch,
    searchProducts,
    searchItems,
    setSearchItems,
  } = useStateContext();

  const handleClose = (e) => {
    if (e.target.id === "background") setShowSearch(!showSearch);
  };
  // console.log(searchItems)
  return (
    <div
      id="background"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center align-center "
    >
      <div className="pt-6 items-center justify-center  h-fit">
        <form onSubmit={searchProducts} action="">
          <div className="flex justify-between  md:w-[500px] xl:w-[700px]">
            <input
              value={searchItems}
              onChange={(e) => setSearchItems(e.target.value)}
              placeholder="Search gameshop"
              className="p-2 xl:p-4 xl:text-xl  flex-1"
              type="text"
            />
            <button type="submit" className="flex px-2 xl:text-xl xl:px-8 bg-blue-800 text-white items-center gap-2">
              <p className="text-xl xl:text-2xl">
                <RiSearchLine />
              </p>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
