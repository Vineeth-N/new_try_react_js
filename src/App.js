import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() { 
  const handleDownload = async () => {
    try {
      const response = await axios.post('http://localhost:8000/download-pdf', {

      "filename":"okay"
      },{
        responseType: 'blob', // Set the response type to 'blob' for file downloads
      });

      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' });

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Use an anchor element to initiate the download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'new_pro.pdf'; // Specify the desired filename
      a.click();

      // Clean up the URL object to release resources
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };



  return (
    <div className="App">
       <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}

export default App;
