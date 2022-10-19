import React from "react";
import { useGetAllProductsQuery } from "../../features/api/apiSlice";
import { Card } from "../Card/Card";
import "./Scss/popularproduct.css";

export const Popularproduct = () => {

  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  let popularProducts = products?.filter((product) => {
    return product.rating.rate > 4.8;
  });

  if(isError) return <div>Something went wrong.</div>;
  return (
    <section className="popular-section">
      <div className="container">
        <div className="p-heading heading">
          <h1>
            Popular <span>Now</span>
          </h1>
        </div>
        <div className="p-container">
          <div className="card-background"></div>
          <div className="card-container">
            {popularProducts?.map(
              ({ id, title, price, category, image, rating, description }) => {
                return (
                  <Card
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
