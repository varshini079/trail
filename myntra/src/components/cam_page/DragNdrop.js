import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCamera } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import "./drag-drop.css";

const DragNdrop = ({ onFilesSelected, width, height, imageWidth, imageHeight }) => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      generatePreviews(newFiles);
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
    setPreviews((prevPreviews) => {
      const updatedPreviews = [...prevPreviews];
      updatedPreviews.splice(index, 1);
      return updatedPreviews;
    });
  };

  const generatePreviews = (files) => {
    const filePreviews = [];
    for (let file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        filePreviews.push(e.target.result);
        setPreviews([...filePreviews]);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  return (
    <section className="drag-drop">
      <div className="upload-box">
        <div className="upload-info" onClick={() => document.getElementById('file-input').click()}>
          <AiOutlineCamera style={{ fontSize: '48px' }} />
          
        </div>
        <input
          type="file"
          hidden
          id="file-input"
          onChange={handleFileChange}
          accept=".pdf,.docx,.pptx,.txt,.xlsx,image/*"
          multiple
        />
        {files.length > 0 && (
          <div className="file-list">
            <div className="file-list__container">
              {files.map((file, index) => (
                <div className="file-item" key={index}>
                  <div className="file-preview">
                    {file.type.startsWith("image/") && (
                      <img
                        src={previews[index]}
                        alt={file.name}
                        style={{ maxWidth: imageWidth, maxHeight: imageHeight }}
                      />
                    )}
                  </div>
                  <div className="file-info">
                    <p>{file.name}</p>
                  </div>
                  <div className="file-actions">
                    <MdClear onClick={() => handleRemoveFile(index)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {files.length > 0 && (
          <div className="success-file">
            <AiOutlineCheckCircle style={{ color: "#6DC24B", marginRight: 1 }} />
            <p>{files.length} file(s) selected</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DragNdrop;
