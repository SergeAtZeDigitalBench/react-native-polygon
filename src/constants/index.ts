export const TODO_LIST = [
  { id: "1", title: "Walk the dog", isCompleted: true },
  { id: "2", title: "Go to gym", isCompleted: false },
  { id: "3", title: "Learn React Native", isCompleted: false },
  { id: "4", title: "Walk in the park", isCompleted: true },
  { id: "5", title: "Go to restaurant", isCompleted: false },
  { id: "6", title: "Learn Go", isCompleted: false },
  { id: "7", title: "Phone parents", isCompleted: true },
  { id: "8", title: "Cook some tasty food", isCompleted: false },
  { id: "9", title: "Order pizza", isCompleted: false },
];

export const COLORS = {
  BLUE: "#2f76e5",
} as const;

export const DB = {
  TODO_LIST: "@todoList",
} as const;
