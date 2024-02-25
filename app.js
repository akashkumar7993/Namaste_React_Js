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
        <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId }/>
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(",")}</h4>
        <h4>{resData.info.avgRating} stars</h4>
        <h4>{resData.info.costForTwo} For Two</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

const resList = [
    {
    "info": {
    "id": "169483",
    "name": "Bakingo",
    "cloudinaryImageId": "fa68ac0434f668bba1322abda36570b3",
    "locality": "West Arjun Nagar",
    "areaName": "Krishna Nagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Bakery",
    "Desserts",
    "Beverages",
    "Snacks"
    ],
    "avgRating": 4.4,
    "parentId": "3818",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 9,
    "serviceability": "SERVICEABLE",
    "slaString": "33 mins",
    "lastMileTravelString": "9.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹399",
    "discountTag": "FLAT DEAL"
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
    "link": "https://www.swiggy.com/restaurants/bakingo-west-arjun-nagar-krishna-nagar-delhi-169483",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "411450",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Bhavbhuti Marg",
    "areaName": "Paharganj",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4.2,
    "parentId": "547",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 3.6,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "3.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
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
    "link": "https://www.swiggy.com/restaurants/kfc-bhavbhuti-marg-paharganj-delhi-411450",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "253765",
    "name": "McDonald's",
    "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
    "locality": "Kumar Theatre",
    "areaName": "Chandni Chowk",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "American"
    ],
    "avgRating": 4.3,
    "parentId": "630",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-25 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹80"
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
    "link": "https://www.swiggy.com/restaurants/mcdonalds-kumar-theatre-chandni-chowk-delhi-253765",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "38925",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "mdl4tnyc8wbvysqxzhnq",
    "locality": "Netaji Subhash Marg",
    "areaName": "Daryaganj",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4.2,
    "parentId": "2456",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 30,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 01:55:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
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
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-netaji-subhash-marg-daryaganj-delhi-38925",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "317998",
    "name": "Khadak Singh Da Dhaba",
    "cloudinaryImageId": "8144bf37947c161953f656308d1bfc30",
    "locality": "Karkardooma",
    "areaName": "Karkardooma",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Mughlai",
    "Tandoor"
    ],
    "avgRating": 4.1,
    "parentId": "13170",
    "avgRatingString": "4.1",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 8.9,
    "serviceability": "SERVICEABLE",
    "slaString": "36 mins",
    "lastMileTravelString": "8.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹349",
    "discountTag": "FLAT DEAL"
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
    "link": "https://www.swiggy.com/restaurants/khadak-singh-da-dhaba-karkardooma-delhi-317998",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "76225",
    "name": "Subway",
    "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    "locality": "Malka Ganj Road",
    "areaName": "Kamla Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4,
    "parentId": "2",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-25 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
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
    "link": "https://www.swiggy.com/restaurants/subway-malka-ganj-road-kamla-nagar-delhi-76225",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "128116",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "hgvtyqrxzvpwmbs361er",
    "locality": "Kamla Nagar",
    "areaName": "Kamla Nagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.1,
    "parentId": "4961",
    "avgRatingString": "4.1",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "23 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 03:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
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
    "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-kamla-nagar-delhi-128116",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "8614",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Connaught Place",
    "areaName": "Connaught Place",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.4,
    "parentId": "166",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 4.5,
    "serviceability": "SERVICEABLE",
    "slaString": "27 mins",
    "lastMileTravelString": "4.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
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
    "link": "https://www.swiggy.com/restaurants/burger-king-connaught-place-delhi-8614",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "435678",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Western Extension Area",
    "areaName": "Karol Bagh",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 4,
    "parentId": "721",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 5.9,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "lastMileTravelString": "5.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 04:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹179"
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
    "link": "https://www.swiggy.com/restaurants/pizza-hut-western-extension-area-karol-bagh-delhi-435678",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "355347",
    "name": "Grameen Kulfi",
    "cloudinaryImageId": "cerf78mkhmur4cjnilkz",
    "locality": "LCS Market",
    "areaName": "Ashok Vihar",
    "costForTwo": "₹120 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "12175",
    "avgRatingString": "4.5",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 9.1,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "9.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "EVERY ITEM",
    "subHeader": "@ ₹99"
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
    "link": "https://www.swiggy.com/restaurants/grameen-kulfi-lcs-market-ashok-vihar-delhi-355347",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "302684",
    "name": "Barbeque Nation",
    "cloudinaryImageId": "v4ryntwbvxuogbwfg3kj",
    "locality": "Connaught Place",
    "areaName": "Connaught Place",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "North Indian",
    "Barbecue",
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    "avgRating": 4.1,
    "parentId": "2438",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "29 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-25 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹599",
    "discountTag": "FLAT DEAL"
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
    "link": "https://www.swiggy.com/restaurants/barbeque-nation-connaught-place-delhi-302684",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "51710",
    "name": "Theobroma",
    "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
    "locality": "Karol Bagh",
    "areaName": "East Patel Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Bakery",
    "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "1040",
    "avgRatingString": "4.5",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 7.8,
    "serviceability": "SERVICEABLE",
    "slaString": "29 mins",
    "lastMileTravelString": "7.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 00:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹849",
    "discountTag": "FLAT DEAL"
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
    "link": "https://www.swiggy.com/restaurants/theobroma-karol-bagh-east-patel-nagar-delhi-51710",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "17835",
    "name": "Behrouz Biryani",
    "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
    "locality": "Minto Road",
    "areaName": "Connaught Place",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Kebabs",
    "Mughlai",
    "Beverages",
    "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "1803",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "32 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-25 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
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
    "link": "https://www.swiggy.com/restaurants/behrouz-biryani-minto-road-connaught-place-delhi-17835",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "62881",
    "name": "LunchBox - Meals and Thalis",
    "cloudinaryImageId": "qwxytz94vjl3hqbdpeqo",
    "locality": "R Block",
    "areaName": "Laxmi Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Punjabi",
    "Healthy Food",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "4925",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 7.5,
    "serviceability": "SERVICEABLE",
    "slaString": "31 mins",
    "lastMileTravelString": "7.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-25 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹159"
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
    "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-r-block-laxmi-nagar-delhi-62881",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "411287",
    "name": "The Belgian Waffle Co.",
    "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
    "locality": "F Block",
    "areaName": "Hudson Lane",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Waffle",
    "Desserts",
    "Ice Cream"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "2233",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 6.8,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "6.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 04:00:00",
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
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
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
    "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-f-block-hudson-lane-delhi-411287",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "15503",
    "name": "Wow! Momo",
    "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
    "locality": "Ajmal Khan Road",
    "areaName": "Karol Bagh",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Tibetan",
    "Healthy Food",
    "Asian",
    "Chinese",
    "Snacks",
    "Continental",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "1776",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 8.1,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "lastMileTravelString": "8.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 05:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹499",
    "discountTag": "FLAT DEAL"
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
    "link": "https://www.swiggy.com/restaurants/wow-momo-ajmal-khan-road-karol-bagh-delhi-15503",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "25823",
    "name": "Faasos - Wraps, Rolls & Shawarma",
    "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
    "locality": "Minto Road",
    "areaName": "Connaught Place",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Kebabs",
    "Fast Food",
    "Snacks",
    "American",
    "Healthy Food",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "21809",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-25 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
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
    "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-minto-road-connaught-place-delhi-25823",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "169835",
    "name": "NIC Ice Creams",
    "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
    "locality": "Beadon Pura",
    "areaName": "Karol Bagh",
    "costForTwo": "₹120 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "6249",
    "avgRatingString": "4.6",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 00:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
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
    "link": "https://www.swiggy.com/restaurants/nic-ice-creams-beadon-pura-karol-bagh-delhi-169835",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "25397",
    "name": "Oven Story Pizza - Standout Toppings",
    "cloudinaryImageId": "b39e4312ae2e9f65c3b58faaed83f488",
    "locality": "Minto Road",
    "areaName": "Connaught Place",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "3534",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "34 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-25 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
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
    "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-minto-road-connaught-place-delhi-25397",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "27797",
    "name": "Natural Ice Cream",
    "cloudinaryImageId": "huwcwcxol7dnbemjlilq",
    "locality": "L Block",
    "areaName": "Connaught Place",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "2093",
    "avgRatingString": "4.7",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 4.6,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "4.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-02-26 00:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
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
    "link": "https://www.swiggy.com/restaurants/natural-ice-cream-l-block-connaught-place-delhi-27797",
    "type": "WEBLINK"
    }
    }
    ]

const Body = () => {
    return (
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {resList.map((restaurant)=>(
                <RestaurantCard resData={restaurant}/>
            ))}
        </div>
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