import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getUser = (users, id) => {
  const user = users.find((user) => user.id === id);
  return user ? user : null;
};

export const getNameInitials = (name) => {
  const words = name.split(" "); // Split the name into words
  const initials = words.map((word) => word.charAt(0)); // Get the first letter of each word
  return initials.join("").toUpperCase(); // Join the initials and convert to uppercase
};
