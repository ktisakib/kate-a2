import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className='absolute  text-center left-0 top-[70px] z-0 [background-image:url("/images/mountain2.jpg");] bg-cover bg-no-repeat bg-center '>
      <div className='w-screen h-[450px] flex flex-col items-center justify-center backdrop-brightness-50 space-y-8'>
        <h1 className='text-white font-bold text-[40px]  '>
          Thoughts, stories and ideas.
        </h1>
        <h6 className='text-gray-500'>
          Minimal and modern theme for Blogspot. Use it for personal blog or
          multi-author blog / magazine.
        </h6>
        <Link href='/'>
          <button className='px-8 rounded-md py-2 cursor-pointer text-white bg-cyan-300 hover:bg-gray-700'>
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
