export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Stats {
  all: number;
  inProgress: number;
  completed: number;
}

export enum ACTION {
  TODOS_LOADING = "todos loading",
  TODOS_ERROR = "todos error",
  TODOS_SET = "todos set",
  ERROR_SET = "error set",
}

export interface Action<P = any> {
  type: ACTION;
  payload?: P;
}

export interface Store {
  isLoading: boolean;
  error: null | string;
  todos: Todo[];
}
