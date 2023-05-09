import { addProduct } from './products/product.service';

addProduct({
  id: '2',
  title: 'p2',
  createdAt: new Date(),
  stock: 50,
  size: 'XL',
  category: {
    id: '12',
    name: 'c1',
  },
});

console.log('products', products);
