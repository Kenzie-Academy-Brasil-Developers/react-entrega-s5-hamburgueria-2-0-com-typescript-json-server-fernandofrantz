import { useContext } from "react";
import { CartContext } from "../../Providers/CartProvider";
import {
  AiOutlineDelete,
  AiOutlineRollback,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { useHistory } from "react-router";
import {
  BoxQuantity,
  InitialBox,
  UlMenu,
  Section,
  Price,
  Linha,
} from "./styles";
import { AuthContext } from "../../Providers/AuthProvider";

export const Cart = () => {
  const { cart, deleteProduct } = useContext(CartContext);
  const { authToken } = useContext(AuthContext);
  const history = useHistory();
  return (
    <>
      <div>
        <InitialBox>
          <h3>Carrinho de compras</h3>
          <AiOutlineRollback onClick={() => history.push("/home")} />
        </InitialBox>

        <Section>
          <UlMenu>
            {cart.length === 0 && <span>Seu carrinho está vazio! </span>}
            {cart &&
              cart.map((item) => (
                <li>
                  <img src={item.img} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <BoxQuantity>
                      <AiOutlineMinus />
                      <p>1</p>
                      <AiOutlinePlus />
                    </BoxQuantity>
                  </div>

                  <AiOutlineDelete
                    className="buttonDelete"
                    onClick={() => deleteProduct(item)}
                  />
                </li>
              ))}
          </UlMenu>
          <Linha></Linha>
          <Price>
            <p>Total:</p>
            <p>
              R$
              {cart &&
                cart
                  .reduce((acc, atu) => {
                    let soma = acc + atu.price;
                    return soma;
                  }, 0)
                  .toFixed(2)}
            </p>
          </Price>
        </Section>
      </div>
    </>
  );
};
