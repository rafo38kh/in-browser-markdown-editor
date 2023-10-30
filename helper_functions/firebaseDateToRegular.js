export const firebaseDateToRegular = (doc) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    doc &&
    new Intl.DateTimeFormat("en-US", options).format(
      doc?.seconds * 1000 + doc?.nanoseconds / 1000000
    )
  );
};
