import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import { useRealtimeCursor, useRealtimeUserAction } from "realtimely";
import logout from "lib/logout";
import { useAuth } from "context/useAuth";
import { GetServerSideProps } from "next";
import { CustomCursorViewParameter } from "realtimely/dist/components/CursorAnimate";
import CursorIcon from "components/CursorIcon";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Header from "components/Header";
import Chat from "components/Chat";
import Slide from "components/Slide";

const Home: NextPage = () => {
  const { currentUser } = useAuth();
  const { onMouseMove, renderCursors } = useRealtimeCursor(
    100,
    JSON.stringify(currentUser)
  );

  const customView = (param: CustomCursorViewParameter) => {
    return <CursorIcon userInfo={param.customInfo} />;
  };

  return (
    <>
      <Head>
        <title>Virtual Space for INIAD</title>
        <link rel="shortcut icon" href="/images/icon.png" />
      </Head>
      <Header
        image={currentUser?.photoURL}
        name={currentUser?.displayName}
        email={currentUser?.email}
      />
      <Box background={"#ecf0f5"}>
        <div>
          <div>
            <div className={styles.slide_container}>
              <Slide />
            </div>
            <div className={styles.container} onClick={onMouseMove}>
              <main className={styles.main}>{renderCursors(customView)}</main>
            </div>
          </div>
        </div>
        <Chat />
      </Box>
    </>
  );
};

export default Home;
