import { FC, useEffect } from "react";
import Router from "next/router";
import { useAuth } from "context/useAuth";
import login from "lib/login";
import SignInHeader from "../components/SignInHeader";
import IntroPage from "components/IntroPage";
import cssHeader from "../styles/SignInHeader.module.css";
import Head from "next/head";

const SignIn: FC = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    currentUser && Router.push("/");
  }, [currentUser]);

  return (
    <>
      <Head>
        <title>Virtual Space for INIAD</title>
        <link rel="shortcut icon" href="/images/icon.png" />
      </Head>
      <div className={cssHeader.html}>
        <SignInHeader></SignInHeader>
        <div className={cssHeader.LoginButton}>
          <button onClick={login}>INIADアカウントでログイン</button>
        </div>
        <div className="scroll-main">
          <IntroPage></IntroPage>
        </div>
      </div>
    </>
  );
};

export default SignIn;
