export interface TicketI {
  id: number;
  title: string;
  distributor: string;
  type: TicketType;
  event: string;
  date: string;
  quantity: number;
  price: number;
}

enum TicketType {
  CONCERT = "CONCERT",
  MOVIE = "MOVIE",
  THEATER = "THEATER",
  CONFERENCE = "CONFERENCE",
}
