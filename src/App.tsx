import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getProduct } from "./api/products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const result = await getProduct();
      setProducts(result);
    }
    fetchProducts();
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>AWS2 </h1>
      <h2>products</h2>
      <ul>
        {products.map(
          (product: { name: string; id: number; price: number }) => {
            return (
              <li key={product.id}>
                {product.name}: {product.price}
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}

export default App;
