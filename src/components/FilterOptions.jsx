import useTicketStore from "../hooks/useTicketStore";
import { DisplayOptions } from "../lib/constants";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const FilterOptions = () => {
  const { groupedBy, sortedBy, setGroupedBy, groupAndSortTickets } =
    useTicketStore();

  const handleFitler = async (value) => {
    setGroupedBy(value);
    if (value === "priority") {
      groupAndSortTickets(value, sortedBy, "desc");
    } else {
      groupAndSortTickets(value, sortedBy, "asc");
    }
  };

  return (
    <Select
      onValueChange={(e) => handleFitler(e)}
      defaultValue={groupedBy}
    >
      <SelectTrigger className="w-[120px] dark:border-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700/70">
        <SelectValue placeholder="Display" />
      </SelectTrigger>
      <SelectContent className="dark:bg-zinc-700 dark:border-zinc-600">
        <SelectGroup>
          <SelectLabel>Filter by</SelectLabel>
          <SelectItem value={DisplayOptions.BY_STATUS}>Status</SelectItem>
          <SelectItem value={DisplayOptions.BY_USER}>Users</SelectItem>
          <SelectItem value={DisplayOptions.BY_PRIORITY}>Priority</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterOptions;
