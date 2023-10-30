import { useState, useContext, useEffect } from "react";
import Image from "next/image";

import { useAdd } from "@/hooks/useAdd";

import docIcon from "../public/assets/icon-document.svg";
import dleetIcon from "../public/assets/icon-delete.svg";
import saveIcon from "../public/assets/icon-save.svg";

import { MarkdownContext } from "@/contexts/MarkdownContextProvider";

import markdownLogo from "../public/assets/logo.svg";

export default function TopBar({
  currentMarkdownID,
  markdown,
  isMenuOpend,
  setIsMenuOpend,
}) {
  const { currentMarkdown } = useContext(MarkdownContext);

  const { updateDocTitle, saveDocument, deleteDocument } = useAdd();
  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    if (currentMarkdown) {
      setCurrentTitle(currentMarkdown?.title);
    }
  }, [currentMarkdown]);

  const handleUpdateTitleSubmit = (e) => {
    e.preventDefault();

    updateDocTitle(currentMarkdownID, currentTitle);
  };

  return (
    <div className="bg-primary-800 flex items-center justify-between pr-2">
      <div className="flex justify-center items-center gap-4">
        <button
          className="bg-primary-700 p-6"
          onClick={() => setIsMenuOpend((prevState) => !prevState)}
        >
          {!isMenuOpend ? (
            <svg width="30" height="18" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z" />
              </g>
            </svg>
          ) : (
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z" />
                <path d="M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z" />
              </g>
            </svg>
          )}
        </button>
        <Image
          className="border-r-2 p-2 hidden"
          src={markdownLogo}
          height={100}
          width={100}
          alt="markdown logo"
        />
        {!isMenuOpend && (
          <div className="flex items-center gap-4">
            <Image src={docIcon} alt="document" height={20} width={20} />
            <form
              onSubmit={handleUpdateTitleSubmit}
              className="flex flex-col w-fit"
            >
              <label className="hidden">Document name</label>
              <input
                className="bg-primary-800 w-full"
                onChange={(e) => setCurrentTitle(e.target.value)}
                type="text"
                value={currentTitle}
              />
            </form>
          </div>
        )}
      </div>

      {!isMenuOpend && (
        <div className="flex justify-center flex-shrink-0 items-center gap-4">
          <button onClick={() => deleteDocument(currentMarkdownID)}>
            <Image src={dleetIcon} height={20} width={20} alt="delete" />
          </button>
          <button
            className="bg-orange-primary p-4 rounded-lg"
            onClick={() => saveDocument(currentMarkdownID, markdown)}
          >
            <Image src={saveIcon} height={20} width={20} alt="save" />
          </button>
        </div>
      )}
    </div>
  );
}
