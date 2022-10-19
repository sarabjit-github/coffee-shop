import React from "react";
import "./Scss/cart.css";
import { useSelector, useDispatch } from "react-redux";
import { changeQuantity } from "../../features/cart/cartSlice";
import { removeFromCart } from "../../features/cart/cartSlice";
import emptyCart from "../../Img/empty_cart.png";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const subTotal = () => {
    let priceArray = [];
    for (let i = 0; i < cart.length; i++) {
      priceArray.push(cart[i].price * cart[i].quantity);
    }
    let totalPrice = priceArray.reduce(
      (previousValue, currentValue, currentIndex, array) => {
        return previousValue + currentValue;
      },
      0
    );
    return totalPrice;
  };

  return (
    <div className="cart-con">
      <section className="cart-sec">
        <div className="cart-header">
          <h1>Your Cart</h1>
        </div>
        <div className="cart-item-con">
          {/* cart item */}
          {cart.length === 0 && (
            <div className="empty-cart">
              <img src={emptyCart} alt="empty cart" />
              <h2>Your cart is empty</h2>
              <p>Add something to make me happy :)</p>
              <Link to="/ourproduct">
                <button className="btn">Continue shopping</button>
              </Link>
            </div>
          )}
          {cart.map(({ id, title, price, img, quantity, description }) => {
            const productLink = `/products/${id}`;
            return (
              <div key={id} className="cart-item">
                <Link to={productLink} className="product-link">
                  <div className="item-img">
                    <img src={img} alt="p img" loading="lazy" />
                  </div>
                </Link>
                <div className="item-text">
                  <Link to={productLink} className="product-link">
                    <div className="item-desc">
                      <h3>{title}</h3>
                      <p>{description.slice(0, 40)}...</p>
                    </div>
                  </Link>
                  <div className="item-qty">
                    <label htmlFor="quantity-selection">Qty:</label>
                    {/* onChange={(e)=>dispatch(changeQuantity({id: id, quantity: Number(e.target.value)}))} */}
                    <select
                      name="quantity-selection"
                      id="quantity-selection"
                      onChange={(e) =>
                        dispatch(
                          changeQuantity({
                            id: id,
                            quantity: Number(e.target.value),
                          })
                        )
                      }
                      value={quantity}
                    >
                      {/* <option value={quantity}>{quantity}</option> */}
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="item-price">${price * quantity}</div>
                </div>
                <div className="item-remove">
                  <button onClick={() => dispatch(removeFromCart(id))}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}

          {/* cart item */}
        </div>
        {cart.length > 0 && (
          <div className="subtotal">
            <h2>
              Subtotal: &nbsp; <span>${subTotal()}</span>
            </h2>
          </div>
        )}
      </section>
    </div>
  );
};
