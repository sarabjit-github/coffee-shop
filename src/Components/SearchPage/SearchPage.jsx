import React from "react";
import { Menucard } from "../MenuCard/Menucard";
import "./Scss/searchpage.css";
import { useGetSearchProductsQuery } from "../../features/api/apiSlice";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const SearchPage = () => {
  const { searchItem } = useParams();
  const {
    data: allProducts,
    isLoading,
    isError,
    isSuccess,
  } = useGetSearchProductsQuery(searchItem);

  if (isLoading) return <Loader />;
  if (isError) <div>Some Error occured</div>;
  return (
    <>
      {isSuccess && (
        <div className="menu-container">
          <div className="search-heading">
            You search for <span>"{searchItem}"</span>
          </div>
          <div className="mc-con">
            {allProducts.length !== 0 & allProducts !== undefined ?
              allProducts?.map(
                ({
                  id,
                  title,
                  price,
                  category,
                  image,
                  rating,
                  description,
                }) => {
                  return (
                    <Menucard
                      key={id}
                      id={id}
                      title={title}
                      price={price}
                      categoryObj={category}
                      img={image}
                      ratingObj={rating}
                      description={description}
                    />
                  );
                }
              ): <div>No results match that query</div>}
          </div>
        </div>
      )}
    </>
  );
};
