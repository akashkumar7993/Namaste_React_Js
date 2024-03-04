import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCateogory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resinfo = useRestaurantMenu(resId);
    

    if (resinfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage}= 
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
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p> 
            {categories.map((rescat) => 
            (<RestaurantCateogory datamenu={rescat?.card?.card}/>)
            )}        
        </div>
    );
};

export default RestaurantMenu;