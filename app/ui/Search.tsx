"use client";

import { Search as SearchIcon } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mb-6 relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 dark:text-gray-500">
        <SearchIcon className="w-5 h-5" />
      </div>
      <input
        className="block w-full rounded-lg border-transparent bg-white dark:bg-background-dark/50 focus:ring-primary focus:border-primary pl-12 pr-4 py-3 text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
        placeholder={placeholder}
        type="search"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
}
