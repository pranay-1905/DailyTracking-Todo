import { createContext, useContext } from "react";
import { getTodayDateString } from "../utils/dateUtils";

export const TodoContext = createContext({
  todos: [],
  selectedDate: getTodayDateString(),
  searchQuery: "",
  searchScope: "current", // 'current' | 'all'
  statusFilter: "all",    // 'all' | 'active' | 'completed'

  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
  setSelectedDate: () => {},
  setSearchQuery: () => {},
  setSearchScope: () => {},
  setStatusFilter: () => {},
  rolloverIncompleteTasks: () => {},
  deleteCompletedForDate: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;