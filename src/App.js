import React, { useState } from 'react';
import './App.css';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);

  const data = [
    { id: 1, url: 'https://www.google.com/', latency: '23ms', clickRate: 34 },
    { id: 2, url: 'https://www.wikipedia.org/', latency: '19ms', clickRate: 48 },
    //... other rows
  ];

  const handleSubmit = async () => {
    // shortening logic
  };

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
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
      
      <button className="btn btn-secondary mt-3" onClick={toggleDashboard}>
        {showDashboard ? 'Hide' : 'Show'} Dashboard
      </button>

      {showDashboard && (
        <div className="dashboard mt-4">
          <h2 className="text-center mb-4">Dashboard</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Short URL</th>
                <th scope="col">Latency</th>
                <th scope="col">Click Rate</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <th scope="row">{row.id}</th>
                  <td><a href={row.url}>{row.url}</a></td>
                  <td>{row.latency}</td>
                  <td>{row.clickRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
