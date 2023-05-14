import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = '1' // No me permite porque es solo readonly
  products.push(data);
};
