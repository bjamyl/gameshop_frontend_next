import React from 'react'
import Image from 'next/image'

export default function FeaturedCard() {
  return (
    <div className="flex justify-center">
      <div style={{backgroundImage: ('/dualsense.png')}} className="hover:scale-105 transition-all duration-100">
        
        {/* <div className="mt-2">
          <p className=" text-gray-700 text-lg">{name}</p>
          <p className="font-bold">${price}.00</p>
        </div> */}
      </div>
    </div>
  )
}
