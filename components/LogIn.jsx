import { useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { MarkdownContext } from "@/contexts/MarkdownContextProvider";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db, auth, googleProvider } from "@/config/firebase";

// import { useGetUsersInfo } from "@/hooks/useGetUserInfo";

// const DATA = [
//   {
//     id: "0",
//     createdAt: { seconds: 1658188207, nanoseconds: 859000000 },
//     title: "untitled-document.md",
//     markdown: "# EDIT ME!!!",
//   },
//   {
//     id: "1",
//     createdAt: { seconds: 1658188207, nanoseconds: 859000000 },
//     title: "welcome.md",
//     markdown:
//       "# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n###### Ordered checklist\n1. [ ] This is an unchecked list item\n2. [X] This is checked list item\n###### Unordered checklist\n- [ ] This is an unchecked list item\n- [X] This is checked list item\n\n##### Tables\n\n| Heading | A | B | C |\n| :-: | -: | :- | - |\n| Cell 1 | Cell 2 | Cell 3 | Cell 4 |\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```\n\n##### Images\n\nThis app was built with:\n![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)",
//   },
// ];

export default function LogIn() {
  //   const { userID } = useGetUsersInfo();
  const { setIsLoggedIn } = useContext(MarkdownContext);

  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, googleProvider);
      const authInfo = {
        isAuth: true,
        userID: results.user.uid,
        email: results.user.email,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
      };

      setIsLoggedIn(true);
      if (typeof window !== "undefined") {
        window?.localStorage?.setItem("auth", JSON.stringify(authInfo));
      }
    } catch (err) {
      console.error(err);
    }
  };

  //   useEffect(() => {
  //     const addInitialData = () => {
  //       const markdownCollectionRef = collection(db, "markdowns");

  //       console.log("ran");

  //       DATA.map(async (el) => {
  //         await addDoc(markdownCollectionRef, {
  //           userID,
  //           title: el.title,
  //           content: el.content,
  //         });
  //       });
  //     };

  //     addInitialData();
  //   }, []);

  return (
    <>
      <button
        type="button"
        onClick={signInWithGoogle}
        className="bg-orange-primary hover:bg-orange-secondary p-2 rounded-lg hidden md:inline-block "
      >
        Sign in with Google
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={signInWithGoogle}
        className="text-xs bg-orange-primary whitespace-nowrap hover:bg-orange-secondary p-2 rounded-lg md:hidden flex flex-row-reverse items-center gap-2"
      >
        Sign in with Google
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </button>
    </>
  );
}
