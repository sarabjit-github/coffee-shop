import React, { useEffect, useState, useRef } from "react";
import { Menucard } from "../MenuCard/Menucard";
import { useGetAllProductsQuery } from "../../features/api/apiSlice";
import "./Scss/menu.css";
import sortIcon from "../../Img/sort-icon.png";
import { Loader } from "../Loader/Loader";
import { motion } from "framer-motion";

export const Menu = () => {

  const {
    data: allProducts,
    isLoading,
    isFetching,
    isError,
  } = useGetAllProductsQuery();
  const [products, setProducts] = useState(allProducts);
  const [displaySort, setDisplaySort] = useState(false);

  const lowToHigh = "lowToHigh";
  const HighToLow = "HighToLow";

  const sortByPrice = (str) => {
    let newProducts = [...products];
    if (str === lowToHigh) {
      newProducts.sort((a, b) => a.price - b.price);
      setProducts(newProducts);
      // console.log(newProducts);
    } else if (str === HighToLow) {
      newProducts.sort((a, b) => b.price - a.price);
      setProducts(newProducts);
    }
    setDisplaySort(false);
  };

  const sortByRating = (str) => {
    let newProducts = [...products];
    if (str === lowToHigh) {
      newProducts.sort((a, b) => a.rating.rate - b.rating.rate);
      setProducts(newProducts);
    } else if (str === HighToLow) {
      newProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      setProducts(newProducts);
    }
    setDisplaySort(false);
  };

  // const clickOutside = () => {
  //   const sortBtn = document.getElementById("sort-btn");
  //   const sortCon = document.getElementById("sort-opt");
  //   const body = document.querySelector("body");
  //   body.addEventListener("click", (e) => {
  //     if (!(e.path.includes(sortBtn) || e.path.includes(sortCon))) {
  //       setDisplaySort(false);
  //     }
  //     // console.log(e.path.includes(sortBtn) || e.path.includes(sortCon));
  //   });
  // };

  const sortRef = useRef(null);

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  useEffect(() => {
    function clickOutside(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setDisplaySort(false);
      }
    }
    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [sortRef]);

  if (isLoading || isFetching) return <Loader />;
  if (isError) return <div>Something went wrong</div>;
  return (
    <>
      <section className="menu-container">
        <div className="menu-header">
          <div className="heading">
            <h1>
              Special menu <span>for you</span>
            </h1>
          </div>
          <div className="sort-con">
            <button
              ref={sortRef}
              className="sort-btn"
              onClick={() => setDisplaySort(!displaySort)}
            >
              <img src={sortIcon} alt="sort" />
              <span>Sort</span>
            </button>
            <div
              ref={sortRef}
              className="sort-opt"
              style={{ display: displaySort ? "flex" : "none" }}
            >
              <div onClick={() => sortByPrice(lowToHigh)}>
                Price<span>(Low to High)</span>
              </div>
              <div onClick={() => sortByPrice(HighToLow)}>
                Price<span>(High to Low)</span>
              </div>
              <div onClick={() => sortByRating(lowToHigh)}>
                Rating<span>(Low to High)</span>
              </div>
              <div onClick={() => sortByRating(HighToLow)}>
                Rating<span>(High to Low)</span>
              </div>
            </div>
          </div>
        </div>
        <motion.div className="mc-con">
          {products !== undefined &&
            products?.map(
              ({ id, title, price, category, image, rating, description }) => {
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
            )}
          {/* <Menucard /> */}
        </motion.div>
      </section>
    </>
  );
};
