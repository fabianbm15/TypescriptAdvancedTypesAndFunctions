import { faker } from '@faker-js/faker';
import { addProduct, updateProduct } from './products/product.service';
import { products } from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.cmyk({ format: 'css' }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price({ min: 100, max: 200, dec: 0 })),
    isNew: faker.datatype.boolean(),
    tags: [faker.string.alpha(5), faker.string.alpha(5), faker.string.alpha(5)],
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),
    categoryId: faker.string.uuid(),
  });
}

console.log('products', products);
const product = products[0];
updateProduct(product.id, {
  title: 'New Title',
  stock: 80,
});
