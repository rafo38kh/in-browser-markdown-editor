export const useGetUsersInfo = () => {
  const auth =
    typeof window !== "undefined"
      ? JSON.parse(window?.localStorage?.getItem("auth"))
      : null;

  if (auth) {
    const { userID, name, profilePhoto, isAuth, email } = auth;

    return { userID, name, profilePhoto, isAuth, email };
  }

  return {};
};
