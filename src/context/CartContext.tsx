import { HTMLAttributes, useState, createContext } from "react";

export interface CartItemBase {
  id: string;
  category: any;
categoryId: any;
description: any;
images: any;
price: any;
title: any;
quantity: any;
}

export type CartListItem<TItemType extends CartItemBase> = {
  product: TItemType;
  quantity: number;
};

export type CartContextType<TItemType extends CartItemBase> = {
  cart: any;
  addProductToCart: (product: TItemType) => void;
  removeProductFromCart: (item: TItemType, index: any) => void;

  showModal: boolean;
    setShowModal: (toggle: boolean) => void;
};

const defaultContext: CartContextType<any> = {
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  showModal: false,
  setShowModal: () => [],
};

export const CartContext  =
  createContext<any>(defaultContext);

export const CartContextProvider = <TItemType extends CartItemBase>({
  children,
}: any) => {
  
  const [products, setProducts] = useState<TItemType[]>([]);

  const [showModal, setToggle] = useState(false);

  const setShowModal = (toggle: boolean) => {
    setToggle(toggle);
  };

  const getProductById = (id: string): TItemType | undefined => {
    return products.find((p) => p.category.id === id);
  };

  const addProductToCart = (product: TItemType): void => {
    const existingProduct = getProductById(product.category.id);
    let newState: TItemType[];
    if (existingProduct) {
      newState = products.map((p, index) => {
        if (p.category.id === existingProduct.category.id) {
          return {
             ...p, id: Math.floor(Math.random() * 1000)
          };
        }
        return p ;
      });
      setProducts(newState);
    }
    let newProduct = {...product, id: Math.floor(Math.random() * 1000)}
    setProducts([...products, newProduct ]);
  };
  const removeProductFromCart = (product: TItemType, index: any) => {

    const newProducts = products.filter((p) => p.id !== product.id);
    setProducts(newProducts);
  };

  const contextValue: CartContextType<TItemType> = {
    cart: products,
    addProductToCart,
    removeProductFromCart,
    showModal,
    setShowModal,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
