import React from 'react';
import Adbox from './Adbox';
import FeaturedPost from './postItems/FeaturedPost';

const Featured = () => {
    return (
      <div className='mt-[460px] relative flex flex-col space-y-10 z-10'>
        <Adbox />
        <div className='flex flex-col md:flex-row items-center  justify-between'>
          <FeaturedPost
            src={"/images/postImg/21.jpg"}
            category='Beauty'
            title='I like fishing because it is always the great way of relaxing'
          />
          <FeaturedPost src={"/images/postImg/22.jpg"} />
        </div>
        <Adbox />
      </div>
    );
};

export default Featured;
