import { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
}

interface CartProps {
  children: ReactNode;
}

interface ShowCart {
  showCart: boolean;
}

interface CartProviderData {
  cart: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
  deleteAllProducts: () => void;
}

export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: Product) => {
    const newCart = cart.filter(
      (product) => product.name !== productToBeDeleted.name
    );
    setCart(newCart);
  };

  const deleteAllProducts = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, deleteProduct, deleteAllProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
