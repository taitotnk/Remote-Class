import { Seat } from "./Seat";
import { SeatContext, useSeat } from "context/Seat";
import { Flex, Wrap, WrapItem, Box } from "@chakra-ui/react";

export type TableProps = {
  numberOfSeats: number;
  tableId: string;
};

export const Table: React.FC<TableProps> = ({ numberOfSeats, tableId }) => {
  // 椅子の台数分の配列を作成
  const seatNumArray = [...Array(numberOfSeats)].map((_, i) => i);
  const ctx = useSeat();
  return (
    <SeatContext.Provider value={ctx}>
      <Box w="100%">
        <Wrap spacing="40px">
          {seatNumArray.map((seatNum) => (
            <WrapItem key={seatNum}>
              <Seat key={seatNum} seatNumber={seatNum} tableId={tableId} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </SeatContext.Provider>
  );
};
