import ProductCard from 'components/ProductCard';

import { ProductsListProps } from './ProductsList.interface';

function ProductsList({ products }: ProductsListProps) {
  return (
    <section className="grid w-full grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 sm:gap-y-8">
      {products.map(product => (
        <ProductCard product={product} key={`product-card-${product.id}`} />
      ))}
    </section>
  );
}

export default ProductsList;
