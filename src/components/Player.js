import React from 'react';

const PlayerComp = props => {
  return (
    <>
      <source src="sf" type="video/mp4" size="1080" />

      <track
        kind="captions"
        label="English"
        srcLang="en"
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
        default
      />
      <track
        kind="captions"
        label="Français"
        srcLang="fr"
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
      />

      <a
        href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
        download
      >
        Download
      </a>
    </>
  );
};

export default PlayerComp;
