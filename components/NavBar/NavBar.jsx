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


    return (
    <div className={Style.navbar}>
        <div className={Style.navbar_contain}></div</</div>
    )
};

export default NavBar;