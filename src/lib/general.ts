import "server-only";

const link = process.env.API;

export const categories = async () => {
  return await fetch(link + "/categories")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};
