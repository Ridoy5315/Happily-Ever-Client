import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import PremiumCard from "./PremiumCard";
import flower from "../../../assets/flower/f6-removebg-preview.png";
import useBiodatas from "../../../hooks/useBiodatas";
import LoadingSpinner from "../../shared/loadingSpinner/LoadingSpinner";
import { motion } from "motion/react"
const PremiumCards = () => {
  const [biodatas] = useBiodatas();
  const [cardsPerRow, setCardsPerRow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1020) {
        setCardsPerRow(2); 
      } else {
        setCardsPerRow(3);
      }
    };

    handleResize(); // set on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const premiumBiodatas = biodatas?.premiumBiodatasResult;

  // const premiumBiodatas = biodatas.filter(item => item.status === 'premium')

  return (
    <div className="relative bg-black lg:pt-28 md:pt-20 pt-12 pb-20">
      <img
        className="absolute -top-4 transform lg:w-96 md:w-72 w-52"
        src={flower}
        alt=""
      />
      <SectionTitle
        heading="✨ Love Begins with Premium!"
        subHeading="Elevate your search with high-quality, serious relationship seekers"
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-5 gap-4 lg:w-10/12 w-11/12 mx-auto lg:mt-16 md:mt-10 mt-6">
        {premiumBiodatas && premiumBiodatas.length > 0 ? (
          premiumBiodatas.slice(0, 6).map((biodata, i) => (
            <motion.div
              key={biodata._id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5, delay: Math.floor(i / cardsPerRow) * 0.4 }}
              viewport={{once: true, amount: 0.2}}
            >
              <PremiumCard biodata={biodata}></PremiumCard>
            </motion.div>
          ))
        ) : (
          <LoadingSpinner></LoadingSpinner>
        )}
      </div>
    </div>
  );
};

export default PremiumCards;
