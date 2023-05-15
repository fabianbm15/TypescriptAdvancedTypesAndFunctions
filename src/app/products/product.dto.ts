import { Product } from './product.model';

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Contrario de Omit
// type example = Pick<Product, 'color' | 'description'>;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Contrario de Partial
// type example2 = Required<Product>;

export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  // Se omite tags y se le agregan las dos propiedades, readonly y ReadonlyArray
  readonly tags: ReadonlyArray<string>;
}

// Readonly
// type example3 = Readonly<Product>;
