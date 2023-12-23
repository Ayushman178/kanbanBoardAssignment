/* eslint-disable react/prop-types */

import {
  AlertOctagon,
  AlertTriangle,
  Circle,
  CircleDashed,
  MoreHorizontal,
  Plus,
  SignalHigh,
  SignalLow,
  SignalMedium,
} from "lucide-react";
import useTicketStore from "../hooks/useTicketStore";

const getPriorityIcon = {
  0: <MoreHorizontal className="h-3 w-3 text-[#8d8d8d]" />,
  1: <SignalLow className="h-3 w-3 text-[#8d8d8d]" />,
  2: <SignalMedium className="h-3 w-3 text-[#8d8d8d]" />,
  3: <SignalHigh className="h-3 w-3 text-[#8d8d8d]" />,
  4: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      className="fill-orange-400"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
    </svg>
  ),
};

const getStatusIcon = {
  "In progress": (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className="fill-yellow-500"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2h-1v9H2v1a10 10 0 0 0 17.07 7.07A10 10 0 0 0 12 2z"></path>
    </svg>
  ),
  Backlog: <CircleDashed className="h-4 w-4 text-muted-foreground" />,
  Todo: <Circle className="h-4 w-4 text-muted-foreground" />,
};

const Card = ({ group }) => {
  const { groupedTickets, groupedBy, sortedBy } = useTicketStore();

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center h-[8vh]">
        <div className="flex gap-2 justify-between items-center">
          <div className="flex items-center h-3 w-3 rounded-full bg-blue-500 text-xs">
            <div className="">AK</div>
          </div>
          <span>{group}</span>
          <span>count</span>
        </div>
        <div className="flex gap-2 items-center">
          <Plus className="h-3 w-3 text-muted-foreground" />
          <MoreHorizontal className="h-3 w-3 text-muted-foreground" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {groupedTickets[group].map((ticket) => (
          <div
            key={ticket.id}
            className="flex flex-col rounded-md shadow-sm border p-4 bg-white gap-2"
          >
            <div className="flex items-center justify-between w-full">
              <p className="text-muted-foreground text-sm">{ticket.id}</p>
            </div>

            <div className="flex items-start gap-2">
              {getStatusIcon[ticket.status]}
              <p className="font-medium leading-3 text-sm w-fit">
                {ticket.title}
              </p>
            </div>

            <div className="flex items-center gap-1 mt-1">
              <div className="w-fit border rounded-sm flex items-center justify-center p-1">
                {getPriorityIcon[ticket.priority]}
              </div>
              <div className="text-sm text-[#8d8d8d] flex border rounded-sm items-center gap-1 px-2 p-1">
                <Circle className="h-3 w-3 text-muted-foreground fill-[#8d8d8d]" />
                <p className="leading-3">{ticket.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
