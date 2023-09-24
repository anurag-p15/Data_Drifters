import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const AnalysisForm = () => {
  const [prompt, setPrompt] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('prompt', prompt);
      formData.append('file', file);

      const response = await axios.post('/api/analyze', formData);
      setAnalysisResult(response.data);
    } catch (err) {
      setError(`An error occurred: ${err.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="prompt">Enter your prompt:</label>
          <input
            type="text"
            id="prompt"
            name="prompt"
            value={prompt}
            onChange={handlePromptChange}
            required
          />
        </div>
        <div>
          <label>Upload a CSV file:</label>
          <Dropzone onDrop={onDrop} accept=".csv">
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Drag 'n' drop a CSV file here, or click to select one</p>
              </div>
            )}
          </Dropzone>
        </div>
        <button type="submit">Analyze</button>
      </form>
      {analysisResult && (
        <div>
          <h2>Analysis Result:</h2>
          <p>{analysisResult}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default AnalysisForm;
