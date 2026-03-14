import axios from "axios";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { DeliveryOption } from "./DeliveryOption";
import { PaymentSummary } from "./PaymentSummary";

export function OrderSummary({
  deliveryOptions,
  cart,
  loadCart,
  loadPaymentSummary,
}) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            },
          );

          const deleteCartItem = async () => {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
            await loadPaymentSummary();
          };

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd MMMM D",
                )}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:{cartItem.quantity}
                      <span className="quantity-label"></span>
                    </span>
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>
                    <span
                      className="delete-quantity-link link-primary"
                      onClick={deleteCartItem}
                    >
                      Delete
                    </span>
                  </div>
                </div>

                <div className="delivery-options">
                  <div className="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  <DeliveryOption
                    deliveryOptions={deliveryOptions}
                    cartItem={cartItem}
                    loadCart={loadCart}
                    loadPaymentSummary={loadPaymentSummary}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
