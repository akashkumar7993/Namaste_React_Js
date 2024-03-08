import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCateogory from "./RestaurantCategory";
import { CDN_URL } from "../utils/contants";
import { useState } from "react";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resinfo = useRestaurantMenu(resId);
    const[showIndex, setShowIndex] =useState(0);

    if (resinfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage,areaName,avgRating}= 
    resinfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    const categories = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    return(
        <div className="res-menu">
            <div className="res-menu-list">
            <img className="restro-logo" alt="restro-logo" src={CDN_URL+ resinfo?.cards[0]?.card?.card?.info.cloudinaryImageId }/>
                <span>
                <h3>{name}</h3>
                <h4>{cuisines?.join(", ")}</h4>
                <h5>{areaName} | {avgRating} stars |  - {costForTwoMessage}</h5> 
                </span>
                </div>
                {categories.map((rescat, index) => (
                <RestaurantCateogory key={rescat?.card?.card?.title} 
                datamenu={rescat?.card?.card} 
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}/>)
                )}                                
        </div>
    );
};

export default RestaurantMenu;