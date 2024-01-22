import React from 'react';
import Link from 'next/link';

//Internal import
import Style from './Discover.module.css';

const Discover = () => {

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
    
]

    return <div>Discover</div>;
    
};

export default Discover;
