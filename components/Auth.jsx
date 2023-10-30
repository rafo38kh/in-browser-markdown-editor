import { useEffect } from "react";

import { auth, googleProvider } from "@/config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export default function Auth({ isLoggedIn, setIsLoggedIn }) {
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
      setIsLoggedIn(false);
      if (typeof window !== "undefined") {
        window?.localStorage?.removeItem("auth");
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
      {isLoggedIn ? (
        <button onClick={logOut}>Log Out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
}
