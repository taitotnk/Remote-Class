import { FC, useEffect } from "react";
import Router from "next/router";
import { useAuth } from "context/useAuth";
import login from "lib/login";

const SignIn: FC = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    currentUser && Router.push("/");
  }, [currentUser]);

  return (
    <div>
      <button
        className="animate-pulse bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={login}
      >
        INIADアカウントでログイン
      </button>
    </div>
  );
};

export default SignIn;
