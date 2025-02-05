import React, { useEffect, useState } from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CardForRightSide from './CardForRightSide';

const RightSide = () => {
     const [bioData, setBioData] = useState([]);
        
     
       useEffect(() => {
         fetch("./bioData.json")
           .then((res) => res.json())
           .then((data) => setBioData(data));
       }, []);
     return (
          <div>
               <SectionTitle heading='Find Your Perfect Match'></SectionTitle>
               <div className='mt-10 w-11/12 mx-auto grid grid-cols-3 gap-6'>
                    {bioData.map( (data, index) => (<CardForRightSide key={index} data={data}></CardForRightSide>))}
               </div>
          </div>
          
     );
};

export default RightSide;