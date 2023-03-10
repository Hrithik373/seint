import React from 'react'
import Image from 'next/legacy/image';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from '@heroicons/react/solid';
type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/*left*/}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
        src="/../public/headerlogo.png"
        alt="logo"
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        />
      </div>

      {/*middle*/}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400" type='next' placeholder='start your search'/>
        <SearchIcon className=' hidden md:inline-flex h-8 bg-green-500 text-white rounded-full p2 cursor-pointer md:mx-2'/>
      </div>

      {/*Right*/}
      <div className='flex items-center space-x-4 justify-end'>
        <p className='hidden md:inline cursor-pointer'>become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/>
        
      <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
        <MenuIcon className='h-6'/>
        <UserCircleIcon className='h-6'/>
      </div> 
      </div>

    </header>
  )
}

