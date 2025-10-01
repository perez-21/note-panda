import { Module } from "@/app/shared/types";
import { modules } from "@/app/shared/mock";

export default function Page() {
  return (
    <div className="flex justify-evenly flex-wrap gap-8 items-center">
      {modules.map((module) => {
        return (
          
            <div key={module.id} className="flex flex-col gap-5">
              <span>Title: {module.title}</span>
              <span>Description: {module.description}</span>
              <span>Bookmarks: {module.saves}</span>
              <span>Notes: {module.notes.length}</span>
            </div>
          
        );
      })}
    </div>
  )  
}