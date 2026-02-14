import React, { useRef, useState } from "react";
import { Attach } from "../svgs";
import Button from "./Button";

const FileButton = ({ onChange }) => {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
    onChange(e);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        className="hidden"
        type="file"
        accept=".pdf"
        onChange={handleChange}
      />
      <Button
        name={fileName || "Anexar"}
        icon={<Attach />}
        onClick={handleClick}
        hasBorder
      />
    </div>
  );
};

export default FileButton;
