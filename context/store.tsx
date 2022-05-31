import mainReducer from "./mainReducer";
import initialState from "./initialState";
import { MainReducer } from "../types/reducers";
import { ReducerActions } from "../types/actions";
import { GlobalState } from "../types/globalState";
import { StoreProviderProps } from "./store.types";
import React, { createContext, Dispatch, useReducer } from "react";

export const Store = createContext<{
  state: GlobalState;
  dispatch: Dispatch<ReducerActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<MainReducer>(mainReducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};
