import React from "react";
import "./Navbar.css";
import ShopLogo from "../../../assets/navlogo.svg";
import CartLogo from "../../../assets/cartlogo.svg";

class Navbar extends React.Component {

    render() {
        return(
            <nav  id="navbar">
                <div className="cat-items">
                    <div>WOMEN</div>
                    <div>MEN</div>
                    <div>KIDS</div>
                </div>

                <div className="nav-logo">
                    <img src={ShopLogo} alt="Shop Logo"/>
                </div>

                <div className="nav-action">
                    <div>

                    </div>

                    <div>
                        <img src={CartLogo} alt="Cart Logo" />
                    </div>
                </div>

            </nav>
        );
    }
    
}

export default Navbar;