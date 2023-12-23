import useTicketStore from "../hooks/useTicketStore";
import Card from "./Card";

const Board = () => {
  const { groupedTickets } = useTicketStore();

  return (
    <section className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {Object.keys(groupedTickets).map((group) => (
        <Card key={group} group={group} />
      ))}
    </section>
  );
};

export default Board;
