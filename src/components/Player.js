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
        src="https://r4---sn-5aap5ojx-jj0l.googlevideo.com/videoplayback?key=yt6&beids=9466587&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&mn=sn-5aap5ojx-jj0l%2Csn-h5576nee&txp=5531432&mm=31%2C29&ms=au%2Crdu&ipbits=0&ei=3jKsXMTICeKM3LUPnYiaoAU&mv=m&pl=22&mt=1554788986&expire=1554810686&signature=CDF6908AA6AB64D76F511CB256C7BFC6FC4E152B.BCF819391D20B0C54F8ECFF1A12F62480071E0A5&c=WEB&ip=103.215.227.45&requiressl=yes&mime=video%2Fmp4&itag=22&lmt=1540311994990890&fvip=4&id=o-AKRkHowdrRoxL6XTda8neLum4iX8tJItBMfjT-uhtmi7&ratebypass=yes&dur=1776.372&source=youtube&initcwndbps=802500"
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
