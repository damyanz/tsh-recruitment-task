import { render } from '@testing-library/react';

import Pagination from '../Pagination';

describe('Pagination', () => {
  test('Renders correctly when pageCount <= 6', () => {
    const pageCount = 5;
    const { getByText } = render(
      <Pagination
        name="test"
        pageCount={pageCount}
        activePage={1}
        setActivePage={() => null}
      />,
    );
    for (let i = 1; i <= pageCount; i++) {
      expect(getByText(i)).toBeInTheDocument();
    }
  });

  test('Renders correctly when pageCount > 6', () => {
    const pageCount = 12;
    const { getByText, getAllByRole } = render(
      <Pagination
        name="test"
        pageCount={pageCount}
        activePage={1}
        setActivePage={() => null}
      />,
    );

    for (let i = 1; i <= 3; i++) {
      expect(getByText(i)).toBeInTheDocument();
    }

    expect(getByText('...')).toBeInTheDocument();

    for (let i = pageCount; i >= pageCount - 2; i--) {
      expect(getByText(i)).toBeInTheDocument();
    }

    expect(getAllByRole('listitem')).toHaveLength(7);
  });

  test('Renders correctly when activePage >= pageCount - 5', () => {
    const pageCount = 12;
    const { getByText } = render(
      <Pagination
        name="test"
        pageCount={pageCount}
        activePage={7}
        setActivePage={() => null}
      />,
    );

    for (let i = pageCount - 6; i <= pageCount; i++) {
      expect(getByText(i)).toBeInTheDocument();
    }
  });

  test('Highlights active page', () => {
    const { getByText } = render(
      <Pagination
        name="test"
        pageCount={10}
        activePage={2}
        setActivePage={() => null}
      />,
    );

    expect(getByText(2)).toHaveClass('text-blue-primary');
  });

  test("Disables 'First' and 'Last' buttons when activePage is 1st or last page", () => {
    const { getByText, rerender } = render(
      <Pagination
        name="test"
        pageCount={10}
        activePage={5}
        setActivePage={() => null}
      />,
    );
    const firstButton = getByText('First');
    const lastButton = getByText('Last');

    expect(firstButton).not.toBeDisabled();
    expect(lastButton).not.toBeDisabled();

    rerender(
      <Pagination
        name="test"
        pageCount={10}
        activePage={1}
        setActivePage={() => null}
      />,
    );
    expect(firstButton).toBeDisabled();
    expect(lastButton).not.toBeDisabled();

    rerender(
      <Pagination
        name="test"
        pageCount={10}
        activePage={10}
        setActivePage={() => null}
      />,
    );
    expect(lastButton).toBeDisabled();
    expect(firstButton).not.toBeDisabled();
  });
});
