import SignUpView from "@/modules/auth/ui/views/SignUpView";
import { caller } from "@/trpc/server";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const session = await caller.auth.session();

  if (session?.user) {
    redirect("/");
  }

  return <SignUpView />;
}
