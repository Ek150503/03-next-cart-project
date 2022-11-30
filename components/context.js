import { createContext, useState } from "react";
import Card from "./cart";

const cartContext = createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (product) => {
    const IsProductExist = cart.find((item) => item.id === product.id);
    if (IsProductExist) {
      return setCart(
        cart.map((item) => {
          return item.id === IsProductExist.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );
    }

    setCart((previusCart) => {
      return [...previusCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    const IsProductExist = cart.find((item) => item.id === product.id);

    if (IsProductExist) {
      if (IsProductExist.quantity === 1) {
        return setCart(
          cart.filter((item) => {
            return item.id !== IsProductExist.id;
          })
        );
      }

      if (IsProductExist.quantity > 1) {
        return setCart(
          cart.map((item) => {
            return item.id === IsProductExist.id
              ? { ...item, quantity: item.quantity - 1 }
              : item;
          })
        );
      }
    }
  };

  const getAllQuantity = (products) => {
    let quantity = 0;

    products.forEach((item) => {
      quantity += item.quantity;
    });

    return quantity;
  };

  const getAllPrice = (products) => {
    let price = 0;

    products.forEach((item) => {
      price += item.price * item.quantity;
    });

    return price;
  };

  const getCountQuantity = (product) => {
    const IsProductExist = cart.find((item) => item.id === product.id);

    return IsProductExist ? IsProductExist.quantity : 0;
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getCountQuantity,
        getAllPrice,
        getAllQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export { Provider, cartContext };
