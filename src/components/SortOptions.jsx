import { SortOptions } from "../lib/constants";
import useTicketStore from "../hooks/useTicketStore";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Sorting = () => {
  const { groupedBy, sortedBy, setSortedBy, groupAndSortTickets } = useTicketStore();
  //     try {
  //       const sortedTickets = [...tickets].sort((a, b) => {
  //         const aValue = a[criteria] || "";
  //         const bValue = b[criteria] || "";

  //         // Manually compare the values
  //         if (criteria === "priority") {
  //           // Sort by priority in descending order
  //           return bValue - aValue;
  //         } else {
  //           // Sort by title in ascending order
  //           if (aValue < bValue) return -1;
  //           if (aValue > bValue) return 1;
  //           return 0;
  //         }
  //       });

  //       console.log(sortedTickets); // Return a new array for state update
  //       setTickets(sortedTickets);
  //     } catch (error) {
  //       console.error("Error in handleSort:", error);
  //       setTickets(tickets); // Return the previous state in case of an error
  //     }
  //   };

  const handleSort = (criteria) => {
    setSortedBy(criteria);
    if (criteria === "priority") {
      groupAndSortTickets(groupedBy, criteria, "desc");
    } else {
      groupAndSortTickets(groupedBy, criteria, "asc");
    }
  };

  return (
    <Select
      onValueChange={(e) => handleSort(e)}
      defaultValue={sortedBy}
    >
      <SelectTrigger className="w-[120px] dark:border-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700/70">
        <SelectValue placeholder="Display" />
      </SelectTrigger>
      <SelectContent className="dark:bg-zinc-700 dark:border-zinc-600">
        <SelectGroup>
          <SelectItem value={SortOptions.PRIORITY}>Priority</SelectItem>
          <SelectItem value={SortOptions.TITLE}>Title</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sorting;
