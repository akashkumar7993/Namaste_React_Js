import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCateogory from "./RestaurantCategory";
import { CDN_URL } from "../utils/contants";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resinfo = useRestaurantMenu(resId);
    

    if (resinfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage,areaName,avgRating}= 
    resinfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    const categories = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(resinfo)
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
                {categories.map((rescat) => (
                <RestaurantCateogory datamenu={rescat?.card?.card}/>)
                )}                                
        </div>
    );
};

export default RestaurantMenu;