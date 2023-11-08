import { useContext } from "react";

import { MarkdownContext } from "@/contexts/MarkdownContextProvider";

import { useAdd } from "@/hooks/useAdd";

export default function TopBarButtons({ setIsModalOpen }) {
  const { currentMarkdown } = useContext(MarkdownContext);

  const { saveDocument } = useAdd();

  return (
    <div className="flex justify-center flex-shrink-0 items-center gap-4 ">
      <button type="button" onClick={() => setIsModalOpen(true)}>
        <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
            fill="#7C8187"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={() =>
          saveDocument(currentMarkdown?.id, currentMarkdown?.markdown)
        }
        className="bg-orange-primary hover:bg-orange-secondary py-3 px-5 rounded-lg flex items-center flex-row-reverse gap-2 text-[.9375rem]"
      >
        <span className="hidden md:inline-block">Save Changes</span>
        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.91 5.931 10.575.598A.889.889 0 0 0 10.29.41.969.969 0 0 0 9.945.34H2.834A2.667 2.667 0 0 0 .167 3.007v10.666a2.667 2.667 0 0 0 2.667 2.667H13.5a2.667 2.667 0 0 0 2.667-2.667v-7.11a.889.889 0 0 0-.258-.632ZM5.5 2.118h3.556v1.778H5.5V2.118Zm5.334 12.444H5.5v-2.666c0-.491.398-.89.89-.89h3.555c.49 0 .889.399.889.89v2.666Zm3.555-.889c0 .491-.398.89-.889.89h-.889v-2.667a2.667 2.667 0 0 0-2.666-2.667H6.389a2.667 2.667 0 0 0-2.666 2.667v2.666h-.89a.889.889 0 0 1-.888-.889V3.007c0-.491.398-.89.889-.89h.889v2.667c0 .491.398.89.888.89h5.334c.49 0 .889-.399.889-.89V3.371l3.555 3.556v6.746Z"
            fill="#FFF"
          />
        </svg>
      </button>
    </div>
  );
}
