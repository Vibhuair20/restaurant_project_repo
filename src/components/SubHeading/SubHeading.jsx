import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' , color:"white"}}>
    <p className='p_cormorant' style={{opacity: "0"}}>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
