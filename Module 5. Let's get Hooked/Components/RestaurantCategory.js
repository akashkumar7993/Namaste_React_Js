import ItemList from "./itemList";
import { useState } from "react";

const RestaurantCateogory = ({datamenu, showItems, setShowIndex}) => {
 
        const handleClick = () => {
            setShowIndex();
        }
    return (
        <div className="res-menu-content">
        <div className="res-category">
            {/* header*/}
            <div className="res-category-head" onClick={handleClick}>
                <span>{datamenu?.title} ({datamenu.itemCards.length})</span>
                <span>˅</span>
            
            </div>

            {/*body*/}
             
            {showItems && <ItemList items={datamenu.itemCards} />}
           
            </div>
        </div>
    );
};

export default RestaurantCateogory;