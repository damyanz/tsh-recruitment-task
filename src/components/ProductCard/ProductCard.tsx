import clsx from 'clsx';
import { useState } from 'react';

import Badge from 'components/Badge';
import Button from 'components/Button';
import ProductLightbox from 'components/ProductLightbox';
import Rating from 'components/Rating';

import { ProductCardProps } from './ProductCard.interface';

function ProductCard({ product }: ProductCardProps) {
  const { id, name, description, image, rating, promo, active } = product;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden bg-white rounded-lg h-[400px]">
      <div
        className={clsx('relative w-full', {
          grayscale: !active,
        })}
      >
        {promo && <Badge className="absolute left-0 top-4">Promo</Badge>}
        {image ? (
          <img
            loading="lazy"
            src={image}
            alt={name}
            className="object-cover object-center h-[170px] w-full"
          />
        ) : (
          <div
            aria-label="image-placeholder"
            className="w-full h-[170px] bg-gray-500"
          ></div>
        )}
      </div>
      <div className="flex flex-col flex-1 px-4 pt-4 pb-6">
        <div className="flex flex-col flex-1 space-y-2">
          <h2 title={name} className="text-lg font-semibold leading-4">
            {name}
          </h2>
          <p title={description} className="text-sm text-gray-500 line-clamp-5">
            {description}
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <Rating name={`product-${id}`} rate={rating} />
          <Button disabled={!active} onClick={() => setIsLightboxOpen(true)}>
            {active ? 'Show details' : 'Unavailable'}
          </Button>
        </div>
      </div>
      {isLightboxOpen && (
        <ProductLightbox
          product={product}
          closeLightbox={() => setIsLightboxOpen(false)}
        />
      )}
    </article>
  );
}

export default ProductCard;
