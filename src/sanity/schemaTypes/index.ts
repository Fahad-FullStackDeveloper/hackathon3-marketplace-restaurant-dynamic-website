import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import product from './food';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, chef],
};
