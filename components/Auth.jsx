import { useState, useEffect } from "react";

import { auth, googleProvider } from "@/config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export default function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, googleProvider);
      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };

      setIsLoggedIn(true);
      if (typeof window !== "undefined") {
        window?.localStorage?.setItem("auth", JSON.stringify(authInfo));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };
      setIsLoggedIn(false);
      if (typeof window !== "undefined") {
        window?.localStorage?.setItem("auth", JSON.stringify(authInfo));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const auth =
      typeof window !== "undefined"
        ? JSON.parse(window?.localStorage?.getItem("auth"))
        : null;

    if (auth !== null) setIsLoggedIn(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={signInWithGoogle}
        className="bg-orange-primary p-2 rounded-lg"
      >
        Sign in with Google
      </button>
      {/* {isLoggedIn ? (
        <button
          className="bg-orange-primary p-2 rounded-lg flex flex-row gap-2"
          onClick={logOut}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          Log Out
        </button>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="bg-orange-primary p-2 rounded-lg"
        >
          Sign in with Google
        </button>
      )} */}
    </div>
  );
}
