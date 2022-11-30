import { useRouter } from "next/router";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { cartContext } from "../../components/context";

const StorePage = () => {
  const { addToCart } = useContext(cartContext);
  const router = useRouter();
  const { storeId } = router.query;
  const [product, setProduct] = useState({});
  // const [amount, setAmount] = useState(0);
  // console.log(storeId);
  const fetchSingleData = async (id) => {
    if (!id) return;
    const url = `https://fakestoreapi.com/products/${id}`;
    try {
      const response = await axios(url);
      setProduct(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  // console.log(!product);
  // console.log(Object.keys(product).length > 0);
  useEffect(() => {
    fetchSingleData(storeId);
  }, [storeId]);
  if (Object.keys(product).length > 0) {
    return (
      <div className='store'>
        <div className='img'>
          <img src={product.image} />
        </div>
        <div className='details__product'>
          <h3>{product.title}</h3>
          <p className='rating'>⭐⭐⭐⭐⭐</p>
          <p className='amount'>{product.price}</p>
          <p className='des'>{product.description}</p>
          <div className='input'>
            <button
              className='btn'
              onClick={() => {
                addToCart(product);
              }}
            >
              ADD TO CARD
            </button>
          </div>

          <p>Category: {product.category}</p>
        </div>
      </div>
    );
  } else {
    <div className='home'>Loading....</div>;
  }
};

export default StorePage;
