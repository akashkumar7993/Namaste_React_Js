import {MenuShimmer} from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCateogory from "./RestaurantCategory";
import { CDN_URL } from "../utils/contants";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    const[showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <MenuShimmer/>;

    // const {name, cuisines, costForTwoMessage,areaName,avgRating}= 
    // resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    return(
        <div className="res-menu">
            <div className="res-menu-list">
            <img className="restro-logo" alt="restro-logo" src={CDN_URL+ resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId }/>
                <span>
                <h3>{resInfo?.cards[0]?.card?.card?.info?.name}</h3>
                <h4>{resInfo?.cards[0]?.card?.card?.info?.cuisines?.join(", ")}</h4>
                <h5>{resInfo?.cards[0]?.card?.card?.info?.areaName} | {resInfo?.cards[0]?.card?.card?.info?.avgRating} stars |  - {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h5> 
                </span>
                </div>
                
                {categories?.map((rescat, index) => (
                <RestaurantCateogory key={rescat?.card?.card?.title} 
                data={rescat?.card?.card} 
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}/>)
                )}                                
        </div>
    );
};

export default RestaurantMenu;