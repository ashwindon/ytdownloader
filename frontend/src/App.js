import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [quality, setQuality] = useState('2160p'); // Default to 4K if desired
  const [message, setMessage] = useState('');

  const handleDownload = async () => {
    setMessage('Downloading...');
    try {
      const response = await fetch('http://localhost:5000/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, quality })
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error || 'Error downloading video');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>YouTube Video Downloader</h1>
        <input
          type="text"
          placeholder="Enter YouTube video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <select value={quality} onChange={(e) => setQuality(e.target.value)}>
          <option value="best">Best</option>
          <option value="worst">Worst</option>
          <option value="2160p">4K (2160p)</option>
          <option value="1080p">1080p</option>
          <option value="720p">720p</option>
          <option value="480p">480p</option>
          <option value="360p">360p</option>
        </select>
        <button onClick={handleDownload}>DOWNLOAD</button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
