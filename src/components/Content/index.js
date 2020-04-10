import React from 'react';
import './style.css';

const Content = (props) => {
  return (
    <div className='card'>
      <img className='card-image' src={props.data.url} alt='hi' />
      <div className='card-content'>
        <h3 className='card-title'> {props.data.title} </h3>
        <p className='card-bio'>{props.data.explanation}</p>
        <p className='card-copyright'> Photo ©{props.data.copyright}</p>
      </div>
    </div>
  );
};

export default Content;
