import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    
    const [restaurants, setRestaurants] = useState(resList);

    return (
        <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const data = restaurants.filter(
                    (res) => res.info.avgRating > 4.3
                );
                setRestaurants(data);
            }}>
                Top Rated Restaurant
            </button>
        </div>


        <div className="res-container">
            {restaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
        </div>
        </div>
    );
};

export default Body;