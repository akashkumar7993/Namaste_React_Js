import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispath = useDispatch();
    const handleAddItem = (itemlist) => {
        dispath(addItem(itemlist))
    }

    return (
        <div>
            {items.map((itemlist) => (
                <div className="restro-menu-list" key={itemlist?.card?.info?.id}>
                    <div className="resto-menu-item">
                        <span>
                            <h3>{itemlist?.card?.info?.name}</h3>
                            <h4> - ₹ {itemlist?.card?.info?.price ? 
                            itemlist?.card?.info?.price/100 : 
                            itemlist?.card?.info?.defaultPrice/100}
                            </h4>
                        </span>
                        <p className="restro-menu-descri">{itemlist?.card?.info?.description}</p>
                    </div>
                    <div className="item-logo">
                        <img src={CDN_URL + itemlist?.card?.info?.imageId}/>
                        <div className="add-item">
                        <button className="add-btn" 
                        onClick={() => handleAddItem(itemlist)}
                        >Add +</button>
                        </div> 
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;