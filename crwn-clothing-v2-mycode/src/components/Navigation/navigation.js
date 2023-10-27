import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

import { useSelector } from "react-redux";
import { ReactComponent as CrwLogo } from "../../assets/logo.svg";

import { signOutUser } from "../../firebase/fb-config";
import { selectCurrentUser } from "../../redux/user/userSelector";

import CartIcon from "../cart-logo/cart-logo";
import CartDropDown from "../cart-drop-down/cart-drop-down.jsx";
import "./navigation.scss";
import { selectIsCartOpen } from "../../redux/cart/cartSelector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <CrwLogo className="logo" />
          </Link>
        </div>

        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>

          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              {" "}
              Sign Out{" "}
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        <CartDropDown hide={`${isCartOpen ? "hide" : ""}`} />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
