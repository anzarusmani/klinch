import React, {useState, useEffect, useCallback} from "react";
import Image from "next/image";
import {AiFillFire, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {MdVerified, MdTimer} from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORT
import Style from './BigNFTSlider.module.css';
import images from '../../img';
import Button from  "../Button/Button";


const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(0);

    const sliderData = [
        {
            title: "NFT-1",
            id: 1,
            name: "Aditya Vikram Singh",
            collection: "Demo-1",
            price: "000000069690 ETH",
            like: 243,
            image: images.user1,
            nftImages: images.nft_image_1,
            time:{
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 55,
            }
        },
        {
            title: "NFT-2",
            id: 2,
            name: "Anzar Usmani",
            collection: "Demo-2",
            price: "000000069690 ETH",
            like: 243,
            image: images.user2,
            nftImages: images.nft_image_2,
            time:{
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 55,
            }
        },
        {
            title: "NFT-3",
            id: 3,
            name: "Shekhar",
            collection: "Demo-3",
            price: "000000069690 ETH",
            like: 243,
            image: images.user3,
            nftImages: images.nft_image_3,
            time:{
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 55,
            }
        },
        {
            title: "NFT-4",
            id: 4,
            name: "Razor",
            collection: "Demo-3",
            price: "000000069690 ETH",
            like: 243,
            image: images.user4,
            nftImages: images.nft_image_1,
            time:{
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 55,
            }
        },
    ]
//increment
    const inc = useCallback(()=> {
        if(idNumber + 1 < sliderData.length){
            setIdNumber(idNumber+1);
        }
    }, [idNumber, sliderData.length]);
    
//decrement
const dec = useCallback(()=> {
    if(idNumber > 0){
        setIdNumber(idNumber-1);
    }
}, [idNumber]);

// useEffect(()=> {
//     inc();
// }, []);

    return (<div className={Style.bigNFTSlider}>
        <div className={Style.bigNFTSlider_box}>
            <div className={Style.bigNFTSlider_box_left}>
                <h2>{sliderData[idNumber].title}</h2>
                <div className={Style.bigNFTSlider_box_left_creator}>
                    <div className={Style.bigNFTSlider_box_left_creator_profile}>
                        <Image 
                        className={Style.bigNFTSlider_box_left_creator_profile_img}
                        src={sliderData[idNumber].image}
                        alt="profile image"
                        width={50}
                        height={50}
                        />
                        <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                            <p>Creator</p>
                            <h4>
                                {sliderData[idNumber].name}{" "}
                                <span>
                                    <MdVerified/>
                                </span>
                            </h4>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_creator_collection}>
                        <AiFillFire
                          className={Style.bigNFTSlider_box_left_creator_collection_icon}
                        />

                        <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                            <p>Collection</p>
                            <h4>{sliderData[idNumber].collection}</h4>
                        </div>
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_left_bidding}>
                    <div className={Style.bigNFTSlider_box_left_bidding_box}>
                        <small>Current Bid</small>
                        <p>
                            {sliderData[idNumber].price} <span>$22,221</span>
                        </p>
                    </div>
                    <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                        <MdTimer
                          className={Style.bigNFTSlider_box_left_bidding_box_icon}
                        />
                        <span>Auction ends in:</span>
                    </p>

                    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.days}</p>
                            <span> days</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.hours}</p>
                            <span> hours</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.minutes}</p>
                            <span> minutes</span>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.seconds}</p>
                            <span> seconds</span>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_button}>
                        <Button btnName="Place" handleClick={() => {}}/>
                        <Button btnName="View" handleClick={() => {}}/>
                    </div>
                </div>

                <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                    <TbArrowBigLeftLines
                      className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                      onClick={() => dec()}
                    />
                    <TbArrowBigRightLine
                      className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                      onClick={() => inc()}
                    />
                </div>
            </div>

            <div className={Style.bigNFTSlider_box_right}>
                <div className={Style.bigNFTSlider_box_right_box}>
                    <Image
                     src={sliderData[idNumber].nftImages}
                     alt="NFT IMAGE"
                    />
                    <div className={Style.bigNFTSlider_box_right_box_like}>
                        <AiFillHeart/>
                        <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default BigNFTSlider;