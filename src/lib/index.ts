import type { Stats, Todo } from "@/types";

export const getStats = (todos: Todo[]) =>
  todos.reduce(
    (result: Stats, todo) => {
      if (todo.isCompleted) {
        result.completed = result.completed + 1;
      } else {
        result.inProgress = result.inProgress + 1;
      }

      return result;
    },
    { all: todos.length, inProgress: 0, completed: 0 } as Stats,
  );

export const filterListBy = (
  tab: "all" | "inProgress" | "completed",
  list: Todo[],
) => {
  switch (tab) {
    case "completed":
      return list.filter(({ isCompleted }) => isCompleted);

    case "inProgress":
      return list.filter(({ isCompleted }) => !isCompleted);

    default:
      return list;
  }
};
