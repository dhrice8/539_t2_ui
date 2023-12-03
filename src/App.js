import React, { useState, useEffect } from 'react';
import './App.css';
import { urlShortenerApi } from './urlShortnerApi';
import { fetchBarcode } from './fetchBarcode';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import "./login"
import "./logout"
import { gapi } from "gapi-script"
import Login from './login';
import Logout from './logout';

const clientId = "904917579142-vc1lop92kollnuspfcvdpk26e87kb5u2.apps.googleusercontent.com"

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);
  const [data, setData] = useState([]); 
  const [imageUrl, setImageUrl] = useState([]);

  const handleSubmit = async () => {
    try{
      const shortUrlResponse = await urlShortenerApi(longUrl);
      setShortUrl(shortUrlResponse);

      const fetchBarcodeResponse = await fetchBarcode(longUrl);
      const newRow = {
        id: data.length + 1,
        url: shortUrlResponse,
        //random data
        latency: `${Math.floor(Math.random() * 100) + 1}ms`,
        clickRate: 1,
        qrCode: fetchBarcodeResponse
      };
      setData([...data, newRow]);


    } catch (error) {
      console.log(error);
    }
  };

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  // Google OAuth 
  const responseGoogle = (response) => {
    console.log('Google login response:', response);
    
  };

  useEffect(()=> {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: "profile"
      })
    };
    gapi.load('client:auth2', start)
  });

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand font-weight-bolder" href="#">&nbsp;IntellectCraft Titans</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-end" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" >Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Plans</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" >Sign In</a>
          </li> */}
          
          <Login />
          <Logout />
        </ul>
      </div>
    </nav>

    <div className="App container">
      <h1 className="text-center mb-4 text-white">URL Shortener</h1>
      <div className="input-group mb-3">
        <input 
          type="url" 
          className="form-control"
          placeholder="Enter long URL" 
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" onClick={handleSubmit}>Shorten</button>
        </div>
      </div>
      {shortUrl && <div className="text-center mt-3"><div className='short-url'>Short URL:</div> <a href={shortUrl}>{shortUrl}</a></div>}
      
      <button className="btn btn-secondary mt-3" onClick={toggleDashboard}>
        {showDashboard ? 'Hide' : 'Show'} Dashboard
      </button>

      {showDashboard && (
        <div className="dashboard mt-4">
          <h2 className="text-center mb-4 text-white">Dashboard</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Short URL</th>
                <th scope="col">Latency</th>
                <th scope="col">Click Rate</th>
                <th scope="col">QR Code</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <th scope="row">{row.id}</th>
                  <td><a href={row.url}>{row.url}</a></td>
                  <td>{row.latency}</td>
                  <td>{row.clickRate}</td>
                  <td><img src={row.qrCode}></img></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right">
              <button className="btn btn-secondary btn-sm">Download as csv file</button>
          </div>

        </div>
      )}
    </div>
    </>
  );
}

export default App;
