"use client";
import { useState, useContext, useEffect } from "react";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

import { MarkdownContext } from "@/contexts/MarkdownContextProvider";

import { useAdd } from "@/hooks/useAdd";

import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import Markdown from "@/components/Markdown";
import Preview from "@/components/Preview";

import { debounce } from "@/helper_functions/debounce";

export default function Home() {
  const { currentMarkdown } = useContext(MarkdownContext);

  const { saveDocument } = useAdd();

  const [isShow, setIsShow] = useState(false);
  const [markdown, setMarkdown] = useState("");
  const [isMenuOpend, setIsMenuOpend] = useState(false);

  const toggleMarkdownPreview = () => {
    saveDocument(currentMarkdown?.id, markdown);
    setIsShow((prevState) => !prevState);
  };

  useEffect(() => {
    setMarkdown(currentMarkdown?.markdown);
  }, [currentMarkdown]);

  console.log(currentMarkdown);

  // useEffect(() => {
  //   setTimeout();
  //   setIsShow((prevState) => !prevState);
  // }, [isAuth]);

  return (
    <div className="flex pb-16 relative">
      {isMenuOpend && <SideBar setIsMenuOpend={setIsMenuOpend} />}

      <div className="w-full grid grid-rows-[auto_1fr] ">
        <TopBar isMenuOpend={isMenuOpend} setIsMenuOpend={setIsMenuOpend} />
        <ScrollSync>
          <>
            <div className="md:hidden h-full">
              {isShow ? (
                <div>
                  <Markdown
                    markdown={markdown}
                    setMarkdown={setMarkdown}
                    toggleMarkdownPreview={toggleMarkdownPreview}
                  />
                </div>
              ) : (
                <div>
                  <Preview
                    isShow={isShow}
                    markdown={markdown}
                    setMarkdown={setMarkdown}
                    isMenuOpend={isMenuOpend}
                    toggleMarkdownPreview={toggleMarkdownPreview}
                  />
                </div>
              )}
            </div>

            <div className="hidden md:flex relative h-[100vh] ">
              <ScrollSyncPane>
                <div
                  className={`${
                    isShow ? "hidden" : "inline-block"
                  } overflow-auto w-1/2`}
                >
                  <Markdown
                    markdown={markdown}
                    setMarkdown={setMarkdown}
                    toggleMarkdownPreview={toggleMarkdownPreview}
                  />
                </div>
              </ScrollSyncPane>

              <ScrollSyncPane>
                <div className={isShow ? "w-full" : "w-1/2"}>
                  <Preview
                    isShow={isShow}
                    markdown={markdown}
                    setMarkdown={setMarkdown}
                    isMenuOpend={isMenuOpend}
                    toggleMarkdownPreview={toggleMarkdownPreview}
                  />
                </div>
              </ScrollSyncPane>
            </div>
          </>
        </ScrollSync>
      </div>
    </div>
  );
}
