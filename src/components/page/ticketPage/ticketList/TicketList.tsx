import { TicketCard } from "../ticketCard/TicketCard";

export const TicketList = () => {
  return (
    <ul className="ticket-list">
      {[...new Array(40)].map((_, i) => (
        <TicketCard
          title={`Title example${i}`}
          price={i}
          date={new Date().toLocaleDateString()}
          id={i}
        />
      ))}
    </ul>
  );
};
