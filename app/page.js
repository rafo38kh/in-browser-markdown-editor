"use client";
import { useState, useEffect, useContext } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

import showIcon from "../public/assets/icon-show-preview.svg";
import hideIcon from "../public/assets/icon-hide-preview.svg";

import { MarkdownContext } from "@/contexts/MarkdownContextProvider";

import { useAdd } from "@/hooks/useAdd";

import Auth from "@/components/Auth";

import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";

import { debounce } from "@/helper_functions/debounce";

export default function Home() {
  const { currentMarkdown, setCurrentMarkdown } = useContext(MarkdownContext);

  const [markdown, setMarkdown] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentMarkdownID, setCurrentMarkdownID] = useState("");
  const [isMenuOpend, setIsMenuOpend] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    // debounce(updateDocMArkdown(markdown), 500);
    if (currentMarkdown) {
      setMarkdown(currentMarkdown?.markdown);
    }
  }, [currentMarkdown]);

  const toggleMarkdownPreview = () => {
    return setIsShow((prevState) => !prevState);
  };

  return (
    <div className="flex overflow-hidden">
      {isMenuOpend && (
        <SideBar
          setCurrentMarkdownID={setCurrentMarkdownID}
          currentMarkdownID={currentMarkdownID}
        />
      )}
      <div className="w-full ">
        <TopBar
          currentMarkdownID={currentMarkdownID}
          setCurrentMarkdownID={setCurrentMarkdownID}
          markdown={markdown}
          isMenuOpend={isMenuOpend}
          setIsMenuOpend={setIsMenuOpend}
        />
        <div>
          {/* <Auth isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
          {isShow ? (
            <div>
              <div className="flex h-max w-full items-center justify-between bg-tertiary-200 p-3.5 dark:bg-primary-900 md:static md:px-5">
                <span className="uppercase text-sm tracking-widest">
                  Markdown
                </span>
                <button onClick={toggleMarkdownPreview}>
                  <Image
                    src={showIcon}
                    width={15}
                    height={15}
                    alt="show-icon"
                  />
                </button>
              </div>
              <form>
                <textarea
                  className="w-full bg-primary-1000 h-screen"
                  value={markdown}
                  onChange={(e) => {
                    setMarkdown(e.target.value);
                  }}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                />
              </form>
            </div>
          ) : (
            <div className="h-screen overflow-hidden">
              <div className="flex h-max w-full items-center justify-between bg-tertiary-200 p-3.5 dark:bg-primary-900 md:static md:px-5">
                <span className="uppercase text-sm tracking-widest">
                  Preview
                </span>
                <button onClick={toggleMarkdownPreview}>
                  <Image
                    src={hideIcon}
                    width={15}
                    height={15}
                    alt="hide-icon"
                  />
                </button>
              </div>
              <div className="heading-5 heading-6 blockquote-bold orange-list-marker prose h-full w-full p-4 pb-32 prose-headings:font-roboto-slab prose-headings:text-primary-700 prose-lead:leading-4 prose-h1:text-heading-1 prose-h2:text-heading-2 prose-h2:font-light prose-h3:text-heading-3 prose-h4:text-heading-4 prose-p:font-roboto-slab prose-p:text-sm prose-p:font-normal prose-p:text-secondary-500 prose-blockquote:rounded prose-blockquote:border-orange-primary prose-blockquote:bg-tertiary-200 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:font-roboto-slab prose-blockquote:text-sm prose-blockquote:not-italic prose-code:text-primary-700 prose-pre:bg-tertiary-200 prose-ol:ml-4 prose-ol:text-sm prose-ol:font-normal prose-ol:text-secondary-500 prose-ul:ml-3 prose-ul:font-normal prose-ul:text-secondary-500 prose-table:rounded prose-table:bg-tertiary-200 prose-td:text-secondary-500 prose-img:inline-block dark:prose-headings:text-white dark:prose-a:text-white dark:prose-blockquote:bg-primary-800 dark:prose-strong:text-secondary-300  dark:prose-code:text-white dark:prose-pre:bg-primary-800 dark:prose-ol:text-secondary-400 dark:prose-ul:text-secondary-400 dark:prose-table:bg-primary-800 dark:prose-td:text-secondary-400 md:p-6 md:pb-60 bg-primary-1000">
                {<Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
