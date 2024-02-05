import React from 'react';

//INTERNAL IMPORT
import Style from '../styles/index.module.css'
import { BigNFTSlider, HeroSection,Service, Subscribe, Title, Category, Filter,NFTCard, } from '../components/componentsindex';

const Home=()=>{
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title 
        heading="Featured NFTs" 
        paragraph="Discover the Finest Selection of Featured NFTs on Klinch."
      />
      <Filter/>
      <NFTCard/>
      <Title 
        heading="Browse by category" 
        paragraph="Explore the Diverse World of NFTs on Klinch."
      />
      <Category/>
      <Subscribe/>
      </div>
  );
};

export default Home;