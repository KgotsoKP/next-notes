import React from "react";
import Link from "next/link";

const Note = ({ note }: any) => {
  const { id, title, content, created } = note || {};
  return (
    <Link href={`/notes/${id}`}>
      <div className="bg-yellow-600 rounded-md shadow-lg p-4 space-y-4">
        <h6 className="text-md font-bold">{title}</h6>
        <div className="text-sm">{content}</div>
        <p className="text-sm">{created}</p>
      </div>
    </Link>
  );
};

export default Note;
