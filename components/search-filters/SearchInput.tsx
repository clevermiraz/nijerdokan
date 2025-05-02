"use client";

import { ListFilterIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import CategoriesSidebar from "./CategoriesSidebar";

interface SearchInputProps {
  disabled?: boolean;
}

export default function SearchInput({ disabled }: SearchInputProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input className="pl-8" placeholder="search products" disabled={disabled} />
      </div>
      {/* TODO: add categories view all button */}
      <Button
        variant={"elevated"}
        className="size-12 shrink-0 flex lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon />
      </Button>
      {/* TODO: add library button */}
    </div>
  );
}
