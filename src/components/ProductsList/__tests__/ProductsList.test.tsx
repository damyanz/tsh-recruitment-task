import { render } from '@testing-library/react';

import productData from 'components/ProductCard/__tests__/data.json';

import ProductsList from '../ProductsList';

describe('ProductsList', () => {
  test('Renders correct amound of ProductCard', () => {
    const amount = 4;
    const products = [...Array(amount)].map((_, index) => ({
      ...productData,
      id: index + 1,
    }));
    const { getAllByRole } = render(<ProductsList products={products} />);
    expect(getAllByRole('article')).toHaveLength(4);
  });
});
