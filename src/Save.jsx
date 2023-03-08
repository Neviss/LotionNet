import ReactQuill from "react-quill";
import { Link, useOutletContext } from "react-router-dom";

function Main() {
  const [activeNote] = useOutletContext();

  if (!activeNote)
    return <div className="no-active-note">No note selected</div>;

  return (
    <div className="app-main container-fluid">
      <Link to="/editor">
        <button className="edit-save">Edit</button>
      </Link>

      <div className="app-main-note-preview">
        <div>
          <h1 className="preview-title">{activeNote.title}</h1>
          <ReactQuill
            className="preview"
            id="body"
            value={activeNote.body}
            theme={"bubble"}
            readOnly
          ></ReactQuill>
        </div>
      </div>
    </div>
  );
}

export default Main;
