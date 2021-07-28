import { ProductsResponse } from 'interfaces/api/ProductsResponse.interface';

export const productsFetcher = async (
  params?: string,
): Promise<ProductsResponse> => {
  const res = await fetch(
    `${process.env.REACT_APP_TSH_API_URL}/products?${params}`,
  );
  return res.json();
};
