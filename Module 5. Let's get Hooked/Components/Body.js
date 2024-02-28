import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData =async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
            );

            const json = await data.json();

            console.log(json);
            setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)    
    };

    if (restaurants.length === 0){
        return <Shimmer />
    }

    return (
        <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = restaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setRestaurants(filteredList);
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