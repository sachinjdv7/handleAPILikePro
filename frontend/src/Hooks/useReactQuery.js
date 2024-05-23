import axios from "axios";
import React, { useEffect, useState } from "react";

function useReactQuery(urlpath) {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await axios.get(urlpath);
        setProductList(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);
  return [productList, error, loading];
}

export default useReactQuery;
