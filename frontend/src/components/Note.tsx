import React from "react";
import { NoteType } from "../types";
import "../styles/Notes.css";

interface noteProps {
  note: NoteType;
  onDelete: (id: number) => void;
}

const Note: React.FC<noteProps> = ({ note, onDelete }) => {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
};

export default Note;
