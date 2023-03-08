import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import Editor from "./Editor";
import Save from "./Save";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Mainpage />}>
          <Route path="/editor" element={<Editor />}></Route>
          <Route path="/" element={<Save />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
