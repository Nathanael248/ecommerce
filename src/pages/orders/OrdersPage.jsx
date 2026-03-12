import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { formatMoney } from "../../utils/money";

import "./OrdersPage.css";
import { Header } from "../../components/Header";
import { OrderProducts } from "./OrderProducts";
// images served from public folder

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const loadOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    loadOrders();
    // axios.get("/api/orders?expand=products").then((response) => {
    //   console.log(response.data);
    //   setOrders(response.data);
    // });
  }, []);

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.length > 0 &&
            orders.map((order) => {
              return (
                <div key={order.id} className="order-container">
                  <div className="order-header">
                    <div className="order-header-left-section">
                      <div className="order-date">
                        <div className="order-header-label">Order Placed:</div>
                        <div>
                          {dayjs(order.orderTimesMs).format("dddd MMMM D")}
                        </div>
                      </div>
                      <div className="order-total">
                        <div className="order-header-label">Total:</div>
                        <div>{formatMoney(order.totalCostCents)}</div>
                      </div>
                    </div>

                    <div className="order-header-right-section">
                      <div className="order-header-label">Order ID:</div>
                      <div>{order.id}</div>
                    </div>
                  </div>
                  <OrderProducts order={order} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
