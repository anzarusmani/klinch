import React,{useState, useEffect} from 'react';

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import {Banner} from "../collectionPage/collectionindex"; 
import images from "../img";
import {AuthorProfileCard,AuthorTaps,TabCard} from "../authorPage/componentIndex";

const author = () => {
    const popularArray=[
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
        images.user6,
        images.user7,
        images.user8,
    ]
const [collectiables,setCollectiables]=useState(true);
const [ created,setCreated]=useState(false);
const [ like,setLike]=useState(false);
const [ follower,setFollower]=useState(false);
const [ following,setFollowing]=useState(false);

  return (
    <div>
    
    </div>
  )
}

export default author
