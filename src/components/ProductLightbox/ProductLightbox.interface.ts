import { Product } from 'interfaces/api/Product.interface';

export interface ProductLightboxProps {
  product: Product;
  closeLightbox: () => void;
}
