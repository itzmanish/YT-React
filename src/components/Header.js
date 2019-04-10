import React from 'react';
import axios from 'axios';
import './Header.css';

const Header = ({ video, setVideo }) => {
  let url = '';

  const handleChange = e => {
    url = e.target.value;
    e.preventDefault();
  };

  const handleSubmit = e => {
    fetchVideo(url);
    e.preventDefault();
  };

  const fetchVideo = async () => {
    const response = await axios.post('http://localhost:5000/search', {
      link: url
    });
    const data = await response.data;
    console.log(data);
    setVideo(data);
  };

  return (
    <div className="navbar">
      <div className="container nav">
        <div className="left">
          <div className="logo">
            <span>YT React</span>
          </div>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <div className="searchbar">
              <input
                type="text"
                name="search"
                required="True"
                onChange={handleChange}
              />
              <label>Search</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
