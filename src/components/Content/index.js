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
    <div className='card-div'>
      <div className='card'>
        <h3 className='card-title'> {props.data.title} </h3>
        <Img
          className='card-image'
          src={props.data.hdurl}
          alt='NASA Photo of the Day'
          loader={loadingAnimation}
        />
        <p className='card-copyright'> Photo ©{props.data.copyright}</p>
        {/* <div className='card-content'>

        <p className='card-bio'>{props.data.explanation}</p>
        <p className='card-copyright'> Photo ©{props.data.copyright}</p>
      </div> */}
      </div>
    </div>

  );
};

export default Content;
