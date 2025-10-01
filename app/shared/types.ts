export interface Topic {
  id: string,
  title: string,
  description: string,
  category: "Science" | "Literature",
  status: "Published" | "Archived",
  visibility: "Public" | "Private",
  saves: number,
  joins: number,
  modules: Module[],
  moderators: User[],
  owner: User,
}

export interface Module {
  id: string,
  title: string, 
  description: string,
  saves: number,
  status: "Published" | "Archived",
  notes: Note[],
  contributors: User[]

}

export interface Note {
  id: string,
  title: string,
  author: User,
  body: string,
  status: "Published" | "Draft" | "Archived",
  saves: number,
  contributors: User[],
  comments: Comment[],
}

export interface Comment {
  id: string,
  note: Note,
  author: User,
  body: string,
  likes: number,
}

export interface User {
  id: string,
  name: string,
  email: string,
  contributions: Int16Array,
  topics: Topic[],
  notes: Note[],
  savedTopics: Topic[],
  savedModules: Module[],
  savedNotes: Note[]
}


