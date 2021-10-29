import { useContext } from "react";
import { CartContext } from "../../Providers/CartProvider";

export const Cart = () => {
  const { cart, deleteProduct } = useContext(CartContext);

  return (
    <>
      <div>
        <h1>Cart</h1>
        <button onClick={() => console.log(cart)}>aohndiuahd</button>

        <section>
          <ul>
            {cart &&
              cart.map((item) => (
                <li>
                  <h3>{item.name}</h3>
                  <img src={item.img} alt="" />
                  <span>{item.price}</span>
                  <button type="button" onClick={() => deleteProduct(item)}>
                    remove from cart
                  </button>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </>
  );
};
