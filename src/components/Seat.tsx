import { useRealtimeSharedState } from "realtimely";
import { useAuth } from "context/useAuth";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

export type SeatProps = {
  seatNumber: number;
};

export const Seat: React.FC<SeatProps> = ({ seatNumber }) => {
  const { currentUser } = useAuth();

  // 自分が椅子に座ったかの状態管理
  const [isSeat, setIsSeat] = useState(false);

  // 椅子の状態
  const [seatState, setSeatState] = useRealtimeSharedState(
    { isSitDown: false, name: "", img: "" },
    `seatState${seatNumber}`
  );

  // 椅子を押したときの処理
  const sitDown = () => {
    seatState.isSitDown = true;
    seatState.name = currentUser.displayName;
    seatState.img = currentUser.photoURL;
    setSeatState(seatState);
    setIsSeat(true);
  };

  // 椅子を離れるときの処理
  const standUp = () => {
    seatState.isSitDown = false;
    seatState.name = "";
    seatState.img = "";
    setSeatState(seatState);
    setIsSeat(false);
  };

  return (
    <div>
      {seatState.isSitDown ? (
        <Button onClick={sitDown} disabled colorScheme="blue" size="sm">
          {seatNumber}
        </Button>
      ) : (
        <Button onClick={sitDown} colorScheme="blue" size="sm">
          {seatNumber}
        </Button>
      )}
      {seatState.isSitDown && <div>{seatState.name}</div>}
      {isSeat && (
        <Button onClick={standUp} colorScheme="blue" size="sm">
          立ち上がる
        </Button>
      )}
    </div>
  );
};
