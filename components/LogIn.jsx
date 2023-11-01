import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "@/config/firebase";

export default function LogIn() {
  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, googleProvider);
      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };

      //   setIsLoggedIn(true);
      if (typeof window !== "undefined") {
        window?.localStorage?.setItem("auth", JSON.stringify(authInfo));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      type="button"
      onClick={signInWithGoogle}
      className="bg-orange-primary hover:bg-orange-secondary p-2 rounded-lg"
    >
      Sign in with Google
    </button>
  );
}
