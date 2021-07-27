const PAGINATION_GROUP_SIZE = 3;

export const generatePagesArray = (
  currentPage: number,
  pageCount: number,
): Array<number | null> => {
  if (pageCount <= PAGINATION_GROUP_SIZE * 2) {
    return [...Array(pageCount)].map((_, index) => index + 1);
  }

  let separator = null;
  let pagesFirstPart = [1, 2, 3];

  if (currentPage > 1) {
    pagesFirstPart = [currentPage - 1, currentPage, currentPage + 1];
  }

  if (currentPage >= pageCount - PAGINATION_GROUP_SIZE * 1.5 - 1) {
    const leftBoundary = pageCount - 2 * PAGINATION_GROUP_SIZE;
    pagesFirstPart = [leftBoundary, leftBoundary + 1, leftBoundary + 2];
    separator = pageCount - PAGINATION_GROUP_SIZE;
  }

  const pagesSecondPart = [pageCount - 2, pageCount - 1, pageCount];

  return [...pagesFirstPart, separator, ...pagesSecondPart];
};
