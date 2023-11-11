"use client";
import { createContext, useMemo, useState, useEffect } from "react";

import { useGet } from "@/hooks/useGet";
import { useGetUsersInfo } from "@/hooks/useGetUserInfo";

import DATA from "@/data";

export const MarkdownContext = createContext({
  isLoggedIn: null,
  setIsLoggedIn: () => {},
  currentMarkdown: null,
  setCurrentMarkdown: () => {},
});

export default function MarkdownContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentMarkdown, setCurrentMarkdown] = useState(null);

  const { documents } = useGet();
  const { isAuth } = useGetUsersInfo();

  useEffect(() => {
    if (isAuth === true) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [isAuth]);

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
