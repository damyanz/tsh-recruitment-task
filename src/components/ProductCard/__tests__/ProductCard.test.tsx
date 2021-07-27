import { render } from '@testing-library/react';

import { Product } from 'interfaces/api/Product.interface';

import ProductCard from '../ProductCard';
import productData from './data.json';

describe('ProductCard', () => {
  test('Displays provided product data', () => {
    const { name, description }: Product = productData;
    const { getByText, getByAltText } = render(
      <ProductCard product={productData} />,
    );
    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
    expect(getByAltText(name)).toBeInTheDocument();
  });

  test("Displays 'Promo' badge when promo prop is true", () => {
    const { getByText } = render(
      <ProductCard product={{ ...productData, promo: true }} />,
    );
    expect(getByText('Promo')).toBeInTheDocument();
  });

  test('Grays out image wrapper and disables button when active prop is false', () => {
    const { getByText, getByAltText } = render(
      <ProductCard product={{ ...productData, active: false }} />,
    );
    expect(getByAltText(productData.name).parentElement).toHaveClass(
      'grayscale',
    );
    expect(getByText('Unavailable')).toBeDisabled();
  });

  test('Displays placeholder div when image is not provided', () => {
    const { getByLabelText } = render(
      <ProductCard product={{ ...productData, image: '' }} />,
    );
    expect(getByLabelText('image-placeholder')).toBeInTheDocument();
  });
});
