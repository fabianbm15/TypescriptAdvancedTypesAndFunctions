import { faker } from '@faker-js/faker';
import { addProduct } from './products/product.service';
import { products } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.string.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.cmyk({ format: 'css' }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price({ min: 100, max: 200, dec: 0 })),
    isNew: faker.datatype.boolean(),
    tags: [faker.string.alpha(5), faker.string.alpha(5), faker.string.alpha(5)],
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({ min: 10, max: 100 }),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
}

console.log('products', products);
