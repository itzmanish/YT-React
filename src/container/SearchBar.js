import React from 'react';
import { YTConsumer } from '../store/context';
import Header from '../components/Header';

const SearchBar = () => {
  return (
    <YTConsumer>
      {({ videoData, setVideoData }) => (
        <Header video={videoData} setVideo={setVideoData} />
      )}
    </YTConsumer>
  );
};

export default SearchBar;
