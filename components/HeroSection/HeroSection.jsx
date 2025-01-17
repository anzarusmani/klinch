import React, {useState, useEffect, useContext} from 'react';
import Image from 'next/image';


//INTERNAL IMPORT
import Style from './HeroSection.module.css';
import images from "../../img";
import { Button } from '../componentsindex';

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
    const {titleData} = useContext(NFTMarketplaceContext);
    return (
        <div className={Style.heroSection}>
            <div className={Style.heroSection_box}>
                <div className={Style.heroSection_box_left}>
                    <h1>{titleData} 🎨</h1>
                    <p>Embark on your NFT journey with <strong>Klinch</strong> and
                        explore limitless possibilities in the world of digital assets
                    </p>
                    <Button btnName="Start exploring!"/>
                </div>
                <div className={Style.heroSection_box_right}>
                    <Image
                    src={images.hero}
                    alt="Hero section"
                    width={600}
                    height={600}
                    />
                </div>
            </div>
        </div>
    )
};

export default HeroSection;
