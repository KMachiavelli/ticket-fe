import { Link } from "react-router-dom";
import { UserIcon } from "../../../assets/icons/UserIcon";
import { TICKETS_SECTIONS } from "./constants";
import { PagePaths } from "../../../routing/types";
import { CartIcon } from "../../../assets/icons/CartIcon";
import { LogoIcon } from "../../../assets/icons/LogoIcon";
import { useSelector } from "react-redux";
import { useState } from "react";
import { DoubleButton } from "../doubleButton/DoubleButton";
import { TrashIcon } from "../../../assets/icons/TrashIcon";
import { useAppDispatch } from "../../../store/hooks";
import { addItem, removeItem } from "../../../reducers/cart";
import { TicketI } from "../../../services/ticketService/types";

export const Navbar = () => {
  const { items } = useSelector<any, any>((state) => state.cart);
  const dispatch = useAppDispatch();
  const [isDropdownCartOpen, setIsDropdownCartOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsDropdownCartOpen((isOpen) => !isOpen);
  };

  const handleIncrementItemInCart = (title: string) => {
    dispatch(addItem({ title, stackCount: 1 }));
  };

  const handleDecrementItemInCart = (title: string) => {
    dispatch(removeItem({ title }));
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
              {items.map(({ title, stackCount }: any) => (
                <div className="nav__cart-item">
                  <p>{title}</p>
                  <p>x {stackCount}</p>
                  <DoubleButton
                    handleMinusClick={() => handleDecrementItemInCart(title)}
                    handlePlusClick={() => handleIncrementItemInCart(title)}
                  />
                  <button className="btn--content nav__trash-button">
                    <TrashIcon />
                  </button>
                </div>
              ))}
              <div className="nav__summary">
                <h4>Total</h4>
                <hr />
                <h5>{2137}</h5>
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
