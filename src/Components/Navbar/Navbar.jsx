import React, { useState, useEffect, useRef } from "react";
import "./Scss/navbar.css";
import logo from "../../Img/logo_coffe.svg";
import cartIcon from "../../Img/cart_icon.svg";
import searchIcon from "../../Img/search_icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [showSideNav, setShowSideNav] = useState(false);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  function handleSearch(){
    if(searchValue){
      navigate(`/search/${searchValue}`);
      closeNav();
    }
  }
  const handleSearchData = (e) => {
      if (e.keyCode === 13) {
        handleSearch();
      }
  };

  const navRef = useRef(null);

  function closeNav() {
    setShowSideNav(false);
  };

  useEffect(() => {
    function clickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeNav();
      }
    }
    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [navRef]);

  // let activeStyle = {
  //   color: "#ff902b",
  // };
  // let activeClassName = "underline";

  return (
    <div className="header-con">
      <header>
        <div className="left">
          <div
            ref={navRef}
            className="ham-menu"
            onClick={() => setShowSideNav(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="center">
          <nav>
            <Link
              to="/"
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              // activeClassName='active'
            >
              Home
            </Link>
            <Link
              to="/ourproduct"
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              // activeClassName='active'
            >
              Our Product
            </Link>
            <Link
              to="/about"
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              // activeClassName='active'
            >
              About Us
            </Link>
          </nav>
        </div>
        <div className="right">
          <div className="search-bar">
            <div onClick={handleSearch} className="search-icon" title="Search">
              <img src={searchIcon} alt="search" />
            </div>
            <input
              type="text"
              id="search"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyUp={handleSearchData}
            />
          </div>
          <Link to="/cart">
            <div className="cart-icon">
              <span className="cart-num">{cart.length}</span>
              <img src={cartIcon} alt="cart icon" />
            </div>
          </Link>
        </div>
        {/* Side nav */}
        <nav
          ref={navRef}
          className="side-nav"
          style={{ left: showSideNav ? "0" : "-110%" }}
        >
          <div className="head">
            <div className="logo">
              <Link to="/" onClick={closeNav}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="close" onClick={() => setShowSideNav(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
              </svg>
            </div>
          </div>
          <div className="search-bar">
            <div onClick={handleSearch} className="search-icon" title="Search">
              <img src={searchIcon} alt="search" />
            </div>
            <input
              type="text"
              id="search"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyUp={handleSearchData}
            />
          </div>
          <div className="nav-links">
            <Link
              to="/"
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              // activeClassName='active'
              onClick={closeNav}
            >
              Home
            </Link>
            <Link
              to="/ourproduct"
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              // activeClassName='active'
              onClick={closeNav}
            >
              Our Product
            </Link>
            <Link
              to="/about"
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              // activeClassName='active'
              onClick={closeNav}
            >
              About Us
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
