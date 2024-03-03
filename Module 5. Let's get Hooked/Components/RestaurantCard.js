import { CDN_URL } from "../utils/contants";


const RestaurantCard = (props) =>{
    const {resData} = props;
    return (
        <div className="res-card" >
        <img className="res-logo" alt="res-logo" src={CDN_URL+ resData.info.cloudinaryImageId }/>
        <h3>{resData?.info?.name}</h3>
        <h5>{resData?.info?.cuisines?.join(", ")}</h5>
        <h5>{resData?.info?.areaName}</h5>
        <span>
        <h4>{resData?.info?.avgRating} stars</h4>
        <h4>•</h4>
        <h4>{resData?.info?.sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{resData?.info?.costForTwo}</h4>
        </span>
        </div>
    );
};

export default RestaurantCard;