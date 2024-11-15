import React, { useEffect, useState } from "react";
import api from "../api";
import Note from "../components/Note";
import { NoteType } from "../types";
import "../styles/Home.css";

const Home: React.FC = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const res = await api.get("/api/notes/");
      const data = res.data;
      setNotes(data);
      console.log(data);
    } catch (err) {
      alert(err);
    }
  };

  const deleteNote = async (id: number) => {
    try {
      const res = await api.delete(`/api/notes/delete/${id}`);
      if (res.status === 204) {
        alert("Note was successfully deleted!");
      } else {
        alert("Failed to delete note!");
      }
      getNotes();
    } catch (err) {
      alert(err);
    }
  };

  const createNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/notes/", { title, content });
      if (res.status === 201) {
        alert("Note was successfully created!");
      } else {
        alert("Failed to create note!");
      }
      getNotes();
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
      <h2>Create a Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          name="content"
          required
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default Home;
