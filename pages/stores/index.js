import StoreSCart from "../../components/storesCart";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../components/context";

const StoresPage = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios(url);
      setProducts((p) => [...p, ...response.data]);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(products);
  if (products.length > 0) {
    return (
      <div className='stores'>
        <h3>Product Items</h3>
        {products.map((p) => {
          return <StoreSCart product={p} key={p.id} />;
        })}
      </div>
    );
  } else {
    return <div className='home'>Loading....</div>;
  }
};

export default StoresPage;
