import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
    const CategoryArray = [images.creatorbackground1,images.creatorbackground10,images.creatorbackground2,images.creatorbackground5,images.creatorbackground9,images.creatorbackground8,images.creatorbackground7];
    return (
        <div className={Style.box_category}>
            <div className={Style.category}>
            {CategoryArray.map((el,i)=>(
                <div className={Style.category_box}  key={1+1}>
                    <Image 
                    src={el}
                    alt="Background Image"
                    width={350}
                    height={150}
                    objectFit="cover"
                    />
                    <div className={Style.category_box_title}>
                        <span>
                            <BsCircleFill/>
                        </span>
                        <div className={Style.category_box_title_info}>
                            <h4>Entertainment</h4>
                            <small>Demo NFTs</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
};

export default Category;