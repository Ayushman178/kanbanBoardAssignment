import { create } from "zustand";

const useTicketStore = create((set) => ({
  tickets: [],
  users: [],
  groupedTickets: [],
  groupedBy: "userId",
  sortedBy: "priority",
  setTickets: (data) => set({ tickets: data.tickets }),
  setUsers: (data) => set({ users: data.users }),
  setGroupedBy: (value) => set({ groupedBy: value}),
  setSortedBy: (value) => set({ sortedBy: value}),
  groupAndSortTickets: (groupBy, sortBy, sortOrder) =>
    set((state) => {
      let grouped = groupTickets(state.tickets, groupBy);
      let sorted = sortTickets(grouped, sortBy, sortOrder);
      return { groupedTickets: sorted };
    }),
}));

// Helper functions for grouping and sorting
const groupTickets = (tickets, key) => {
  return tickets.reduce((acc, ticket) => {
    const groupKey = ticket[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(ticket);
    return acc;
  }, {});
};

const sortTickets = (groupedTickets, key, order) => {
  const sorted = {};
  Object.keys(groupedTickets).forEach((group) => {
    sorted[group] = groupedTickets[group].sort((a, b) => {
      if (order === "asc") {
        return a[key] > b[key] ? 1 : -1;
      }
      return a[key] < b[key] ? 1 : -1;
    });
  });
  return sorted;
};

export default useTicketStore;
