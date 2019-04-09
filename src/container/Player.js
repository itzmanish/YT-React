import React, { useEffect } from 'react';
import plyr from 'plyr';
import axios from 'axios';
import PlayerComp from '../components/Player';
import './Player.css';

const video = new React.createRef();

const Player = () => {
  useEffect(() => {
    const player = new plyr(video.current);
  }, []);

  fetchVideo = url => {};

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
