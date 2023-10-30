import { useState, useEffect } from "react";

import {
  getDoc,
  doc,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

import { useGetUsersInfo } from "./useGetUserInfo";
import { db } from "@/config/firebase";

export function useGet() {
  const [documents, setDocuments] = useState([]);
  const markdownCollections = collection(db, "markdowns");
  const { userID } = useGetUsersInfo();

  const getDocs = async () => {
    let unsubscribe;
    try {
      const queryDocs = query(
        markdownCollections,
        where("userID", "==", userID),
        orderBy("createdAt", "desc")
      );

      unsubscribe = onSnapshot(markdownCollections, (snapshot) => {
        const docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
        });
        console.log(docs);
        setDocuments(docs);
      });
    } catch (err) {
      console.error(err);
    }

    // console.log(documents);

    // try {
    //   const querydocs = query(
    //     markdownCollections,
    //     where("userID", "==", userID),
    //     orderBy("createdAt", "desc")
    //   );

    //   await getDoc(
    //     markdownCollections,
    //     setDocument({ ...markdownCollections })
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    if (userID) getDocs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { documents };
}
