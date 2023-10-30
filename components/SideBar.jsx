"use client";
import { useContext } from "react";

import { useGetUsersInfo } from "@/hooks/useGetUserInfo";
import { MarkdownContext } from "@/contexts/MarkdownContextProvider";
import ChangeTheme from "../components/ChangeTheme";

import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import docIcon from "../public/assets/icon-document.svg";

import { useAdd } from "@/hooks/useAdd";
import { useGet } from "@/hooks/useGet";

import { firebaseDateToRegular } from "@/helper_functions/firebaseDateToRegular";

import markdownLogo from "@/public/assets/logo.svg";

export default function SideBar({ currentMarkdownID, setCurrentMarkdownID }) {
  const { createNewDoc } = useAdd();
  const { documents } = useGet();
  const { userID } = useGetUsersInfo();
  const { currentMarkdown, setCurrentMarkdown } = useContext(MarkdownContext);

  return (
    // h-[calc(100vh-395px)]
    <aside className="h-screen w-64 flex-shrink-0 p-6 flex flex-col bg-primary-900 justify-between items-start m-0">
      <div>
        <Image
          className="p-2"
          src={markdownLogo}
          height={150}
          width={150}
          alt="markdown logo"
        />
        <div className="flex flex-col justify-center items-start">
          <span className="block">my documents</span>
          <button
            className="bg-orange-primary py-2 px-6 rounded-md"
            onClick={() => createNewDoc(userID)}
          >
            + New Document
          </button>
        </div>
        {documents?.map((doc) => (
          <div
            key={uuidv4()}
            className="flex flex-row justify-start items-center gap-4 mb-4"
          >
            <Image src={docIcon} height={20} width={20} alt="" />
            <button
              onClick={() => {
                setCurrentMarkdown(doc);
                setCurrentMarkdownID(doc.id);
              }}
              className={`flex flex-col items-start justify-center ${
                currentMarkdownID === doc?.id
                  ? "group-last::text-orange-primary"
                  : null
              }`}
            >
              <span className="text-secondary-500 block">
                {firebaseDateToRegular(doc?.createdAt)}
              </span>
              <span
                className={`${
                  doc?.id === currentMarkdownID && "text-orange-primary"
                }`}
              >
                {doc?.title}
              </span>
            </button>
          </div>
        ))}
      </div>

      <ChangeTheme />
    </aside>
  );
}
