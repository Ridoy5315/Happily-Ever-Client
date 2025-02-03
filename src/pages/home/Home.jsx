import React from 'react';
import Banner from '../../componenets/home/banner/Banner';
import PremiumCards from '../../componenets/home/premiumCards/PremiumCards';
import HowItWorks from '../../componenets/home/howItWorks/HowItWorks';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <PremiumCards></PremiumCards>
               <HowItWorks></HowItWorks>
          </div>
     );
};

export default Home;