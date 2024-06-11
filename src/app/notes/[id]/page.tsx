
async function getNote(noteId: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
            next: { revalidate: 10 },
        }
    );

    const data = await res.json();
    return data;
}

export default async function NoteDetailsPage({ params }: any) {
    
    const note = await getNote(params.id);

    return (
  
        <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold">{note.title}</h3>
            <p className="text-md">{note.content}</p>
        </article>  
    );
}