import React, { useRef } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">A Treat for the Senses</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Spices sing, regions boast unique flavors, a symphony for your senses. </p>
        <a href='#Menu'>
          <button type="button" className="custom__button">
            Explore Menu
          </button>
        </a>
      </div>

      <div className="app_wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
