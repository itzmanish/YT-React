import React from 'react';

const PlayerComp = () => {
  return (
    <>
      <source
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
        type="video/mp4"
        size="576"
      />
      <source
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
        type="video/mp4"
        size="720"
      />
      <source
        src="https://r4---sn-5aap5ojx-jj0e.googlevideo.com/videoplayback?fvip=1&ratebypass=yes&lmt=1551257060320932&beids=9466588&signature=CC73FD120BE1E38E7E5B2B0492D139134A39EC3A.8449B3107649DDA8B2EAE2B7CCDCCA58127BCCEF&itag=22&ei=WlitXLbsJfWL3LUPgOWSmAo&requiressl=yes&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&expire=1554885818&txp=5535432&initcwndbps=731250&c=WEB&mn=sn-5aap5ojx-jj0e%2Csn-h557snl6&mm=31%2C29&ipbits=0&key=yt6&mt=1554864094&id=o-AFw1Qfm-QgPylIacKeCymC4rqJYwydtbj0yi0ntl5k9j&dur=659.284&mv=m&source=youtube&ms=au%2Crdu&ip=103.2.133.172&pl=22&mime=video%2Fmp4"
        type="video/mp4"
        size="1080"
      />
      <source
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4"
        type="video/mp4"
        size="1440"
      />

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
