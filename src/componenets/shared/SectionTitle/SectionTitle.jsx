import React from 'react';
import { Slide } from 'react-awesome-reveal';
const SectionTitle = ({heading, subHeading})  => {
     return (
          <div className='lg:w-6/12 md:w-7/12 w-9/12 mx-auto text-center lg:space-y-2 md:space-y-2'>
               <Slide direction="up" duration={1500} className="overflow-hidden">
               <p className='text-gold-color lg:font-bold md:font-bold font-medium uppercase font-fontBody lg:text-lg md:text-sm text-xs'>{subHeading}</p>
               <h3 className=' lg:text-5xl md:text-3xl text-2xl text-maroon-color font-semibold font-fontHeading'>{heading}</h3>
               </Slide>
          </div>
     );
};

export default SectionTitle;