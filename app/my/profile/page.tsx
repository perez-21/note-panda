import { Topic } from "@/app/shared/types";
import { topics } from "@/app/shared/mock";

export default function Page() {
  return (
    <div className="flex justify-evenly flex-wrap gap-8 items-center">
      {topics.map((topic) => {
        return (
          
            <div key={topic.id} className="flex flex-col gap-5">
              <span>Title: {topic.title}</span>
              <span>Description: {topic.description}</span>
              <span>Bookmarks: {topic.saves}</span>
              <span>Modules: {topic.modules.length}</span>
            </div>
          
        );
      })}
    </div>
  )  
}