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

          <link
            rel="stylesheet"
            href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
          />
          <script
            src="https://unpkg.com/react@16/umd/react.development.js"
            crossorigin
          ></script>
          <script
            src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
            crossorigin
          ></script>
          <script src="https://unpkg.com/react-quill@1.3.3/dist/react-quill.js"></script>
          <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
          <script type="text/babel" src="/my-scripts.js"></script>
        </div>
      </div>
    </div>
  );
}

export default Main;
