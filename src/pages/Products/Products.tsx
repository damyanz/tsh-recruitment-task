import { useWindowWidth } from '@react-hook/window-size';
import { stringify } from 'query-string';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {
  BooleanParam,
  NumberParam,
  StringParam,
  useQueryParams,
} from 'use-query-params';

import NoProductsFound from 'components/NoProductsFound';
import Pagination from 'components/Pagination';
import ProductsList from 'components/ProductsList';
import Spinner from 'components/Spinner';
import { productsFetcher } from 'helpers/fetchers';
import { ProductsResponse } from 'interfaces/api/ProductsResponse.interface';

function Products() {
  const windowWidth = useWindowWidth();
  const [urlParams, setUrlParams] = useQueryParams({
    page: NumberParam,
    search: StringParam,
    active: BooleanParam,
    promo: BooleanParam,
  });
  const [itemsLimit, setItemsLimit] = useState(8);
  const queryParams = stringify({ ...urlParams, limit: itemsLimit });

  const { data, isLoading } = useQuery<ProductsResponse, Error>(
    ['products', queryParams],
    () => productsFetcher(queryParams),
    {
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    setItemsLimit(windowWidth >= 640 ? (windowWidth >= 1024 ? 8 : 6) : 4);
  }, [windowWidth]);

  const handlePageChange = (page: number) => {
    setUrlParams({ page: page === 1 ? undefined : page });
    window.scrollTo({ top: 140, behavior: 'smooth' });
  };

  return (
    <div className="max-w-[1224px] px-6 sm:px-0 sm:mx-8 pb-[68px] pt-6 sm:py-14 w-full h-full justify-center flex">
      {isLoading ? (
        <Spinner className="mt-20" />
      ) : data?.items?.length ? (
        <div className="flex flex-col items-center w-full space-y-14">
          <ProductsList products={data.items} />
          <Pagination
            name="products-list"
            pageCount={data.meta.totalPages}
            activePage={urlParams.page || 1}
            setActivePage={handlePageChange}
          />
        </div>
      ) : (
        <NoProductsFound />
      )}
    </div>
  );
}

export default Products;
