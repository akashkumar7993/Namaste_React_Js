import React from "react";
import ReactDOM from "react-dom/client";
import Body from "../Components/Body";
import Header from "../Components/Header";
import RestaurantCard from "../Components/RestaurantCard";


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