import React from 'react';
import LeftSide from '../../componenets/bioData/LeftSide';
import RightSide from '../../componenets/bioData/RightSide';

const BioData = () => {
     
     return (
          <div className='mt-10 grid grid-cols-4 min-h-screen'>
               <div className='col-span-1'>
               <LeftSide></LeftSide>
               </div>
               <div className='col-span-3'>
               <RightSide></RightSide>
               </div>
          </div>
     );
};

export default BioData;