import React, { useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  const handleMenuItemClick = () => {
    setToggleMenu(false);
  };


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.lecker} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#Menu'>Menu</a></li>
        <li className='p__opensans'><a href='#order'>Order</a></li>
        <li className='p__opensans'><a href='#login'>Contact</a></li>
      </ul>
      <div className='app__navbar-bt'>
        <Link to='/booktable' className='p__opensans'>Book Table</Link>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(!toggleMenu)} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay'>
            <MdOutlineRestaurantMenu className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen-links'>
              <li className='p__opensans'><a href='#home' onClick={handleMenuItemClick}>Home</a></li>
              <li className='p__opensans'><a href='#about' onClick={handleMenuItemClick}>About</a></li>
              <li className='p__opensans'><a href='#Menu' onClick={handleMenuItemClick}>Menu</a></li>
              <li className='p__opensans'><a href='#order' onClick={handleMenuItemClick}>Order</a></li>
              <li className='p__opensans'><a href='#login' onClick={handleMenuItemClick}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
