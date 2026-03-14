import axios from "axios";
import { useNavigate } from "react-router";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import { useEffect, useState } from "react";
import "./CheckoutPage.css";

import { Header } from "../../components/Header";
// import "./checkout-header.css";

// product images are served from public folder

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);

  useEffect(() => {
    const loadDeliveryOptions = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);
    };
    loadDeliveryOptions();
    // axios
    //   .get("/api/delivery-options?expand=estimatedDeliveryTime")
    //   .then((response) => {
    //     setDeliveryOptions(response.data);
    //   });
  }, []);

  const loadPaymentSummary = async () => {
    const response = await axios.get("/api/payment-summary");
    setPaymentSummary(response.data);
  };
  useEffect(() => {
    // axios.get("/api/payment-summary").then((response) => {
    //   setPaymentSummary(response.data);
    // });
    loadPaymentSummary();
  }, []);

  const navigate = useNavigate();

  const createOrder = async () => {
    axios.post("/api/orders");
    await loadCart();
    navigate("/orders");
  };
  return (
    <>
      <title>Checkout</title>
      <Header cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliveryOptions={deliveryOptions}
            cart={cart}
            loadCart={loadCart}
            loadPaymentSummary={loadPaymentSummary}
          />

          <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>
            <PaymentSummary paymentSummary={paymentSummary} />

            <button
              className="place-order-button button-primary"
              onClick={createOrder}
            >
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
