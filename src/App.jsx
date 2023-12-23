import { ChevronDown, Loader2, SlidersHorizontal } from "lucide-react";
import FilterOptions from "./components/FilterOptions";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import SortOptions from "./components/SortOptions";
import { useEffect, useState } from "react";
import { getData } from "./services/api";
import useTicketStore from "./hooks/useTicketStore";
import Board from "./components/Board";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { setTickets, setUsers, groupAndSortTickets } = useTicketStore();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setIsLoading(true);
        const data = await getData();
        setTickets(data);
        setUsers(data);
        groupAndSortTickets("userId", "priority", "desc");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromApi();
  }, [setTickets, setUsers, groupAndSortTickets]);

  return (
    <div className="bg-slate-100 dark:bg-zinc-950 flex flex-col min-h-screen">
      <section className="p-2 py-3 flex items-center justify-between bg-white dark:bg-zinc-800">
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
                <SortOptions />
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <ModeToggle />
      </section>
      <main className="p-2 flex-1">
        {!isLoading && <Board />}
        {isLoading && (
          <div className="h-screen flex items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
