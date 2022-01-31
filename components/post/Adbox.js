import Link from 'next/link';
import React from 'react';

const Adbox = () => {
  return (
    <Link href='#'>
      <div className='h-24 border-gray-500 border text-center items-center flex justify-center italic text-gray-600 bg-gray-300'>
        Responsive Advertisement
      </div>
    </Link>
  );
};

export default Adbox;
