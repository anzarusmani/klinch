import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
//----Import Icon

import {MdNotification} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";




//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import {Discover, HelpCenter, Notification, Profile, SideBar} from "./index";
import {Button} from "../componentindex";
import images from "../../img";
const NavBar = () => {
    //USEstate comp
    const [discover,setDiscover]=useState(false);
    const [help, setHelp] = useState(false) ;
    const [notification, setNotification] = useState(false);
    const [profile,setProfile]=useState(false);
    const [openSideMenu,setOpenSideMenu]=useState(false);

    const openMenu=(e)=>{
        const btnText=e.target.innerText;
        if(btnText =="Discover"){
            setDiscover(true);
            setHelp(false);
            setNotification(false);
            setProfile(false);
            }else if (btnText=="Help Center"){
                setDiscover(false);
                setHelp(true);
                setNotification(false);
                setProfile(false);
        }
        else{
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        }
    };

    return (
    <div className={Style.navbar}>
        <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
            <div className={Style.logo}>
                <Image 
                src={images.logo}
                alt="NFT MarketPlace "
                width={100}
                height={100}
                />
            </div>
            <div className={Style.navbar_container_left_box_input}>
                <div className={Style.navbar_container_left_box_input_box}>
                    <input type='text' placeholder="Search NFT"/>
                    <BsSearch onClick={()=>{}} className={Style.search_con} />
                </div>
            </div>
        </div>

        //End OF LEFT Section
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>

            //Discover Menu
            <p onClick={(e)=>openMenu(e)}>Discover</p>
            {discover && (
                <div className={Style.navbar_container_right_discover_box}>
                <Discover/>
            </div>
            )}
            
            </div>  

            {/* Help Center Menu */}
            <div className={Style.navbar_container_right_help}>
                <p onClick={(e)=>openMenu(e)}>Help Center</p>
                {
                    help && (
                <div className={Style.navbar_container_right_help_box}>
                    <HelpCenter />
                </div>
                    )
                }
            </div>

                {/* Notification */}
        </div>
        </div>
        </div>
    );
};

export default NavBar;