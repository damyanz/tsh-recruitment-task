import { fireEvent, render } from '@testing-library/react';

import TextInput from '../TextInput';

describe('TextInput', () => {
  test('Handles change event', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Input placeholder" onChange={handleChange} />,
    );
    fireEvent.change(getByPlaceholderText('Input placeholder'), {
      target: { value: 'phrase' },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('Displays search icon when variant prop is "search"', () => {
    const { getByLabelText } = render(<TextInput variant="search" />);
    expect(getByLabelText('Search icon')).toBeInTheDocument();
  });
});
