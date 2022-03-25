import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import "./Header.css";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleAuthentication = () => {
    console.log("callling...");
    if (user) {
      auth.signOut();
    } else {
      navigate(!user && "/login");
    }
  };
  return (
    <div className="header">
      <img
        onClick={() => navigate("/")}
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* Logo */}
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello Guest </span>
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns </span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon onClick={() => navigate("/checkout")} />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
