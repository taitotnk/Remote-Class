import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import { useRealtimeCursor } from "realtimely";
import RealtimeHeader from "components/RealtimeHeader";
import logout from "lib/logout";

const Home: NextPage = () => {
  const { onMouseMove, renderCursors } = useRealtimeCursor();
  return (
    <div>
      <button onClick={logout}>logout</button>
      <div>
        <RealtimeHeader />
        <div className={styles.container} onClick={onMouseMove}>
          <main className={styles.main}>{renderCursors()}</main>
        </div>
      </div>
    </div>
  );
};

export default Home;
