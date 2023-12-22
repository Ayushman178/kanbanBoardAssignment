import { ChevronDown, SlidersHorizontal } from "lucide-react";
import FilterOptions from "./components/FilterOptions";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-zinc-950 h-screen">
      <div className="p-2 py-3 flex items-center justify-between bg-white dark:bg-zinc-800">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center justify-between gap-4 px-2 shadow-sm dark:bg-zinc-700 dark:hover:bg-zinc-700/70"
            >
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />{" "}
              Display <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[280px] ml-2 p-3 px-4 dark:bg-zinc-700">
            <div className="grid gap-2">
              <div className="grid grid-cols-2 items-center">
                Grouping
                <FilterOptions />
              </div>
              <div className="grid grid-cols-2 items-center">
                Ordering
                <FilterOptions />
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <ModeToggle />
      </div>
    </div>
  );
}

export default App;
