import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";
import { UseDispatch } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="Cart-Body">
            <span>
            <h3>Cart</h3>
            <div className="cart-items">
                <ItemList items={cartItems}/>
                {cartItems.length === 0 && <h5>Your cart is Empty add items to cart</h5>}
            </div>
            <div className="clear-btn">
            <button className="clear-cart" onClick={handleClearCart}>
             Clear cart
            </button>  
            </div>                      
            </span>
        </div>
    );
};

export default Cart;