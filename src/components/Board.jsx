import useTicketStore from "../hooks/useTicketStore";
import Card from "./Card";

const Board = () => {
  const { groupedTickets, users, groupedBy, sortedBy } = useTicketStore();
  console.log(groupedBy);
  console.log(sortedBy);
  console.log(groupedTickets);
  return (
    <section className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <Card />
      {false &&
        Object.keys(groupedTickets).map((group, idx) => (
          <div key={group} className="p-2 border">
            <h2>{group}</h2>
            {groupedTickets[group].map((ticket) => (
              <div key={ticket.id} className="ticket">
                {ticket.title}
              </div>
            ))}
          </div>
        ))}
    </section>
  );
};

export default Board;
