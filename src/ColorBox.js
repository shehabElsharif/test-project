import React from 'react';
import './index.css';

const ColorBox = ({colorName}) => {
  return (
    <div className='colorBox'
      style={{backgroundColor: colorName}}>
      </div>
  )
}

export default ColorBox