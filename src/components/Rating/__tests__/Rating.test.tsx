import { render } from '@testing-library/react';

import Rating from '../Rating';

describe('Rating', () => {
  test('Renders correct amount of filled and outlined stars', () => {
    const { getAllByLabelText } = render(<Rating name="test" rate={3} />);
    expect(getAllByLabelText('rate')).toHaveLength(3);
    expect(getAllByLabelText('missing-rate')).toHaveLength(2);
  });

  test('Renders correct amount of stars when maxRate prop is provided', () => {
    const { getAllByLabelText } = render(
      <Rating name="test" rate={5} maxRate={9} />,
    );
    expect(getAllByLabelText('rate')).toHaveLength(5);
    expect(getAllByLabelText('missing-rate')).toHaveLength(4);
  });
});
