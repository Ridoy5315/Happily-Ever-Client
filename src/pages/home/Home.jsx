import React from 'react';
import Banner from '../../componenets/home/banner/Banner';
import PremiumCards from '../../componenets/home/premiumCards/PremiumCards';
import HowItWorks from '../../componenets/home/howItWorks/HowItWorks';
import SuccessCounter from '../../componenets/home/successCounter/SuccessCounter';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <PremiumCards></PremiumCards>
               <HowItWorks></HowItWorks>
               <SuccessCounter></SuccessCounter>
          </div>
     );
};

export default Home;