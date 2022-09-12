type Category = {
  id: string;
  name: string;
  image: string;
};

export interface CartItemBase {
  price: number;
  title: string;
  id: string | number;
  images: string[];
  category: Category;
  description: string;
}

export type CartContextType = {
  cart: CartItemBase[];
  showModal: boolean;
  totalPrice: number;
  totalProducts: number;
  confirmOrder: boolean;
  setShowModal: (toggle: boolean) => void;
  setConfirmOrder: (toggle: boolean) => void;
  addProductToCart: (product: CartItemBase) => void;
  removeProductFromCart: (item: CartItemBase) => void;
};
