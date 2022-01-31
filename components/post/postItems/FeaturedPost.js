import { ClockIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";

const FeaturedPost = ({ src, alt, category, title }) => {
  return (
    <div className='h-[430px] flex items-center  justify-center rounded-xl overflow-hidden'>
      <img src={src} alt={alt} className='relative' />
      <div className='absolute border-[10px]  border-gray-900  rounded border-opacity-40 '>
        <div className='flex flex-col w-[400px]  items-center text-center rounded justify-center bg-gray-900 border-gray-300  bg-opacity-50 px-8  py-8 border '>
          <h1 className='bg-cyan-500 px-2 text-xs rounded '>{category}</h1>
          <h2 className='text-[22px] font-extrabold text-white '>{title}</h2>
          <ul className="flex space-x-1">
            <li className='flex items-center  text-gray-200 text-sm'>
              <UserIcon className='h-4' />
              <h1>Sora Blogging Tips</h1>
            </li>
            <li className='flex items-center text-gray-200 text-xs'>
              <ClockIcon className='h-4' />
              <h1>Sora Blogging Tips</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
