import React from "react";
import "./Scss/card.css";
import starSvg from "../../Img/star-svg.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { useEffect } from "react";

export const Card = ({
  id,
  title,
  price,
  img,
  categoryObj,
  ratingObj,
  description,
}) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const dispatchObj = {
    id,
    title,
    quantity: 1,
    price,
    img,
    categoryObj,
    ratingObj,
    description,
  };
  const inCart = (id) => {
    const isCarted = cart.filter((element) => {
      return element.id === id;
    });
    // console.log(isCarted);
    if (isCarted.length !== 0) {
      return true;
    } else {
      return false;
    }
  };
  const productLink = `/products/${id}`;
  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <Link to={productLink} className="product-link">
            <div className="img-container">
              <img src={img} alt="Vanilla Latte" width="307" height="226" />
              <div className="rating">
                <p>{ratingObj.rate}</p>
                <img src={starSvg} alt="star" />
              </div>
            </div>
          </Link>
          <Link to={productLink} className="product-link">
            <div className="c-heading">
              <p className="sub-heading">{title}</p>
              <h4>${price}</h4>
            </div>
          </Link>
          <div className="bottom">
            <div className="tags">
              <p>Hot</p>
              <p>Cold</p>
            </div>
            <div className="add-cart">
              <button
                title={inCart(id) ? "Item is available in cart": "Add to cart"}
                disabled={inCart(id) ? true: false}
                // data-title={inCart(id) ? "Item is available in cart": "Add to cart"}
                onClick={() => dispatch(addToCart({ ...dispatchObj }))}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.66663 6.33334H24.0533C24.4259 6.33335 24.7943 6.41143 25.1348 6.56254C25.4754 6.71366 25.7804 6.93445 26.0304 7.21069C26.2804 7.48693 26.4697 7.81248 26.5862 8.16637C26.7027 8.52026 26.7437 8.89463 26.7066 9.26534L25.9066 17.2653C25.8408 17.9233 25.5329 18.5334 25.0426 18.9772C24.5523 19.4209 23.9146 19.6666 23.2533 19.6667H10.52C9.90326 19.6669 9.30553 19.4534 8.82855 19.0625C8.35158 18.6716 8.02483 18.1274 7.90396 17.5227L5.66663 6.33334Z"
                    stroke="#1D1D1D"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.3333 25H23M5.66663 6.33333L4.58663 2.00933C4.5144 1.721 4.3479 1.46508 4.11357 1.28221C3.87924 1.09934 3.59053 1.00001 3.29329 1H1.66663L5.66663 6.33333ZM9.66663 25H12.3333H9.66663Z"
                    stroke="#1D1D1D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="is-added"
                style={{ display: inCart(id) ? "flex" : "none" }}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
