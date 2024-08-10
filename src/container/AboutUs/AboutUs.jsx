import React, { useState } from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const [modal, setmodal] =useState(false);

  const toggleModal =() =>{
    setmodal(!modal)

  }

  return(
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The restaurant serves exclusive Indian dishes that hail from the rich cultural roots of India. It endeavors to promote India's diversity by showcasing the culinary richness of its various regions to the world. The restaurant offers a tantalizing array of dishes representing the diverse cuisines found across the Indian mainland.</p>
        <button type="button" className="custom__button" onClick={toggleModal}>Know More</button>
        {modal &&(

          <div className="modal">
          <div className="overlay">
          </div>
            <div className="modal-content">
              <h2>Know more</h2>
              <p>
              The restaurant serves exclusive Indian dishes that hail from the rich cultural roots of India. It endeavors to promote India's diversity by showcasing the culinary richness of its various regions to the world. The restaurant offers a tantalizing array of dishes representing the diverse cuisines found across the Indian mainland.
              </p>
              <button className='close-modal' onClick={toggleModal}>
                CLOSE
              </button>
            </div>
        </div>
          )}  
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.menu_1} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The history of this restaurant mirrors that of India itself. Established in 1954 by a German man with a profound love for Indian cuisine, who eventually settled in India, the restaurant has steadfastly served the same delightful fare ever since.</p>
        <button type="button" className="custom__button" onClick={toggleModal}>Know More</button>
        {modal &&(

<div className="modal">
<div className="overlay">
</div>
  <div className="modal-content">
    <h2>Know more</h2>
    <p>
    The history of this restaurant mirrors that of India itself. Established in 1954 by a German man with a profound love for Indian cuisine, who eventually settled in India, the restaurant has steadfastly served the same delightful fare ever since.
    </p>
    <button className='close-modal' onClick={toggleModal}>
      CLOSE
    </button>
  </div>
</div>
)} 
      </div>
    </div>
  </div>
);
};

export default AboutUs;