import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate(`/post/${req.query.category}/${req.query.slug}`);
    await res.revalidate("/cms");
    await res.revalidate("/");
    return res.redirect("/cms");
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
