import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import { ProductsGrid } from "./productsGrid";

import { Header } from "../../components/Header";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
