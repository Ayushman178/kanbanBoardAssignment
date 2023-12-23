import {
  Circle,
  CircleDashed,
  MoreHorizontal,
  SignalHigh,
  SignalLow,
  SignalMedium,
} from "lucide-react";

export const DisplayOptions = {
  BY_STATUS: "status",
  BY_USER: "userId",
  BY_PRIORITY: "priority",
};

export const SortOptions = {
  PRIORITY: "priority",
  TITLE: "title",
};

export const getPriorityIcon = {
  0: <MoreHorizontal className="h-3 w-3 text-[#8d8d8d] dark:text-zinc-400" />,
  1: <SignalLow className="h-3 w-3 text-[#8d8d8d] dark:text-zinc-400" />,
  2: <SignalMedium className="h-3 w-3 text-[#8d8d8d] dark:text-zinc-400" />,
  3: <SignalHigh className="h-3 w-3 text-[#8d8d8d] dark:text-zinc-400" />,
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

export const getStatusIcon = {
  "In progress": (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      className="fill-yellow-400"
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

export const getPriorityTitle = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};
