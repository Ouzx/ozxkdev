import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest, res: NextResponse) {
  if (
    req.nextUrl.searchParams.get("secret") !==
    process.env.NEXT_PUBLIC_REVALIDATE_SECRET
  ) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    revalidatePath(
      `/post/${req.nextUrl.searchParams.get(
        "category"
      )}/${req.nextUrl.searchParams.get("slug")}`
    );
    revalidatePath("/cms");
    revalidatePath("/");
    const url = req.nextUrl.clone();
    url.pathname = "/cms";
    return NextResponse.redirect(url, { status: 303 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong when revalidating" },
      { status: 500 }
    );
  }
}
