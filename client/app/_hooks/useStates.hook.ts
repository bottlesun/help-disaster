import { useState } from "react";

export type UseStatesHookType<T> = {
  state: T;
  setStates: (newState: Partial<T>) => void;
};

function useStatesHook<T>(
  initialState: T,
): [UseStatesHookType<T>["state"], UseStatesHookType<T>["setStates"]] {
  const [state, setState] = useState<T>(initialState);

  const setStates = (newState: Partial<T>) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return [state, setStates];
}

export default useStatesHook;
