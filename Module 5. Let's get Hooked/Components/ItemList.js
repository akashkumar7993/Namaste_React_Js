const ItemList = ({items}) => {
    console.log(items);
    return (
        <div className="item-list">
                {items.map((itemlist) => (
                    <div className="one-item-list" key={itemlist?.card?.info?.id}>
                        <div className="item-list-info">
                            <span>{itemlist?.card?.info?.name}</span>
                            <span> -Rs {itemlist?.card?.info?.price ? 
                            itemlist?.card?.info?.price/100 : 
                            itemlist?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <p>{itemlist?.card?.info?.description}</p>
                        
                    </div>
                ))}          
        </div>
    );
};

export default ItemList;