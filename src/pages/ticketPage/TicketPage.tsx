import { useParams } from "react-router-dom";
import { TicketList } from "../../components/page/ticketPage/ticketList/TicketList";
import { Filters } from "../../components/page/ticketPage/filters/Filters";

export const TicketPage = () => {
  const { type } = useParams();

  return (
    <div className="ticket-page">
      <Filters />
      <TicketList />
    </div>
  );
};
