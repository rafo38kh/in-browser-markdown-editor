"use client";
import { createContext, useMemo, useState } from "react";

export const MarkdownContext = createContext({
  currentMarkdown: null,
  setCurrentMarkdown: () => {},
});

export default function MarkdownContextProvider({ children }) {
  const [currentMarkdown, setCurrentMarkdown] = useState(null);

  const value = useMemo(
    () => ({
      currentMarkdown,
      setCurrentMarkdown,
    }),
    [currentMarkdown, setCurrentMarkdown]
  );

  return (
    <MarkdownContext.Provider value={value}>
      {children}
    </MarkdownContext.Provider>
  );
}
