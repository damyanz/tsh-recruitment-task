import { useRef } from 'react';

import { ReactComponent as CloseIcon } from 'assets/svg/close.svg';
import Badge from 'components/Badge';
import Portal from 'components/Portal';
import useOutsideClick from 'hooks/useOutsideClick';

import { ProductLightboxProps } from './ProductLightbox.interface';

function ProductLightbox({ product, closeLightbox }: ProductLightboxProps) {
  const { name, description, image, promo } = product;

  const lightboxRef = useRef<HTMLDivElement>(null);
  useOutsideClick(lightboxRef, closeLightbox);

  return (
    <Portal>
      <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-full bg-black bg-opacity-90">
        <div
          ref={lightboxRef}
          className="bg-white max-h-[calc(100vh-80px)] sm:max-h-[calc(100vh-40px)] overflow-hidden relative flex flex-col w-[600px] sm:min-h-[530px] rounded-lg mx-6"
        >
          <div className="relative w-full">
            {promo && <Badge className="absolute left-0 top-4">Promo</Badge>}
            {image ? (
              <img
                src={image}
                alt={name}
                className="object-cover object-center h-[354px] w-full"
              />
            ) : (
              <div
                aria-label="image-placeholder"
                className="w-full h-[354px]"
              ></div>
            )}
          </div>
          <div className="flex flex-col flex-1 px-8 py-6 space-y-2 overflow-hidden">
            <h2 title={name} className="text-2xl leading-8 md:leading-10">
              {name}
            </h2>
            <p
              title={description}
              className="overflow-y-auto text-lg leading-6 text-gray-500"
            >
              {description}
            </p>
          </div>
          <CloseIcon
            onClick={closeLightbox}
            className="absolute cursor-pointer top-5 right-5"
          />
        </div>
      </div>
    </Portal>
  );
}

export default ProductLightbox;
