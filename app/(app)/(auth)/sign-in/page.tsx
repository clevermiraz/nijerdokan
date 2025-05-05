import SignInView from "@/modules/auth/ui/views/SignInView";
import { caller } from "@/trpc/server";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await caller.auth.session();

  if (session?.user) {
    redirect("/");
  }

  return <SignInView />;
}
