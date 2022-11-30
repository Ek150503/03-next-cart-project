import Link from "next/link";
import { useContext, useState } from "react";
import { cartContext } from "./context";

const StoreSCart = ({ product }) => {
  const { addToCart, removeFromCart, getCountQuantity } =
    useContext(cartContext);
  // console.log(product);
  return (
    <div className='stores__cart'>
      <div className='img'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='info'>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
      <p>{product.title}</p>
      <div className='details'>
        <div className='btn'>
          <Link href={`stores/${product.id}`}>Details</Link>
        </div>
        <div className='btn__p'>
          <button
            onClick={() => {
              removeFromCart(product);
            }}
          >
            -
          </button>
          <p>{getCountQuantity(product)}</p>
          <button
            onClick={() => {
              addToCart(product);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreSCart;
