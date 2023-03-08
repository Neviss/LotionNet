import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import uuid from "react-uuid";

const Mainpage = () => {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (idToDelete) => {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      setNotes(notes.filter((note) => note.id !== idToDelete));
    }
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const [hidden, setHidden] = useState(true);
  const hideSide = () => {
    setHidden((s) => !s);
  };

  return (
    <div className="container-fluid">
      <Header hideSide={hideSide} />

      <div className="help">
        {hidden ? (
          <Sidebar
            notes={notes}
            onAddNote={onAddNote}
            onDeleteNote={onDeleteNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
        ) : null}

        <Outlet context={[getActiveNote(), onUpdateNote]} />
      </div>
    </div>
  );
};

export default Mainpage;
