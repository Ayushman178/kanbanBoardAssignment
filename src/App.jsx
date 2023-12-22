import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <div className="bg-slate-100 dark:bg-zinc-950 h-screen">
      <div className="p-2 py-3 flex items-center justify-between bg-white dark:bg-zinc-800">
        Display
        <ModeToggle />
      </div>
    </div>
  );
}

export default App;
