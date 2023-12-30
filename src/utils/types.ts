export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: number;
  thumbnail: string;
  images: string[];
};

export type CartType = {
  [key: number]: boolean;
};
