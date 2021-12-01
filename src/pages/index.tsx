import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import { useRealtimeCursor, useRealtimeUserAction } from "realtimely";
import RealtimeHeader from "components/RealtimeHeader";
import logout from "lib/logout";
import { useAuth } from "context/useAuth";
import { GetServerSideProps } from "next";
import { CustomCursorViewParameter } from "realtimely/dist/components/CursorAnimate";
import CursorIcon from "components/CursorIcon";

const Home: NextPage = () => {
  const { onMouseMove, renderCursors } = useRealtimeCursor();
  const { currentUser } = useAuth();

  const customView = () => {
    const param: CustomCursorViewParameter = {
      userInfo: {
        color: "white",
        avatar: currentUser?.photoURL,
        name: currentUser?.displayName,
      },
    };
    return <CursorIcon userInfo={param.userInfo} />;
  };

  return (
    <div>
      <button onClick={logout}>logout</button>
      <div>
        <RealtimeHeader />
        <div className={styles.container} onClick={onMouseMove}>
          <main className={styles.main}>{renderCursors(customView)}</main>
        </div>
      </div>
    </div>
  );
};

export default Home;
