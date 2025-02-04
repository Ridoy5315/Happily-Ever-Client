import React from 'react';
import Banner from '../../componenets/home/banner/Banner';
import PremiumCards from '../../componenets/home/premiumCards/PremiumCards';
import HowItWorks from '../../componenets/home/howItWorks/HowItWorks';
import SuccessCounter from '../../componenets/home/successCounter/SuccessCounter';
import SuccessStory from '../../componenets/home/successStory/SuccessStory';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <PremiumCards></PremiumCards>
               <HowItWorks></HowItWorks>
               <SuccessCounter></SuccessCounter>
               <SuccessStory></SuccessStory>
          </div>
     );
};

export default Home;