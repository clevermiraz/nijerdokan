"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  return <div className="text-red-500">{JSON.stringify(session.data?.user, null, 2)}</div>;
}
