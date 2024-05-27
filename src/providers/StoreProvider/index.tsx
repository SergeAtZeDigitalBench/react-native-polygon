import {
  type ReactNode,
  type Dispatch,
  createContext,
  useContext,
  useReducer,
} from "react";

import type { OpenMeteoAPIResponse, FetchState, Store, Action } from "@/types";

import { reducer, INITIAL_STORE } from "./reducer";

interface ContextType {
  store: Store;
  dispatch: Dispatch<Action<any>>;
}

const StoreContext = createContext<ContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const StoreProvider = ({ children }: Props): JSX.Element => {
  const [store, dispatch] = useReducer(reducer, INITIAL_STORE);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const ctx = useContext(StoreContext);

  if (!ctx) {
    throw new Error("StoreContext not found. Check your Provider's scope");
  }

  return ctx;
};
