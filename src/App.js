import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GenerateForm from "./Components/GenerateForm";
import ResumeEditor from "./Components/ResumeEditor";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<GenerateForm />} />
          <Route path="/resume-editor" element={<ResumeEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;