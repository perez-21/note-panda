import { Module } from "@/app/shared/types";
import { notes } from "@/app/shared/mock";
import { Plus } from "lucide-react";
import Search from "@/app/ui/Search";
import { logThis, escapeRegex } from "@/app/lib/utils";
import Link from "next/link";
import clsx from "clsx";

const image = "/note.png";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    status?: "Published" | "Archived" | "Draft";
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const status = searchParams?.status || null;

  function filterNotes(
    page: number,
    query: string,
    status: "Published" | "Archived" | "Draft" | null
  ) {
    if (!query && !page && !status) {
      return notes;
    }

    let filteredNotes = notes.filter((note) => {
      if (!status) {
        return true;
      }

      return note.status === status;
    });

    if (!query) {
      return filteredNotes;
    }
    filteredNotes = filteredNotes.filter((note) => {
      const safeQuery = escapeRegex(query);
      const regex = new RegExp(safeQuery, "i");

      const titleMatch = regex.test(note.title);
      const authorMatch = regex.test(note.author);

      return titleMatch || authorMatch;
    });

    return filteredNotes;
  }
  return (
    <>
      <main className="flex flex-1 justify-center py-8">
        <div className="layout-content-container w-full max-w-5xl px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Notes
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Explore notes
            </p>
          </div>
          <Search placeholder="Search Topics" />
          <div className="border-b border-gray-200 dark:border-gray-700/50 mb-6">
            <nav aria-label="Tabs" className="-mb-px flex space-x-8">
              <Link
                className={clsx(
                  " whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",
                  {
                    "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600":
                      status ? true : false,
                    "border-primary text-primary": status ? false : true,
                  }
                )}
                href="/my/notes"
              >
                All
              </Link>
              <Link
                className={clsx(
                  " whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",
                  {
                    "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600":
                      status === "Published" ? false : true,
                    "border-primary text-primary":
                      status === "Published" ? true : false,
                  }
                )}
                href="/my/notes?status=Published"
              >
                Published
              </Link>
              <Link
                className={clsx(
                  " whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",
                  {
                    "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600":
                      status === "Draft" ? false : true,
                    "border-primary text-primary":
                      status === "Draft" ? true : false,
                  }
                )}
                href="/my/notes?status=Draft"
              >
                Drafted
              </Link>
              <Link
                className={clsx(
                  " whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm",
                  {
                    "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600":
                      status === "Archived" ? false : true,
                    "border-primary text-primary":
                      status === "Archived" ? true : false,
                  }
                )}
                href="/my/notes?status=Archived"
              >
                Archived
              </Link>
            </nav>
          </div>
          <div className="space-y-12">
            <section>
              {notes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterNotes(currentPage, query, status).map((note) => {
                    return (
                      <div key={note.id} className="group cursor-pointer">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-3 transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundImage: `url(${image})` }}
                        ></div>

                        <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary">
                          {note.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {note.author}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12 px-6 bg-white dark:bg-background-dark/50 rounded-lg border border-gray-300 dark:border-gray-700">
                  <div
                    className="mx-auto w-full max-w-sm bg-center bg-no-repeat aspect-video bg-contain rounded-lg mb-6"
                    style={{
                      backgroundImage: "url('/notopics.png')",
                    }}
                  ></div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    No notes yet
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto mt-1 mb-4">
                    Be the first to create a note
                  </p>
                  <button className="inline-flex items-center justify-center rounded-lg h-10 px-5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-bold">
                    Create Note
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
      <div className="fixed bottom-8 right-8">
        <button className="flex items-center justify-center rounded-full h-14 px-5 bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
          <div className="size-6 mr-2">
            <Plus width={"100%"} height={"100%"} />
          </div>
          <span className="text-base font-bold">Create Topic</span>
        </button>
      </div>
    </>
  );
}
