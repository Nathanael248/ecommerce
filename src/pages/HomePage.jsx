import { products } from "../starting-code/data/products";
import "./HomePage.css";
import { Header } from "../components/Header";

// import checkmarkIcon from "images/icons/checkmark.png";
// import socksImg from "../assets/images/products/athletic-cotton-socks-6-pairs.jpg";
// import basketballImg from "../assets/images/products/intermediate-composite-basketball.jpg";
// import tshirtImg from "../assets/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg";
// import rating45 from "../assets/images/ratings/rating-45.png";
// import rating40 from "../assets/images/ratings/rating-40.png";

export function HomePage() {
  return (
    <>
      <Header />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                  />
                  <div className={product.rating.count}>87</div>
                </div>

                <div className="product-price">
                  {product.priceCents.toFixed(2)}
                </div>

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
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
