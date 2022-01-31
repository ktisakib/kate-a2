import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { MenuIcon, SearchIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [search, setSearch] = useState();
  const [menu, setMenu] = useState();
  function searchOn() {
    setSearch(true);
  }
  function searchOff() {
    setSearch(false);
  }
  function showMenu() {
    setMenu(true);
  }
  function closeMenu() {
    setMenu(false);
  }
  return (
    <>
      
      
      {search ? (
        <nav className='bg-white px-5 shadow-md flex transition-all  py-2 items-center justify-between w- h-[70px]'>
          <div>
            <input
              type='text'
              className='outline-none  '
              placeholder='search in the blog'
            />
          </div>
          <XIcon className='h-6' onClick={searchOff} />{" "}
        </nav>
      ) : (
        <nav className='shadow-md flex px-5 py-2 items-center justify-between h-[70px] transition-all '>
          {menu ? (
            <XIcon className='h-5 lg:hidden' onClick={closeMenu} />
          ) : (
            <MenuIcon onClick={showMenu} className='h-5 lg:hidden' />
          )}
          <div className='flex space-x-9 items-center'>
            <Link href='/'>
              <a>
                <Image src='/images/Kate-logo.png' height={50} width={176} />
              </a>
            </Link>
            <ul className='lg:flex hidden space-x-9 font-semibold whitespace-nowrap'>
              <li>Home</li>
              <li>Feature</li>
              <li>Documetation</li>
              <li>Dowload This Template</li>
            </ul>
          </div>
          <SearchIcon className='h-5' onClick={searchOn} />
        </nav>
      )}
    </>
  );
};

export default Header;
