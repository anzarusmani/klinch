import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrClose } from "react_icons/gr";
import {
    TiSocialFacebook, 
    TiSocialLinkedin,
    TiScoialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
    TiArrowSortedDown,
    TiArrowSortedUp,
    TiSocialTwitter
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

const SideBar = () => {
    //------USESTATE
    const [openDiscover, setOpenDiscover] =useState(false);
    const [openHelp, setOpenHelp] =useState(false);
        // discover navigation menu
        const discover =[
            {
                name:"Collection",
                link:"collection"
            },
            {
                name:"Search",
                link:"search"
            },
            {
                name:"Author Profile",
                link:"author-profile"
            },
            {
                name:  "NFT Details",
                link: "NFT-deatils"
            },
            {
                name:  "Account Setting",
                link: "account-setting"
            },
            {
                name:  "Connect Wallet",
                link: "connect-wallet"
            },
            {
                name:  "Blog ",
                link: "blog"
            }
        ];
        // help center menu
        const helpCenter = [
            {
                name: "About",
                link: "about",
            },
            {
                name: "Contact Us",
                link: "contact-us",
            },
            {
                name: "Sign Up",
                link: "sign-up",
            },
            {
                name: "Sign In",
                link: "sign-in",
            },
            {
                name: "Subscription",
                link: "subscrption",
            }
        ];

    return (
        <div className={Style.SideBar}>
            <GrClose
            className={Style.sideBar_closeBtn}
            onclick={()=>closeSideBar()}
            />

            <div className={Style.sideBar_box}>
                <Image src={images.logo} alt="logo" width={150} height={150}/>
                <p>
                    Discover the most outstanding articles on all the topics rellated to NFT's &
                    share your own stories.
                </p>
                <div className={Style.sideBar_social}>
                    <a href="#">
                        <TiSocialFacebook/>
                    </a>
                    <a href="#">
                        <TiSocialLinkedin/>
                    </a>
                    <a href="#">
                        <TiSocialTwitter/>
                    </a>
                    <a href="#">
                        <TiSocialYoutube/>
                    </a>
                    <a href="#">
                        <TiSocialInstagram/>
                    </a>
                </div>
            </div>
            <div className={Style.sideBar_menu}>
                <div>
                    <div className={Style.sideBar_menu_box}
                    onClick={() => openDiscoverMenu()}>

                        <p>Discover</p>
                        <TiArrowSortedDown/>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default SideBar;