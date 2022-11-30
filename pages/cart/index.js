import Card from "../../components/cart";
import { useContext } from "react";
import { cartContext } from "../../components/context";

const CartPage = () => {
  const { cart, getAllPrice, getAllQuantity } = useContext(cartContext);

  if (cart.length > 0) {
    return (
      <div className='carts'>
        {cart.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
        <div className='total'>
          <p>
            Total Quantity: {getAllQuantity(cart)} , Total Price: $
            {getAllPrice(cart)}{" "}
          </p>
        </div>
      </div>
    );
  }

  return <div className='home'>No Product</div>;
};

export default CartPage;
