type Category = {
  id: string;
  name: string;
  image: string;
};

export interface Product {
  price: number;
  title: string;
  id: string | number;
  images: string[];
  category: Category;
  description: string;
  }