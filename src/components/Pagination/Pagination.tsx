import clsx from 'clsx';
import { useMemo } from 'react';

import { generatePagesArray } from 'helpers/common';

import { PaginationProps } from './Pagination.interface';

function Pagination({
  name,
  pageCount,
  activePage,
  setActivePage,
}: PaginationProps) {
  const pages = useMemo(
    () => generatePagesArray(activePage, pageCount),
    [activePage, pageCount],
  );

  return (
    <nav className="flex max-w-full overflow-x-auto text-sm font-semibold select-none sm:overflow-x-visible">
      <button
        className="mr-8 disabled:text-gray-500 disabled:cursor-not-allowed"
        disabled={activePage === 1}
        onClick={() => setActivePage(1)}
      >
        First
      </button>
      <ul className="flex space-x-3 sm:space-x-4">
        {pages.map(page =>
          page ? (
            <li key={`pagination-${name}-${page}`}>
              <button
                onClick={() => setActivePage(page)}
                className={clsx('font-semibold', {
                  'text-blue-primary': activePage === page,
                })}
              >
                {page}
              </button>
            </li>
          ) : (
            <li key={`pagination-${name}-separator`}>
              <span className="pointer-events-none">...</span>
            </li>
          ),
        )}
      </ul>
      <button
        className="ml-8 disabled:text-gray-500 disabled:cursor-not-allowed"
        disabled={activePage === pageCount}
        onClick={() => setActivePage(pageCount)}
      >
        Last
      </button>
    </nav>
  );
}

export default Pagination;
