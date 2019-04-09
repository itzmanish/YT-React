import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="navbar">
      <div className="container nav">
        <div className="left">
          <div className="logo">
            <span>YT React</span>
          </div>
        </div>
        <div className="right">
          <form>
            <div className="searchbar">
              <input type="text" name="search" required="True" />
              <label>Search</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
