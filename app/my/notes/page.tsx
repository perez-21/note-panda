import { Note } from "@/app/shared/types";
import { notes, users } from "@/app/shared/mock";

export default function Page() {
  return (
    <div className="flex justify-evenly flex-wrap gap-8 items-center">
      {notes.map((note) => {
        return (
          
            <div key={note.id} className="flex flex-col gap-5">
              <span>Title: {note.title}</span>
              <span>Author: {note.author}</span>
              <span>Bookmarks: {note.saves}</span>
              <span>Contributors: {note.contributors.map((contributor) => users.find((user) => user.id === contributor)?.name).join(', ')}</span> {/* Displays contributors in comma separated list */}
            </div>
          
        );
      })}
    </div>
  )  
}