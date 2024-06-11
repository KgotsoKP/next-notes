import React from "react";
import Note from "@/components/Note";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  console.log(data);
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  console.log(notes);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div>
        {notes.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
