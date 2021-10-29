import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../../Providers/CartProvider";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import {
  BoxMenu,
  Title,
  SectionMenu,
  UlMenu,
  Container,
  Box,
  Div,
} from "./styles";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoFastFoodOutline } from "react-icons/io5";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface Input {
  showInput: string;
}

export const Home = () => {
  const [showInput, setShowInput] = useState<Input>();
  const [menu, setMenu] = useState<Product[]>();
  const history = useHistory();
  const { cart, addProduct } = useContext(CartContext);
  const { logout } = useContext(AuthContext);

  const handleRequisition = () => {
    axios
      .get("https://kenzie-hamburgueria.herokuapp.com/menu")
      .then((response) => setMenu(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(handleRequisition);

  return (
    <>
      <Container>
        <BoxMenu>
          <Title>
            <h1 className="titleBurguer">Burguer</h1>
            <h4 className="titleKenzie">Kenzie</h4>
          </Title>
          <BiSearchAlt onClick={() => console.log("aaa")} />
          <AiOutlineShoppingCart onClick={() => history.push("/cart")} />
          <FiLogOut onClick={logout} />
        </BoxMenu>
        <Div>
          <SectionMenu>
            <UlMenu>
              {menu &&
                menu.map((item) => (
                  <li key={item.id}>
                    <img src={item.img} alt="" />
                    <h3>{item.name}</h3>
                    <span>R$ {item.price}</span>
                    <button type="button" onClick={() => addProduct(item)}>
                      add to cart
                    </button>
                  </li>
                ))}
            </UlMenu>
          </SectionMenu>
          <Box>
            <IoFastFoodOutline />
            <p>"Experimentar novos sabores faz bem à saúde!"</p>
          </Box>
        </Div>
      </Container>
    </>
  );
};
