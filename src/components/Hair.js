import React from 'react';
import color from '../data/color';

const Hair = (props) => {
  return (
    <li className={props.serv} style={{
      display: 'inline-block',
      width: '1px',
      height: '16px',
      position: 'absolute',
      bottom: '4px',
      left: (props.val * 100) + 'px',
      backgroundColor: color(props.serv, props.highlight),
      opacity: (props.val / 10) + 0.2
    }}></li>
  )
};

export default Hair;
