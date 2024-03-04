import ItemList from "./itemList";

const RestaurantCateogory = ({datamenu}) => {
    return (
        <div className="res-menu-content">
        <div className="res-category">
            {/* header*/}
            <div className="res-category-head">
                <span>{datamenu?.title} ({datamenu.itemCards.length})</span>
                <span>˅</span>
            
            </div>

            {/*body*/}
            <div className="items-add">
            <ItemList items={datamenu.itemCards} />
            </div>
            </div>
        </div>
    );
};

export default RestaurantCateogory;