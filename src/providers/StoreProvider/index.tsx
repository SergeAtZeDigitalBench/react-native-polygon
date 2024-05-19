import {
  type ReactNode,
  type Dispatch,
  createContext,
  useContext,
  useReducer,
} from "react";

import type { Todo, Action, Store } from "@/types";

import { reducer, INIT_APP_STORE } from "./reducer";

type ContextType = [Store, Dispatch<Action<any>>];

const StoreContext = createContext<ContextType | null>(null);

interface Props {
  children: ReactNode;
  initialTodos?: Todo[];
}

export const StoreProvider = ({
  children,
  initialTodos,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, INIT_APP_STORE, (initValue) => {
    if (initialTodos) {
      return { ...INIT_APP_STORE, todos: initialTodos };
    }
    return initValue;
  });

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const ctx = useContext(StoreContext);

  if (!ctx) {
    throw new Error("No StoreContext found. Check your provider's scope");
  }

  return ctx;
};
