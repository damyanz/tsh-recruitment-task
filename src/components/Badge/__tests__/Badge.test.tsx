import { render } from '@testing-library/react';

import Badge from '../Badge';

describe('Badge', () => {
  test('Displays correct text', () => {
    const { getByText } = render(<Badge>Promo</Badge>);
    expect(getByText('Promo')).toBeInTheDocument();
  });
});
