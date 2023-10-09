import React, { useState } from 'react';
import './App.css';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async () => {
    
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">URL Shortener</h1>
      <div className="input-group mb-3">
        <input 
          type="url" 
          className="form-control"
          placeholder="Enter long URL" 
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleSubmit}>Shorten</button>
        </div>
      </div>
      {shortUrl && <div className="text-center mt-3">Short URL: <a href={shortUrl}>{shortUrl}</a></div>}
    </div>
  );
}

export default App;
