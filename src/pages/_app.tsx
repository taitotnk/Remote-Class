import "styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useAuth } from "context/useAuth";
import Router from "next/router";
import { AuthProvider } from "context/Auth";

function MyApp({ Component, pageProps }: AppProps) {
  const { currentUser } = useAuth();

  //ログインしていない場合はログインページへ
  useEffect(() => {
    !currentUser && Router.push("/signIn");
  }, [currentUser]);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
