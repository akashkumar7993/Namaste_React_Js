import { CDN_URL } from "../utils/contants";

const ItemList = ({items}) => {
    console.log(items);
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
                        <button className="add-btn">Add +</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;