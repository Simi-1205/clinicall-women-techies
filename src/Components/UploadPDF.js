// UploadPDF.js

import React, { useState } from 'react';
import './UploadPDF.css';

const UploadPDF = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // You can handle the file upload logic here
    if (selectedFile) {
      console.log('Uploading file:', selectedFile.name);
      // Reset the selected file
      setSelectedFile(null);
    } else {
      console.log('Please select a file');
    }
  };

  return (
    <div className="upload-container">
      <div className="Label">
          Upload Medical Records
        </div>
      <div className='BOX'>
        <input className="INPUT"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <button className="SUBMIT_BTN" onClick={handleUpload}>Upload PDF</button>
        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      </div>
      
    </div>
  );
};

export default UploadPDF;
