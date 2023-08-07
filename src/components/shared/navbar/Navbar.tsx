import { Link } from "react-router-dom";
import { UserIcon } from "../../../assets/icons/UserIcon";
import { TICKETS_SECTIONS } from "./constants";
import { PagePaths } from "../../../routing/types";
import { CartIcon } from "../../../assets/icons/CartIcon";
import { LogoIcon } from "../../../assets/icons/LogoIcon";
import { useSelector } from "react-redux";
import { DoubleButton } from "../doubleButton/DoubleButton";
import { TrashIcon } from "../../../assets/icons/TrashIcon";
import { useAppDispatch } from "../../../store/hooks";
import { fetchAddItem, removeItem } from "../../../reducers/cart";
import { Spinner } from "../spinner/Spinner";
import { SpinnerVariant } from "../spinner/types";
import { CartStateI } from "../../../reducers/types";
import { useState } from "react";

export const Navbar = () => {
  const {
    content: { items, total },
    delivery,
  } = useSelector<any, CartStateI>((state) => state.cart);
  const dispatch = useAppDispatch();
  const [isDropdownCartOpen, setIsDropdownCartOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsDropdownCartOpen((isOpen) => !isOpen);
  };

  const handleIncrementItemInCart = (id: number) => () => {
    dispatch(fetchAddItem(id));
  };

  const handleDecrementItemInCart = (id: number) => () => {
    dispatch(removeItem(id));
  };

  return (
    <nav className="nav">
      <button className="nav__logo">
        <LogoIcon />
      </button>
      <ul className="nav__ul">
        {TICKETS_SECTIONS.map(({ title, path }) => (
          <Link to={`${PagePaths.TICKET}${path}`}>
            <li key={`${title}${path}`} className="nav__li">
              {title}
            </li>
          </Link>
        ))}
      </ul>
      <div className="nav__cart-user-wrapper">
        <div className="nav__cart-wrapper">
          <div
            className={`nav__chimney${
              isDropdownCartOpen ? "--shown" : "--hidden"
            }`}
          />
          <button className="nav__button" onClick={handleOpenDropdown}>
            <CartIcon />
          </button>
          <div
            className={`nav__dropdown${
              isDropdownCartOpen ? "--shown" : "--hidden"
            }`}
          >
            <h2>Your cart</h2>
            <div className="nav__cart-display">
              {items.map(({ title, stackCount, id }: any) => (
                <div className="nav__cart-item">
                  <p>{title}</p>
                  <p>x {stackCount}</p>
                  <DoubleButton
                    handleMinusClick={handleDecrementItemInCart(id)}
                    handlePlusClick={handleIncrementItemInCart(id)}
                  />
                  <button className="btn--content nav__trash-button">
                    <TrashIcon />
                  </button>
                </div>
              ))}
              <div className="nav__summary">
                <h4>Total</h4>
                <hr />
                <Spinner
                  variant={SpinnerVariant.LIGHT}
                  isLoading={delivery.isLoading}
                  className="nav__cart-spinner"
                >
                  <>
                    <h3>{total} $</h3>
                    <p>delivery {delivery.cost} $</p>
                  </>
                </Spinner>
              </div>
            </div>
          </div>
        </div>
        <Link to={PagePaths.USER}>
          <button className="btn--content nav__button--contrast">
            <UserIcon />
          </button>
        </Link>
      </div>
    </nav>
  );
};
