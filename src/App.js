import React, { useState } from 'react';
import SearchBar from './container/SearchBar';
import Player from './container/Player';
import { YTProvider, YTConsumer } from './store/context';

const App = () => {
  const [videoData, setVideoData] = useState({});

  return (
    <YTProvider value={{ videoData, setVideoData }}>
      <SearchBar />
      <YTConsumer>
        {({ videoData, setVideoData }) => (
          <Player video={videoData} setVideo={setVideoData} />
        )}
      </YTConsumer>
    </YTProvider>
  );
};

export default App;
