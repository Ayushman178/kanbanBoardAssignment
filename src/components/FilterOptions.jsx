import { DisplayOptions } from "../lib/constants";
import { useDisplayOptionsStore } from "../stores/displayOptionsStore";

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
  const { displayOption, setDisplayOption } = useDisplayOptionsStore();

  return (
    <Select
      onValueChange={(e) => setDisplayOption(e.target.value)}
      defaultValue={displayOption}
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
