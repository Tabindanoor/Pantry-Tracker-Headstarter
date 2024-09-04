

// "use client";

// import { Provider, useDispatch } from "react-redux";
// import { store } from "./index";
// import { useSession } from "next-auth/react";
// import { setUser, clearUser } from "./authSlice";
// import { useEffect } from "react";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <Provider store={store}><AuthSync>{children}</AuthSync></Provider>;
// }


// function AuthSync({ children }: { children: React.ReactNode }) {
//   const { data: session } = useSession();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (session) {
//       dispatch(setUser(session.user));
//     } else {
//       dispatch(clearUser());
//     }
//   }, [session, dispatch]);

//   return <>{children}</>;
// }


// src/store/Providers.tsx
"use client";

import { Provider, useDispatch } from "react-redux";
import { store } from "./index";
import { useSession } from "next-auth/react";
import { setUser, clearUser } from "./authSlice";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}><AuthSync>{children}</AuthSync></Provider>;
}

function AuthSync({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(setUser(session.user));
    } else {
      dispatch(clearUser());
    }
  }, [session, dispatch]);

  return <>{children}</>;
}
