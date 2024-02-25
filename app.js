import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-contyainer">
                <img className="logo"
                src="https://static.vecteezy.com/system/resources/previews/007/500/121/original/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard = (props) =>{
    const {resData} = props;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
        <img className="res-logo" alt="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/odfnc6bpkk3luotlxxag"/>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(",")}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.costForTwo} For Two</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

const resObj = {
    "info": {
        "id": "30207",
        "name": "Bikanervala",
        "cloudinaryImageId": "actyptrbtt2tbjielttu",
        "locality": "Jawahar Nagar",
        "areaName": "Kamla Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "North Indian",
            "Snacks",
            "Chaat",
            "Sweets"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "45936",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 5.8,
            "serviceability": "SERVICEABLE",
            "slaString": "28 mins",
            "lastMileTravelString": "5.8 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-02-25 22:30:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "pureveg",
                                "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/bikanervala-jawahar-nagar-kamla-nagar-delhi-30207",
        "type": "WEBLINK"
    }
}

const Body = () => {
    return (
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container"><RestaurantCard resData={resObj}/></div>
        </div>
    );
};



const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)