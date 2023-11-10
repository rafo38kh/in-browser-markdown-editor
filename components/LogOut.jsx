import { useContext } from "react";

import { signOut } from "firebase/auth";

import { auth } from "@/config/firebase";

import { MarkdownContext } from "@/contexts/MarkdownContextProvider";

export default function LogOut({ setIsMenuOpend }) {
  const { setIsLoggedIn } = useContext(MarkdownContext);

  const logOut = async () => {
    try {
      await signOut(auth);
      const authInfo = {
        name: null,
        email: null,
        userID: null,
        isAuth: false,
        profilePhoto: null,
      };
      setIsLoggedIn(false);
      setIsMenuOpend(false);
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
      onClick={logOut}
      className="bg-orange-primary hover:bg-orange-secondary text-white p-2 rounded-lg flex flex-row gap-2"
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
  );
}
