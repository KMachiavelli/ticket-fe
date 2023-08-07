import { useSelector } from "react-redux";
import { TicketCard } from "../ticketCard/TicketCard";
import { TicketsStateI } from "../../../../reducers/types";
import { Spinner } from "../../../shared/spinner/Spinner";
import { SpinnerVariant } from "../../../shared/spinner/types";

export const TicketList = () => {
  const { tickets, isLoading } = useSelector<any, TicketsStateI>(
    (state) => state.tickets
  );

  return (
    <ul className="ticket-list">
      <Spinner
        className="ticket-list__spinner"
        variant={SpinnerVariant.LIGHT}
        isLoading={isLoading}
      >
        <>
          {tickets.map((ticket) => (
            <TicketCard ticket={ticket} />
          ))}
        </>
      </Spinner>
    </ul>
  );
};
