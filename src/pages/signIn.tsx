import { FC, useEffect } from "react";
import Router from "next/router";
import { useAuth } from "context/useAuth";
import login from "lib/login";
import SignInHeader from "../components/SignInHeader";
import IntroPage from "components/IntroPage";
import cssHeader from "../styles/SignInHeader.module.css";

const SignIn: FC = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    currentUser && Router.push("/");
  }, [currentUser]);

  return (
    <div className={cssHeader.html}>
      <SignInHeader></SignInHeader>
      <div className={cssHeader.LoginButton}>
        <button onClick={login}>INIADアカウントでログイン</button>
      </div>
      <div className="scroll-main">
        <IntroPage></IntroPage>
      </div>
    </div>
  );
};

export default SignIn;
