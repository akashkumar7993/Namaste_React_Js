import ItemList from "./ItemList";

const RestaurantCateogory = ({data, showItems, setShowIndex}) => {
 
        const handleClick = () => {
            setShowIndex();
        }
        
    return (
        <div className="res-menu-content">
        <div className="res-category">
            {/* header*/}
            <div className="res-category-head" onClick={handleClick}>
                <span>{data?.title} ({data.itemCards.length})</span>
                <span>˅</span>
            
            </div>

            {/*body*/}
             
            {showItems && <ItemList items={data.itemCards} />}
           
            </div>
        </div>
    );
};

export default RestaurantCateogory;