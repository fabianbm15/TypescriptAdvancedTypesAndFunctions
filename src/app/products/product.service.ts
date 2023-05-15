import { faker } from '@faker-js/faker';

import { Product } from './product.model';
import {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto,
} from './product.dto';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: Product['id'], // Se obtiene el tipado de Product['id'] (escalable)
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
  // code
  // dto.isNew = false; // Va a dar error debido a que es readonly

  // Se modifica el FindProductDto para impedir que ocurra esto:
  // dto.tags = []; // No me permite modificarlo
  // dto.tags?.pop(); // Si me permite hacerlo...
  // dto.tags?.push('as'); // Si me permite hacerlo...

  return products;
};
