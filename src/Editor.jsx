import ReactQuill from "react-quill";
import { Link, useOutletContext } from "react-router-dom";

function Editor() {
  const [activeNote, onUpdateNote] = useOutletContext();

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,

      [key]: value,

      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return <div className="no-active-note">No note selected</div>;

  return (
    <div className="app-main container-fluid">
      <Link to="/">
        <button className="edit-save">Save</button>
      </Link>

      <div className="app-main-note-edit">
        <input
          autoFocus
          type="text"
          id="title"
          placeholder="Untitled Note"
          value={activeNote.title}
          onChange={(event) => onEditField("title", event.target.value)}
        />

        <ReactQuill
          theme="snow"
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(event) => onEditField("body", event)}
        ></ReactQuill>
      </div>
    </div>
  );
}

export default Editor;
