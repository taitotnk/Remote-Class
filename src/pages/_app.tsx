import "styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useAuth } from "context/useAuth";
import Router from "next/router";
import { AuthProvider } from "context/Auth";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const { currentUser } = useAuth();

  //ログインしていない場合はログインページへ
  useEffect(() => {
    !currentUser && Router.push("/signIn");
  }, [currentUser]);

  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
export default MyApp;
