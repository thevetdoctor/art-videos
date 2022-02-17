import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('https://orangevalleycaa.org/api/videos')
                                .then(res => res.json());
        setData(response);
    }
    fetchData();
    return () => {
      console.log('cleanup useeffect');
    }
  }, [])
  return (
    <div className="App">
      <header>
        <h2>Art Videos</h2>
      </header>
      {data.map(video => (
        <div key={video.id}>
          <h3>{video.name}</h3>
          <video height={200} controls src={video.video_url}></video>
        </div>
      ))}
    </div>
  );
}

export default App;
