// import useReactQuery from "./Hooks/useReactQuery";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("Smartphone");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await axios.get("/api/products?search=" + search);
        setProductList(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [search]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Somethig went wrong</h1>;
  }

  return (
    <>
      <h1>Product List: {productList.length}</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

export default App;
