import { createContext, useState, useCallback } from "react";

type SeatContext = {
  isSeat: boolean;
  setIsSeat: (isSeat: boolean) => void;
};

const defaultSeatContext: SeatContext = {
  isSeat: false,

  setIsSeat: () => {},
};

export const SeatContext = createContext(defaultSeatContext);

// custom hook
export const useSeat = (): SeatContext => {
  const [isSeat, setSeat] = useState(false);
  const setIsSeat = useCallback((current: boolean): void => {
    setSeat(current);
  }, []);
  return { isSeat, setIsSeat };
};
