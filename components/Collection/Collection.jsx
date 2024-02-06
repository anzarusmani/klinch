import React, {useState, useEffect} from 'react';

import {
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3
} from "react-icons/bs"

// Internal import
import Style from './Collection.module.css';
import DaysComponent from "./DaysComponents/DaysComponents";

const Collection = () => {
    const [popular, setpopular] = useState(true);
    const [following, setfollowing] = useState(false);
    const [news, setnews] = useState(false);

    const CardArray = [1,2,3,4,5,6,7,8];
    const followingArray = [1,2,3,4];
    const newsArray = [1,2,3,4,5,6];

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
                <h2>Top List Creator</h2>
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
                            <DaysComponent key={i+1}/>
                        ))}
                    </div>
                )}

            {following && (
                    <div className={Style.collection_box}>
                        {followingArray.map((el, i) => (
                            <DaysComponent key={i + 1} />
                        ))}
                    </div>
                )}

            {news && (
                <div className={Style.collection_box}>
                    {newsArray.map((el, i) => (
                        <DaysComponent key={i + 1} />
                    ))}
                    </div>
                )}
            </div>
        );
};

export default Collection;