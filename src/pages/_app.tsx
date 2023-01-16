import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";
import { UserContext } from "../context/userContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <UserContext.Provider value={{}}>
        {/* <AnimateSharedLayout type="crossfade"> */}
        <Component {...pageProps} />
        {/* </AnimateSharedLayout> */}
      </UserContext.Provider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
