import { createContext, useContext, type ReactNode } from "react";

export const createStoreContext = <T,>() =>
  createContext<T | undefined>(undefined);

export const useStore = <T,>(context: React.Context<T | undefined>) => {
  const contextValue = useContext(context);
  if (contextValue === undefined) {
    throw new Error(`Context not provided`);
  }
  return contextValue;
};

export const useProvider = <T,>(
  { Provider }: React.Context<T | undefined>,
  value: T,
  children?: ReactNode
) => Provider({ value, children });
