import { ClockIcon, UserIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

const Post = ({ category, title, img }) => {
  return (
    <Link className="" href="#">
      <div className='rounded-lg cursor-pointer group overflow-hidden flex flex-col items-center space-y-5  justify-center'>
        <img src={img} className='group-hover:scale-105  transition-all duration-300' />
        <h1>{category}</h1>
        <h1 className='text-2xl text-center border-b-2 p-2'>{title}</h1>
        
        <ul className='flex space-x-1'>
          <li className='flex items-center  text-gray-400 text-sm'>
            <UserIcon className='h-4' />
            <h1>Sora Blogging Tips</h1>
          </li>
          <li className='flex items-center text-gray-400 text-xs'>
            <ClockIcon className='h-4' />
            <h1>Sora Blogging Tips</h1>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default Post;
