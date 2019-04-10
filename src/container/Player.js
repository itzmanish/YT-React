import React, { useEffect, useRef } from 'react';
import plyr from 'plyr';
import PlayerComp from '../components/Player';
import './Player.css';

const Player = ({ video, setVideo }) => {
  const videoref = useRef();

  useEffect(() => {
    new plyr(videoref.current);
    console.log('reloaded');
    console.log(video);
  }, [video]);

  return (
    <div className="player">
      <div className="container">
        <video
          ref={videoref}
          controls
          crossOrigin="False"
          playsInline
          poster={video.Thumbnail}
        >
          {video.url
            ? video.url.map((url, key) => <PlayerComp {...url} key={key} />)
            : null}
        </video>
      </div>
    </div>
  );
};

export default Player;
