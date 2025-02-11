import React, { useEffect, useState } from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CardForRightSide from './CardForRightSide';
import useBiodatas from '../../hooks/useBiodatas';

const RightSide = () => {
     const [biodatas] = useBiodatas();
     return (
          <div>
               <SectionTitle heading='Find Your Perfect Match'></SectionTitle>
               <div className='mt-10 w-11/12 mx-auto grid grid-cols-3 gap-6'>
                    {biodatas.map( (biodata, index) => (<CardForRightSide key={index} biodata={biodata}></CardForRightSide>))}
               </div>
          </div>
          
     );
};

export default RightSide;