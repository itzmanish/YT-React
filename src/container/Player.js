import React, { useEffect, useState, useRef } from 'react';
import plyr from 'plyr';
import axios from 'axios';
import PlayerComp from '../components/Player';
import './Player.css';

const Player = () => {
  const video = useRef();
  const [videoData, setVideo] = useState([]);

  useEffect(() => {
    new plyr(video.current);
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const response = await axios.post('http://localhost:5000/search', {
      link: 'https://www.youtube.com/watch?v=uIHPPtPBgHk'
    });
    const data = await response.data;
    setVideo(data);
    console.log(data);
  };

  return (
    <div className="player">
      <div className="container">
        <video
          ref={video}
          controls
          crossOrigin
          playsInline
          poster="http://i.ytimg.com/vi/Bey4XXJAqS8/default.jpg"
        >
          <PlayerComp />
        </video>
      </div>
    </div>
  );
};

export default Player;
