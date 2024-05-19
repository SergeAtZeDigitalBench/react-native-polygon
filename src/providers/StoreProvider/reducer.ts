import type { Todo, Store, Action } from "@/types";

import { ACTION } from "@/types";

const { TODOS_SET, TODOS_ERROR, TODOS_LOADING, ERROR_SET } = ACTION;

export const INIT_APP_STORE: Store = {
  isLoading: false,
  error: null,
  todos: [],
};

export const reducer = (store: Store, action: Action): Store => {
  switch (action.type) {
    case TODOS_LOADING:
      return { ...store, isLoading: true };

    case TODOS_ERROR:
      return { ...store, isLoading: false, error: action.payload as string };

    case TODOS_SET:
      return { ...store, isLoading: false, todos: action.payload as Todo[] };

    case ERROR_SET:
      return { ...store, error: action.payload as string | null };
    default:
      return store;
  }
};
