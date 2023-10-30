import {
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/config/firebase";
// import { useGetUsersInfo } from "@/hooks/useGetUsersInfo";

export function useAdd() {
  const markdownCollectionRef = collection(db, "markdowns");

  const createNewDoc = async (userID) => {
    const initialDoc = {
      userID,
      markdown: "",
      createdAt: serverTimestamp(),
      title: "untitled-document.md",
    };

    try {
      await addDoc(markdownCollectionRef, initialDoc);
    } catch (error) {
      console.log(error);
    }
  };

  const updateDocTitle = async (id, title) => {
    const docRef = doc(markdownCollectionRef, id);

    await updateDoc(docRef, { title });
  };

  const saveDocument = async (id, markdown) => {
    const docRef = doc(markdownCollectionRef, id);

    await updateDoc(docRef, { markdown });
  };

  const deleteDocument = async (id) => {
    const docRef = doc(markdownCollectionRef, id);

    try {
      await deleteDoc(docRef);
    } catch (error) {
      console.log(error);
    }
  };

  // export const useAdd = () => {
  //   const markdownCollectionRef = collection(db, "markdowns");
  //   //   const { userID } = useGetUsersInfo();

  //   // TODO
  //   /*
  //     create new document

  //     strucutre:
  //         - createdAt
  //         - title
  //         - markdown
  //         - userId
  //   */

  //   const addMarkdown = async (markdown) => {
  //     await addDoc(markdownCollectionRef, { markdown });
  //   };

  return { createNewDoc, updateDocTitle, saveDocument, deleteDocument };
}
