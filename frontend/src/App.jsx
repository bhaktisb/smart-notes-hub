import { useEffect, useState } from "react";

import { Container } from "@mui/material";

import Navbar from "./components/Navbar";
import NoteCard from "./components/NoteCard";
import AddNoteForm from "./components/AddNoteForm";

import {
  fetchNotes,
  createNote,
  deleteNote
} from "./services/api";

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {

    const data = await fetchNotes();

    if (data) {
      setNotes(data);
    }

  };

  const addNote = async (newNote) => {

    await createNote(newNote);

    loadNotes();

  };

  const handleDelete = async (id) => {

    await deleteNote(id);

    loadNotes();

  };

  return (

    <div>

      <Navbar />

      <Container maxWidth="lg">

        <div
          style={{
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          <h1>Smart Notes Hub 🚀</h1>
        </div>

        <AddNoteForm addNote={addNote} />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px"
          }}
        >

          {
            notes.map((note) => (

              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.description}
                onDelete={handleDelete}
              />

            ))
          }

        </div>

      </Container>

    </div>

  );
}

export default App;