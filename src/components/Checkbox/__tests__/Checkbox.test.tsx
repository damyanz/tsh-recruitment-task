import { fireEvent, render } from '@testing-library/react';

import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  test('Handles change event', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Checkbox onChange={handleChange} />);
    fireEvent.click(getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('Displays label when prop provided', () => {
    const { getByText } = render(<Checkbox label="Checkbox label" />);
    expect(getByText('Checkbox label')).toBeInTheDocument();
  });
});
