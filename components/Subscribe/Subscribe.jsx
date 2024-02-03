import React from "react";
import {RiSendPlaneFill} from "react-icons/ri";
import Image from "next/image";


//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe=() =>{
    return (
        <div className={Style.Subscribe}>
            <div className={Style.subscribe_box}>
                <div className={Style.subscribe_box_left}>
                    <h2>Get Exclusive NFT Updates from Klinch!</h2>
                    <p>
                    Subscribe to our newsletter to receive the latest news, updates, and exclusive offers from Klinch, your premier NFT marketplace on the Ethereum blockchain. Be the first to know about new drops, artist collaborations, and exciting events in the world of crypto art!
                    </p>
                    <div className={Style.subscribe_box_left_box}>
                        <span>01</span>
                        <small>Discounts on monthly or yearly subscriptions!</small>
                    </div>
                    <div className={Style.subscribe_box_left_box}>
                        <span>02</span>
                        <small>Discount on magazines!</small>
                    </div>

                    <div className={Style.subscribe_box_left_input}>
                        <input type="email" placeholder="Enter your email"/>
                        <RiSendPlaneFill className={Style.subscribe_box_left_input_icon}/>
                    </div>
                </div>

                <div className={Style.subscribe_box_right}>
                    <Image
                      src={images.update}
                      alt="get update"
                      width={600}
                      height={600}
                    />
                </div>
            </div>
        </div>
    )
};

export default Subscribe;