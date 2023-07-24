import React from "react";
import CartLogo from "../../Assets/cart.svg";
import ResLogo from "../../Assets/reslogo.svg";
import SearchLogo from "../../Assets/search.svg";
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid ">
          <a class="navbar-brand" href="/">
            <img
              src={ResLogo}
              alt="logo"
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />
            Restuarant App
          </a>
          <a class="navbar-brand" href="/">
            <img
              src={CartLogo}
              alt="Cartlogo"
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />
          </a>
          <a class="navbar-brand" href="/">
            <img
              src={SearchLogo}
              alt="Cartlogo"
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
