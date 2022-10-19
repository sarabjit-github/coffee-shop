import React from "react";
import "./Scss/productpage.css";
import coffeeCup from "../../Img/coffee-cup-f.png";
import starSvg from "../../Img/star-svg.svg";
import { useGetSingleProductQuery } from "../../features/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";
import { Loader } from "../Loader/Loader";
import { motion } from "framer-motion";

export const ProductPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  } = useGetSingleProductQuery(productId);
  const dispatch = useDispatch();

  if (isFetching || isLoading) return <Loader />;
  if (isError) return <div>Error occured</div>;

  const dispatchObj = {
    id: product.id,
    title: product.title,
    quantity: 1,
    price: product.price,
    img: product.image,
    categoryObj: product.categoryObj,
    ratingObj: product.ratingObj,
    description: product.description,
  };

  const inCart = (id) => {
    const isCarted = cart.filter((element) => {
      return element.id === id;
    });
    if (isCarted.length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  const transition = {
    type: "spring",
    duration: 1,
    bounce: 0.4,
  };

  return (
    <>
      {isSuccess && (
        <section className="product-con menu-container">
          <div className="left">
            <motion.div
              className="p-img"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0 }}
            >
              <img src={product?.image || coffeeCup} alt="coffee cup" />
            </motion.div>
          </div>
          <motion.div
            className="right"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0 }}
          >
            <h1 className="p-title">{product?.title}</h1>
            <div className="p-rating">
              <img src={starSvg} alt="star" />
              <p>{product?.rating.rate}</p>
            </div>
            <h2>${product?.price}</h2>
            <p>{product?.description}</p>
            <div>
              <button
                title={
                  inCart(product?.id)
                    ? "Item is available in cart"
                    : "Add to cart"
                }
                disabled={inCart(product?.id) ? true : false}
                onClick={() => dispatch(addToCart({ ...dispatchObj }))}
              >
               {inCart(product?.id) ? "Already added":"Add to cart"}
                <div
                  className="is-added"
                  style={{ display: inCart(product?.id) ? "flex" : "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ff902b"
                      d="M193.6,435.3c-10.3,0-20.6-3.9-28.5-11.8L11.8,270.2c-15.7-15.7-15.7-41.2,0-56.9c15.7-15.7,41.2-15.7,56.9,0
		l124.9,124.9L443.3,88.4c15.7-15.7,41.2-15.7,56.9,0c15.7,15.7,15.7,41.2,0,56.9L222,423.5C214.2,431.3,203.9,435.3,193.6,435.3z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </motion.div>
        </section>
      )}
    </>
  );
};
