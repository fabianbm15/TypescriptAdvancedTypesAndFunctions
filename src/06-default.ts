export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock,
    isNew,
  };
};

const p1 = createProduct(1, true, 12);
console.log('p1', p1);

const p2 = createProduct(1);
console.log('p2', p2);

const p3 = createProduct(1, false, 0);
console.log('p3', p3);

const p4 = createProduct(1, true, 100);
console.log('p4', p4);

const p5 = createProduct(5, true);
console.log('p5', p5);
