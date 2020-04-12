import React from 'react';
import Img from 'react-image';
import './style.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

/* Creates variable for loader and sets style */
let loadingAnimation = (
  <Loader type='Rings' color='#8c94ff' height={100} width={100} />
);

const Content = props => {
  return (
    <div className='card'>
      <Img
        className='card-image'
        src={props.data.hdurl}
        alt='NASA Photo of the Day'
        loader={loadingAnimation}
      />
      <div className='card-content'>
        <h3 className='card-title'> {props.data.title} </h3>
        <p className='card-bio'>{props.data.explanation}</p>
        <p className='card-copyright'> Photo ©{props.data.copyright}</p>
      </div>
    </div>
  );
};

export default Content;
