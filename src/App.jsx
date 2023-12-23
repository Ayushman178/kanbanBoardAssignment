import { ChevronDown, SlidersHorizontal } from "lucide-react";
import FilterOptions from "./components/FilterOptions";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import SortOptions from "./components/SortOptions";
import { useEffect } from "react";
import { getData } from "./services/api";
import useTicketStore from "./hooks/useTicketStore";
import Board from "./components/Board";

function App() {
  const { setTickets, setUsers, tickets, users, groupedTickets, groupAndSortTickets } = useTicketStore();



  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await getData();
        setTickets(data);
        setUsers(data);
        groupAndSortTickets('userId', 'title', 'asc')
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // setError("Error fetching data. Please try again.");
        // setLoading(false);
      }
    };

    fetchDataFromApi();
  }, [setTickets, setUsers, groupAndSortTickets]);

  console.log(tickets)
  console.log(users)

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
      <main className="p-2">
        <Board />
      </main>
    </div>
  );
}

export default App;
