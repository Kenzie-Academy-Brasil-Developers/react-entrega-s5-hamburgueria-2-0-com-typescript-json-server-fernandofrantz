import { CartProvider } from "./CartProvider";
import { AuthProvider } from "./AuthProvider";
import { ReactNode } from "react";

interface CartProps {
  children: ReactNode;
}

export const Providers = ({ children }: CartProps) => (
  <AuthProvider>
    <CartProvider>{children}</CartProvider>
  </AuthProvider>
);
