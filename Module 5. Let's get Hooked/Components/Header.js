import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{

    const [btnNameReact, setbtnNameReact] = useState("Login");
    return (
        <div className="header">
            
            <div className="logo-contyainer"><Link to="/">
                <img className="logo" 
                src = {LOGO_URL}  /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login-btn"
                    onClick={() => {
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;