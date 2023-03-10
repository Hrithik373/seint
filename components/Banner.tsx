import React from 'react';
import Image from 'next/legacy/image';

type Props = {}

export default function Banner({}: Props) {
  return (
    <div  className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
    <Image

      src="https://links.papareact.com/0fm"
      layout="fill"
      objectFit="cover"/>

      <div className="absolute top-1/2 w-full text-center">
      <p className="text-sm sm:text-lg">Not sure what to do? Perfect :)</p>
        <button className="px-10 py-4 my-3 font-bold bg-white shadow-md rounded-full text-cyan-500 active:scale-90 transition duration-150 transform hover:shadow-xl">
          I'm flexible
        </button>
      </div>

    </div>
  )
}