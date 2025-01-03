import React from "react";
import { useLocation } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { parseLatexToReadableText } from "./Parsedtext";

const ParsedResumePage = () => {
  const location = useLocation();
  const { resumeFile, jobDescription, sections } = location.state || {};

  // Simulating parsed resume content
  const parsedContent = parseLatexToReadableText(`
    Resume: ${resumeFile?.name || "No file uploaded"}
    Job Description: ${jobDescription}
    Sections: ${sections}
  `);

  return (
    <div className="app-container">
      <h1>Generated Resume</h1>
      <div className="editor-wrapper">
        <ReactQuill
          theme="snow"
          value={parsedContent}
          readOnly
          className="quill-editor"
        />
      </div>
    </div>
  );
};

export default ParsedResumePage;
