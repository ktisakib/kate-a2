import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
  FaInstagram,
  FaSkype,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full py-10 bg-[#171921] justify-between items-center  flex flex-col md:flex-row  space-x-5 px-6 '>
      <Link href='/'>
        <a>
          <Image alt="logo" src='/images/Kate-logo-White.png' height={50} width={176} />
        </a>
      </Link>
      <div>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <h1>Lorem Ipsum has been the industry&apos;s.</h1>
      </div>
      <div className='flex items-center justify-center space-x-2 px-3 text-white '>
        <Link href='/'>
          <FaFacebookF className=' rounded h-8 cursor-pointer px-2 w-8 bg-blue-800 ' />
        </Link>
        <Link href='/'>
          <FaSkype className=' rounded h-8 cursor-pointer px-2 w-8  bg-cyan-500 ' />
        </Link>
        <Link href='/'>
          <FaInstagram className=' rounded h-8 cursor-pointer px-2 w-8  bg-gradient-to-tr from-yellow-400 via-red-700 to-indigo-700 ' />
        </Link>
        <Link href='/'>
          <FaTwitter className=' rounded h-8 cursor-pointer px-2 w-8  bg-cyan-500 ' />
        </Link>
        <Link href='/'>
          <FaLinkedin className=' rounded h-8 cursor-pointer px-2 w-8  bg-cyan-500 ' />
        </Link>
        <Link href='/'>
          <FaPinterest className=' rounded h-8 cursor-pointer px-2 w-8  bg-red-800 ' />
        </Link>
        <Link href='/'>
          <FaYoutube className=' rounded h-8 cursor-pointer px-2 w-8  bg-red-500 ' />
        </Link>
      </div>{" "}
    </div>
  );
};

export default Footer;
