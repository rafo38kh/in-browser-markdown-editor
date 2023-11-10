"use client";
import { createContext, useMemo, useState, useEffect } from "react";

import { useGet } from "@/hooks/useGet";
import { useGetUsersInfo } from "@/hooks/useGetUserInfo";

export const MarkdownContext = createContext({
  currentMarkdown: null,
  setCurrentMarkdown: () => {},
  isLoggedIn: null,
  setIsLoggedIn: () => {},
});

export default function MarkdownContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentMarkdown, setCurrentMarkdown] = useState(null);

  const { documents } = useGet();
  const { isAuth } = useGetUsersInfo();

  useEffect(() => {
    isAuth === true ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [isAuth]);

  console.log();

  useEffect(() => {
    if (documents) setCurrentMarkdown(documents?.at(0));
  }, [documents]);

  const value = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      currentMarkdown,
      setCurrentMarkdown,
    }),
    [isLoggedIn, setIsLoggedIn, currentMarkdown, setCurrentMarkdown]
  );

  return (
    <MarkdownContext.Provider value={value}>
      {children}
    </MarkdownContext.Provider>
  );
}
