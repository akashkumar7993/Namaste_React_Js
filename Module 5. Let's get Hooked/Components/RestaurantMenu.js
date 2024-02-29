import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resinfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=253765&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);

        setresInfo(json.data);
    }

    if (resinfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage}= 
    resinfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);
    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item)=> (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -{"Rs."}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;