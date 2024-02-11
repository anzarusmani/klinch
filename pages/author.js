import React,{useState, useEffect} from 'react';

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import {Banner} from "../collectionPage/collectionindex"; 
import images from "../img";
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard';
import {AuthorProfileCard,AuthorTaps,AuthorNFTCardBox} from "../authorPage/componentIndex";
import { Title } from '@/components/componentsindex';
import { Brand } from '@/components/componentsindex';

const author = () => {
  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
  ];
const [collectables,setCollectables]=useState(true);
const [ created,setCreated]=useState(false);
const [ like,setLike]=useState(false);
const [ follower,setFollower]=useState(false);
const [ following,setFollowing]=useState(false);

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground1}/>
      <AuthorProfileCard/>
      <AuthorTaps setCollectables={setCollectables} setCreated={setCreated} setLike={setLike} setFollower={setFollower} setFollowing={setFollowing}/>
      <AuthorNFTCardBox collectables={collectables} created={created} like={like} follower={follower} following={following}/>
      <Title heading="Popular Creators" paragraph="Click on music icon and enjoy NTF music or audio"/>
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div>
      <Brand/>
    </div>
  )
}

export default author
