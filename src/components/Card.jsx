/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Circle, MoreHorizontal, Plus } from "lucide-react";

import {
    getPriorityIcon,
    getPriorityTitle,
    getStatusIcon,
} from "../lib/constants";
import { Avatar, AvatarFallback } from "./ui/avatar";
import useTicketStore from "../hooks/useTicketStore";
import { cn, getNameInitials, getUser } from "../lib/utils";

const Card = ({ group }) => {
  const [user, setUser] = useState(null);
  const { groupedTickets, groupedBy, users } = useTicketStore();

  useEffect(() => {
    setUser(getUser(users, group));
  }, [group, users]);

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center h-[8vh]">
        <div className="flex gap-2 justify-between items-center">
          <div className="flex items-center relative p-1">
            {groupedBy === "userId" && (
              <>
                <Avatar className="h-5 w-5">
                  <AvatarFallback className="text-[9px] font-medium bg-violet-200 dark:bg-rose-400">
                    {user && getNameInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={cn(
                    "absolute w-[6px] h-[6px] bottom-1 right-1 rounded-full",
                    user && user.available ? "bg-green-500" : "bg-yellow-500"
                  )}
                />
              </>
            )}
            {groupedBy === "status" && getStatusIcon[group]}
            {groupedBy === "priority" && getPriorityIcon[group]}
          </div>
          <span className="font-medium capitalize">
            {groupedBy === "status"
              ? group
              : groupedBy === "priority"
              ? getPriorityTitle[group]
              : user?.name}
          </span>
          <span className="text-muted-foreground">
            {groupedTickets[group].length}
          </span>
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
            className="flex flex-col rounded-md shadow-sm border dark:border-zinc-600 p-4 bg-white dark:bg-zinc-800 gap-2"
          >
            {!user && setUser(getUser(users, ticket.userId))}
            <div className="flex items-center justify-between w-full">
              <p className="text-muted-foreground text-sm">{ticket.id}</p>
              {groupedBy !== "userId" && (
                <div className="relative">
                  <Avatar className="h-5 w-5">
                    <AvatarFallback className="text-[9px] font-medium bg-violet-200 dark:bg-rose-400">
                      {user && getNameInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={cn(
                      "absolute w-[6px] h-[6px] bottom-0 right-0 rounded-full",
                      user && user.available ? "bg-green-500" : "bg-yellow-500"
                    )}
                  />
                </div>
              )}
            </div>

            <div className="flex items-start gap-2">
              {groupedBy !== "status" && getStatusIcon[ticket.status]}
              <p className="font-medium leading-4 text-sm w-fit">
                {ticket.title}
              </p>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center justify-center">
                {groupedBy !== "priority" && (
                  <div className="w-fit border dark:border-zinc-600 rounded-sm p-1">
                    {getPriorityIcon[ticket.priority]}
                  </div>
                )}
              </div>
              <div className="text-sm text-[#8d8d8d] dark:text-zinc-400 flex border dark:border-zinc-600 rounded-sm items-center gap-1 px-2 p-1">
                <Circle className="h-3 w-3 text-muted-foreground fill-[#8d8d8d] dark:fill-zinc-00" />
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
