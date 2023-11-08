"use client";

import { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";

import { MarkdownContext } from "@/contexts/MarkdownContextProvider";

import { useGet } from "@/hooks/useGet";
import { useAdd } from "@/hooks/useAdd";

export default function Modal({ isModalOpen, setIsModalOpen }) {
  const { currentMarkdown, setCurrentMarkdown } = useContext(MarkdownContext);

  const [mounted, setMounted] = useState(false);

  const { documents } = useGet();
  const { deleteDocument } = useAdd();

  useEffect(() => setMounted(true), []);

  if (!isModalOpen) return null;

  return mounted
    ? createPortal(
        <div className="bg-black h-screen w-full z-0 fixed top-0 left-0  bg-black/80 flex justify-center items-center px-4 ">
          <div className="z-50 dark:bg-primary-900 bg-white p-8 rounded-md max-w-sm">
            <span className="text-xl font-bold dark:text-white text-primary-700">
              Delete this document?
            </span>
            <p className="text-sm font-normal text-secondary-500 dark:text-secondary-400 my-4">
              Are you sure you want to delete the {currentMarkdown?.title}{" "}
              document and its contents? This action cannot be reversed.
            </p>
            <button
              type="button"
              onClick={() => {
                deleteDocument(currentMarkdown?.id);
                setIsModalOpen(false);
                setCurrentMarkdown(null);
              }}
              className="bg-orange-primary hover:bg-orange-secondary p-4 rounded-lg w-full text-white text-sm"
            >
              Confirm & Delete
            </button>
          </div>
        </div>,
        document.body
      )
    : null;
}
