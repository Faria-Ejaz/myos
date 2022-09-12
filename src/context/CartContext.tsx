import { useState, createContext, PropsWithChildren } from "react";
import { CartContextType, CartItemBase } from "./type";

const defaultContext: CartContextType = {
  cart: [],
  totalPrice: 0,
  totalProducts: 0,
  showModal: false,
  confirmOrder: false,
  setShowModal: () => [],
  setConfirmOrder: () => [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
};

export const CartContext = createContext<CartContextType>(defaultContext);

export const CartContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [products, setProducts] = useState<CartItemBase[]>([]);
  const [confirmOrder, setConfirm] = useState(false);
  const [showModal, setToggle] = useState(false);

  const setShowModal = (toggle: boolean) => {
    setToggle(toggle);
  };

  const setConfirmOrder = (confirmation: boolean) => {
    setConfirm(confirmation);
  };

  const getProductById = (id: string): CartItemBase | undefined => {
    return products.find((p) => p.category.id === id);
  };

  const addProductToCart = (product: CartItemBase): void => {
    const existingProduct = getProductById(product.category.id);
    let newState: CartItemBase[];
    if (existingProduct) {
      newState = products.map((p) => {
        if (p.category.id === existingProduct.category.id) {
          return {
            ...p,
            id: Math.floor(Math.random() * 1000),
          };
        }
        return p;
      });
      setProducts(newState);
    }
    let newProduct = { ...product, id: Math.floor(Math.random() * 1000) };
    setProducts([...products, newProduct]);
  };
  const removeProductFromCart = (product: CartItemBase) => {
    const newProducts = products.filter((p) => p.id !== product.id);
    setProducts(newProducts);
  };

  const contextValue: CartContextType = {
    showModal,
    setShowModal,
    confirmOrder,
    cart: products,
    setConfirmOrder,
    addProductToCart,
    removeProductFromCart,
    totalProducts: products.length,
    totalPrice: products.reduce((count, current) => count + current.price, 0),
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
