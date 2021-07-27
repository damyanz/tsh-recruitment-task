export interface PaginationProps {
  name: string;
  pageCount: number;
  activePage: number;
  setActivePage: (page: number) => void;
}
