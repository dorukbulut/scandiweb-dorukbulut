import React from "react";
import "./Navbar.css";
import ShopLogo from "../../../assets/navlogo.svg";
import CartLogo from "../../../assets/cartlogo.svg";
import Arrow from "../../../assets/arrow.svg";

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <nav  id="navbar">
                <div className="cat-items">
                    <div className="">
                        <div className="item selected">WOMEN</div>
                        <hr></hr>
                    </div>
                    <div className="item">MEN</div>
                    <div className="item">KIDS</div>
                </div>

                <div className="nav-logo">
                    <img src={ShopLogo} alt="Shop Logo"/>
                </div>

                <div className="nav-action">
                    <div className="currency">
                        <div className="">

                        </div>

                        <div className="">
                            <img src={Arrow}/>
                            <div className="currency-options">
                                <div className="curr-option">$ USD</div>
                                <div className="curr-option">€ EUR</div>
                                <div className="curr-option">¥ JPY</div>
                            </div>
                        </div>
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