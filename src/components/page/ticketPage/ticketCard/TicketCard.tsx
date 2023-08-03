import { useAppDispatch } from "../../../../store/hooks";
import { TicketI } from "../../../../services/ticketService/types";
import { CartPlusIcon } from "../../../../assets/icons/CartPlusIcon";
import { InfoIcon } from "../../../../assets/icons/InfoIcon";
import { addItem } from "../../../../reducers/cart";

interface TicketCardI extends Partial<TicketI> {}

export const TicketCard = (ticket: TicketCardI) => {
  const { title, price, date, id } = ticket;
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    console.log(id);
    dispatch(addItem({ title, stackCount: 1 }));
  };

  return (
    <li className="ticket-card">
      <div className="ticket-card__img">
        <h2>{title}</h2>
      </div>
      <div className="ticket-card__description">
        <h2>{price}$</h2>
        <div className="ticket-card__expanded-options">
          <div>
            <p>Date: {date}</p>
          </div>
          <button className="ticket-card__button btn--info">
            <InfoIcon />
          </button>
          <button className="ticket-card__button" onClick={handleAddToCart}>
            <CartPlusIcon />
          </button>
        </div>
      </div>
    </li>
  );
};
