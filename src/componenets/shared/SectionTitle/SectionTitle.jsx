import React from 'react';

const SectionTitle = ({heading, subHeading})  => {
     return (
          <div className='w-6/12 mx-auto text-center space-y-2'>
               <p className='text-gold-color font-bold uppercase font-fontBody text-lg'>{subHeading}</p>
               <h3 className='text-5xl text-maroon-color font-semibold font-fontHeading'>{heading}</h3>
          </div>
     );
};

export default SectionTitle;