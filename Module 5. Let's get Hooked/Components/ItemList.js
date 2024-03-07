import { CDN_URL } from "../utils/contants";

const ItemList = ({items}) => {
    console.log(items);
    return (
        <div>
            {items.map((itemlist) => (
                <div className="restro-menu-list" key={itemlist?.card?.info?.id}>
                    <div className="resto-menu-item">
                        <span>{itemlist?.card?.info?.name}</span>
                        <span> - ₹ {itemlist?.card?.info?.price ? 
                            itemlist?.card?.info?.price/100 : 
                            itemlist?.card?.info?.defaultPrice/100}
                        </span>
                    </div>
                    <p className="restro-menu-descri">{itemlist?.card?.info?.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemList;