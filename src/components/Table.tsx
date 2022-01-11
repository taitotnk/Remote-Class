import { Seat } from "./Seat";

export type TableProps = {
  numberOfSeats: number;
};

export const Table: React.FC<TableProps> = ({ numberOfSeats }) => {
  // 椅子の台数分の配列を作成
  const seatNumArray = [...Array(numberOfSeats)].map((_, i) => i);
  return (
    <>
      {seatNumArray.map((seatNum) => (
        <Seat key={seatNum} seatNumber={seatNum} />
      ))}
    </>
  );
};
