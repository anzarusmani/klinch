import React,{useState,useEffect,useContext} from 'react';

//INTERNAL IMPORT
import Style from '../styles/index.module.css'
import { BigNFTSlider, HeroSection,Service, Subscribe, Title, Category, Filter,NFTCard, Collection, FollowerTab, AudioLive, Slider, Brand, Video,} from '../components/componentsindex';
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home=()=>{
  const{}=useContext(NFTMarketplaceContext);

  // useEffect(()=>{
  //   checkContract();
  // },[]);
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title 
        heading="Audio Collection" 
        paragraph="Discover the Finest Selection of Featured NFTs on Klinch."
      />
      <AudioLive/>
      <FollowerTab/>
      <Slider/>
      <Collection/>
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
      <Brand/>
      </div>
  );
};

export default Home;