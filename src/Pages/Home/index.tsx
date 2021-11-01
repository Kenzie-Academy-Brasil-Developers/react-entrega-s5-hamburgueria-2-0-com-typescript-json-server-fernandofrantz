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
import { TextField } from "@material-ui/core";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const Home = () => {
  // const [showInput, setShowInput] = useState<ShowInput>('');

  const [menu, setMenu] = useState<Product[]>();
  const history = useHistory();

  const { cart, addProduct } = useContext(CartContext);
  const { logout, authToken } = useContext(AuthContext);

  if (authToken === "") {
    history.push("/");
  }

  const handleRequisition = () => {
    axios
      .get("https://kenzie-hamburgueria.herokuapp.com/menu")
      .then((response) => setMenu(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(handleRequisition);

  const [showInput, setShowInput] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleSearch = () => {
    setShowInput(!showInput);
    setUserInput("");
  };

  return (
    <>
      <Container>
        <BoxMenu>
          <Title>
            <h1 className="titleBurguer">Burguer</h1>
            <h4 className="titleKenzie">Kenzie</h4>
          </Title>
          <BiSearchAlt onClick={handleSearch} />
          <AiOutlineShoppingCart onClick={() => history.push("/cart")} />
          <FiLogOut onClick={logout} />
        </BoxMenu>
        <Div>
          {showInput && (
            <TextField
              type="text"
              label="Pesquise por categoria."
              margin="normal"
              variant="outlined"
              size="small"
              color="primary"
              onChange={(evt) => setUserInput(evt.target.value)}
            />
          )}
          <SectionMenu>
            <UlMenu>
              {menu &&
                userInput !== "" &&
                menu
                  .filter(
                    (item) =>
                      item.category.toLocaleLowerCase() ===
                      userInput.toLocaleLowerCase()
                  )
                  .map((item) => (
                    <li key={item.id}>
                      <img src={item.img} alt="" />
                      <h3>{item.name}</h3>
                      <span>R$ {item.price}</span>
                      <button type="button" onClick={() => addProduct(item)}>
                        add to cart
                      </button>
                    </li>
                  ))}

              {menu &&
                userInput === "" &&
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
