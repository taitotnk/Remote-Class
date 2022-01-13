import { Seat } from "./Seat";
import { SeatContext, useSeat } from "context/Seat";

export type TableProps = {
  numberOfSeats: number;
};

export const Table: React.FC<TableProps> = ({ numberOfSeats }) => {
  // 椅子の台数分の配列を作成
  const seatNumArray = [...Array(numberOfSeats)].map((_, i) => i);
  const ctx = useSeat();
  return (
    <SeatContext.Provider value={ctx}>
      {seatNumArray.map((seatNum) => (
        <Seat key={seatNum} seatNumber={seatNum} />
      ))}
    </SeatContext.Provider>
  );
};
