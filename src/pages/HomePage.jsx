import "./header.css";
import "./HomePage.css";

import logoWhite from "../assets/images/logo-white.png";
import mobileLogoWhite from "../assets/images/mobile-logo-white.png";
import searchIcon from "../assets/images/icons/search-icon.png";
import cartIcon from "../assets/images/icons/cart-icon.png";
import checkmarkIcon from "../assets/images/icons/checkmark.png";
import socksImg from "../assets/images/products/athletic-cotton-socks-6-pairs.jpg";
import basketballImg from "../assets/images/products/intermediate-composite-basketball.jpg";
import tshirtImg from "../assets/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg";
import rating45 from "../assets/images/ratings/rating-45.png";
import rating40 from "../assets/images/ratings/rating-40.png";

export function HomePage() {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <a href="index.html" className="header-link">
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
          <a className="orders-link header-link" href="orders.html">
            <span className="orders-text">Orders</span>
          </a>

          <a className="cart-link header-link" href="checkout.html">
            <img className="cart-icon" src={cartIcon} />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </a>
        </div>
      </div>

      <div className="home-page">
        <div className="products-grid">
          <div className="product-container">
            <div className="product-image-container">
              <img className="product-image" src={socksImg} />
            </div>

            <div className="product-name limit-text-to-2-lines">
              Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>

            <div className="product-rating-container">
              <img className="product-rating-stars" src={rating45} />
              <div className="product-rating-count link-primary">87</div>
            </div>

            <div className="product-price">$10.90</div>

            <div className="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
              <img src={checkmarkIcon} />
              Added
            </div>

            <button className="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>

          <div className="product-container">
            <div className="product-image-container">
              <img className="product-image" src={basketballImg} />
            </div>

            <div className="product-name limit-text-to-2-lines">
              Intermediate Size Basketball
            </div>

            <div className="product-rating-container">
              <img className="product-rating-stars" src={rating40} />
              <div className="product-rating-count link-primary">127</div>
            </div>

            <div className="product-price">$20.95</div>

            <div className="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
              <img src={checkmarkIcon} />
              Added
            </div>

            <button className="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>

          <div className="product-container">
            <div className="product-image-container">
              <img className="product-image" src={tshirtImg} />
            </div>

            <div className="product-name limit-text-to-2-lines">
              Adults Plain Cotton T-Shirt - 2 Pack
            </div>

            <div className="product-rating-container">
              <img className="product-rating-stars" src={rating45} />
              <div className="product-rating-count link-primary">56</div>
            </div>

            <div className="product-price">$7.99</div>

            <div className="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
              <img src={checkmarkIcon} />
              Added
            </div>

            <button className="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
