import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { useState } from "react";
import Note from "./Note";

function App() {
  const [notesController, setNotesController] = useState([]);

  function addNote(note) {
    const { title, content } = note;
    if (title.length === 0 || content.length === 0) return;
    setNotesController((prev) => {
      return [...prev, note];
    });
  }

  function deleteNote(index) {
    setNotesController((prev) => {
      return prev.filter((note, idx) => {
        return index !== idx;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notesController.map((note, idx) => (
        <Note
          key={idx}
          idx={idx}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
