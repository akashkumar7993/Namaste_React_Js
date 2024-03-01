import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    // WhenEver state variable update, react triggers a reconcilation cycle(re-renders the component)
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData =async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
            );

            const json = await data.json();
            setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    };


    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Hey There! it's looks like your Internet Connection is Off.....!</h1>

    if (restaurants.length === 0){
        return <Shimmer />
    }

    return (
        <div className="body">
        <div className="filter">
            <div className="search"> 
                <input type="text" className="search-box" value={searchText}
                onChange={(e) => {
                    setsearchText(e.target.value);
                }}
                />
                <button onClick={() => {
                    const filteredRestaurant = restaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setfilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
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
            {filteredRestaurant.map((restaurant)=>(
                <Link key={restaurant.info.id} 
                to={"/restaurants/" + restaurant.info.id}>
                <RestaurantCard  resData={restaurant}/>
                </Link>
            ))};
        </div>
        </div>
    );
};

export default Body;