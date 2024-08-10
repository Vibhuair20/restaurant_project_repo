  import React, { useRef } from 'react';
  import { images } from '../../constants';
  import './SpecialMenu.css';

  const SpecialMenu = () => {
    return (
      <div className="app__specialMenu" id="Menu" style={{scrollMargin: "80px"}}>
       
        <div className='card-container' id='menu'>
          <img src={images.himachali_thali} alt="about_himachali_thali" className='himachali_thali_image' />
          <h1 className='card-title'>Himachali Thali</h1>
          <p className='card-description'>
            This is the description of the Himachali thali, detailing what is served inside the thali and what you would like to eat.
          </p>
          <button type="button" className="custom__button" onClick={() =>alert('You have ordered a Punjabi  thali. "THANK YOU')}>
            Order Himachali Thali
          </button>
        </div>

        <div className='card-container'>
          <img src={images.rajasthani_thali} alt="about_rajasthani_thali" className='rajasthani_thali_image' />
          <h1 className='card-title'>Rajasthani Thali</h1>
          <p className='card-description'>
            This is the description of the Rajasthani Thali, detailing what is served inside the thali and what you would like to eat.
          </p>
          <button type="button" className="custom__button" onClick={() =>alert('You have ordered a rtajasthani thali. "THANK YOU')}>
            Order Rajasthani Thali
          </button>
        </div>

        <div className='card-container'>
          <img src={images.punjabi_thali} alt="about_punjabi_thali" className='punjabi_thali_image' />
          <h1 className='card-title'>Punjabi Thali</h1>
          <p className='card-description'>
            This is the description of the Punjabi Thali, detailing what is served inside the thali and what you would like to eat.
          </p>
          <button type="button" className="custom__button" id="order" style={{scrollMargin:"200px"}} onClick={() =>alert('You have ordered a Punjabi  thali. "THANK YOU')}>
            Order Punjabi Thali
          </button>
        </div>
      </div>
    );
  };

  export default SpecialMenu;
