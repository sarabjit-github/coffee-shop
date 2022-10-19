import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const url = "https://coffee-shop-api-sandy.vercel.app/api/v1/products";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coffee-shop-api-sandy.vercel.app/api/v1/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getSearchProducts: builder.query({
      query: (searchItem) => `results/?search_query=${searchItem}`,
    }),
    getSingleProduct: builder.query({
      query: (productId) => `products/${productId}`
    })
  }),
});

export const { useGetAllProductsQuery, useGetSearchProductsQuery, useGetSingleProductQuery } = apiSlice;
