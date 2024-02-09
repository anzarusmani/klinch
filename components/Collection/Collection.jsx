import React, {useState, useEffect} from 'react';

import {
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3
} from "react-icons/bs"

// Internal import
import Style from './Collection.module.css';
import DaysComponent from "./DaysComponents/DaysComponents";
import images from "../../img";

const Collection = () => {
    const [popular, setpopular] = useState(true);
    const [following, setfollowing] = useState(false);
    const [news, setnews] = useState(false);

    const CardArray = [
        {
          background: images.creatorbackground1,
          user: images.user1,
        },
        {
          background: images.creatorbackground2,
          user: images.user2,
        },{
          background: images.creatorbackground3,
          user: images.user3,
        },{
          background: images.creatorbackground4,
          user: images.user4,
        },{
          background: images.creatorbackground5,
          user: images.user5,
        },{
          background: images.creatorbackground6,
          user: images.user6,
        },{
          background: images.creatorbackground7,
          user: images.user7,
        },{
          background: images.creatorbackground10,
          user: images.user10,
        }];
      const followingArray = [
        {
          background: images.creatorbackground1,
          user: images.user1,
        },
        {
          background: images.creatorbackground2,
          user: images.user2,
        },{
          background: images.creatorbackground5,
          user: images.user5,
        },{
          background: images.creatorbackground6,
          user: images.user6,
        },{
          background: images.creatorbackground7,
          user: images.user7,
        },{
          background: images.creatorbackground10,
          user: images.user10,
        }
      ];
      const newsArray = [
        {
          background: images.creatorbackground1,
          user: images.user1,
        },
        {
          background: images.creatorbackground2,
          user: images.user2,
        },{
          background: images.creatorbackground3,
          user: images.user3,
        },{
          background: images.creatorbackground4,
          user: images.user4,
        },{
          background: images.creatorbackground5,
          user: images.user5,
        }
      ];


    const openPopular = ()=> {
        if(!popular){
            setpopular(true);
            setfollowing(false);
            setnews(false);
        }
    };
    const openFollower = ()=> {
        if(!following){
            setpopular(false);
            setfollowing(true);
            setnews(false);
        }
    };
    const openNews = ()=> {
        if(!news){
            setpopular(false);
            setfollowing(false);
            setnews(true);
        }
    };
    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Top Collections</h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button onClick={() => openPopular()}>
                            <BsFillAlarmFill/> Last 24 hours
                        </button>
                        <button onClick={() => openFollower()}>
                            <BsCalendar3/> Last 7 days
                        </button>
                        <button onClick={() => openNews()}>
                            <BsFillCalendarDateFill/> Last 30 days
                        </button>
                    </div>
                </div>
            </div>
            {popular && (
                    <div className={Style.collection_box}>
                        {CardArray.map((el,i)=>(
                            <DaysComponent key={i+1} i = {i} el = {el}/>
                        ))}
                    </div>
                )}

            {following && (
                    <div className={Style.collection_box}>
                        {followingArray.map((el, i) => (
                            <DaysComponent key={i + 1} i = {i} el = {el}/>
                        ))}
                    </div>
                )}

            {news && (
                <div className={Style.collection_box}>
                    {newsArray.map((el, i) => (
                        <DaysComponent key={i + 1} i = {i} el = {el}/>
                    ))}
                    </div>
                )}
            </div>
        );
};

export default Collection;