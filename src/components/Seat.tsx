import { useRealtimeSharedState } from "realtimely";
import { useAuth } from "context/useAuth";
import { Button } from "@chakra-ui/react";
import { useState, useContext } from "react";
import Image from "next/image";
import { SeatContext } from "context/Seat";
import styles from "styles/Seat.module.css";

export type SeatProps = {
  seatNumber: number;
  tableId: string;
};

const MEET_URL = "https://meet.google.com/cht-ypzb-bhf?authuser=0";

export const Seat: React.FC<SeatProps> = ({ seatNumber, tableId }) => {
  const { currentUser } = useAuth();

  //TODO 個々のコンポーネントで椅子に座っているかの状態が分かりづらいのでリファクタしたい
  // コンポーネントが椅子に座っているかの状態
  const [isEachComponentSeat, setIsEachComponentSeat] = useState(false);

  // 自分が椅子に座ったかの状態管理
  const ctx = useContext(SeatContext);

  // 椅子の状態
  const [seatState, setSeatState] = useRealtimeSharedState(
    { isSitDown: false, name: "", img: "" },
    `SeatState${seatNumber}${tableId}`
  );

  // 椅子に座った際にmeetを開く
  const openMeet = () => {
    window.open(MEET_URL);
  };

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
      openMeet();
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
    <div className={styles.seat_container}>
      {seatState.isSitDown ? (
        <Button
          onClick={sitDown}
          disabled
          colorScheme="facebook"
          size="lg"
          // mr={7}
        ></Button>
      ) : (
        <Button onClick={sitDown} colorScheme="facebook" size="lg"></Button>
      )}
      {seatState.isSitDown && (
        <div className={styles.icon}>
          <Image
            src={seatState.img}
            className="avatar"
            width={40}
            height={40}
            alt="席についている人のアイコン"
          />
          <style jsx global>{`
            .avatar {
              border-radius: 50%;
            }
          `}</style>
        </div>
      )}
      {isEachComponentSeat && (
        <div className={styles.standup_btn}>
          <Button onClick={standUp} colorScheme="red" size="xs">
            立つ
          </Button>
        </div>
      )}
    </div>
  );
};
