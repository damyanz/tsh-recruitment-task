import { fireEvent, render } from '@testing-library/react';

import Button from '../Button';

describe('Button', () => {
  test('Renders with correct classes', () => {
    const { getByText, rerender } = render(<Button>Click</Button>);

    const button = getByText('Click');
    expect(button).toHaveClass('bg-blue-primary text-white');

    rerender(<Button variant="secondary">Click</Button>);
    expect(button).toHaveClass('bg-white text-blue-primary');
  });

  test('Calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
