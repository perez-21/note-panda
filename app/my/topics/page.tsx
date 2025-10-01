import { Topic } from "@/app/shared/types";
import { topics } from "@/app/shared/mock";
import {
  Search,
  Plus,
  CodeXml,
  Earth,
  Microscope,
  Calculator,
  BookOpen,
} from "lucide-react";

const image = "/topic.png";
// const topics = [];
export default function Page() {
  return (
    <>
      <main className="flex flex-1 justify-center py-8">
        <div className="layout-content-container w-full max-w-5xl px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Topics
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Explore hubs to learn and collaborate with others.
            </p>
          </div>
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 dark:text-gray-500">
              <Search className="w-5 h-5" />
            </div>
            <input
              className="block w-full rounded-lg border-transparent bg-white dark:bg-background-dark/50 focus:ring-primary focus:border-primary pl-12 pr-4 py-3 text-base text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
              placeholder="Search topics"
              type="search"
            />
          </div>
          <div className="border-b border-gray-200 dark:border-gray-700/50 mb-6">
            <nav aria-label="Tabs" className="-mb-px flex space-x-8">
              <a
                className="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                href="#"
              >
                All
              </a>
              <a
                className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                href="#"
              >
                Public
              </a>
              <a
                className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                href="#"
              >
                Private
              </a>
            </nav>
          </div>
          <div className="space-y-12">
            <section>
              {topics.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topics.map((topic) => {
                    return (
                      <div key={topic.id} className="group cursor-pointer">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mb-3 transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundImage: `url(${image})` }}
                        ></div>

                        <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary">
                          {topic.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {topic.description}
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
                      backgroundImage: "url('/notopics.png')"}}
                  ></div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    No topics yet
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto mt-1 mb-4">
                    Create or join a topic to start learning and collaborating
                  </p>
                  <button className="inline-flex items-center justify-center rounded-lg h-10 px-5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-bold">
                    Create Topic
                  </button>
                </div>
              )}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Browse by Category
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <a
                  className="flex flex-col items-center justify-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-transparent p-4 hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/30 transition-all"
                  href="#"
                >
                  <div className="text-primary size-7">
                    <CodeXml height={"100%"} width={"100%"} />
                  </div>
                  <h3 className="font-bold text-base text-center text-gray-800 dark:text-gray-200">
                    Programming
                  </h3>
                </a>
                <a
                  className="flex flex-col items-center justify-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-transparent p-4 hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/30 transition-all"
                  href="#"
                >
                  <div className="text-primary size-7">
                    <Earth height={"100%"} width={"100%"} />
                  </div>
                  <h3 className="font-bold text-base text-center text-gray-800 dark:text-gray-200">
                    History
                  </h3>
                </a>
                <a
                  className="flex flex-col items-center justify-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-transparent p-4 hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/30 transition-all"
                  href="#"
                >
                  <div className="text-primary size-7">
                    <Microscope height={"100%"} width={"100%"} />
                  </div>
                  <h3 className="font-bold text-base text-center text-gray-800 dark:text-gray-200">
                    Science
                  </h3>
                </a>
                <a
                  className="flex flex-col items-center justify-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-transparent p-4 hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/30 transition-all"
                  href="#"
                >
                  <div className="text-primary size-7">
                    <BookOpen height={"100%"} width={"100%"} />
                  </div>
                  <h3 className="font-bold text-base text-center text-gray-800 dark:text-gray-200">
                    Literature
                  </h3>
                </a>
                <a
                  className="flex flex-col items-center justify-center gap-3 rounded-lg border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-transparent p-4 hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/30 transition-all"
                  href="#"
                >
                  <div className="text-primary size-7">
                    <Calculator height={"100%"} width={"100%"} />
                  </div>
                  <h3 className="font-bold text-base text-center text-gray-800 dark:text-gray-200">
                    Mathematics
                  </h3>
                </a>
              </div>
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
