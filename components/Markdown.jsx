import { ScrollSyncPane } from "react-scroll-sync";

export default function Markdown({
  markdown,
  setMarkdown,
  toggleMarkdownPreview,
}) {
  return (
    <div className="overflow-hidden h-[100vh] md:h-full md:w-full ">
      <div className="top-16 flex h-max w-full  items-center justify-between bg-tertiary-200 p-3.5 dark:bg-primary-900 md:static md:px-5">
        <span className="block uppercase text-sm tracking-widest text-secondary-500 dark:text-secondary-400">
          Markdown
        </span>
        <button
          className="md:hidden fill-icons-color hover:fill-orange-primary"
          type="button"
          onClick={toggleMarkdownPreview}
        >
          <svg
            className="md:hidden"
            width="16"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.784.003c4.782-.144 7.597 4.31 8.109 5.198a.8.8 0 0 1 0 .8c-.688 1.2-3.255 5.086-7.677 5.198h-.2c-4.71 0-7.405-4.326-7.909-5.198a.8.8 0 0 1 0-.8C.803 4.001 3.362.115 7.784.003Zm.38 1.6h-.3c-3.199.08-5.286 2.71-6.086 3.998C2.482 6.73 4.73 9.68 8.176 9.6c3.199-.08 5.262-2.711 6.086-3.999-.712-1.127-2.967-4.086-6.398-3.998ZM8 2.803A2.799 2.799 0 1 1 8 8.4a2.799 2.799 0 0 1 0-5.598Zm0 1.599A1.2 1.2 0 1 0 8 6.8a1.2 1.2 0 0 0 0-2.4Z"
              // fill="#7C8187"
            />
          </svg>
        </button>
      </div>

      <ScrollSyncPane>
        <textarea
          cols="30"
          rows="10"
          className="h-full w-full resize-none bg-white dark:bg-primary-1000 p-4 pb-64 pt-16 text-sm font-normal leading-6 font-roboto-mono dark:text-secondary-400 text-primary-700 md:pt-0 outline-none border-t-4 border-transparent focus:border-orange-primary"
          value={markdown}
          onChange={(e) => {
            setMarkdown(e.target.value);
          }}
        />
      </ScrollSyncPane>
    </div>
  );
}
