import React from 'react';
import Image from 'next/image';

//INTERNAL IMPORT
import Style from './Service.module.css';
import images from '../../img';


const Service = () => {
    return (
    <div className={Style.service}>
        <div className={Style.service_box}>
            <div className={Style.service_box_item}>
                <Image
                src={images.service2}
                alt="Connect Wallet"
                width={100}
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span>Step 1</span>           
                </p>
                <h3>Connect Wallet</h3>
                <p>Instantly link your crypto wallet for secure and convenient NFT transactions, hassle-free.</p>
            </div>
            <div className={Style.service_box_item}>
                <Image
                src={images.service1}
                alt="Filter & Discover"
                width={100}
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span>Step 2</span>           
                </p>
                <h3>Filter & Discover</h3>
                <p>Explore curated NFT collections tailored to your preferences with intuitive filtering options.</p>
            </div>
            <div className={Style.service_box_item}>
                <Image
                src={images.service3}
                alt="Start Trading"
                width={100}
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span>Step 3</span>           
                </p>
                <h3>Start Trading</h3>
                <p>Begin your NFT journey with confidence, trading digital assets and exploring new artistic horizons effortlessly.</p>
            </div>
            <div className={Style.service_box_item}>
                <Image
                src={images.service4}
                alt="Track Portfolio"
                width={100}
                height={100}
                />
                <p className={Style.service_box_item_step}>
                    <span>Step 4</span>           
                </p>
                <h3>Track Portfolio</h3>
                <p>Stay informed and in control by effortlessly tracking your portfolio's performance & value fluctuations.</p>
            </div>
        </div>
    </div>
    )
};

export default Service;
