import { useRealtimeSharedState } from "realtimely";
import { useAuth } from "context/useAuth";
import { Button } from "@chakra-ui/react";
import { useState, useContext } from "react";
import Image from "next/image";
import { SeatContext } from "context/Seat";

export type SeatProps = {
  seatNumber: number;
};

export const Seat: React.FC<SeatProps> = ({ seatNumber }) => {
  const { currentUser } = useAuth();

  //TODO 個々のコンポーネントで椅子に座っているかの状態が分かりづらいのでリファクタしたい
  // コンポーネントが椅子に座っているかの状態
  const [isEachComponentSeat, setIsEachComponentSeat] = useState(false);

  // 自分が椅子に座ったかの状態管理
  const ctx = useContext(SeatContext);

  // 椅子の状態
  const [seatState, setSeatState] = useRealtimeSharedState(
    { isSitDown: false, name: "", img: "" },
    `SeatState${seatNumber}`
  );

  // 椅子を押したときの処理
  const sitDown = () => {
    if (ctx.isSeat) {
      alert("あなたはすでに椅子に座っています");
    } else {
      seatState.isSitDown = true;
      seatState.name = currentUser.displayName;
      seatState.img = currentUser.photoURL;
      setSeatState(seatState);
      ctx.setIsSeat(!ctx.isSeat);
      setIsEachComponentSeat(true);
    }
  };

  // 椅子を離れるときの処理
  const standUp = () => {
    seatState.isSitDown = false;
    seatState.name = "";
    seatState.img = "";
    setSeatState(seatState);
    ctx.setIsSeat(!ctx.isSeat);
    setIsEachComponentSeat(false);
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
      {seatState.isSitDown && (
        <Image
          src={seatState.img}
          width={30}
          height={30}
          alt="席についている人のアイコン"
        />
      )}
      {isEachComponentSeat && (
        <Button onClick={standUp} colorScheme="blue" size="sm">
          立ち上がる
        </Button>
      )}
    </div>
  );
};