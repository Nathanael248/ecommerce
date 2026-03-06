import "./header.css";
import logoWhite from "../assets/images/logo-white.png";
import mobileLogoWhite from "../assets/images/mobile-logo-white.png";
import searchIcon from "../assets/images/icons/search-icon.png";
import cartIcon from "../assets/images/icons/cart-icon.png";

// Components folder is used to group shared data

export function Header() {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <a href="/" className="header-link">
            <img className="logo" src={logoWhite} />
            <img className="mobile-logo" src={mobileLogoWhite} />
          </a>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src={searchIcon} />
          </button>
        </div>

        <div className="right-section">
          <a className="orders-link header-link" href="/orders">
            <span className="orders-text">Orders</span>
          </a>

          <a className="cart-link header-link" href="/checkout">
            <img className="cart-icon" src={cartIcon} />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </a>
        </div>
      </div>
    </>
  );
}
